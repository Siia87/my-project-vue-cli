module.exports = {
  pwa: {
    manifestOptions: {
      background_color: '#f5f2ef'
    },
    name: 'Beer app',
    themeColor: '#ac8d69'
  },

  workboxOptions: {
    runtimeCaching: [
      {
        handler: 'NetworkFirst',
        options: {
          networkTimeoutSeconds: 5
        },
        urlPattern: 'https://api.punkapi.com/v2/beers/'
      }
    ]
  }
}