module.exports = {
  apps: [
    // {
    //   name: 'stt-web',
    //   interpreter: '/var/www/.nvm/versions/node/v16.19.0/bin/node',
    //   script: './.output/server/index.mjs',
    //   env: {
    //     PORT: 5218,
    //     NODE_ENV: 'production',
    //   },
    // },
    {
      name: 'stt-web-dev',
      port: '3003',
      script: './.output/server/index.mjs',
      env: {
        PORT: 3003,
        NODE_ENV: 'production',
      },
    },
  ],
}
