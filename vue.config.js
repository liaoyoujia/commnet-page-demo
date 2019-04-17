/* eslint-disable */
module.exports = {
  css: {
    loaderOptions: {
      sass: {
        data: `
          @import "@/assets/variable.scss";
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
