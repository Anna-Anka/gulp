import { plugins } from './gulp/plugins.js'
import {avifTask} from './gulp/gulp-tasks/avif.js' 
import {cleanTask} from './gulp/gulp-tasks/clean.js' 
import {deployTask} from './gulp/gulp-tasks/deploy.js' 
import {faviconsTask} from './gulp/gulp-tasks/favicons.js' 
import {fontsTask} from './gulp/gulp-tasks/fonts.js' 
import {imagesTask} from './gulp/gulp-tasks/images.js' 
import {scriptsTask} from './gulp/gulp-tasks/scripts.js' 
import {spritesTask} from './gulp/gulp-tasks/sprites.js' 
import {stylesTask} from './gulp/gulp-tasks/styles.js' 
import { viewsTask } from './gulp/gulp-tasks/views.js' 
import { webpTask } from './gulp/gulp-tasks/webp.js' 
import { zipTask } from './gulp/gulp-tasks/zip.js' 

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
    plugins.gulp.watch(paths.avifWebp.watch, plugins.gulp.parallel(avifTask));
    plugins.gulp.watch(paths.avifWebp.watch, plugins.gulp.parallel(webpTask));
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

export default development;
