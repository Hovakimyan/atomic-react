const path = require('path')

// Export a function. Accept the base config as the only param.
module.exports = {
    stories: ['../src/**/stories.[tj]s', '../src/**/**/stories.[tj]s'],
    webpackFinal: async (config, { configType }) => {
        config.resolve = {
            alias: {
                atoms: path.resolve(__dirname, '../src/atoms'),
                theme: path.resolve(__dirname, '../src/theme'),
                helpers: path.resolve(__dirname, '../src/helpers'),
                constants: path.resolve(__dirname, '../src/constants')
            }
        }
        return config
    }
}
