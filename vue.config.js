// vue.config.js
module.exports = {
  publicPath: './',
  css: {
    loaderOptions: {
      sass: {
        prependData: `
        @import '@/assets/styles/custom.scss';
        `
      }
    }
  }
  
  /*,
  css: {
    loaderOptions: {
      sass: {
        prependData: `
            @import '~/node_modules/bootstrap/scss/_functions.scss';
             @import '~/node_modules/bootstrap/scss/_variables.scss'; 
             @import '~/node_modules/bootstrap/scss/_mixins.scss';
             @import '@/assets/styles/custom.scss';
             `
      }
    }
  }*/
}