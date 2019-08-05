const mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */
const config = {
    public: 'public',
    js: 'resources/js',
    vueModules: 'resources/js/modules'
};

const vendors = [
    'lodash',
    'jquery',
    'bootstrap',
    'axios',
    'vue',
    'vuex',
    'vue-router',
    'vee-validate',
    'material-design-icons-iconfont',
    'vuetify'
];

mix.js('resources/js/app.js', 'public/js')
   .sass('resources/sass/app.scss', 'public/css');

mix.js('resources/dashboard/scripts/index.js','public/js/dashboard.js');

mix.copy('node_modules/datatables/media/js/jquery.dataTables.js', 'public/js/datatable.js');

mix.extract(vendors, 'public/js/vendor.js')
    .autoload({
        jquery: ['$', 'window.jQuery', 'jQuery', 'jquery'],
        moment: ['moment'],
        lodash: ['_'],
    });

mix.js(config.vueModules + '/moderator/main.js', config.public + 'js/modules/moderator.js');
