const mix = require('laravel-mix');

mix.js('src/js/scripts.js', 'assets')
    .js('src/js/products.js', 'assets')
    // .sourceMaps()
    // .webpackConfig(
    //   {
    //     devtool: 'inline-source-map',
    //     stats: {
    //       children: true,
    //     },
    //   })
    .sass('src/sass/styles-top.scss', 'assets')
    .sass('src/sass/styles-bot.scss', 'assets')
    .sass('src/sass/styles-article.scss', 'assets')
    .sass('src/sass/styles-blog.scss', 'assets')
    .sass('src/sass/styles-cart.scss', 'assets')
    .sass('src/sass/styles-collections.scss', 'assets')
    .sass('src/sass/styles-page.scss', 'assets')
    .sass('src/sass/styles-product.scss', 'assets')
    .sass('src/sass/styles-swiffy.scss', 'assets')
    .sass('src/sass/styles-searchpage.scss', 'assets')
    .sass('src/sass/styles-accounts.scss', 'assets')
    .sass('src/sass/styles-collection-list.scss', 'assets')
    //.setPublicPath('assets')
    // .browserSync({
    //   proxy: 'http://127.0.0.1:9292',
    //   reloadDelay: 3000
    // });