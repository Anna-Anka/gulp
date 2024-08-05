import {plugins} from './gulp/config.js'
import { avifTask, cleanTask, deployTask, faviconsTask, fontsTask, imagesTask, scriptsTask, spritesTask, stylesTask, viewsTask, webpTask, zipTask } from './gulp/tasks/index.js'

const serveTask = () => {
    const { plugins, paths } = global.app

    plugins.browsersync.init({
        server: {
            baseDir: `${paths.productFolder}/`
        },
        host: '192.168.1.1',
        port: 3000,
        notify: true,
        reloadOnRestart: true,
        cors: true,
        tunnel: true,
    });

    plugins.gulp.watch(paths.html.watch, plugins.gulp.parallel(viewsTask));
    plugins.gulp.watch(paths.styles.watch, plugins.gulp.parallel(stylesTask));
    plugins.gulp.watch(paths.scripts.watch, plugins.gulp.parallel(scriptsTask));
    plugins.gulp.watch(paths.sprites.watch, plugins.gulp.parallel(spritesTask));
    plugins.gulp.watch(paths.images.watch, plugins.gulp.parallel(imagesTask));
    plugins.gulp.watch(paths.images.watch, plugins.gulp.parallel(avifTask));
    plugins.gulp.watch(paths.images.watch, plugins.gulp.parallel(webpTask));
    plugins.gulp.watch(paths.fonts.watch, plugins.gulp.parallel(fontsTask));
};

export const development = plugins.gulp.series(
    cleanTask,
    plugins.gulp.parallel([viewsTask, stylesTask, scriptsTask, imagesTask, avifTask, webpTask, spritesTask, fontsTask, faviconsTask]),
    plugins.gulp.parallel(serveTask),
);

export const build = plugins.gulp.series(
    cleanTask,
    plugins.gulp.parallel([viewsTask, stylesTask, scriptsTask, imagesTask, avifTask, webpTask, spritesTask, fontsTask, faviconsTask]),
);

export const buildImages = plugins.gulp.series(imagesTask, webpTask, avifTask);

export const fonts = plugins.gulp.series(fontsTask);

export const zip = plugins.gulp.series(zipTask);

export default development;
