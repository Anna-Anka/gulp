export const fontsTask = async () => {
    const { plugins, production, paths } = global.app

    if (production) {
        await plugins.deleteAsync([paths.fonts.app]);
    }

    return plugins.gulp.src(paths.fonts.src)
        .pipe(plugins.fonter({
            formats: ['woff', 'woff2', 'ttf'],
        }))
        .pipe(plugins.gulp.dest(paths.fonts.app))
        .pipe(plugins.debug({
            title: 'Fonts',
        }));
};