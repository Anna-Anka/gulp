export const avifTask = () => {
    const {plugins, production, paths} = global.app
    
    plugins.gulpif(production, plugins.deleteAsync([`${paths.avifWebp.app}/*.avif`]));
    return plugins.gulp.src(paths.avifWebp.src)
        .pipe(plugins.gulpif(!production, plugins.newer(paths.avifWebp.app)))
        .pipe(plugins.avif(plugins.gulpif(production, { quality: 50 })))
        .pipe(plugins.gulp.dest(paths.avifWebp.app))
        .pipe(plugins.debug({
            title: 'Images',
        }))
        .on('end', plugins.browsersync.reload);
};
