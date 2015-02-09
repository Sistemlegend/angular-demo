exports.config = {
    directConnect: true,
    capabilities: {
        'browserName': 'chrome'
    },
    baseUrl: 'http://localhost:9000',
    jasmineNodeOpts: {
        showColors: true,
        defaultTimeoutInterval: 30000
    }
};