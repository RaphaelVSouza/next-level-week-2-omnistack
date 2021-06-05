module.exports = {
    apps: [{
        name: "app",
        script: "./dist/server.js",
        instances: "max",
        env: {
            NODE_ENV: "production",
        }
    }]
}
