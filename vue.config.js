module.exports = {
    "transpileDependencies": [
        "vuetify"
    ],
    publicPath: '/',
    devServer: {
        proxy: {
            "/*": {
                target: "http://localhost:7777",
                secure: false
            }
        }
    }
}