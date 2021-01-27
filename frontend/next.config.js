module.exports = {
    distDir: 'build',
    webpack(config, { dev }) {
        if (!dev) {
            config.devtool = 'source-map'
        }
        return config
    }
}