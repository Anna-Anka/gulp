export const faviconsTask = (done) => {
    const { plugins, paths } = global.app

    const faviconIco = () => {
        plugins.deleteAsync([`${paths.productFolder}{apple-touch-icon.png,favicon.ico,site.webmanifest}`]);
        const result = plugins.gulp.src(`${paths.favicons.app}{apple-touch-icon.png,favicon.ico,site.webmanifest}`)
            .pipe(plugins.filter(['apple-touch-icon.png', 'favicon.ico', 'site.webmanifest']))
            .pipe(plugins.gulp.dest(`${paths.productFolder}`));
        return result;
    };

    // todo: move to path
    const FAVICON_DATA_FILE = 'faviconData.json';
    plugins.deleteAsync([paths.favicons.app]);
    plugins.favicons.generateFavicon({
        masterPicture: paths.favicons.src,
        dest: paths.favicons.app,
        iconsPath: '/path/to/favicons/',
        design: {
            ios: {
                pictureAspect: 'backgroundAndMargin',
                backgroundColor: '#ffffff',
                margin: '18%',
                assets: {
                    ios6AndPriorIcons: false,
                    ios7AndLaterIcons: true,
                    precomposedIcons: true,
                    declareOnlyDefaultIcon: true,
                },
            },
            desktopBrowser: {},
            windows: {
                pictureAspect: 'noChange',
                backgroundColor: '#00aba9',
                onConflict: 'override',
                assets: {
                    windows80Ie10Tile: false,
                    windows10Ie11EdgeTiles: {
                        small: true,
                        medium: true,
                        big: true,
                        rectangle: true,
                    },
                },
            },
            androidChrome: {
                pictureAspect: 'shadow',
                themeColor: '#ffffff',
                manifest: {
                    name: 'My App',
                    display: 'standalone',
                    orientation: 'portrait',
                    onConflict: 'override',
                    declared: true,
                },
                assets: {
                    legacyIcon: false,
                    lowResolutionIcons: false,
                },
            },
            safariPinnedTab: {
                pictureAspect: 'silhouette',
                themeColor: '#5bbad5',
            },
        },
        settings: {
            scalingAlgorithm: 'Mitchell',
            errorOnImageTooSmall: false,
        },
        markupFile: FAVICON_DATA_FILE,
    }, () => {
        faviconIco();
        done();
    });
};
