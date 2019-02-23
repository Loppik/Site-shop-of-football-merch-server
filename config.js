const env = process.env.NODE_ENV;

const dev = {
  secret: 'QWERTYUIOPASDFGHJKLZXCVBNM',
  accessTokenLifetime: '1d',
  host: 'localhost',
  port: '8081',
  debug: true,
  database: 'localhost/sportwear',
}

const test = {
  secret: 'QWERTYUIOPASDFGHJKLZXCVBNM',
  accessTokenLifetime: '30s',
  host: 'localhost',
  port: '8081',
  debug: false,
  database: 'localhost/sportwearTest',
}

const prod = {
  secret: 'QWERTYUIOPASDFGHJKLZXCVBNM',
  accessTokenLifetime: '1d',
  host: 'localhost',
  port: '8081',
  debug: false,
  database: 'Loppik:adihip11@sportwear-shard-00-00-blxsj.mongodb.net:27017,sportwear-shard-00-01-blxsj.mongodb.net:27017,sportwear-shard-00-02-blxsj.mongodb.net:27017/sportwear?ssl=true&replicaSet=sportwear-shard-0&authSource=admin&retryWrites=true',
}

const config = {
  dev,
  test,
  prod
};

module.exports = config[env];
