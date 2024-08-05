export const cleanTask = () => {
    console.log(global)
    const { plugins, paths } = global.app
    return plugins.deleteAsync([`${paths.productFolder}/*`]);
}
