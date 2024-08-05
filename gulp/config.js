import gulp from 'gulp';
import debug from 'gulp-debug';
import { deleteAsync } from 'del';
import imagemin, { svgo } from 'gulp-imagemin';
import imageminPngquant from 'imagemin-pngquant';
import imageminZopfli from 'imagemin-zopfli';
import imageminMozjpeg from 'imagemin-mozjpeg';
import imageminGiflossy from 'imagemin-giflossy';
import newer from 'gulp-newer';
import browsersync from 'browser-sync';
import webpack from 'webpack';
import webpackStream from 'webpack-stream';
import gulpif from 'gulp-if';
import svg from 'gulp-svg-sprite';
import dartsass from 'sass';
import gulpsass from 'gulp-sass';
import mincss from 'gulp-clean-css';
import groupmedia from 'gulp-group-css-media-queries';
import autoprefixer from 'gulp-autoprefixer';
import sourcemaps from 'gulp-sourcemaps';
import plumber from 'gulp-plumber';
import include from 'gulp-file-include';
import webp from 'gulp-webp';
import ttf2woff from 'gulp-ttf2woff';
import ttf2woff2 from 'gulp-ttf2woff2';
import path from 'path';
import notify from 'gulp-notify';
import zip from 'gulp-zip';
import avif from 'gulp-avif';
import favicons from 'gulp-real-favicon';
import deploy from 'gh-pages';
import filter from 'gulp-filter';

export const plugins = {
    gulp, favicons, debug, deleteAsync, imagemin, imageminPngquant, svgo, imageminZopfli, imageminMozjpeg, imageminGiflossy, newer, browsersync, webpack, webpackStream, gulpif, svg, gulpsass, dartsass, mincss, groupmedia, autoprefixer, sourcemaps, plumber, include, webp, ttf2woff, ttf2woff2, path, notify, zip, avif, deploy, filter,
};

export const paths = {
    html: {
        src: './src/html/*.html',
        app: './app/',
        watch: './src/html/**/*.html',
    },
    styles: {
        src: './src/styles/style.{scss,sass,css}',
        app: './app/css/',
        watch: './src/styles/**/*.{scss,sass,css}',
    },
    scripts: {
        src: './src/js/main.js',
        app: './app/js/',
        watch: './src/js/**/*.js',
    },
    images: {
        src: './src/img',
        app: './app/img',
        watch: './src/img/',
        srcExceptions: ['!./src/img/favicon/**/*', '!./src/img/icons/**/*', '!./src/img/sprites/**/*']
    },
    sprites: {
        src: './src/img/sprites/*.svg',
        app: './app/img/sprites/',
        watch: './src/img/sprites/*.svg',
    },
    fonts: {
        src: './src/fonts/**/*',
        app: './app/fonts/',
        watch: './src/fonts/**/*',
    },
    favicons: {
        src: './src/img/favicon/favicon.png',
        app: './app/img/favicon/',
    },
    devFolder: './src',
    productFolder: './app',
    rootFolder: path.basename(path.resolve()),
};

global.app = {
    production: process.argv.includes('--production'),
    dev: process.argv.includes('--dev'),
    paths,
    plugins
}