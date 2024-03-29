module.exports = {
  reactStrictMode: true,
  future: {
    webpack5: true,
  },
  webpack: (config, options) => {
    config.module.rules.push({
      test: /\.(woff|woff2|eot)?$/,
      use: [
        {
          loader: "file-loader",
          options: {
            name: "[name].[ext]",
            outputPath: "assets/fonts/",
          },
        },
      ],
    });
    return config;
  },
};
