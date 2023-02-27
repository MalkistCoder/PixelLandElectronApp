module.exports = {
    packagerConfig: {},
    rebuildConfig: {},
    makers: [
        {
            name: '@electron-forge/maker-squirrel',
            config: {},
        },
        {
            name: '@electron-forge/maker-dmg',
            config: {}
        },
        {
            name: '@electron-forge/maker-zip',
            config: {}
        },
        {
            name: '@electron-forge/maker-deb',
            config: {
                options: {
                    maintainer: 'will_the_robot',
                    homepage: 'https://will.ninja/'
                }
            }
        }
    ]
}
