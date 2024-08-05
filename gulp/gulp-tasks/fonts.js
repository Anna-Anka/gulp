export const fontsTask = () => {
    const { plugins, paths } = global.app

    plugins.gulp.src(
        [paths.fonts.src],
        {encoding: false}
    )
        .pipe(plugins.ttf2woff())
        .pipe(plugins.gulp.dest(paths.fonts.app))
    return plugins.gulp.src(paths.fonts.src)
        .pipe(plugins.ttf2woff2())
        .pipe(plugins.gulp.dest(paths.fonts.app))
}