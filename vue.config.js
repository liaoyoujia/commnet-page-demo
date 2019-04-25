/* eslint-disable */
module.exports = {
  css: {
    loaderOptions: {
      sass: {
        data: `
          @import "@/assets/entry.scss";
        `
      },
      postcss: {
        plugins: [
          require('postcss-px2rem')({
            remUnit: 75,
          }),
        ],
      },
    },
  },
};
