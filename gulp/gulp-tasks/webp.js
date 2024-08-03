export const webpTask = () => {
    const { plugins, paths, production } = global.app

    plugins.gulpif(production, plugins.deleteAsync([`${paths.avifWebp.app}/*.webp`]));
    return plugins.gulp.src(paths.avifWebp.src)
        .pipe(plugins.gulpif(!production, plugins.newer(paths.avifWebp.app)))
        .pipe(plugins.webp())
        .pipe(plugins.gulp.dest(paths.avifWebp.app))
        .pipe(plugins.debug({
            title: 'Images',
        }))
        .on('end', plugins.browsersync.reload);
};
