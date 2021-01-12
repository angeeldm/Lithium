const {series, src, dest, watch, parallel} = require('gulp');
const sass = require('gulp-sass');
const imagemin = require('gulp-imagemin');
const notify = require('gulp-notify');
const webp = require('gulp-webp');
const concat = require('gulp-concat');

// FUNCION PARA COMPILAR SASS

function css(){
    return src('src/scss/app.scss')            // IDENTIFICA LA HOJA DE ESTILO
        .pipe( sass({
            outputStyle: 'expanded'
        }) )                                    // APLICA LA FUNCION DE COMPILAR
        .pipe( dest('./pplbuild/css') )           // DONDE GUARDAMOS EL ARCHIVO
}

function javascript(){
    return src('src/js/**/*.js')
    .pipe(concat('bundle.js'))
    .pipe(dest('./pplbuild/js'))
}

function imagenes(){
    return src('src/img/**/*')
    .pipe( imagemin() )
    .pipe( dest('./pplbuild/img'))
    .pipe( notify({message: 'Imagen Minificada'}));
}

function versionwebp(){
    return src('src/img/**/*')
    .pipe (webp())
    .pipe (dest('./pplbuild/img'))
    .pipe(notify({message: 'Version webP lista'}))
}

function watchArchivos(){                       // WATCH PARA EVITAR COMPILAR CONTINUAMENTE Y LOS CAMBIOS SE REALIZAN AUT
    watch('src/scss/**/*.scss', css);
    watch('src/js/**/*.js', javascript);
}

exports.css = css;
exports.imagenes = imagenes;
exports.watchArchivos = watchArchivos;

exports.default = series (css, javascript, imagenes, versionwebp, watchArchivos);