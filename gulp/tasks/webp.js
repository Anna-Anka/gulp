export const webpTask = () => {
    const { plugins, paths } = global.app

    return plugins.gulp.src([`${paths.images.src}/**/*.{jpg,jpeg,png}`, `!${paths.favicons.srcFiles}` ])
        .pipe(plugins.newer(paths.images.app))
        .pipe(plugins.webp())
        .pipe(plugins.gulp.dest(`${paths.images.app}/`))
        .pipe(plugins.debug({
            title: 'Images',
        }))
        .on('end', plugins.browsersync.reload);
};
