const config = {
  port: process.env.PORT || 3000,
  db: {
    dev: {
      dialect: 'sqlite',
      storage: 'db/dev.sqlite',
    },
    test: {
      dialect: 'sqlite',
      storage: 'db/test.sqlite',
    },
    prod: {
      dialect: 'sqlite',
      storage: 'db/prod.sqlite',
    },
  },
}

module.exports = config
