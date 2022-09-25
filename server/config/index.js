const env = process.env.NODE_ENV || 'dev'

const config = {
  port: process.env.PORT || 3000,
  apiBase: '/api/v1/',
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
  env,
}

module.exports = config
