module.exports = {
  configureWebpack: {
    module: {
      rules: [
        {
          test: /.less$/,
          use: [
            {
              loader: "less-loader",
              options: {
                javascriptEnabled: true,
              },
            },
          ],
        },
      ],
    },
  },
};
