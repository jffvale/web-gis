const PROXY_CONFIG = [
  {
      context: [
          "/list",
          "/search",
          "/add",
          "/remove",
      ],
      target: "http://192.168.15.10:4040/catalog",
      secure: false
  }
]

module.exports = PROXY_CONFIG;