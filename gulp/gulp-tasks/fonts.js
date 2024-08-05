export const fontsTask = () => {
    const { plugins, production, paths } = global.app

    // if (production) {
    //     await plugins.deleteAsync([paths.fonts.app]);
    // }

    return plugins.gulp.src(`${paths.fonts.src}/*.*`)
        .pipe(plugins.fonter({
            formats: ['woff', 'ttf'],
        }))
        .pipe(plugins.gulp.src(`${paths.fonts.src}/*.ttf`))
        .pipe(plugins.ttf2woff2())
        .pipe(plugins.gulp.dest(paths.fonts.app))
        .pipe(plugins.debug({
            title: 'Fonts',
        }));
};