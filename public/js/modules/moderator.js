webpackJsonp([3],{

/***/ 20:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__config__ = __webpack_require__(341);



var routes = {
    recipes: {
        index: '/recipes',
        show: '/recipes/:id',
        store: '/recipes',
        update: '/recipes/:id',
        delete: '/recipes/:id'
    },

    nations: {
        index: '/nations',
        show: '/nations/:id'
    },

    ingredients: {
        index: '/ingredients',
        show: '/ingredients/:id'
    },

    units: {
        index: '/units',
        show: '/units/:id'
    }
};

function route(name) {
    var id = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
    var version = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;


    return version === null ? __WEBPACK_IMPORTED_MODULE_1__config__["a" /* apiVersion */] + Object(__WEBPACK_IMPORTED_MODULE_0_lodash__["replace"])(Object(__WEBPACK_IMPORTED_MODULE_0_lodash__["first"])(Object(__WEBPACK_IMPORTED_MODULE_0_lodash__["at"])(routes, name)), ':id', id) : __WEBPACK_IMPORTED_MODULE_1__config__["a" /* apiVersion */] + Object(__WEBPACK_IMPORTED_MODULE_0_lodash__["replace"])(Object(__WEBPACK_IMPORTED_MODULE_0_lodash__["first"])(Object(__WEBPACK_IMPORTED_MODULE_0_lodash__["at"])(routes, name)), ':id', id);
}

/* harmony default export */ __webpack_exports__["a"] = (route);

/***/ }),

/***/ 21:
/***/ (function(module, exports) {

/**
 * Translates the list format produced by css-loader into something
 * easier to manipulate.
 */
module.exports = function listToStyles (parentId, list) {
  var styles = []
  var newStyles = {}
  for (var i = 0; i < list.length; i++) {
    var item = list[i]
    var id = item[0]
    var css = item[1]
    var media = item[2]
    var sourceMap = item[3]
    var part = {
      id: parentId + ':' + i,
      css: css,
      media: media,
      sourceMap: sourceMap
    }
    if (!newStyles[id]) {
      styles.push(newStyles[id] = { id: id, parts: [part] })
    } else {
      newStyles[id].parts.push(part)
    }
  }
  return styles
}


/***/ }),

/***/ 324:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(325);


/***/ }),

/***/ 325:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vue_router__ = __webpack_require__(172);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_vuetify__ = __webpack_require__(173);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_vuetify___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_vuetify__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_vee_validate__ = __webpack_require__(174);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_recipes_RecipeCreate__ = __webpack_require__(326);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_recipes_RecipeCreate___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__components_recipes_RecipeCreate__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_main_Dashboard__ = __webpack_require__(346);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_main_Dashboard___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__components_main_Dashboard__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_vuetify_dist_vuetify_min_css__ = __webpack_require__(351);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_vuetify_dist_vuetify_min_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_vuetify_dist_vuetify_min_css__);








__WEBPACK_IMPORTED_MODULE_0_vue___default.a.use(__WEBPACK_IMPORTED_MODULE_2_vuetify___default.a);
__WEBPACK_IMPORTED_MODULE_0_vue___default.a.use(__WEBPACK_IMPORTED_MODULE_1_vue_router__["default"]);
__WEBPACK_IMPORTED_MODULE_0_vue___default.a.use(__WEBPACK_IMPORTED_MODULE_3_vee_validate__["default"]);

var routes = [{
    path: '/recipe', component: __WEBPACK_IMPORTED_MODULE_4__components_recipes_RecipeCreate___default.a
}];

var router = new __WEBPACK_IMPORTED_MODULE_1_vue_router__["default"]({
    routes: routes
});

new __WEBPACK_IMPORTED_MODULE_0_vue___default.a({
    $_veeValidate: {
        validator: 'new'
    },

    el: '#vue-app',
    components: {
        Dashboard: __WEBPACK_IMPORTED_MODULE_5__components_main_Dashboard___default.a,
        RecipeCreate: __WEBPACK_IMPORTED_MODULE_4__components_recipes_RecipeCreate___default.a
    },
    router: router
});

/***/ }),

/***/ 326:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(327)
}
var normalizeComponent = __webpack_require__(7)
/* script */
var __vue_script__ = __webpack_require__(329)
/* template */
var __vue_template__ = __webpack_require__(345)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-5a23e12d"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __vue_template__,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources/js/modules/moderator/components/recipes/RecipeCreate.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-5a23e12d", Component.options)
  } else {
    hotAPI.reload("data-v-5a23e12d", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 327:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(328);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(6)("926602ce", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../../node_modules/css-loader/index.js!../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-5a23e12d\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./RecipeCreate.vue", function() {
     var newContent = require("!!../../../../../../node_modules/css-loader/index.js!../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-5a23e12d\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./RecipeCreate.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 328:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(4)(false);
// imports


// module
exports.push([module.i, "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", ""]);

// exports


/***/ }),

/***/ 329:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__basic_ImageUpload__ = __webpack_require__(330);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__basic_ImageUpload___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__basic_ImageUpload__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__basic_FileUpload__ = __webpack_require__(335);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__basic_FileUpload___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__basic_FileUpload__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__api_naion__ = __webpack_require__(340);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__api_ingredient__ = __webpack_require__(342);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__api_unit__ = __webpack_require__(343);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__api_recipe__ = __webpack_require__(344);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_lodash__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_lodash__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//









/* harmony default export */ __webpack_exports__["default"] = ({
    name: "RecipeCreate",
    components: { FileUpload: __WEBPACK_IMPORTED_MODULE_1__basic_FileUpload___default.a, ImageUpload: __WEBPACK_IMPORTED_MODULE_0__basic_ImageUpload___default.a },

    data: function data() {
        return {
            snackbar: {
                show: false,
                text: 'You cannot add empty item',
                timeout: 2000
            },
            current: 4,
            nations: [],
            ingredients: [],
            ingredient: {
                amount: '',
                name: '',
                isLoading: false
            },
            preparation: {
                id: null,
                name: '',
                amount: '',
                unit: ''
            },
            units: [],
            unit: {
                id: null,
                name: '',
                isLoading: false
            },
            preparationIngredients: [],
            searchIngredient: null,
            searchUnit: null,
            direction: {
                order: 1,
                body: {
                    uz: '',
                    en: '',
                    ru: ''
                },
                image: ''
            },
            directions: [],
            time: {
                hours: 0,
                minutes: 0
            },
            recipe: {
                name: {
                    uz: {
                        value: '',
                        validation: 'required|max:150'
                    },
                    ru: {
                        value: '',
                        validation: 'max:150'
                    },
                    en: {
                        value: '',
                        validation: 'max:150'
                    }
                },
                description: {
                    uz: '',
                    ru: '',
                    en: ''
                },
                difficulty: {
                    levels: ['', 'easy', 'medium', 'hard', 'professional'],
                    value: 1
                },
                isPinned: null,
                isActive: null,
                video: '',
                image: '',
                nation: '',

                details: {
                    prep_time: 0,
                    fat: null,
                    carbs: null,
                    protein: null,
                    calorie: null
                }
            }
        };
    },


    computed: {
        difficultyColor: function difficultyColor() {
            switch (this.recipe.difficulty.value) {
                case 1:
                    return "blue";
                case 2:
                    return "green";
                case 3:
                    return "orange";
                case 4:
                    return "red";
                default:
                    return "grey";
            }
        },
        getIngredientsList: function getIngredientsList() {
            return this.ingredients;
        },
        getUnitsList: function getUnitsList() {
            return this.units;
        }
    },

    methods: {
        uploadedVideo: function uploadedVideo(video) {
            this.recipe.video = video;
        },
        uploadedImage: function uploadedImage(image) {
            this.recipe.image = image;
        },
        calculateTime: function calculateTime() {
            this.recipe.details.prep_time = this.time.hours * 60 + this.time.minutes;
        },
        removeIngredient: function removeIngredient(name) {
            this.preparationIngredients = Object(__WEBPACK_IMPORTED_MODULE_6_lodash__["remove"])(this.preparationIngredients, function (item) {
                return item.name !== name;
            });
        },
        addIngredient: function addIngredient() {
            if (this.ingredient.name === '') {
                this.snackbar.show = true;
                return;
            }

            var ingredient = Object(__WEBPACK_IMPORTED_MODULE_6_lodash__["find"])(this.ingredients, { name: this.searchIngredient });
            var unit = Object(__WEBPACK_IMPORTED_MODULE_6_lodash__["find"])(this.units, { id: this.unit.id });

            this.preparation.amount = this.ingredient.amount;

            if (!ingredient) {
                this.preparation.name = this.searchIngredient;
            } else {
                this.preparation.id = ingredient.id;
                this.preparation.name = ingredient.name;
            }

            if (!unit) {
                this.preparation.unit = this.searchUnit;
            } else {
                this.preparation.unit = unit.name;
            }

            if (!Object(__WEBPACK_IMPORTED_MODULE_6_lodash__["find"])(this.preparationIngredients, { name: this.preparation.name })) {
                this.preparationIngredients.push(Object.assign({}, this.preparation));
            }
        },
        addDirection: function addDirection() {
            if (this.direction.body.uz === '' && this.direction.body.ru === '' && this.direction.body.en === '') {
                this.snackbar.show = true;
                return;
            }

            this.directions.push(Object.assign({}, this.direction, { order: this.direction.order++ }));

            this.direction.body = '';
            this.direction.image = null;
        },
        uploadedDirectionImage: function uploadedDirectionImage(image) {
            this.direction.image = image;
        },
        saveRecipe: function saveRecipe() {
            Object(__WEBPACK_IMPORTED_MODULE_5__api_recipe__["a" /* storeRecipe */])(this.recipe, { 'Accept-Language': 'en' });
        }
    },

    watch: {
        searchIngredient: function searchIngredient(oldVal, newVal) {
            var _this = this;

            if (this.ingredient.isLoading) return;

            this.ingredient.names = [];
            this.ingredient.isLoading = true;

            Object(__WEBPACK_IMPORTED_MODULE_3__api_ingredient__["a" /* ingredients */])({
                name: oldVal
            }, { 'Accept-Language': 'en' }).then(function (response) {
                _this.ingredients = response.data.data;
            }).catch(function (error) {
                console.log(error);
            }).finally(function () {
                _this.ingredient.isLoading = false;
            });
        },
        searchUnit: function searchUnit(oldVal, newVal) {
            var _this2 = this;

            if (this.unit.isLoading) return;

            this.unit.names = [];
            this.unit.isLoading = true;

            Object(__WEBPACK_IMPORTED_MODULE_4__api_unit__["a" /* units */])({
                name: oldVal
            }, { 'Accept-Language': 'en' }).then(function (response) {
                _this2.units = response.data.data;
            }).catch(function (error) {
                console.log(error);
            }).finally(function () {
                _this2.unit.isLoading = false;
            });
        }
    },

    mounted: function mounted() {
        var _this3 = this;

        Object(__WEBPACK_IMPORTED_MODULE_2__api_naion__["a" /* nations */])().then(function (response) {
            _this3.nations = response.data;
        }).catch(function (error) {
            console.log(error);
        });
    }
});

/***/ }),

/***/ 330:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(331)
}
var normalizeComponent = __webpack_require__(7)
/* script */
var __vue_script__ = __webpack_require__(333)
/* template */
var __vue_template__ = __webpack_require__(334)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-7e084ead"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __vue_template__,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources/js/basic/ImageUpload.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-7e084ead", Component.options)
  } else {
    hotAPI.reload("data-v-7e084ead", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 331:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(332);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(6)("7be98c73", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../node_modules/css-loader/index.js!../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-7e084ead\",\"scoped\":true,\"hasInlineConfig\":true}!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./ImageUpload.vue", function() {
     var newContent = require("!!../../../node_modules/css-loader/index.js!../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-7e084ead\",\"scoped\":true,\"hasInlineConfig\":true}!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./ImageUpload.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 332:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(4)(false);
// imports


// module
exports.push([module.i, "\nimg[data-v-7e084ead] {\n    width: 30%;\n    display: block;\n}\n.label[data-v-7e084ead]{\n    margin-bottom: 0;\n}\n", ""]);

// exports


/***/ }),

/***/ 333:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
    name: "ImageUpload",
    props: {
        label: String,
        buttonText: String,
        type: String
    },

    data: function data() {
        return {
            image: ''
        };
    },


    methods: {
        onFileChange: function onFileChange(e) {
            var files = e.target.files || e.dataTransfer.files;
            if (!files.length) return;
            this.createImage(files[0]);
        },
        createImage: function createImage(file) {
            var _this = this;

            var image = new Image();
            var reader = new FileReader();

            reader.onload = function (e) {
                _this.image = e.target.result;
                _this.$emit('onSelect', _this.image);
            };
            reader.readAsDataURL(file);
        },

        removeImage: function removeImage(e) {
            this.image = '';
        }
    }
});

/***/ }),

/***/ 334:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "v-card",
    [
      _c(
        "v-layout",
        { staticClass: "pa-2", attrs: { row: "", wrap: "" } },
        [
          !_vm.image
            ? _c("v-flex", [
                _c("p", { staticClass: "label" }, [_vm._v(_vm._s(_vm.label))]),
                _vm._v(" "),
                _c("input", {
                  attrs: { type: "file", accept: _vm.type },
                  on: { change: _vm.onFileChange }
                })
              ])
            : _c(
                "v-flex",
                [
                  _c("img", { attrs: { src: _vm.image } }),
                  _vm._v(" "),
                  _c("v-btn", { on: { click: _vm.removeImage } }, [
                    _vm._v(_vm._s(_vm.buttonText))
                  ])
                ],
                1
              )
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-7e084ead", module.exports)
  }
}

/***/ }),

/***/ 335:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(336)
}
var normalizeComponent = __webpack_require__(7)
/* script */
var __vue_script__ = __webpack_require__(338)
/* template */
var __vue_template__ = __webpack_require__(339)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-154198bc"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __vue_template__,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources/js/basic/FileUpload.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-154198bc", Component.options)
  } else {
    hotAPI.reload("data-v-154198bc", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 336:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(337);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(6)("235a31ca", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../node_modules/css-loader/index.js!../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-154198bc\",\"scoped\":true,\"hasInlineConfig\":true}!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./FileUpload.vue", function() {
     var newContent = require("!!../../../node_modules/css-loader/index.js!../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-154198bc\",\"scoped\":true,\"hasInlineConfig\":true}!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./FileUpload.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 337:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(4)(false);
// imports


// module
exports.push([module.i, "\n.label[data-v-154198bc]{\n    margin-bottom: 0;\n}\n", ""]);

// exports


/***/ }),

/***/ 338:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
    name: "FileUpload",
    props: {
        label: String,
        type: String
    },
    data: function data() {
        return {
            file: ''
        };
    },


    methods: {
        onFileChange: function onFileChange(e) {
            var files = e.target.files || e.dataTransfer.files;
            if (!files.length) return;
            this.createFile(files[0]);
        },
        createFile: function createFile(file) {
            var _this = this;

            var reader = new FileReader();

            reader.onload = function (e) {
                _this.file = e.target.result;
                _this.$emit('onSelect', _this.file);
            };
            reader.readAsDataURL(file);
        },

        removeFile: function removeFile(e) {
            this.file = '';
        }
    }
});

/***/ }),

/***/ 339:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "v-card",
    { staticClass: "pa-2" },
    [
      _c(
        "v-layout",
        { attrs: { row: "", wrap: "" } },
        [
          _c("v-flex", [
            _c("p", { staticClass: "label" }, [_vm._v(_vm._s(_vm.label))]),
            _vm._v(" "),
            _c("input", {
              attrs: { type: "file", accept: _vm.type },
              on: { change: _vm.onFileChange }
            })
          ])
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-154198bc", module.exports)
  }
}

/***/ }),

/***/ 340:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return nations; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_axios__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_axios___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_axios__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__config_routes__ = __webpack_require__(20);



var nations = function nations(params) {
  return __WEBPACK_IMPORTED_MODULE_0_axios___default.a.get(Object(__WEBPACK_IMPORTED_MODULE_1__config_routes__["a" /* default */])('nations.index'), {
    params: params
  });
};



/***/ }),

/***/ 341:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return apiVersion; });
var apiVersion = '/api/v1';



/***/ }),

/***/ 342:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ingredients; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_axios__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_axios___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_axios__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__config_routes__ = __webpack_require__(20);



var ingredients = function ingredients(params, headers) {
    return __WEBPACK_IMPORTED_MODULE_0_axios___default.a.get(Object(__WEBPACK_IMPORTED_MODULE_1__config_routes__["a" /* default */])('ingredients.index'), {
        params: params,
        headers: headers
    });
};



/***/ }),

/***/ 343:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return units; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_axios__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_axios___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_axios__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__config_routes__ = __webpack_require__(20);



var units = function units(params, headers) {
    return __WEBPACK_IMPORTED_MODULE_0_axios___default.a.get(Object(__WEBPACK_IMPORTED_MODULE_1__config_routes__["a" /* default */])('units.index'), {
        params: params,
        headers: headers
    });
};



/***/ }),

/***/ 344:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return storeRecipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_axios__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_axios___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_axios__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__config_routes__ = __webpack_require__(20);



var storeRecipe = function storeRecipe(data, headers) {
    return __WEBPACK_IMPORTED_MODULE_0_axios___default.a.post(Object(__WEBPACK_IMPORTED_MODULE_1__config_routes__["a" /* default */])('recipes.store'), {
        data: data,
        headers: headers
    });
};



/***/ }),

/***/ 345:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    [
      _c(
        "v-stepper",
        {
          staticClass: "grey lighten-4 ma-2",
          model: {
            value: _vm.current,
            callback: function($$v) {
              _vm.current = $$v
            },
            expression: "current"
          }
        },
        [
          _c(
            "v-stepper-header",
            [
              _c(
                "v-stepper-step",
                { attrs: { complete: _vm.current > 1, step: "1" } },
                [_vm._v("Main info")]
              ),
              _vm._v(" "),
              _c("v-divider"),
              _vm._v(" "),
              _c(
                "v-stepper-step",
                { attrs: { complete: _vm.current > 2, step: "2" } },
                [_vm._v("Details")]
              ),
              _vm._v(" "),
              _c("v-divider"),
              _vm._v(" "),
              _c(
                "v-stepper-step",
                { attrs: { complete: _vm.current > 3, step: "3" } },
                [_vm._v("Ingredients")]
              ),
              _vm._v(" "),
              _c("v-divider"),
              _vm._v(" "),
              _c("v-stepper-step", { attrs: { step: "4" } }, [
                _vm._v("Directions")
              ])
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "v-stepper-items",
            [
              _c(
                "v-stepper-content",
                { staticClass: "grey lighten-4", attrs: { step: "1" } },
                [
                  _c(
                    "v-layout",
                    [
                      _c(
                        "v-flex",
                        { attrs: { xs4: "" } },
                        [
                          _c("v-checkbox", {
                            attrs: { label: "Active" },
                            model: {
                              value: _vm.recipe.isActive,
                              callback: function($$v) {
                                _vm.$set(_vm.recipe, "isActive", $$v)
                              },
                              expression: "recipe.isActive"
                            }
                          })
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "v-flex",
                        { attrs: { xs4: "" } },
                        [
                          _c("v-checkbox", {
                            attrs: { label: "Pinned" },
                            model: {
                              value: _vm.recipe.isPinned,
                              callback: function($$v) {
                                _vm.$set(_vm.recipe, "isPinned", $$v)
                              },
                              expression: "recipe.isPinned"
                            }
                          })
                        ],
                        1
                      )
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "v-layout",
                    { attrs: { row: "", wrap: "" } },
                    [
                      _c(
                        "v-flex",
                        { staticClass: "ma-2" },
                        [
                          _c("v-text-field", {
                            directives: [
                              {
                                name: "validate",
                                rawName: "v-validate",
                                value: _vm.recipe.name.uz.validation,
                                expression: "recipe.name.uz.validation"
                              }
                            ],
                            attrs: {
                              counter: 150,
                              "error-messages": _vm.errors.collect("name"),
                              label: "Name in uzbek",
                              solo: "",
                              "data-vv-name": "name",
                              required: ""
                            },
                            model: {
                              value: _vm.recipe.name.uz.value,
                              callback: function($$v) {
                                _vm.$set(_vm.recipe.name.uz, "value", $$v)
                              },
                              expression: "recipe.name.uz.value"
                            }
                          })
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "v-flex",
                        { staticClass: "ma-2" },
                        [
                          _c("v-text-field", {
                            directives: [
                              {
                                name: "validate",
                                rawName: "v-validate",
                                value: _vm.recipe.name.ru.validation,
                                expression: "recipe.name.ru.validation"
                              }
                            ],
                            attrs: {
                              counter: 150,
                              "error-messages": _vm.errors.collect("name"),
                              label: "Name in russian",
                              solo: "",
                              "data-vv-name": "name",
                              required: ""
                            },
                            model: {
                              value: _vm.recipe.name.ru.value,
                              callback: function($$v) {
                                _vm.$set(_vm.recipe.name.ru, "value", $$v)
                              },
                              expression: "recipe.name.ru.value"
                            }
                          })
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "v-flex",
                        { staticClass: "ma-2" },
                        [
                          _c("v-text-field", {
                            directives: [
                              {
                                name: "validate",
                                rawName: "v-validate",
                                value: _vm.recipe.name.en.validation,
                                expression: "recipe.name.en.validation"
                              }
                            ],
                            attrs: {
                              counter: 150,
                              "error-messages": _vm.errors.collect("name"),
                              label: "Name in english",
                              solo: "",
                              "data-vv-name": "name",
                              required: ""
                            },
                            model: {
                              value: _vm.recipe.name.en.value,
                              callback: function($$v) {
                                _vm.$set(_vm.recipe.name.en, "value", $$v)
                              },
                              expression: "recipe.name.en.value"
                            }
                          })
                        ],
                        1
                      )
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "v-layout",
                    { attrs: { row: "", wrap: "" } },
                    [
                      _c(
                        "v-flex",
                        [
                          _c("v-textarea", {
                            staticClass: "ma-2",
                            attrs: {
                              solo: "",
                              name: "description",
                              label: "Description in uzbek",
                              value: _vm.recipe.description.uz
                            }
                          })
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "v-flex",
                        [
                          _c("v-textarea", {
                            staticClass: "ma-2",
                            attrs: {
                              solo: "",
                              name: "description",
                              label: "Description in russian",
                              value: _vm.recipe.description.ru
                            }
                          })
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "v-flex",
                        [
                          _c("v-textarea", {
                            staticClass: "ma-2",
                            attrs: {
                              solo: "",
                              name: "description",
                              label: "Description in english",
                              value: _vm.recipe.description.en
                            }
                          })
                        ],
                        1
                      )
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "v-layout",
                    [
                      _c(
                        "v-flex",
                        { attrs: { xs6: "" } },
                        [
                          _c("image-upload", {
                            staticClass: "ma-2",
                            attrs: {
                              label: "Select image",
                              "button-text": "remove",
                              type: "image/*"
                            },
                            on: { onSelect: _vm.uploadedImage }
                          })
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "v-flex",
                        { attrs: { xs6: "" } },
                        [
                          _c("file-upload", {
                            staticClass: "ma-2",
                            attrs: { label: "Select video", type: "video/*" },
                            on: { onSelect: _vm.uploadedVideo }
                          })
                        ],
                        1
                      )
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "v-btn",
                    {
                      attrs: { color: "primary" },
                      on: {
                        click: function($event) {
                          _vm.current = 2
                        }
                      }
                    },
                    [_vm._v("\n                    Continue\n                ")]
                  )
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "v-stepper-content",
                { attrs: { step: "2" } },
                [
                  _c(
                    "v-layout",
                    [
                      _c(
                        "v-flex",
                        { staticClass: "ma-2", attrs: { xs6: "" } },
                        [
                          _c("v-autocomplete", {
                            attrs: {
                              items: _vm.nations,
                              label: "Select Nation",
                              "persistent-hint": "",
                              solo: ""
                            },
                            model: {
                              value: _vm.recipe.nation,
                              callback: function($$v) {
                                _vm.$set(_vm.recipe, "nation", $$v)
                              },
                              expression: "recipe.nation"
                            }
                          })
                        ],
                        1
                      )
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "v-layout",
                    { staticClass: "mx-2" },
                    [
                      _c(
                        "v-flex",
                        { staticClass: "ma-2" },
                        [
                          _c("v-slider", {
                            attrs: {
                              "tick-labels": _vm.recipe.difficulty.levels,
                              max: 4,
                              color: _vm.difficultyColor,
                              step: "1",
                              ticks: "always",
                              "tick-size": "2"
                            },
                            model: {
                              value: _vm.recipe.difficulty.value,
                              callback: function($$v) {
                                _vm.$set(_vm.recipe.difficulty, "value", $$v)
                              },
                              expression: "recipe.difficulty.value"
                            }
                          })
                        ],
                        1
                      )
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "v-layout",
                    {
                      staticClass: "mx-2",
                      attrs: { "align-center": "", row: "", "fill-height": "" }
                    },
                    [
                      _c("v-flex", [_c("p", [_vm._v("Preparation time")])]),
                      _vm._v(" "),
                      _c(
                        "v-flex",
                        { staticClass: "ma-2" },
                        [
                          _c("v-slider", {
                            attrs: {
                              color: "primary",
                              label: _vm.time.hours + " hours",
                              "inverse-label": "",
                              hint: "How many hours it takes",
                              "prepend-icon": "alarm",
                              "thumb-label": "",
                              min: "0",
                              max: "24"
                            },
                            on: { change: _vm.calculateTime },
                            model: {
                              value: _vm.time.hours,
                              callback: function($$v) {
                                _vm.$set(_vm.time, "hours", $$v)
                              },
                              expression: "time.hours"
                            }
                          })
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "v-flex",
                        { staticClass: "ma-2" },
                        [
                          _c("v-slider", {
                            attrs: {
                              color: "primary",
                              label: _vm.time.minutes + " minutes",
                              "inverse-label": "",
                              hint: "",
                              "prepend-icon": "alarm",
                              "thumb-label": "",
                              min: "0",
                              max: "60"
                            },
                            on: { change: _vm.calculateTime },
                            model: {
                              value: _vm.time.minutes,
                              callback: function($$v) {
                                _vm.$set(_vm.time, "minutes", $$v)
                              },
                              expression: "time.minutes"
                            }
                          })
                        ],
                        1
                      )
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "v-layout",
                    { attrs: { row: "" } },
                    [
                      _c(
                        "v-flex",
                        { staticClass: "ma-2" },
                        [
                          _c("v-text-field", {
                            attrs: { label: "Fat", suffix: "gram" },
                            model: {
                              value: _vm.recipe.details.fat,
                              callback: function($$v) {
                                _vm.$set(_vm.recipe.details, "fat", $$v)
                              },
                              expression: "recipe.details.fat"
                            }
                          })
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "v-flex",
                        { staticClass: "ma-2" },
                        [
                          _c("v-text-field", {
                            attrs: { label: "Carbs", suffix: "gram" },
                            model: {
                              value: _vm.recipe.details.carbs,
                              callback: function($$v) {
                                _vm.$set(_vm.recipe.details, "carbs", $$v)
                              },
                              expression: "recipe.details.carbs"
                            }
                          })
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "v-flex",
                        { staticClass: "ma-2" },
                        [
                          _c("v-text-field", {
                            attrs: { label: "Protein", suffix: "gram" },
                            model: {
                              value: _vm.recipe.details.protein,
                              callback: function($$v) {
                                _vm.$set(_vm.recipe.details, "protein", $$v)
                              },
                              expression: "recipe.details.protein"
                            }
                          })
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "v-flex",
                        { staticClass: "ma-2" },
                        [
                          _c("v-text-field", {
                            attrs: { label: "Calorie", suffix: "kkal" },
                            model: {
                              value: _vm.recipe.details.calorie,
                              callback: function($$v) {
                                _vm.$set(_vm.recipe.details, "calorie", $$v)
                              },
                              expression: "recipe.details.calorie"
                            }
                          })
                        ],
                        1
                      )
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "v-btn",
                    {
                      attrs: { color: "primary" },
                      on: {
                        click: function($event) {
                          _vm.current = 3
                        }
                      }
                    },
                    [_vm._v("\n                    Continue\n                ")]
                  ),
                  _vm._v(" "),
                  _c(
                    "v-btn",
                    {
                      attrs: { flat: "" },
                      on: {
                        click: function($event) {
                          _vm.current = 1
                        }
                      }
                    },
                    [_vm._v("\n                    Previous\n                ")]
                  )
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "v-stepper-content",
                { attrs: { step: "3" } },
                [
                  _c(
                    "v-layout",
                    { staticClass: "ma-2" },
                    [
                      _c(
                        "v-flex",
                        [
                          _c(
                            "v-layout",
                            [
                              _c("v-combobox", {
                                attrs: {
                                  items: _vm.getIngredientsList,
                                  "item-text": "name",
                                  "item-value": "id",
                                  label: "Search Ingredients",
                                  loading: _vm.ingredient.isLoading,
                                  "search-input": _vm.searchIngredient,
                                  solo: "",
                                  "hide-no-data": ""
                                },
                                on: {
                                  "update:searchInput": function($event) {
                                    _vm.searchIngredient = $event
                                  },
                                  "update:search-input": function($event) {
                                    _vm.searchIngredient = $event
                                  }
                                },
                                model: {
                                  value: _vm.ingredient.name,
                                  callback: function($$v) {
                                    _vm.$set(_vm.ingredient, "name", $$v)
                                  },
                                  expression: "ingredient.name"
                                }
                              })
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "v-card",
                            [
                              _c(
                                "v-container",
                                { attrs: { fluid: "" } },
                                [
                                  _c(
                                    "v-layout",
                                    [
                                      _c(
                                        "v-flex",
                                        { staticClass: "mx-2" },
                                        [
                                          _c("v-combobox", {
                                            attrs: {
                                              items: _vm.getUnitsList,
                                              "item-text": "name",
                                              "item-value": "id",
                                              label: "Search Units",
                                              loading: _vm.unit.isLoading,
                                              "search-input": _vm.searchUnit,
                                              "hide-no-data": ""
                                            },
                                            on: {
                                              "update:searchInput": function(
                                                $event
                                              ) {
                                                _vm.searchUnit = $event
                                              },
                                              "update:search-input": function(
                                                $event
                                              ) {
                                                _vm.searchUnit = $event
                                              }
                                            },
                                            model: {
                                              value: _vm.unit.name,
                                              callback: function($$v) {
                                                _vm.$set(_vm.unit, "name", $$v)
                                              },
                                              expression: "unit.name"
                                            }
                                          })
                                        ],
                                        1
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "v-flex",
                                        { staticClass: "mx-2" },
                                        [
                                          _c("v-text-field", {
                                            attrs: {
                                              label: "Amount",
                                              suffix: this.searchUnit
                                            },
                                            model: {
                                              value: _vm.ingredient.amount,
                                              callback: function($$v) {
                                                _vm.$set(
                                                  _vm.ingredient,
                                                  "amount",
                                                  $$v
                                                )
                                              },
                                              expression: "ingredient.amount"
                                            }
                                          })
                                        ],
                                        1
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "v-flex",
                                        [
                                          _c(
                                            "v-btn",
                                            {
                                              attrs: { color: "primary" },
                                              on: { click: _vm.addIngredient }
                                            },
                                            [
                                              _vm._v(
                                                "\n                                            Add\n                                        "
                                              )
                                            ]
                                          )
                                        ],
                                        1
                                      )
                                    ],
                                    1
                                  ),
                                  _vm._v(" "),
                                  _vm._l(_vm.preparationIngredients, function(
                                    ingredient
                                  ) {
                                    return _c(
                                      "v-chip",
                                      {
                                        key: ingredient.name,
                                        attrs: { close: "" },
                                        on: {
                                          input: function($event) {
                                            return _vm.removeIngredient(
                                              ingredient.name
                                            )
                                          }
                                        }
                                      },
                                      [
                                        _c(
                                          "v-avatar",
                                          { staticClass: "teal" },
                                          [_vm._v(_vm._s(ingredient.amount))]
                                        ),
                                        _vm._v(
                                          "\n                                    " +
                                            _vm._s(ingredient.unit) +
                                            "   "
                                        ),
                                        _c("b", [
                                          _vm._v(_vm._s(ingredient.name))
                                        ])
                                      ],
                                      1
                                    )
                                  })
                                ],
                                2
                              )
                            ],
                            1
                          )
                        ],
                        1
                      )
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "v-btn",
                    {
                      attrs: { color: "primary" },
                      on: {
                        click: function($event) {
                          _vm.current = 4
                        }
                      }
                    },
                    [_vm._v("\n                    Continue\n                ")]
                  ),
                  _vm._v(" "),
                  _c(
                    "v-btn",
                    {
                      attrs: { flat: "" },
                      on: {
                        click: function($event) {
                          _vm.current = 2
                        }
                      }
                    },
                    [_vm._v("\n                    Previous\n                ")]
                  )
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "v-stepper-content",
                { attrs: { step: "4" } },
                [
                  _c(
                    "v-layout",
                    { staticClass: "ma-2" },
                    [
                      _c(
                        "v-flex",
                        [
                          _c(
                            "v-layout",
                            { attrs: { row: "", wrap: "" } },
                            [
                              _c(
                                "v-flex",
                                { attrs: { xs4: "" } },
                                [
                                  _c("v-textarea", {
                                    staticClass: "ma-2",
                                    attrs: {
                                      solo: "",
                                      name: "instruction",
                                      label: "Instruction in uzbek"
                                    },
                                    model: {
                                      value: _vm.direction.body.uz,
                                      callback: function($$v) {
                                        _vm.$set(_vm.direction.body, "uz", $$v)
                                      },
                                      expression: "direction.body.uz"
                                    }
                                  })
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _c(
                                "v-flex",
                                { attrs: { xs4: "" } },
                                [
                                  _c("v-textarea", {
                                    staticClass: "ma-2",
                                    attrs: {
                                      solo: "",
                                      name: "instruction",
                                      label: "Instruction in russian"
                                    },
                                    model: {
                                      value: _vm.direction.body.ru,
                                      callback: function($$v) {
                                        _vm.$set(_vm.direction.body, "ru", $$v)
                                      },
                                      expression: "direction.body.ru"
                                    }
                                  })
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _c(
                                "v-flex",
                                { attrs: { xs4: "" } },
                                [
                                  _c("v-textarea", {
                                    staticClass: "ma-2",
                                    attrs: {
                                      solo: "",
                                      name: "instruction",
                                      label: "Instruction in english"
                                    },
                                    model: {
                                      value: _vm.direction.body.en,
                                      callback: function($$v) {
                                        _vm.$set(_vm.direction.body, "en", $$v)
                                      },
                                      expression: "direction.body.en"
                                    }
                                  })
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _c(
                                "v-flex",
                                { attrs: { xs6: "" } },
                                [
                                  _c("image-upload", {
                                    attrs: {
                                      label: "Select image",
                                      "button-text": "remove",
                                      type: "image/*"
                                    },
                                    on: { onSelect: _vm.uploadedDirectionImage }
                                  })
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _c(
                                "v-flex",
                                { attrs: { xs4: "" } },
                                [
                                  _c(
                                    "v-btn",
                                    {
                                      attrs: { color: "info" },
                                      on: { click: _vm.addDirection }
                                    },
                                    [
                                      _vm._v(
                                        "\n                                    Add\n                                "
                                      )
                                    ]
                                  )
                                ],
                                1
                              )
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c("v-divider", { staticClass: "ma-2" }),
                          _vm._v(" "),
                          this.directions.length
                            ? _c(
                                "v-timeline",
                                _vm._l(_vm.directions, function(direction) {
                                  return _c(
                                    "v-timeline-item",
                                    {
                                      key: direction.order,
                                      attrs: { large: "" },
                                      scopedSlots: _vm._u([
                                        {
                                          key: "icon",
                                          fn: function(_) {
                                            return [
                                              _c(
                                                "v-avatar",
                                                { attrs: { size: "70" } },
                                                [
                                                  _c("img", {
                                                    attrs: {
                                                      src: direction.image
                                                    }
                                                  })
                                                ]
                                              )
                                            ]
                                          }
                                        }
                                      ])
                                    },
                                    [
                                      _vm._v(" "),
                                      _c(
                                        "v-card",
                                        { staticClass: "elevation-2" },
                                        [
                                          _c(
                                            "v-card-title",
                                            { staticClass: "headline" },
                                            [_vm._v(_vm._s(direction.order))]
                                          ),
                                          _vm._v(" "),
                                          _c("v-card-text", [
                                            _vm._v(_vm._s(direction.body.uz))
                                          ]),
                                          _vm._v(" "),
                                          _c("v-card-text", [
                                            _vm._v(_vm._s(direction.body.ru))
                                          ]),
                                          _vm._v(" "),
                                          _c("v-card-text", [
                                            _vm._v(_vm._s(direction.body.en))
                                          ])
                                        ],
                                        1
                                      )
                                    ],
                                    1
                                  )
                                }),
                                1
                              )
                            : _vm._e()
                        ],
                        1
                      )
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c("v-divider", { staticClass: "ma-2" }),
                  _vm._v(" "),
                  _c(
                    "v-btn",
                    {
                      attrs: { color: "primary" },
                      on: { click: _vm.saveRecipe }
                    },
                    [_vm._v("\n                    Save\n                ")]
                  ),
                  _vm._v(" "),
                  _c(
                    "v-btn",
                    {
                      attrs: { flat: "" },
                      on: {
                        click: function($event) {
                          _vm.current = 3
                        }
                      }
                    },
                    [_vm._v("\n                    Previous\n                ")]
                  )
                ],
                1
              )
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "v-snackbar",
            {
              attrs: {
                color: "error",
                timeout: _vm.snackbar.timeout,
                vertical: true
              },
              model: {
                value: _vm.snackbar.show,
                callback: function($$v) {
                  _vm.$set(_vm.snackbar, "show", $$v)
                },
                expression: "snackbar.show"
              }
            },
            [
              _vm._v(
                "\n            " + _vm._s(_vm.snackbar.text) + "\n            "
              ),
              _c(
                "v-btn",
                {
                  attrs: { dark: "", flat: "" },
                  on: {
                    click: function($event) {
                      _vm.snackbar.show = false
                    }
                  }
                },
                [_vm._v("Close")]
              )
            ],
            1
          )
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-5a23e12d", module.exports)
  }
}

/***/ }),

/***/ 346:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(347)
}
var normalizeComponent = __webpack_require__(7)
/* script */
var __vue_script__ = __webpack_require__(349)
/* template */
var __vue_template__ = __webpack_require__(350)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-b117e5d2"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __vue_template__,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources/js/modules/moderator/components/main/Dashboard.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-b117e5d2", Component.options)
  } else {
    hotAPI.reload("data-v-b117e5d2", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 347:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(348);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(6)("f7597ae6", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../../node_modules/css-loader/index.js!../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-b117e5d2\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Dashboard.vue", function() {
     var newContent = require("!!../../../../../../node_modules/css-loader/index.js!../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-b117e5d2\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Dashboard.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 348:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(4)(false);
// imports


// module
exports.push([module.i, "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", ""]);

// exports


/***/ }),

/***/ 349:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
    data: function data() {
        return {
            drawer: null,
            items: [{ icon: 'lightbulb_outline', text: 'Notes', path: '/recipe' }, { icon: 'touch_app', text: 'Reminders', path: '/recipe' }, { divider: true }, { icon: 'add', text: 'Create new Recipe', path: '/recipe' }, { divider: true }, { icon: 'archive', text: 'Archive', path: '/recipe' }, { icon: 'delete', text: 'Trash', path: '/recipe' }, { divider: true }, { icon: 'settings', text: 'Settings', path: '/recipe' }, { icon: 'chat_bubble', text: 'Trash', path: '/recipe' }, { icon: 'help', text: 'Help' }, { icon: 'phonelink', text: 'App downloads', path: '/recipe' }, { icon: 'keyboard', text: 'Keyboard shortcuts', path: '/recipe' }]
        };
    },
    props: {
        source: String
    }
});

/***/ }),

/***/ 350:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "v-app",
    { attrs: { id: "keep" } },
    [
      _c(
        "v-navigation-drawer",
        {
          staticClass: "grey lighten-4",
          attrs: { fixed: "", clipped: "", app: "" },
          model: {
            value: _vm.drawer,
            callback: function($$v) {
              _vm.drawer = $$v
            },
            expression: "drawer"
          }
        },
        [
          _c(
            "v-list",
            { staticClass: "grey lighten-4", attrs: { dense: "" } },
            [
              _vm._l(_vm.items, function(item, i) {
                return [
                  item.heading
                    ? _c(
                        "v-layout",
                        { key: i, attrs: { row: "", "align-center": "" } },
                        [
                          _c(
                            "v-flex",
                            { attrs: { xs6: "" } },
                            [
                              item.heading
                                ? _c("v-subheader", [
                                    _vm._v(
                                      "\n                            " +
                                        _vm._s(item.heading) +
                                        "\n                        "
                                    )
                                  ])
                                : _vm._e()
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "v-flex",
                            {
                              staticClass: "text-xs-right",
                              attrs: { xs6: "" }
                            },
                            [
                              _c("v-btn", { attrs: { small: "", flat: "" } }, [
                                _vm._v("edit")
                              ])
                            ],
                            1
                          )
                        ],
                        1
                      )
                    : item.divider
                    ? _c("v-divider", {
                        key: i,
                        staticClass: "my-3",
                        attrs: { dark: "" }
                      })
                    : _c(
                        "v-list-tile",
                        { key: i, attrs: { to: item.path } },
                        [
                          _c(
                            "v-list-tile-action",
                            [_c("v-icon", [_vm._v(_vm._s(item.icon))])],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "v-list-tile-content",
                            [
                              _c(
                                "v-list-tile-title",
                                { staticClass: "black--text" },
                                [
                                  _vm._v(
                                    "\n                            " +
                                      _vm._s(item.text) +
                                      "\n                        "
                                  )
                                ]
                              )
                            ],
                            1
                          )
                        ],
                        1
                      )
                ]
              })
            ],
            2
          )
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "v-toolbar",
        { attrs: { app: "", absolute: "", "clipped-left": "" } },
        [
          _c("v-toolbar-side-icon", {
            on: {
              click: function($event) {
                _vm.drawer = !_vm.drawer
              }
            }
          }),
          _vm._v(" "),
          _c("span", { staticClass: "title ml-3 mr-5" }, [
            _vm._v("Dashboard Moderator")
          ])
        ],
        1
      ),
      _vm._v(" "),
      _c("v-content", [_c("router-view")], 1)
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-b117e5d2", module.exports)
  }
}

/***/ }),

/***/ 351:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(352);
if(typeof content === 'string') content = [[module.i, content, '']];
// Prepare cssTransformation
var transform;

var options = {"hmr":true}
options.transform = transform
// add the styles to the DOM
var update = __webpack_require__(13)(content, options);
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../../css-loader/index.js!./vuetify.min.css", function() {
			var newContent = require("!!../../css-loader/index.js!./vuetify.min.css");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 352:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(4)(false);
// imports


// module
exports.push([module.i, "/*!\n* Vuetify v1.5.0\n* Forged by John Leider\n* Released under the MIT License.\n*/@-webkit-keyframes shake{59%{margin-left:0}60%,80%{margin-left:2px}70%,90%{margin-left:-2px}}@keyframes shake{59%{margin-left:0}60%,80%{margin-left:2px}70%,90%{margin-left:-2px}}.black{background-color:#000!important;border-color:#000!important}.black--text{color:#000!important;caret-color:#000!important}.white{background-color:#fff!important;border-color:#fff!important}.white--text{color:#fff!important;caret-color:#fff!important}.transparent{background-color:transparent!important;border-color:transparent!important}.transparent--text{color:transparent!important;caret-color:transparent!important}.red{background-color:#f44336!important;border-color:#f44336!important}.red--text{color:#f44336!important;caret-color:#f44336!important}.red.lighten-5{background-color:#ffebee!important;border-color:#ffebee!important}.red--text.text--lighten-5{color:#ffebee!important;caret-color:#ffebee!important}.red.lighten-4{background-color:#ffcdd2!important;border-color:#ffcdd2!important}.red--text.text--lighten-4{color:#ffcdd2!important;caret-color:#ffcdd2!important}.red.lighten-3{background-color:#ef9a9a!important;border-color:#ef9a9a!important}.red--text.text--lighten-3{color:#ef9a9a!important;caret-color:#ef9a9a!important}.red.lighten-2{background-color:#e57373!important;border-color:#e57373!important}.red--text.text--lighten-2{color:#e57373!important;caret-color:#e57373!important}.red.lighten-1{background-color:#ef5350!important;border-color:#ef5350!important}.red--text.text--lighten-1{color:#ef5350!important;caret-color:#ef5350!important}.red.darken-1{background-color:#e53935!important;border-color:#e53935!important}.red--text.text--darken-1{color:#e53935!important;caret-color:#e53935!important}.red.darken-2{background-color:#d32f2f!important;border-color:#d32f2f!important}.red--text.text--darken-2{color:#d32f2f!important;caret-color:#d32f2f!important}.red.darken-3{background-color:#c62828!important;border-color:#c62828!important}.red--text.text--darken-3{color:#c62828!important;caret-color:#c62828!important}.red.darken-4{background-color:#b71c1c!important;border-color:#b71c1c!important}.red--text.text--darken-4{color:#b71c1c!important;caret-color:#b71c1c!important}.red.accent-1{background-color:#ff8a80!important;border-color:#ff8a80!important}.red--text.text--accent-1{color:#ff8a80!important;caret-color:#ff8a80!important}.red.accent-2{background-color:#ff5252!important;border-color:#ff5252!important}.red--text.text--accent-2{color:#ff5252!important;caret-color:#ff5252!important}.red.accent-3{background-color:#ff1744!important;border-color:#ff1744!important}.red--text.text--accent-3{color:#ff1744!important;caret-color:#ff1744!important}.red.accent-4{background-color:#d50000!important;border-color:#d50000!important}.red--text.text--accent-4{color:#d50000!important;caret-color:#d50000!important}.pink{background-color:#e91e63!important;border-color:#e91e63!important}.pink--text{color:#e91e63!important;caret-color:#e91e63!important}.pink.lighten-5{background-color:#fce4ec!important;border-color:#fce4ec!important}.pink--text.text--lighten-5{color:#fce4ec!important;caret-color:#fce4ec!important}.pink.lighten-4{background-color:#f8bbd0!important;border-color:#f8bbd0!important}.pink--text.text--lighten-4{color:#f8bbd0!important;caret-color:#f8bbd0!important}.pink.lighten-3{background-color:#f48fb1!important;border-color:#f48fb1!important}.pink--text.text--lighten-3{color:#f48fb1!important;caret-color:#f48fb1!important}.pink.lighten-2{background-color:#f06292!important;border-color:#f06292!important}.pink--text.text--lighten-2{color:#f06292!important;caret-color:#f06292!important}.pink.lighten-1{background-color:#ec407a!important;border-color:#ec407a!important}.pink--text.text--lighten-1{color:#ec407a!important;caret-color:#ec407a!important}.pink.darken-1{background-color:#d81b60!important;border-color:#d81b60!important}.pink--text.text--darken-1{color:#d81b60!important;caret-color:#d81b60!important}.pink.darken-2{background-color:#c2185b!important;border-color:#c2185b!important}.pink--text.text--darken-2{color:#c2185b!important;caret-color:#c2185b!important}.pink.darken-3{background-color:#ad1457!important;border-color:#ad1457!important}.pink--text.text--darken-3{color:#ad1457!important;caret-color:#ad1457!important}.pink.darken-4{background-color:#880e4f!important;border-color:#880e4f!important}.pink--text.text--darken-4{color:#880e4f!important;caret-color:#880e4f!important}.pink.accent-1{background-color:#ff80ab!important;border-color:#ff80ab!important}.pink--text.text--accent-1{color:#ff80ab!important;caret-color:#ff80ab!important}.pink.accent-2{background-color:#ff4081!important;border-color:#ff4081!important}.pink--text.text--accent-2{color:#ff4081!important;caret-color:#ff4081!important}.pink.accent-3{background-color:#f50057!important;border-color:#f50057!important}.pink--text.text--accent-3{color:#f50057!important;caret-color:#f50057!important}.pink.accent-4{background-color:#c51162!important;border-color:#c51162!important}.pink--text.text--accent-4{color:#c51162!important;caret-color:#c51162!important}.purple{background-color:#9c27b0!important;border-color:#9c27b0!important}.purple--text{color:#9c27b0!important;caret-color:#9c27b0!important}.purple.lighten-5{background-color:#f3e5f5!important;border-color:#f3e5f5!important}.purple--text.text--lighten-5{color:#f3e5f5!important;caret-color:#f3e5f5!important}.purple.lighten-4{background-color:#e1bee7!important;border-color:#e1bee7!important}.purple--text.text--lighten-4{color:#e1bee7!important;caret-color:#e1bee7!important}.purple.lighten-3{background-color:#ce93d8!important;border-color:#ce93d8!important}.purple--text.text--lighten-3{color:#ce93d8!important;caret-color:#ce93d8!important}.purple.lighten-2{background-color:#ba68c8!important;border-color:#ba68c8!important}.purple--text.text--lighten-2{color:#ba68c8!important;caret-color:#ba68c8!important}.purple.lighten-1{background-color:#ab47bc!important;border-color:#ab47bc!important}.purple--text.text--lighten-1{color:#ab47bc!important;caret-color:#ab47bc!important}.purple.darken-1{background-color:#8e24aa!important;border-color:#8e24aa!important}.purple--text.text--darken-1{color:#8e24aa!important;caret-color:#8e24aa!important}.purple.darken-2{background-color:#7b1fa2!important;border-color:#7b1fa2!important}.purple--text.text--darken-2{color:#7b1fa2!important;caret-color:#7b1fa2!important}.purple.darken-3{background-color:#6a1b9a!important;border-color:#6a1b9a!important}.purple--text.text--darken-3{color:#6a1b9a!important;caret-color:#6a1b9a!important}.purple.darken-4{background-color:#4a148c!important;border-color:#4a148c!important}.purple--text.text--darken-4{color:#4a148c!important;caret-color:#4a148c!important}.purple.accent-1{background-color:#ea80fc!important;border-color:#ea80fc!important}.purple--text.text--accent-1{color:#ea80fc!important;caret-color:#ea80fc!important}.purple.accent-2{background-color:#e040fb!important;border-color:#e040fb!important}.purple--text.text--accent-2{color:#e040fb!important;caret-color:#e040fb!important}.purple.accent-3{background-color:#d500f9!important;border-color:#d500f9!important}.purple--text.text--accent-3{color:#d500f9!important;caret-color:#d500f9!important}.purple.accent-4{background-color:#a0f!important;border-color:#a0f!important}.purple--text.text--accent-4{color:#a0f!important;caret-color:#a0f!important}.deep-purple{background-color:#673ab7!important;border-color:#673ab7!important}.deep-purple--text{color:#673ab7!important;caret-color:#673ab7!important}.deep-purple.lighten-5{background-color:#ede7f6!important;border-color:#ede7f6!important}.deep-purple--text.text--lighten-5{color:#ede7f6!important;caret-color:#ede7f6!important}.deep-purple.lighten-4{background-color:#d1c4e9!important;border-color:#d1c4e9!important}.deep-purple--text.text--lighten-4{color:#d1c4e9!important;caret-color:#d1c4e9!important}.deep-purple.lighten-3{background-color:#b39ddb!important;border-color:#b39ddb!important}.deep-purple--text.text--lighten-3{color:#b39ddb!important;caret-color:#b39ddb!important}.deep-purple.lighten-2{background-color:#9575cd!important;border-color:#9575cd!important}.deep-purple--text.text--lighten-2{color:#9575cd!important;caret-color:#9575cd!important}.deep-purple.lighten-1{background-color:#7e57c2!important;border-color:#7e57c2!important}.deep-purple--text.text--lighten-1{color:#7e57c2!important;caret-color:#7e57c2!important}.deep-purple.darken-1{background-color:#5e35b1!important;border-color:#5e35b1!important}.deep-purple--text.text--darken-1{color:#5e35b1!important;caret-color:#5e35b1!important}.deep-purple.darken-2{background-color:#512da8!important;border-color:#512da8!important}.deep-purple--text.text--darken-2{color:#512da8!important;caret-color:#512da8!important}.deep-purple.darken-3{background-color:#4527a0!important;border-color:#4527a0!important}.deep-purple--text.text--darken-3{color:#4527a0!important;caret-color:#4527a0!important}.deep-purple.darken-4{background-color:#311b92!important;border-color:#311b92!important}.deep-purple--text.text--darken-4{color:#311b92!important;caret-color:#311b92!important}.deep-purple.accent-1{background-color:#b388ff!important;border-color:#b388ff!important}.deep-purple--text.text--accent-1{color:#b388ff!important;caret-color:#b388ff!important}.deep-purple.accent-2{background-color:#7c4dff!important;border-color:#7c4dff!important}.deep-purple--text.text--accent-2{color:#7c4dff!important;caret-color:#7c4dff!important}.deep-purple.accent-3{background-color:#651fff!important;border-color:#651fff!important}.deep-purple--text.text--accent-3{color:#651fff!important;caret-color:#651fff!important}.deep-purple.accent-4{background-color:#6200ea!important;border-color:#6200ea!important}.deep-purple--text.text--accent-4{color:#6200ea!important;caret-color:#6200ea!important}.indigo{background-color:#3f51b5!important;border-color:#3f51b5!important}.indigo--text{color:#3f51b5!important;caret-color:#3f51b5!important}.indigo.lighten-5{background-color:#e8eaf6!important;border-color:#e8eaf6!important}.indigo--text.text--lighten-5{color:#e8eaf6!important;caret-color:#e8eaf6!important}.indigo.lighten-4{background-color:#c5cae9!important;border-color:#c5cae9!important}.indigo--text.text--lighten-4{color:#c5cae9!important;caret-color:#c5cae9!important}.indigo.lighten-3{background-color:#9fa8da!important;border-color:#9fa8da!important}.indigo--text.text--lighten-3{color:#9fa8da!important;caret-color:#9fa8da!important}.indigo.lighten-2{background-color:#7986cb!important;border-color:#7986cb!important}.indigo--text.text--lighten-2{color:#7986cb!important;caret-color:#7986cb!important}.indigo.lighten-1{background-color:#5c6bc0!important;border-color:#5c6bc0!important}.indigo--text.text--lighten-1{color:#5c6bc0!important;caret-color:#5c6bc0!important}.indigo.darken-1{background-color:#3949ab!important;border-color:#3949ab!important}.indigo--text.text--darken-1{color:#3949ab!important;caret-color:#3949ab!important}.indigo.darken-2{background-color:#303f9f!important;border-color:#303f9f!important}.indigo--text.text--darken-2{color:#303f9f!important;caret-color:#303f9f!important}.indigo.darken-3{background-color:#283593!important;border-color:#283593!important}.indigo--text.text--darken-3{color:#283593!important;caret-color:#283593!important}.indigo.darken-4{background-color:#1a237e!important;border-color:#1a237e!important}.indigo--text.text--darken-4{color:#1a237e!important;caret-color:#1a237e!important}.indigo.accent-1{background-color:#8c9eff!important;border-color:#8c9eff!important}.indigo--text.text--accent-1{color:#8c9eff!important;caret-color:#8c9eff!important}.indigo.accent-2{background-color:#536dfe!important;border-color:#536dfe!important}.indigo--text.text--accent-2{color:#536dfe!important;caret-color:#536dfe!important}.indigo.accent-3{background-color:#3d5afe!important;border-color:#3d5afe!important}.indigo--text.text--accent-3{color:#3d5afe!important;caret-color:#3d5afe!important}.indigo.accent-4{background-color:#304ffe!important;border-color:#304ffe!important}.indigo--text.text--accent-4{color:#304ffe!important;caret-color:#304ffe!important}.blue{background-color:#2196f3!important;border-color:#2196f3!important}.blue--text{color:#2196f3!important;caret-color:#2196f3!important}.blue.lighten-5{background-color:#e3f2fd!important;border-color:#e3f2fd!important}.blue--text.text--lighten-5{color:#e3f2fd!important;caret-color:#e3f2fd!important}.blue.lighten-4{background-color:#bbdefb!important;border-color:#bbdefb!important}.blue--text.text--lighten-4{color:#bbdefb!important;caret-color:#bbdefb!important}.blue.lighten-3{background-color:#90caf9!important;border-color:#90caf9!important}.blue--text.text--lighten-3{color:#90caf9!important;caret-color:#90caf9!important}.blue.lighten-2{background-color:#64b5f6!important;border-color:#64b5f6!important}.blue--text.text--lighten-2{color:#64b5f6!important;caret-color:#64b5f6!important}.blue.lighten-1{background-color:#42a5f5!important;border-color:#42a5f5!important}.blue--text.text--lighten-1{color:#42a5f5!important;caret-color:#42a5f5!important}.blue.darken-1{background-color:#1e88e5!important;border-color:#1e88e5!important}.blue--text.text--darken-1{color:#1e88e5!important;caret-color:#1e88e5!important}.blue.darken-2{background-color:#1976d2!important;border-color:#1976d2!important}.blue--text.text--darken-2{color:#1976d2!important;caret-color:#1976d2!important}.blue.darken-3{background-color:#1565c0!important;border-color:#1565c0!important}.blue--text.text--darken-3{color:#1565c0!important;caret-color:#1565c0!important}.blue.darken-4{background-color:#0d47a1!important;border-color:#0d47a1!important}.blue--text.text--darken-4{color:#0d47a1!important;caret-color:#0d47a1!important}.blue.accent-1{background-color:#82b1ff!important;border-color:#82b1ff!important}.blue--text.text--accent-1{color:#82b1ff!important;caret-color:#82b1ff!important}.blue.accent-2{background-color:#448aff!important;border-color:#448aff!important}.blue--text.text--accent-2{color:#448aff!important;caret-color:#448aff!important}.blue.accent-3{background-color:#2979ff!important;border-color:#2979ff!important}.blue--text.text--accent-3{color:#2979ff!important;caret-color:#2979ff!important}.blue.accent-4{background-color:#2962ff!important;border-color:#2962ff!important}.blue--text.text--accent-4{color:#2962ff!important;caret-color:#2962ff!important}.light-blue{background-color:#03a9f4!important;border-color:#03a9f4!important}.light-blue--text{color:#03a9f4!important;caret-color:#03a9f4!important}.light-blue.lighten-5{background-color:#e1f5fe!important;border-color:#e1f5fe!important}.light-blue--text.text--lighten-5{color:#e1f5fe!important;caret-color:#e1f5fe!important}.light-blue.lighten-4{background-color:#b3e5fc!important;border-color:#b3e5fc!important}.light-blue--text.text--lighten-4{color:#b3e5fc!important;caret-color:#b3e5fc!important}.light-blue.lighten-3{background-color:#81d4fa!important;border-color:#81d4fa!important}.light-blue--text.text--lighten-3{color:#81d4fa!important;caret-color:#81d4fa!important}.light-blue.lighten-2{background-color:#4fc3f7!important;border-color:#4fc3f7!important}.light-blue--text.text--lighten-2{color:#4fc3f7!important;caret-color:#4fc3f7!important}.light-blue.lighten-1{background-color:#29b6f6!important;border-color:#29b6f6!important}.light-blue--text.text--lighten-1{color:#29b6f6!important;caret-color:#29b6f6!important}.light-blue.darken-1{background-color:#039be5!important;border-color:#039be5!important}.light-blue--text.text--darken-1{color:#039be5!important;caret-color:#039be5!important}.light-blue.darken-2{background-color:#0288d1!important;border-color:#0288d1!important}.light-blue--text.text--darken-2{color:#0288d1!important;caret-color:#0288d1!important}.light-blue.darken-3{background-color:#0277bd!important;border-color:#0277bd!important}.light-blue--text.text--darken-3{color:#0277bd!important;caret-color:#0277bd!important}.light-blue.darken-4{background-color:#01579b!important;border-color:#01579b!important}.light-blue--text.text--darken-4{color:#01579b!important;caret-color:#01579b!important}.light-blue.accent-1{background-color:#80d8ff!important;border-color:#80d8ff!important}.light-blue--text.text--accent-1{color:#80d8ff!important;caret-color:#80d8ff!important}.light-blue.accent-2{background-color:#40c4ff!important;border-color:#40c4ff!important}.light-blue--text.text--accent-2{color:#40c4ff!important;caret-color:#40c4ff!important}.light-blue.accent-3{background-color:#00b0ff!important;border-color:#00b0ff!important}.light-blue--text.text--accent-3{color:#00b0ff!important;caret-color:#00b0ff!important}.light-blue.accent-4{background-color:#0091ea!important;border-color:#0091ea!important}.light-blue--text.text--accent-4{color:#0091ea!important;caret-color:#0091ea!important}.cyan{background-color:#00bcd4!important;border-color:#00bcd4!important}.cyan--text{color:#00bcd4!important;caret-color:#00bcd4!important}.cyan.lighten-5{background-color:#e0f7fa!important;border-color:#e0f7fa!important}.cyan--text.text--lighten-5{color:#e0f7fa!important;caret-color:#e0f7fa!important}.cyan.lighten-4{background-color:#b2ebf2!important;border-color:#b2ebf2!important}.cyan--text.text--lighten-4{color:#b2ebf2!important;caret-color:#b2ebf2!important}.cyan.lighten-3{background-color:#80deea!important;border-color:#80deea!important}.cyan--text.text--lighten-3{color:#80deea!important;caret-color:#80deea!important}.cyan.lighten-2{background-color:#4dd0e1!important;border-color:#4dd0e1!important}.cyan--text.text--lighten-2{color:#4dd0e1!important;caret-color:#4dd0e1!important}.cyan.lighten-1{background-color:#26c6da!important;border-color:#26c6da!important}.cyan--text.text--lighten-1{color:#26c6da!important;caret-color:#26c6da!important}.cyan.darken-1{background-color:#00acc1!important;border-color:#00acc1!important}.cyan--text.text--darken-1{color:#00acc1!important;caret-color:#00acc1!important}.cyan.darken-2{background-color:#0097a7!important;border-color:#0097a7!important}.cyan--text.text--darken-2{color:#0097a7!important;caret-color:#0097a7!important}.cyan.darken-3{background-color:#00838f!important;border-color:#00838f!important}.cyan--text.text--darken-3{color:#00838f!important;caret-color:#00838f!important}.cyan.darken-4{background-color:#006064!important;border-color:#006064!important}.cyan--text.text--darken-4{color:#006064!important;caret-color:#006064!important}.cyan.accent-1{background-color:#84ffff!important;border-color:#84ffff!important}.cyan--text.text--accent-1{color:#84ffff!important;caret-color:#84ffff!important}.cyan.accent-2{background-color:#18ffff!important;border-color:#18ffff!important}.cyan--text.text--accent-2{color:#18ffff!important;caret-color:#18ffff!important}.cyan.accent-3{background-color:#00e5ff!important;border-color:#00e5ff!important}.cyan--text.text--accent-3{color:#00e5ff!important;caret-color:#00e5ff!important}.cyan.accent-4{background-color:#00b8d4!important;border-color:#00b8d4!important}.cyan--text.text--accent-4{color:#00b8d4!important;caret-color:#00b8d4!important}.teal{background-color:#009688!important;border-color:#009688!important}.teal--text{color:#009688!important;caret-color:#009688!important}.teal.lighten-5{background-color:#e0f2f1!important;border-color:#e0f2f1!important}.teal--text.text--lighten-5{color:#e0f2f1!important;caret-color:#e0f2f1!important}.teal.lighten-4{background-color:#b2dfdb!important;border-color:#b2dfdb!important}.teal--text.text--lighten-4{color:#b2dfdb!important;caret-color:#b2dfdb!important}.teal.lighten-3{background-color:#80cbc4!important;border-color:#80cbc4!important}.teal--text.text--lighten-3{color:#80cbc4!important;caret-color:#80cbc4!important}.teal.lighten-2{background-color:#4db6ac!important;border-color:#4db6ac!important}.teal--text.text--lighten-2{color:#4db6ac!important;caret-color:#4db6ac!important}.teal.lighten-1{background-color:#26a69a!important;border-color:#26a69a!important}.teal--text.text--lighten-1{color:#26a69a!important;caret-color:#26a69a!important}.teal.darken-1{background-color:#00897b!important;border-color:#00897b!important}.teal--text.text--darken-1{color:#00897b!important;caret-color:#00897b!important}.teal.darken-2{background-color:#00796b!important;border-color:#00796b!important}.teal--text.text--darken-2{color:#00796b!important;caret-color:#00796b!important}.teal.darken-3{background-color:#00695c!important;border-color:#00695c!important}.teal--text.text--darken-3{color:#00695c!important;caret-color:#00695c!important}.teal.darken-4{background-color:#004d40!important;border-color:#004d40!important}.teal--text.text--darken-4{color:#004d40!important;caret-color:#004d40!important}.teal.accent-1{background-color:#a7ffeb!important;border-color:#a7ffeb!important}.teal--text.text--accent-1{color:#a7ffeb!important;caret-color:#a7ffeb!important}.teal.accent-2{background-color:#64ffda!important;border-color:#64ffda!important}.teal--text.text--accent-2{color:#64ffda!important;caret-color:#64ffda!important}.teal.accent-3{background-color:#1de9b6!important;border-color:#1de9b6!important}.teal--text.text--accent-3{color:#1de9b6!important;caret-color:#1de9b6!important}.teal.accent-4{background-color:#00bfa5!important;border-color:#00bfa5!important}.teal--text.text--accent-4{color:#00bfa5!important;caret-color:#00bfa5!important}.green{background-color:#4caf50!important;border-color:#4caf50!important}.green--text{color:#4caf50!important;caret-color:#4caf50!important}.green.lighten-5{background-color:#e8f5e9!important;border-color:#e8f5e9!important}.green--text.text--lighten-5{color:#e8f5e9!important;caret-color:#e8f5e9!important}.green.lighten-4{background-color:#c8e6c9!important;border-color:#c8e6c9!important}.green--text.text--lighten-4{color:#c8e6c9!important;caret-color:#c8e6c9!important}.green.lighten-3{background-color:#a5d6a7!important;border-color:#a5d6a7!important}.green--text.text--lighten-3{color:#a5d6a7!important;caret-color:#a5d6a7!important}.green.lighten-2{background-color:#81c784!important;border-color:#81c784!important}.green--text.text--lighten-2{color:#81c784!important;caret-color:#81c784!important}.green.lighten-1{background-color:#66bb6a!important;border-color:#66bb6a!important}.green--text.text--lighten-1{color:#66bb6a!important;caret-color:#66bb6a!important}.green.darken-1{background-color:#43a047!important;border-color:#43a047!important}.green--text.text--darken-1{color:#43a047!important;caret-color:#43a047!important}.green.darken-2{background-color:#388e3c!important;border-color:#388e3c!important}.green--text.text--darken-2{color:#388e3c!important;caret-color:#388e3c!important}.green.darken-3{background-color:#2e7d32!important;border-color:#2e7d32!important}.green--text.text--darken-3{color:#2e7d32!important;caret-color:#2e7d32!important}.green.darken-4{background-color:#1b5e20!important;border-color:#1b5e20!important}.green--text.text--darken-4{color:#1b5e20!important;caret-color:#1b5e20!important}.green.accent-1{background-color:#b9f6ca!important;border-color:#b9f6ca!important}.green--text.text--accent-1{color:#b9f6ca!important;caret-color:#b9f6ca!important}.green.accent-2{background-color:#69f0ae!important;border-color:#69f0ae!important}.green--text.text--accent-2{color:#69f0ae!important;caret-color:#69f0ae!important}.green.accent-3{background-color:#00e676!important;border-color:#00e676!important}.green--text.text--accent-3{color:#00e676!important;caret-color:#00e676!important}.green.accent-4{background-color:#00c853!important;border-color:#00c853!important}.green--text.text--accent-4{color:#00c853!important;caret-color:#00c853!important}.light-green{background-color:#8bc34a!important;border-color:#8bc34a!important}.light-green--text{color:#8bc34a!important;caret-color:#8bc34a!important}.light-green.lighten-5{background-color:#f1f8e9!important;border-color:#f1f8e9!important}.light-green--text.text--lighten-5{color:#f1f8e9!important;caret-color:#f1f8e9!important}.light-green.lighten-4{background-color:#dcedc8!important;border-color:#dcedc8!important}.light-green--text.text--lighten-4{color:#dcedc8!important;caret-color:#dcedc8!important}.light-green.lighten-3{background-color:#c5e1a5!important;border-color:#c5e1a5!important}.light-green--text.text--lighten-3{color:#c5e1a5!important;caret-color:#c5e1a5!important}.light-green.lighten-2{background-color:#aed581!important;border-color:#aed581!important}.light-green--text.text--lighten-2{color:#aed581!important;caret-color:#aed581!important}.light-green.lighten-1{background-color:#9ccc65!important;border-color:#9ccc65!important}.light-green--text.text--lighten-1{color:#9ccc65!important;caret-color:#9ccc65!important}.light-green.darken-1{background-color:#7cb342!important;border-color:#7cb342!important}.light-green--text.text--darken-1{color:#7cb342!important;caret-color:#7cb342!important}.light-green.darken-2{background-color:#689f38!important;border-color:#689f38!important}.light-green--text.text--darken-2{color:#689f38!important;caret-color:#689f38!important}.light-green.darken-3{background-color:#558b2f!important;border-color:#558b2f!important}.light-green--text.text--darken-3{color:#558b2f!important;caret-color:#558b2f!important}.light-green.darken-4{background-color:#33691e!important;border-color:#33691e!important}.light-green--text.text--darken-4{color:#33691e!important;caret-color:#33691e!important}.light-green.accent-1{background-color:#ccff90!important;border-color:#ccff90!important}.light-green--text.text--accent-1{color:#ccff90!important;caret-color:#ccff90!important}.light-green.accent-2{background-color:#b2ff59!important;border-color:#b2ff59!important}.light-green--text.text--accent-2{color:#b2ff59!important;caret-color:#b2ff59!important}.light-green.accent-3{background-color:#76ff03!important;border-color:#76ff03!important}.light-green--text.text--accent-3{color:#76ff03!important;caret-color:#76ff03!important}.light-green.accent-4{background-color:#64dd17!important;border-color:#64dd17!important}.light-green--text.text--accent-4{color:#64dd17!important;caret-color:#64dd17!important}.lime{background-color:#cddc39!important;border-color:#cddc39!important}.lime--text{color:#cddc39!important;caret-color:#cddc39!important}.lime.lighten-5{background-color:#f9fbe7!important;border-color:#f9fbe7!important}.lime--text.text--lighten-5{color:#f9fbe7!important;caret-color:#f9fbe7!important}.lime.lighten-4{background-color:#f0f4c3!important;border-color:#f0f4c3!important}.lime--text.text--lighten-4{color:#f0f4c3!important;caret-color:#f0f4c3!important}.lime.lighten-3{background-color:#e6ee9c!important;border-color:#e6ee9c!important}.lime--text.text--lighten-3{color:#e6ee9c!important;caret-color:#e6ee9c!important}.lime.lighten-2{background-color:#dce775!important;border-color:#dce775!important}.lime--text.text--lighten-2{color:#dce775!important;caret-color:#dce775!important}.lime.lighten-1{background-color:#d4e157!important;border-color:#d4e157!important}.lime--text.text--lighten-1{color:#d4e157!important;caret-color:#d4e157!important}.lime.darken-1{background-color:#c0ca33!important;border-color:#c0ca33!important}.lime--text.text--darken-1{color:#c0ca33!important;caret-color:#c0ca33!important}.lime.darken-2{background-color:#afb42b!important;border-color:#afb42b!important}.lime--text.text--darken-2{color:#afb42b!important;caret-color:#afb42b!important}.lime.darken-3{background-color:#9e9d24!important;border-color:#9e9d24!important}.lime--text.text--darken-3{color:#9e9d24!important;caret-color:#9e9d24!important}.lime.darken-4{background-color:#827717!important;border-color:#827717!important}.lime--text.text--darken-4{color:#827717!important;caret-color:#827717!important}.lime.accent-1{background-color:#f4ff81!important;border-color:#f4ff81!important}.lime--text.text--accent-1{color:#f4ff81!important;caret-color:#f4ff81!important}.lime.accent-2{background-color:#eeff41!important;border-color:#eeff41!important}.lime--text.text--accent-2{color:#eeff41!important;caret-color:#eeff41!important}.lime.accent-3{background-color:#c6ff00!important;border-color:#c6ff00!important}.lime--text.text--accent-3{color:#c6ff00!important;caret-color:#c6ff00!important}.lime.accent-4{background-color:#aeea00!important;border-color:#aeea00!important}.lime--text.text--accent-4{color:#aeea00!important;caret-color:#aeea00!important}.yellow{background-color:#ffeb3b!important;border-color:#ffeb3b!important}.yellow--text{color:#ffeb3b!important;caret-color:#ffeb3b!important}.yellow.lighten-5{background-color:#fffde7!important;border-color:#fffde7!important}.yellow--text.text--lighten-5{color:#fffde7!important;caret-color:#fffde7!important}.yellow.lighten-4{background-color:#fff9c4!important;border-color:#fff9c4!important}.yellow--text.text--lighten-4{color:#fff9c4!important;caret-color:#fff9c4!important}.yellow.lighten-3{background-color:#fff59d!important;border-color:#fff59d!important}.yellow--text.text--lighten-3{color:#fff59d!important;caret-color:#fff59d!important}.yellow.lighten-2{background-color:#fff176!important;border-color:#fff176!important}.yellow--text.text--lighten-2{color:#fff176!important;caret-color:#fff176!important}.yellow.lighten-1{background-color:#ffee58!important;border-color:#ffee58!important}.yellow--text.text--lighten-1{color:#ffee58!important;caret-color:#ffee58!important}.yellow.darken-1{background-color:#fdd835!important;border-color:#fdd835!important}.yellow--text.text--darken-1{color:#fdd835!important;caret-color:#fdd835!important}.yellow.darken-2{background-color:#fbc02d!important;border-color:#fbc02d!important}.yellow--text.text--darken-2{color:#fbc02d!important;caret-color:#fbc02d!important}.yellow.darken-3{background-color:#f9a825!important;border-color:#f9a825!important}.yellow--text.text--darken-3{color:#f9a825!important;caret-color:#f9a825!important}.yellow.darken-4{background-color:#f57f17!important;border-color:#f57f17!important}.yellow--text.text--darken-4{color:#f57f17!important;caret-color:#f57f17!important}.yellow.accent-1{background-color:#ffff8d!important;border-color:#ffff8d!important}.yellow--text.text--accent-1{color:#ffff8d!important;caret-color:#ffff8d!important}.yellow.accent-2{background-color:#ff0!important;border-color:#ff0!important}.yellow--text.text--accent-2{color:#ff0!important;caret-color:#ff0!important}.yellow.accent-3{background-color:#ffea00!important;border-color:#ffea00!important}.yellow--text.text--accent-3{color:#ffea00!important;caret-color:#ffea00!important}.yellow.accent-4{background-color:#ffd600!important;border-color:#ffd600!important}.yellow--text.text--accent-4{color:#ffd600!important;caret-color:#ffd600!important}.amber{background-color:#ffc107!important;border-color:#ffc107!important}.amber--text{color:#ffc107!important;caret-color:#ffc107!important}.amber.lighten-5{background-color:#fff8e1!important;border-color:#fff8e1!important}.amber--text.text--lighten-5{color:#fff8e1!important;caret-color:#fff8e1!important}.amber.lighten-4{background-color:#ffecb3!important;border-color:#ffecb3!important}.amber--text.text--lighten-4{color:#ffecb3!important;caret-color:#ffecb3!important}.amber.lighten-3{background-color:#ffe082!important;border-color:#ffe082!important}.amber--text.text--lighten-3{color:#ffe082!important;caret-color:#ffe082!important}.amber.lighten-2{background-color:#ffd54f!important;border-color:#ffd54f!important}.amber--text.text--lighten-2{color:#ffd54f!important;caret-color:#ffd54f!important}.amber.lighten-1{background-color:#ffca28!important;border-color:#ffca28!important}.amber--text.text--lighten-1{color:#ffca28!important;caret-color:#ffca28!important}.amber.darken-1{background-color:#ffb300!important;border-color:#ffb300!important}.amber--text.text--darken-1{color:#ffb300!important;caret-color:#ffb300!important}.amber.darken-2{background-color:#ffa000!important;border-color:#ffa000!important}.amber--text.text--darken-2{color:#ffa000!important;caret-color:#ffa000!important}.amber.darken-3{background-color:#ff8f00!important;border-color:#ff8f00!important}.amber--text.text--darken-3{color:#ff8f00!important;caret-color:#ff8f00!important}.amber.darken-4{background-color:#ff6f00!important;border-color:#ff6f00!important}.amber--text.text--darken-4{color:#ff6f00!important;caret-color:#ff6f00!important}.amber.accent-1{background-color:#ffe57f!important;border-color:#ffe57f!important}.amber--text.text--accent-1{color:#ffe57f!important;caret-color:#ffe57f!important}.amber.accent-2{background-color:#ffd740!important;border-color:#ffd740!important}.amber--text.text--accent-2{color:#ffd740!important;caret-color:#ffd740!important}.amber.accent-3{background-color:#ffc400!important;border-color:#ffc400!important}.amber--text.text--accent-3{color:#ffc400!important;caret-color:#ffc400!important}.amber.accent-4{background-color:#ffab00!important;border-color:#ffab00!important}.amber--text.text--accent-4{color:#ffab00!important;caret-color:#ffab00!important}.orange{background-color:#ff9800!important;border-color:#ff9800!important}.orange--text{color:#ff9800!important;caret-color:#ff9800!important}.orange.lighten-5{background-color:#fff3e0!important;border-color:#fff3e0!important}.orange--text.text--lighten-5{color:#fff3e0!important;caret-color:#fff3e0!important}.orange.lighten-4{background-color:#ffe0b2!important;border-color:#ffe0b2!important}.orange--text.text--lighten-4{color:#ffe0b2!important;caret-color:#ffe0b2!important}.orange.lighten-3{background-color:#ffcc80!important;border-color:#ffcc80!important}.orange--text.text--lighten-3{color:#ffcc80!important;caret-color:#ffcc80!important}.orange.lighten-2{background-color:#ffb74d!important;border-color:#ffb74d!important}.orange--text.text--lighten-2{color:#ffb74d!important;caret-color:#ffb74d!important}.orange.lighten-1{background-color:#ffa726!important;border-color:#ffa726!important}.orange--text.text--lighten-1{color:#ffa726!important;caret-color:#ffa726!important}.orange.darken-1{background-color:#fb8c00!important;border-color:#fb8c00!important}.orange--text.text--darken-1{color:#fb8c00!important;caret-color:#fb8c00!important}.orange.darken-2{background-color:#f57c00!important;border-color:#f57c00!important}.orange--text.text--darken-2{color:#f57c00!important;caret-color:#f57c00!important}.orange.darken-3{background-color:#ef6c00!important;border-color:#ef6c00!important}.orange--text.text--darken-3{color:#ef6c00!important;caret-color:#ef6c00!important}.orange.darken-4{background-color:#e65100!important;border-color:#e65100!important}.orange--text.text--darken-4{color:#e65100!important;caret-color:#e65100!important}.orange.accent-1{background-color:#ffd180!important;border-color:#ffd180!important}.orange--text.text--accent-1{color:#ffd180!important;caret-color:#ffd180!important}.orange.accent-2{background-color:#ffab40!important;border-color:#ffab40!important}.orange--text.text--accent-2{color:#ffab40!important;caret-color:#ffab40!important}.orange.accent-3{background-color:#ff9100!important;border-color:#ff9100!important}.orange--text.text--accent-3{color:#ff9100!important;caret-color:#ff9100!important}.orange.accent-4{background-color:#ff6d00!important;border-color:#ff6d00!important}.orange--text.text--accent-4{color:#ff6d00!important;caret-color:#ff6d00!important}.deep-orange{background-color:#ff5722!important;border-color:#ff5722!important}.deep-orange--text{color:#ff5722!important;caret-color:#ff5722!important}.deep-orange.lighten-5{background-color:#fbe9e7!important;border-color:#fbe9e7!important}.deep-orange--text.text--lighten-5{color:#fbe9e7!important;caret-color:#fbe9e7!important}.deep-orange.lighten-4{background-color:#ffccbc!important;border-color:#ffccbc!important}.deep-orange--text.text--lighten-4{color:#ffccbc!important;caret-color:#ffccbc!important}.deep-orange.lighten-3{background-color:#ffab91!important;border-color:#ffab91!important}.deep-orange--text.text--lighten-3{color:#ffab91!important;caret-color:#ffab91!important}.deep-orange.lighten-2{background-color:#ff8a65!important;border-color:#ff8a65!important}.deep-orange--text.text--lighten-2{color:#ff8a65!important;caret-color:#ff8a65!important}.deep-orange.lighten-1{background-color:#ff7043!important;border-color:#ff7043!important}.deep-orange--text.text--lighten-1{color:#ff7043!important;caret-color:#ff7043!important}.deep-orange.darken-1{background-color:#f4511e!important;border-color:#f4511e!important}.deep-orange--text.text--darken-1{color:#f4511e!important;caret-color:#f4511e!important}.deep-orange.darken-2{background-color:#e64a19!important;border-color:#e64a19!important}.deep-orange--text.text--darken-2{color:#e64a19!important;caret-color:#e64a19!important}.deep-orange.darken-3{background-color:#d84315!important;border-color:#d84315!important}.deep-orange--text.text--darken-3{color:#d84315!important;caret-color:#d84315!important}.deep-orange.darken-4{background-color:#bf360c!important;border-color:#bf360c!important}.deep-orange--text.text--darken-4{color:#bf360c!important;caret-color:#bf360c!important}.deep-orange.accent-1{background-color:#ff9e80!important;border-color:#ff9e80!important}.deep-orange--text.text--accent-1{color:#ff9e80!important;caret-color:#ff9e80!important}.deep-orange.accent-2{background-color:#ff6e40!important;border-color:#ff6e40!important}.deep-orange--text.text--accent-2{color:#ff6e40!important;caret-color:#ff6e40!important}.deep-orange.accent-3{background-color:#ff3d00!important;border-color:#ff3d00!important}.deep-orange--text.text--accent-3{color:#ff3d00!important;caret-color:#ff3d00!important}.deep-orange.accent-4{background-color:#dd2c00!important;border-color:#dd2c00!important}.deep-orange--text.text--accent-4{color:#dd2c00!important;caret-color:#dd2c00!important}.brown{background-color:#795548!important;border-color:#795548!important}.brown--text{color:#795548!important;caret-color:#795548!important}.brown.lighten-5{background-color:#efebe9!important;border-color:#efebe9!important}.brown--text.text--lighten-5{color:#efebe9!important;caret-color:#efebe9!important}.brown.lighten-4{background-color:#d7ccc8!important;border-color:#d7ccc8!important}.brown--text.text--lighten-4{color:#d7ccc8!important;caret-color:#d7ccc8!important}.brown.lighten-3{background-color:#bcaaa4!important;border-color:#bcaaa4!important}.brown--text.text--lighten-3{color:#bcaaa4!important;caret-color:#bcaaa4!important}.brown.lighten-2{background-color:#a1887f!important;border-color:#a1887f!important}.brown--text.text--lighten-2{color:#a1887f!important;caret-color:#a1887f!important}.brown.lighten-1{background-color:#8d6e63!important;border-color:#8d6e63!important}.brown--text.text--lighten-1{color:#8d6e63!important;caret-color:#8d6e63!important}.brown.darken-1{background-color:#6d4c41!important;border-color:#6d4c41!important}.brown--text.text--darken-1{color:#6d4c41!important;caret-color:#6d4c41!important}.brown.darken-2{background-color:#5d4037!important;border-color:#5d4037!important}.brown--text.text--darken-2{color:#5d4037!important;caret-color:#5d4037!important}.brown.darken-3{background-color:#4e342e!important;border-color:#4e342e!important}.brown--text.text--darken-3{color:#4e342e!important;caret-color:#4e342e!important}.brown.darken-4{background-color:#3e2723!important;border-color:#3e2723!important}.brown--text.text--darken-4{color:#3e2723!important;caret-color:#3e2723!important}.blue-grey{background-color:#607d8b!important;border-color:#607d8b!important}.blue-grey--text{color:#607d8b!important;caret-color:#607d8b!important}.blue-grey.lighten-5{background-color:#eceff1!important;border-color:#eceff1!important}.blue-grey--text.text--lighten-5{color:#eceff1!important;caret-color:#eceff1!important}.blue-grey.lighten-4{background-color:#cfd8dc!important;border-color:#cfd8dc!important}.blue-grey--text.text--lighten-4{color:#cfd8dc!important;caret-color:#cfd8dc!important}.blue-grey.lighten-3{background-color:#b0bec5!important;border-color:#b0bec5!important}.blue-grey--text.text--lighten-3{color:#b0bec5!important;caret-color:#b0bec5!important}.blue-grey.lighten-2{background-color:#90a4ae!important;border-color:#90a4ae!important}.blue-grey--text.text--lighten-2{color:#90a4ae!important;caret-color:#90a4ae!important}.blue-grey.lighten-1{background-color:#78909c!important;border-color:#78909c!important}.blue-grey--text.text--lighten-1{color:#78909c!important;caret-color:#78909c!important}.blue-grey.darken-1{background-color:#546e7a!important;border-color:#546e7a!important}.blue-grey--text.text--darken-1{color:#546e7a!important;caret-color:#546e7a!important}.blue-grey.darken-2{background-color:#455a64!important;border-color:#455a64!important}.blue-grey--text.text--darken-2{color:#455a64!important;caret-color:#455a64!important}.blue-grey.darken-3{background-color:#37474f!important;border-color:#37474f!important}.blue-grey--text.text--darken-3{color:#37474f!important;caret-color:#37474f!important}.blue-grey.darken-4{background-color:#263238!important;border-color:#263238!important}.blue-grey--text.text--darken-4{color:#263238!important;caret-color:#263238!important}.grey{background-color:#9e9e9e!important;border-color:#9e9e9e!important}.grey--text{color:#9e9e9e!important;caret-color:#9e9e9e!important}.grey.lighten-5{background-color:#fafafa!important;border-color:#fafafa!important}.grey--text.text--lighten-5{color:#fafafa!important;caret-color:#fafafa!important}.grey.lighten-4{background-color:#f5f5f5!important;border-color:#f5f5f5!important}.grey--text.text--lighten-4{color:#f5f5f5!important;caret-color:#f5f5f5!important}.grey.lighten-3{background-color:#eee!important;border-color:#eee!important}.grey--text.text--lighten-3{color:#eee!important;caret-color:#eee!important}.grey.lighten-2{background-color:#e0e0e0!important;border-color:#e0e0e0!important}.grey--text.text--lighten-2{color:#e0e0e0!important;caret-color:#e0e0e0!important}.grey.lighten-1{background-color:#bdbdbd!important;border-color:#bdbdbd!important}.grey--text.text--lighten-1{color:#bdbdbd!important;caret-color:#bdbdbd!important}.grey.darken-1{background-color:#757575!important;border-color:#757575!important}.grey--text.text--darken-1{color:#757575!important;caret-color:#757575!important}.grey.darken-2{background-color:#616161!important;border-color:#616161!important}.grey--text.text--darken-2{color:#616161!important;caret-color:#616161!important}.grey.darken-3{background-color:#424242!important;border-color:#424242!important}.grey--text.text--darken-3{color:#424242!important;caret-color:#424242!important}.grey.darken-4{background-color:#212121!important;border-color:#212121!important}.grey--text.text--darken-4{color:#212121!important;caret-color:#212121!important}.shades.black{background-color:#000!important;border-color:#000!important}.shades--text.text--black{color:#000!important;caret-color:#000!important}.shades.white{background-color:#fff!important;border-color:#fff!important}.shades--text.text--white{color:#fff!important;caret-color:#fff!important}.shades.transparent{background-color:transparent!important;border-color:transparent!important}.shades--text.text--transparent{color:transparent!important;caret-color:transparent!important}.elevation-0{box-shadow:0 0 0 0 rgba(0,0,0,.2),0 0 0 0 rgba(0,0,0,.14),0 0 0 0 rgba(0,0,0,.12)!important}.elevation-1{box-shadow:0 2px 1px -1px rgba(0,0,0,.2),0 1px 1px 0 rgba(0,0,0,.14),0 1px 3px 0 rgba(0,0,0,.12)!important}.elevation-2{box-shadow:0 3px 1px -2px rgba(0,0,0,.2),0 2px 2px 0 rgba(0,0,0,.14),0 1px 5px 0 rgba(0,0,0,.12)!important}.elevation-3{box-shadow:0 3px 3px -2px rgba(0,0,0,.2),0 3px 4px 0 rgba(0,0,0,.14),0 1px 8px 0 rgba(0,0,0,.12)!important}.elevation-4{box-shadow:0 2px 4px -1px rgba(0,0,0,.2),0 4px 5px 0 rgba(0,0,0,.14),0 1px 10px 0 rgba(0,0,0,.12)!important}.elevation-5{box-shadow:0 3px 5px -1px rgba(0,0,0,.2),0 5px 8px 0 rgba(0,0,0,.14),0 1px 14px 0 rgba(0,0,0,.12)!important}.elevation-6{box-shadow:0 3px 5px -1px rgba(0,0,0,.2),0 6px 10px 0 rgba(0,0,0,.14),0 1px 18px 0 rgba(0,0,0,.12)!important}.elevation-7{box-shadow:0 4px 5px -2px rgba(0,0,0,.2),0 7px 10px 1px rgba(0,0,0,.14),0 2px 16px 1px rgba(0,0,0,.12)!important}.elevation-8{box-shadow:0 5px 5px -3px rgba(0,0,0,.2),0 8px 10px 1px rgba(0,0,0,.14),0 3px 14px 2px rgba(0,0,0,.12)!important}.elevation-9{box-shadow:0 5px 6px -3px rgba(0,0,0,.2),0 9px 12px 1px rgba(0,0,0,.14),0 3px 16px 2px rgba(0,0,0,.12)!important}.elevation-10{box-shadow:0 6px 6px -3px rgba(0,0,0,.2),0 10px 14px 1px rgba(0,0,0,.14),0 4px 18px 3px rgba(0,0,0,.12)!important}.elevation-11{box-shadow:0 6px 7px -4px rgba(0,0,0,.2),0 11px 15px 1px rgba(0,0,0,.14),0 4px 20px 3px rgba(0,0,0,.12)!important}.elevation-12{box-shadow:0 7px 8px -4px rgba(0,0,0,.2),0 12px 17px 2px rgba(0,0,0,.14),0 5px 22px 4px rgba(0,0,0,.12)!important}.elevation-13{box-shadow:0 7px 8px -4px rgba(0,0,0,.2),0 13px 19px 2px rgba(0,0,0,.14),0 5px 24px 4px rgba(0,0,0,.12)!important}.elevation-14{box-shadow:0 7px 9px -4px rgba(0,0,0,.2),0 14px 21px 2px rgba(0,0,0,.14),0 5px 26px 4px rgba(0,0,0,.12)!important}.elevation-15{box-shadow:0 8px 9px -5px rgba(0,0,0,.2),0 15px 22px 2px rgba(0,0,0,.14),0 6px 28px 5px rgba(0,0,0,.12)!important}.elevation-16{box-shadow:0 8px 10px -5px rgba(0,0,0,.2),0 16px 24px 2px rgba(0,0,0,.14),0 6px 30px 5px rgba(0,0,0,.12)!important}.elevation-17{box-shadow:0 8px 11px -5px rgba(0,0,0,.2),0 17px 26px 2px rgba(0,0,0,.14),0 6px 32px 5px rgba(0,0,0,.12)!important}.elevation-18{box-shadow:0 9px 11px -5px rgba(0,0,0,.2),0 18px 28px 2px rgba(0,0,0,.14),0 7px 34px 6px rgba(0,0,0,.12)!important}.elevation-19{box-shadow:0 9px 12px -6px rgba(0,0,0,.2),0 19px 29px 2px rgba(0,0,0,.14),0 7px 36px 6px rgba(0,0,0,.12)!important}.elevation-20{box-shadow:0 10px 13px -6px rgba(0,0,0,.2),0 20px 31px 3px rgba(0,0,0,.14),0 8px 38px 7px rgba(0,0,0,.12)!important}.elevation-21{box-shadow:0 10px 13px -6px rgba(0,0,0,.2),0 21px 33px 3px rgba(0,0,0,.14),0 8px 40px 7px rgba(0,0,0,.12)!important}.elevation-22{box-shadow:0 10px 14px -6px rgba(0,0,0,.2),0 22px 35px 3px rgba(0,0,0,.14),0 8px 42px 7px rgba(0,0,0,.12)!important}.elevation-23{box-shadow:0 11px 14px -7px rgba(0,0,0,.2),0 23px 36px 3px rgba(0,0,0,.14),0 9px 44px 8px rgba(0,0,0,.12)!important}.elevation-24{box-shadow:0 11px 15px -7px rgba(0,0,0,.2),0 24px 38px 3px rgba(0,0,0,.14),0 9px 46px 8px rgba(0,0,0,.12)!important}html{box-sizing:border-box;overflow-y:scroll;-webkit-text-size-adjust:100%}*,:after,:before{box-sizing:inherit}:after,:before{text-decoration:inherit;vertical-align:inherit}*{background-repeat:no-repeat;padding:0;margin:0}audio:not([controls]){display:none;height:0}hr{overflow:visible}article,aside,details,figcaption,figure,footer,header,main,menu,nav,section,summary{display:block}summary{display:list-item}small{font-size:80%}[hidden],template{display:none}abbr[title]{border-bottom:1px dotted;text-decoration:none}a{background-color:transparent;-webkit-text-decoration-skip:objects}a:active,a:hover{outline-width:0}code,kbd,pre,samp{font-family:monospace,monospace}b,strong{font-weight:bolder}dfn{font-style:italic}mark{background-color:#ff0;color:#000}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-.25em}sup{top:-.5em}input{border-radius:0}[role=button],[type=button],[type=reset],[type=submit],button{cursor:pointer}[disabled]{cursor:default}[type=number]{width:auto}[type=search]::-webkit-search-cancel-button,[type=search]::-webkit-search-decoration{-webkit-appearance:none}textarea{overflow:auto;resize:vertical}button,input,optgroup,select,textarea{font:inherit}optgroup{font-weight:700}button{overflow:visible}[type=button]::-moz-focus-inner,[type=reset]::-moz-focus-inner,[type=submit]::-moz-focus-inner,button::-moz-focus-inner{border-style:0;padding:0}[type=button]::-moz-focus-inner,[type=reset]::-moz-focus-inner,[type=submit]::-moz-focus-inner,button:-moz-focusring{outline:0;border:0}[type=reset],[type=submit],button,html [type=button]{-webkit-appearance:button}button,select{text-transform:none}button,input,select,textarea{background-color:transparent;border-style:none;color:inherit}select{-moz-appearance:none;-webkit-appearance:none}select::-ms-expand{display:none}select::-ms-value{color:currentColor}legend{border:0;color:inherit;display:table;max-width:100%;white-space:normal}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}[type=search]{-webkit-appearance:textfield;outline-offset:-2px}img{border-style:none}progress{vertical-align:baseline}svg:not(:root){overflow:hidden}audio,canvas,progress,video{display:inline-block}[aria-busy=true]{cursor:progress}[aria-controls]{cursor:pointer}[aria-disabled]{cursor:default}::-moz-selection{background-color:#b3d4fc;color:#000;text-shadow:none}::selection{background-color:#b3d4fc;color:#000;text-shadow:none}.bottom-sheet-transition-enter,.bottom-sheet-transition-leave-to{-webkit-transform:translateY(100%);transform:translateY(100%)}.carousel-transition-enter{-webkit-transform:translate(100%);transform:translate(100%)}.carousel-transition-leave,.carousel-transition-leave-to{position:absolute;top:0}.carousel-reverse-transition-enter,.carousel-transition-leave,.carousel-transition-leave-to{-webkit-transform:translate(-100%);transform:translate(-100%)}.carousel-reverse-transition-leave,.carousel-reverse-transition-leave-to{position:absolute;top:0;-webkit-transform:translate(100%);transform:translate(100%)}.dialog-transition-enter,.dialog-transition-leave-to{-webkit-transform:scale(.5);transform:scale(.5);opacity:0}.dialog-transition-enter-to,.dialog-transition-leave{opacity:1}.dialog-bottom-transition-enter,.dialog-bottom-transition-leave-to{-webkit-transform:translateY(100%);transform:translateY(100%)}.picker-reverse-transition-enter-active,.picker-reverse-transition-leave-active,.picker-transition-enter-active,.picker-transition-leave-active{transition:.3s cubic-bezier(0,0,.2,1)}.picker-reverse-transition-enter,.picker-reverse-transition-leave-to,.picker-transition-enter,.picker-transition-leave-to{opacity:0}.picker-reverse-transition-leave,.picker-reverse-transition-leave-active,.picker-reverse-transition-leave-to,.picker-transition-leave,.picker-transition-leave-active,.picker-transition-leave-to{position:absolute!important}.picker-transition-enter{-webkit-transform:translateY(100%);transform:translateY(100%)}.picker-reverse-transition-enter,.picker-transition-leave-to{-webkit-transform:translateY(-100%);transform:translateY(-100%)}.picker-reverse-transition-leave-to{-webkit-transform:translateY(100%);transform:translateY(100%)}.picker-title-transition-enter-to,.picker-title-transition-leave{-webkit-transform:translate(0);transform:translate(0)}.picker-title-transition-enter{-webkit-transform:translate(-100%);transform:translate(-100%)}.picker-title-transition-leave-to{opacity:0;-webkit-transform:translate(100%);transform:translate(100%)}.picker-title-transition-leave,.picker-title-transition-leave-active,.picker-title-transition-leave-to{position:absolute!important}.tab-transition-enter{-webkit-transform:translate(100%);transform:translate(100%)}.tab-transition-leave,.tab-transition-leave-active{position:absolute;top:0}.tab-transition-leave-to{position:absolute}.tab-reverse-transition-enter,.tab-transition-leave-to{-webkit-transform:translate(-100%);transform:translate(-100%)}.tab-reverse-transition-leave,.tab-reverse-transition-leave-to{top:0;position:absolute;-webkit-transform:translate(100%);transform:translate(100%)}.expand-transition-enter-active,.expand-transition-leave-active{transition:.3s cubic-bezier(.25,.8,.5,1)}.expand-transition-move{transition:-webkit-transform .6s;transition:transform .6s;transition:transform .6s,-webkit-transform .6s}.expand-x-transition-enter-active,.expand-x-transition-leave-active{transition:.3s cubic-bezier(.25,.8,.5,1)}.expand-x-transition-move{transition:-webkit-transform .6s;transition:transform .6s;transition:transform .6s,-webkit-transform .6s}.scale-transition-enter-active,.scale-transition-leave-active{transition:.3s cubic-bezier(.25,.8,.5,1)}.scale-transition-move{transition:-webkit-transform .6s;transition:transform .6s;transition:transform .6s,-webkit-transform .6s}.scale-transition-enter,.scale-transition-leave,.scale-transition-leave-to{opacity:0;-webkit-transform:scale(0);transform:scale(0)}.message-transition-enter-active,.message-transition-leave-active{transition:.3s cubic-bezier(.25,.8,.5,1)}.message-transition-move{transition:-webkit-transform .6s;transition:transform .6s;transition:transform .6s,-webkit-transform .6s}.message-transition-enter,.message-transition-leave-to{opacity:0;-webkit-transform:translateY(-15px);transform:translateY(-15px)}.message-transition-leave,.message-transition-leave-active{position:absolute}.slide-y-transition-enter-active,.slide-y-transition-leave-active{transition:.3s cubic-bezier(.25,.8,.5,1)}.slide-y-transition-move{transition:-webkit-transform .6s;transition:transform .6s;transition:transform .6s,-webkit-transform .6s}.slide-y-transition-enter,.slide-y-transition-leave-to{opacity:0;-webkit-transform:translateY(-15px);transform:translateY(-15px)}.slide-y-reverse-transition-enter-active,.slide-y-reverse-transition-leave-active{transition:.3s cubic-bezier(.25,.8,.5,1)}.slide-y-reverse-transition-move{transition:-webkit-transform .6s;transition:transform .6s;transition:transform .6s,-webkit-transform .6s}.slide-y-reverse-transition-enter,.slide-y-reverse-transition-leave-to{opacity:0;-webkit-transform:translateY(15px);transform:translateY(15px)}.scroll-y-transition-enter-active,.scroll-y-transition-leave-active{transition:.3s cubic-bezier(.25,.8,.5,1)}.scroll-y-transition-move{transition:-webkit-transform .6s;transition:transform .6s;transition:transform .6s,-webkit-transform .6s}.scroll-y-transition-enter,.scroll-y-transition-leave-to{opacity:0}.scroll-y-transition-enter{-webkit-transform:translateY(-15px);transform:translateY(-15px)}.scroll-y-transition-leave-to{-webkit-transform:translateY(15px);transform:translateY(15px)}.scroll-y-reverse-transition-enter-active,.scroll-y-reverse-transition-leave-active{transition:.3s cubic-bezier(.25,.8,.5,1)}.scroll-y-reverse-transition-move{transition:-webkit-transform .6s;transition:transform .6s;transition:transform .6s,-webkit-transform .6s}.scroll-y-reverse-transition-enter,.scroll-y-reverse-transition-leave-to{opacity:0}.scroll-y-reverse-transition-enter{-webkit-transform:translateY(15px);transform:translateY(15px)}.scroll-y-reverse-transition-leave-to{-webkit-transform:translateY(-15px);transform:translateY(-15px)}.scroll-x-transition-enter-active,.scroll-x-transition-leave-active{transition:.3s cubic-bezier(.25,.8,.5,1)}.scroll-x-transition-move{transition:-webkit-transform .6s;transition:transform .6s;transition:transform .6s,-webkit-transform .6s}.scroll-x-transition-enter,.scroll-x-transition-leave-to{opacity:0}.scroll-x-transition-enter{-webkit-transform:translateX(-15px);transform:translateX(-15px)}.scroll-x-transition-leave-to{-webkit-transform:translateX(15px);transform:translateX(15px)}.scroll-x-reverse-transition-enter-active,.scroll-x-reverse-transition-leave-active{transition:.3s cubic-bezier(.25,.8,.5,1)}.scroll-x-reverse-transition-move{transition:-webkit-transform .6s;transition:transform .6s;transition:transform .6s,-webkit-transform .6s}.scroll-x-reverse-transition-enter,.scroll-x-reverse-transition-leave-to{opacity:0}.scroll-x-reverse-transition-enter{-webkit-transform:translateX(15px);transform:translateX(15px)}.scroll-x-reverse-transition-leave-to{-webkit-transform:translateX(-15px);transform:translateX(-15px)}.slide-x-transition-enter-active,.slide-x-transition-leave-active{transition:.3s cubic-bezier(.25,.8,.5,1)}.slide-x-transition-move{transition:-webkit-transform .6s;transition:transform .6s;transition:transform .6s,-webkit-transform .6s}.slide-x-transition-enter,.slide-x-transition-leave-to{opacity:0;-webkit-transform:translateX(-15px);transform:translateX(-15px)}.slide-x-reverse-transition-enter-active,.slide-x-reverse-transition-leave-active{transition:.3s cubic-bezier(.25,.8,.5,1)}.slide-x-reverse-transition-move{transition:-webkit-transform .6s;transition:transform .6s;transition:transform .6s,-webkit-transform .6s}.slide-x-reverse-transition-enter,.slide-x-reverse-transition-leave-to{opacity:0;-webkit-transform:translateX(15px);transform:translateX(15px)}.fade-transition-enter-active,.fade-transition-leave-active{transition:.3s cubic-bezier(.25,.8,.5,1)}.fade-transition-move{transition:-webkit-transform .6s;transition:transform .6s;transition:transform .6s,-webkit-transform .6s}.fade-transition-enter,.fade-transition-leave-to{opacity:0}.fab-transition-enter-active,.fab-transition-leave-active{transition:.3s cubic-bezier(.25,.8,.5,1)}.fab-transition-move{transition:-webkit-transform .6s;transition:transform .6s;transition:transform .6s,-webkit-transform .6s}.fab-transition-enter,.fab-transition-leave-to{-webkit-transform:scale(0) rotate(-45deg);transform:scale(0) rotate(-45deg)}.blockquote{padding:16px 0 16px 24px;font-size:18px;font-weight:300}code,kbd{display:inline-block;border-radius:3px;white-space:pre-wrap;font-size:85%;font-weight:900}code:after,code:before,kbd:after,kbd:before{content:\"\\A0\";letter-spacing:-1px}code{background-color:#f5f5f5;color:#bd4147;box-shadow:0 2px 1px -1px rgba(0,0,0,.2),0 1px 1px 0 rgba(0,0,0,.14),0 1px 3px 0 rgba(0,0,0,.12)}kbd{background:#616161;color:#fff}html{font-size:14px;overflow-x:hidden;text-rendering:optimizeLegibility;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;-webkit-tap-highlight-color:rgba(0,0,0,0)}.application{font-family:Roboto,sans-serif;line-height:1.5}::-ms-clear,::-ms-reveal{display:none}ol,ul{padding-left:24px}.display-4{font-size:112px!important;font-weight:300;line-height:1!important;letter-spacing:-.04em!important;font-family:Roboto,sans-serif!important}.display-3{font-size:56px!important;line-height:1.35!important;letter-spacing:-.02em!important}.display-2,.display-3{font-weight:400;font-family:Roboto,sans-serif!important}.display-2{font-size:45px!important;line-height:48px!important;letter-spacing:normal!important}.display-1{font-size:34px!important;line-height:40px!important}.display-1,.headline{font-weight:400;letter-spacing:normal!important;font-family:Roboto,sans-serif!important}.headline{font-size:24px!important;line-height:32px!important}.title{font-size:20px!important;font-weight:500;line-height:1!important;letter-spacing:.02em!important;font-family:Roboto,sans-serif!important}.subheading{font-size:16px!important;font-weight:400}.body-2{font-weight:500}.body-1,.body-2{font-size:14px!important}.body-1,.caption{font-weight:400}.caption{font-size:12px!important}p{margin-bottom:16px}.overflow-hidden{overflow:hidden}.overflow-x-hidden{overflow-x:hidden}.overflow-y-hidden{overflow-y:hidden}.right{float:right!important}.left{float:left!important}.ma-auto{margin:auto!important}.my-auto{margin-top:auto!important;margin-bottom:auto!important}.mx-auto{margin-left:auto!important;margin-right:auto!important}.mt-auto{margin-top:auto!important}.mr-auto{margin-right:auto!important}.mb-auto{margin-bottom:auto!important}.ml-auto{margin-left:auto!important}.ma-0{margin:0!important}.my-0{margin-top:0!important;margin-bottom:0!important}.mx-0{margin-left:0!important;margin-right:0!important}.mt-0{margin-top:0!important}.mr-0{margin-right:0!important}.mb-0{margin-bottom:0!important}.ml-0{margin-left:0!important}.pa-0{padding:0!important}.py-0{padding-top:0!important;padding-bottom:0!important}.px-0{padding-left:0!important;padding-right:0!important}.pt-0{padding-top:0!important}.pr-0{padding-right:0!important}.pb-0{padding-bottom:0!important}.pl-0{padding-left:0!important}.ma-1{margin:4px!important}.my-1{margin-top:4px!important;margin-bottom:4px!important}.mx-1{margin-left:4px!important;margin-right:4px!important}.mt-1{margin-top:4px!important}.mr-1{margin-right:4px!important}.mb-1{margin-bottom:4px!important}.ml-1{margin-left:4px!important}.pa-1{padding:4px!important}.py-1{padding-top:4px!important;padding-bottom:4px!important}.px-1{padding-left:4px!important;padding-right:4px!important}.pt-1{padding-top:4px!important}.pr-1{padding-right:4px!important}.pb-1{padding-bottom:4px!important}.pl-1{padding-left:4px!important}.ma-2{margin:8px!important}.my-2{margin-top:8px!important;margin-bottom:8px!important}.mx-2{margin-left:8px!important;margin-right:8px!important}.mt-2{margin-top:8px!important}.mr-2{margin-right:8px!important}.mb-2{margin-bottom:8px!important}.ml-2{margin-left:8px!important}.pa-2{padding:8px!important}.py-2{padding-top:8px!important;padding-bottom:8px!important}.px-2{padding-left:8px!important;padding-right:8px!important}.pt-2{padding-top:8px!important}.pr-2{padding-right:8px!important}.pb-2{padding-bottom:8px!important}.pl-2{padding-left:8px!important}.ma-3{margin:16px!important}.my-3{margin-top:16px!important;margin-bottom:16px!important}.mx-3{margin-left:16px!important;margin-right:16px!important}.mt-3{margin-top:16px!important}.mr-3{margin-right:16px!important}.mb-3{margin-bottom:16px!important}.ml-3{margin-left:16px!important}.pa-3{padding:16px!important}.py-3{padding-top:16px!important;padding-bottom:16px!important}.px-3{padding-left:16px!important;padding-right:16px!important}.pt-3{padding-top:16px!important}.pr-3{padding-right:16px!important}.pb-3{padding-bottom:16px!important}.pl-3{padding-left:16px!important}.ma-4{margin:24px!important}.my-4{margin-top:24px!important;margin-bottom:24px!important}.mx-4{margin-left:24px!important;margin-right:24px!important}.mt-4{margin-top:24px!important}.mr-4{margin-right:24px!important}.mb-4{margin-bottom:24px!important}.ml-4{margin-left:24px!important}.pa-4{padding:24px!important}.py-4{padding-top:24px!important;padding-bottom:24px!important}.px-4{padding-left:24px!important;padding-right:24px!important}.pt-4{padding-top:24px!important}.pr-4{padding-right:24px!important}.pb-4{padding-bottom:24px!important}.pl-4{padding-left:24px!important}.ma-5{margin:48px!important}.my-5{margin-top:48px!important;margin-bottom:48px!important}.mx-5{margin-left:48px!important;margin-right:48px!important}.mt-5{margin-top:48px!important}.mr-5{margin-right:48px!important}.mb-5{margin-bottom:48px!important}.ml-5{margin-left:48px!important}.pa-5{padding:48px!important}.py-5{padding-top:48px!important;padding-bottom:48px!important}.px-5{padding-left:48px!important;padding-right:48px!important}.pt-5{padding-top:48px!important}.pr-5{padding-right:48px!important}.pb-5{padding-bottom:48px!important}.pl-5{padding-left:48px!important}.font-weight-thin{font-weight:100!important}.font-weight-light{font-weight:300!important}.font-weight-regular{font-weight:400!important}.font-weight-medium{font-weight:500!important}.font-weight-bold{font-weight:700!important}.font-weight-black{font-weight:900!important}.font-italic{font-style:italic!important}.text-capitalize{text-transform:capitalize!important}.text-lowercase{text-transform:lowercase!important}.text-none{text-transform:none!important}.text-uppercase{text-transform:uppercase!important}.text-no-wrap,.text-truncate{white-space:nowrap!important}.text-truncate{overflow:hidden!important;text-overflow:ellipsis!important}.transition-fast-out-slow-in{transition:.3s cubic-bezier(.4,0,.2,1)!important}.transition-linear-out-slow-in{transition:.3s cubic-bezier(0,0,.2,1)!important}.transition-fast-out-linear-in{transition:.3s cubic-bezier(.4,0,1,1)!important}.transition-ease-in-out{transition:.3s cubic-bezier(.4,0,.6,1)!important}.transition-fast-in-fast-out{transition:.3s cubic-bezier(.25,.8,.25,1)!important}.transition-swing{transition:.3s cubic-bezier(.25,.8,.5,1)!important}@media screen{[hidden~=screen]{display:inherit}[hidden~=screen]:not(:active):not(:focus):not(:target){position:absolute!important;clip:rect(0 0 0 0)!important}}@media only print{.hidden-print-only{display:none!important}}@media only screen{.hidden-screen-only{display:none!important}}@media only screen and (max-width:599px){.hidden-xs-only{display:none!important}}@media only screen and (min-width:600px) and (max-width:959px){.hidden-sm-only{display:none!important}}@media only screen and (max-width:959px){.hidden-sm-and-down{display:none!important}}@media only screen and (min-width:600px){.hidden-sm-and-up{display:none!important}}@media only screen and (min-width:960px) and (max-width:1263px){.hidden-md-only{display:none!important}}@media only screen and (max-width:1263px){.hidden-md-and-down{display:none!important}}@media only screen and (min-width:960px){.hidden-md-and-up{display:none!important}}@media only screen and (min-width:1264px) and (max-width:1903px){.hidden-lg-only{display:none!important}}@media only screen and (max-width:1903px){.hidden-lg-and-down{display:none!important}}@media only screen and (min-width:1264px){.hidden-lg-and-up{display:none!important}}@media only screen and (min-width:1904px){.hidden-xl-only{display:none!important}}@media (min-width:0){.text-xs-left{text-align:left!important}.text-xs-center{text-align:center!important}.text-xs-right{text-align:right!important}.text-xs-justify{text-align:justify!important}}@media (min-width:600px){.text-sm-left{text-align:left!important}.text-sm-center{text-align:center!important}.text-sm-right{text-align:right!important}.text-sm-justify{text-align:justify!important}}@media (min-width:960px){.text-md-left{text-align:left!important}.text-md-center{text-align:center!important}.text-md-right{text-align:right!important}.text-md-justify{text-align:justify!important}}@media (min-width:1264px){.text-lg-left{text-align:left!important}.text-lg-center{text-align:center!important}.text-lg-right{text-align:right!important}.text-lg-justify{text-align:justify!important}}@media (min-width:1904px){.text-xl-left{text-align:left!important}.text-xl-center{text-align:center!important}.text-xl-right{text-align:right!important}.text-xl-justify{text-align:justify!important}}.application{display:flex}.application a{cursor:pointer}.application--is-rtl{direction:rtl}.application--wrap{flex:1 1 auto;-webkit-backface-visibility:hidden;backface-visibility:hidden;display:flex;flex-direction:column;min-height:100vh;max-width:100%;position:relative}.theme--light.application{background:#fafafa;color:rgba(0,0,0,.87)}.theme--light.application .text--primary{color:rgba(0,0,0,.87)!important}.theme--light.application .text--secondary{color:rgba(0,0,0,.54)!important}.theme--light.application .text--disabled{color:rgba(0,0,0,.38)!important}.theme--dark.application{background:#303030;color:#fff}.theme--dark.application .text--primary{color:#fff!important}.theme--dark.application .text--secondary{color:hsla(0,0%,100%,.7)!important}.theme--dark.application .text--disabled{color:hsla(0,0%,100%,.5)!important}@media print{@-moz-document url-prefix(){.application,.application--wrap{display:block}}}.v-alert{border-radius:0;border-width:4px 0 0;border-style:solid;color:#fff;display:flex;font-size:14px;margin:4px auto;padding:16px;position:relative;transition:.3s cubic-bezier(.25,.8,.5,1)}.v-alert .v-alert__icon.v-icon,.v-alert__dismissible .v-icon{align-self:center;color:rgba(0,0,0,.3);font-size:24px}.v-alert--outline .v-icon{color:inherit!important}.v-alert__icon{margin-right:16px}.v-alert__dismissible{align-self:flex-start;color:inherit;margin-left:16px;margin-right:0;text-decoration:none;transition:.3s cubic-bezier(.25,.8,.5,1);-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.v-alert__dismissible:hover{opacity:.8}.v-alert--no-icon .v-alert__icon{display:none}.v-alert>div{align-self:center;flex:1 1}.v-alert.v-alert{border-color:rgba(0,0,0,.12)!important}.v-alert.v-alert--outline{border:1px solid!important}@media screen and (max-width:600px){.v-alert__icon{display:none}}.theme--light.v-icon{color:rgba(0,0,0,.54)}.theme--light.v-icon.v-icon--disabled{color:rgba(0,0,0,.38)!important}.theme--dark.v-icon{color:#fff}.theme--dark.v-icon.v-icon--disabled{color:hsla(0,0%,100%,.5)!important}.v-icon{align-items:center;display:inline-flex;-webkit-font-feature-settings:\"liga\";font-feature-settings:\"liga\";font-size:24px;justify-content:center;line-height:1;transition:.3s cubic-bezier(.25,.8,.5,1);vertical-align:text-bottom}.v-icon--right{margin-left:16px}.v-icon--left{margin-right:16px}.v-icon.v-icon.v-icon--link{cursor:pointer}.v-icon--disabled{pointer-events:none;opacity:.6}.v-icon--is-component{height:24px}.v-autocomplete.v-input>.v-input__control>.v-input__slot{cursor:text}.v-autocomplete input{align-self:center}.v-autocomplete--is-selecting-index input{opacity:0}.v-autocomplete.v-text-field--enclosed:not(.v-text-field--solo):not(.v-text-field--single-line) .v-select__slot>input{margin-top:24px}.v-autocomplete:not(.v-input--is-disabled).v-select.v-text-field input{pointer-events:inherit}.v-autocomplete__content.v-menu__content,.v-autocomplete__content.v-menu__content .v-card{border-radius:0}.theme--light.v-text-field>.v-input__control>.v-input__slot:before{border-color:rgba(0,0,0,.42)}.theme--light.v-text-field:not(.v-input--has-state)>.v-input__control>.v-input__slot:hover:before{border-color:rgba(0,0,0,.87)}.theme--light.v-text-field.v-input--is-disabled>.v-input__control>.v-input__slot:before{border-image:repeating-linear-gradient(90deg,rgba(0,0,0,.38) 0,rgba(0,0,0,.38) 2px,transparent 0,transparent 4px) 1 repeat}.theme--light.v-text-field.v-input--is-disabled>.v-input__control>.v-input__slot:before .v-text-field__prefix,.theme--light.v-text-field.v-input--is-disabled>.v-input__control>.v-input__slot:before .v-text-field__suffix{color:rgba(0,0,0,.38)}.theme--light.v-text-field__prefix,.theme--light.v-text-field__suffix{color:rgba(0,0,0,.54)}.theme--light.v-text-field--solo>.v-input__control>.v-input__slot{border-radius:2px;background:#fff}.theme--light.v-text-field--solo-inverted.v-text-field--solo>.v-input__control>.v-input__slot{background:rgba(0,0,0,.16)}.theme--light.v-text-field--solo-inverted.v-text-field--solo.v-input--is-focused>.v-input__control>.v-input__slot{background:#424242}.theme--light.v-text-field--solo-inverted.v-text-field--solo.v-input--is-focused>.v-input__control>.v-input__slot .v-label,.theme--light.v-text-field--solo-inverted.v-text-field--solo.v-input--is-focused>.v-input__control>.v-input__slot input{color:#fff}.theme--light.v-text-field--box>.v-input__control>.v-input__slot{background:rgba(0,0,0,.06)}.theme--light.v-text-field--box .v-text-field__prefix{max-height:32px;margin-top:22px}.theme--light.v-text-field--box.v-input--is-dirty .v-text-field__prefix,.theme--light.v-text-field--box.v-input--is-focused .v-text-field__prefix,.theme--light.v-text-field--box.v-text-field--placeholder .v-text-field__prefix{margin-top:22px;transition:.3s cubic-bezier(.25,.8,.5,1)}.theme--light.v-text-field--box:not(.v-input--is-focused)>.v-input__control>.v-input__slot:hover{background:rgba(0,0,0,.12)}.theme--light.v-text-field--outline>.v-input__control>.v-input__slot{border:2px solid rgba(0,0,0,.54)}.theme--light.v-text-field--outline:not(.v-input--is-focused):not(.v-input--has-state)>.v-input__control>.v-input__slot:hover{border:2px solid rgba(0,0,0,.87)}.theme--dark.v-text-field>.v-input__control>.v-input__slot:before{border-color:hsla(0,0%,100%,.7)}.theme--dark.v-text-field:not(.v-input--has-state)>.v-input__control>.v-input__slot:hover:before{border-color:#fff}.theme--dark.v-text-field.v-input--is-disabled>.v-input__control>.v-input__slot:before{border-image:repeating-linear-gradient(90deg,hsla(0,0%,100%,.5) 0,hsla(0,0%,100%,.5) 2px,transparent 0,transparent 4px) 1 repeat}.theme--dark.v-text-field.v-input--is-disabled>.v-input__control>.v-input__slot:before .v-text-field__prefix,.theme--dark.v-text-field.v-input--is-disabled>.v-input__control>.v-input__slot:before .v-text-field__suffix{color:hsla(0,0%,100%,.5)}.theme--dark.v-text-field__prefix,.theme--dark.v-text-field__suffix{color:hsla(0,0%,100%,.7)}.theme--dark.v-text-field--solo>.v-input__control>.v-input__slot{border-radius:2px;background:#424242}.theme--dark.v-text-field--solo-inverted.v-text-field--solo>.v-input__control>.v-input__slot{background:hsla(0,0%,100%,.16)}.theme--dark.v-text-field--solo-inverted.v-text-field--solo.v-input--is-focused>.v-input__control>.v-input__slot{background:#fff}.theme--dark.v-text-field--solo-inverted.v-text-field--solo.v-input--is-focused>.v-input__control>.v-input__slot .v-label,.theme--dark.v-text-field--solo-inverted.v-text-field--solo.v-input--is-focused>.v-input__control>.v-input__slot input{color:rgba(0,0,0,.87)}.theme--dark.v-text-field--box>.v-input__control>.v-input__slot{background:rgba(0,0,0,.1)}.theme--dark.v-text-field--box .v-text-field__prefix{max-height:32px;margin-top:22px}.theme--dark.v-text-field--box.v-input--is-dirty .v-text-field__prefix,.theme--dark.v-text-field--box.v-input--is-focused .v-text-field__prefix,.theme--dark.v-text-field--box.v-text-field--placeholder .v-text-field__prefix{margin-top:22px;transition:.3s cubic-bezier(.25,.8,.5,1)}.theme--dark.v-text-field--box:not(.v-input--is-focused)>.v-input__control>.v-input__slot:hover{background:rgba(0,0,0,.2)}.theme--dark.v-text-field--outline>.v-input__control>.v-input__slot{border:2px solid hsla(0,0%,100%,.7)}.theme--dark.v-text-field--outline:not(.v-input--is-focused):not(.v-input--has-state)>.v-input__control>.v-input__slot:hover{border:2px solid #fff}.application--is-rtl .v-text-field .v-label{-webkit-transform-origin:top right;transform-origin:top right}.application--is-rtl .v-text-field .v-counter{margin-left:0;margin-right:8px}.application--is-rtl .v-text-field--enclosed .v-input__append-outer{margin-left:0;margin-right:16px}.application--is-rtl .v-text-field--enclosed .v-input__prepend-outer{margin-left:16px;margin-right:0}.application--is-rtl .v-text-field--reverse input{text-align:left}.application--is-rtl .v-text-field--reverse .v-label{-webkit-transform-origin:top left;transform-origin:top left}.application--is-rtl .v-text-field__prefix{text-align:left;padding-right:0;padding-left:4px}.application--is-rtl .v-text-field__suffix{padding-left:0;padding-right:4px}.application--is-rtl .v-text-field--reverse .v-text-field__prefix{text-align:right;padding-left:0;padding-right:4px}.application--is-rtl .v-text-field--reverse .v-text-field__suffix{padding-left:0;padding-right:4px}.v-text-field{padding-top:12px;margin-top:4px}.v-text-field input{flex:1 1 auto;line-height:20px;padding:8px 0;max-width:100%;min-width:0;width:100%}.v-text-field .v-input__append-inner,.v-text-field .v-input__prepend-inner{align-self:flex-start;display:inline-flex;margin-top:4px;line-height:1;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.v-text-field .v-input__prepend-inner{margin-right:auto;padding-right:4px}.v-text-field .v-input__append-inner{margin-left:auto;padding-left:4px}.v-text-field .v-counter{margin-left:8px;white-space:nowrap}.v-text-field .v-label{max-width:90%;overflow:hidden;text-overflow:ellipsis;top:6px;-webkit-transform-origin:top left;transform-origin:top left;white-space:nowrap;pointer-events:none}.v-text-field .v-label--active{max-width:133%;-webkit-transform:translateY(-18px) scale(.75);transform:translateY(-18px) scale(.75)}.v-text-field>.v-input__control>.v-input__slot{cursor:text;transition:background .3s cubic-bezier(.25,.8,.5,1)}.v-text-field>.v-input__control>.v-input__slot:after,.v-text-field>.v-input__control>.v-input__slot:before{bottom:-1px;content:\"\";left:0;position:absolute;transition:.3s cubic-bezier(.25,.8,.5,1);width:100%}.v-text-field>.v-input__control>.v-input__slot:before{border-style:solid;border-width:thin 0 0}.v-text-field>.v-input__control>.v-input__slot:after{border-color:currentcolor;border-style:solid;border-width:thin 0;-webkit-transform:scaleX(0);transform:scaleX(0)}.v-text-field__details{display:flex;flex:1 0 auto;max-width:100%;overflow:hidden}.v-text-field__prefix,.v-text-field__suffix{align-self:center;cursor:default}.v-text-field__prefix{text-align:right;padding-right:4px}.v-text-field__suffix{padding-left:4px;white-space:nowrap}.v-text-field--reverse .v-text-field__prefix{text-align:left;padding-right:0;padding-left:4px}.v-text-field--reverse .v-text-field__suffix{padding-left:0;padding-right:4px}.v-text-field>.v-input__control>.v-input__slot>.v-text-field__slot{display:flex;flex:1 1 auto;position:relative}.v-text-field--box,.v-text-field--full-width,.v-text-field--outline{position:relative}.v-text-field--box>.v-input__control>.v-input__slot,.v-text-field--full-width>.v-input__control>.v-input__slot,.v-text-field--outline>.v-input__control>.v-input__slot{align-items:stretch;min-height:56px}.v-text-field--box input,.v-text-field--full-width input,.v-text-field--outline input{margin-top:22px}.v-text-field--box.v-text-field--single-line input,.v-text-field--full-width.v-text-field--single-line input,.v-text-field--outline.v-text-field--single-line input{margin-top:12px}.v-text-field--box .v-label,.v-text-field--full-width .v-label,.v-text-field--outline .v-label{top:18px}.v-text-field--box .v-label--active,.v-text-field--full-width .v-label--active,.v-text-field--outline .v-label--active{-webkit-transform:translateY(-6px) scale(.75);transform:translateY(-6px) scale(.75)}.v-text-field--box>.v-input__control>.v-input__slot{border-top-left-radius:4px;border-top-right-radius:4px}.v-text-field--box>.v-input__control>.v-input__slot:before{border-style:solid;border-width:thin 0}.v-text-field.v-text-field--enclosed{margin:0;padding:0}.v-text-field.v-text-field--enclosed:not(.v-text-field--box) .v-progress-linear__background{display:none}.v-text-field.v-text-field--enclosed .v-input__append-inner,.v-text-field.v-text-field--enclosed .v-input__append-outer,.v-text-field.v-text-field--enclosed .v-input__prepend-inner,.v-text-field.v-text-field--enclosed .v-input__prepend-outer{margin-top:16px}.v-text-field.v-text-field--enclosed .v-text-field__details,.v-text-field.v-text-field--enclosed>.v-input__control>.v-input__slot{padding:0 12px}.v-text-field.v-text-field--enclosed .v-text-field__details{margin-bottom:8px}.v-text-field--reverse input{text-align:right}.v-text-field--reverse .v-label{-webkit-transform-origin:top right;transform-origin:top right}.v-text-field--reverse .v-text-field__slot,.v-text-field--reverse>.v-input__control>.v-input__slot{flex-direction:row-reverse}.v-text-field--full-width>.v-input__control>.v-input__slot:after,.v-text-field--full-width>.v-input__control>.v-input__slot:before,.v-text-field--outline>.v-input__control>.v-input__slot:after,.v-text-field--outline>.v-input__control>.v-input__slot:before,.v-text-field--solo>.v-input__control>.v-input__slot:after,.v-text-field--solo>.v-input__control>.v-input__slot:before{display:none}.v-text-field--outline{margin-bottom:16px;transition:border .3s cubic-bezier(.25,.8,.5,1)}.v-text-field--outline>.v-input__control>.v-input__slot{background:transparent!important;border-radius:4px}.v-text-field--outline .v-text-field__prefix{max-height:32px}.v-text-field--outline .v-input__append-outer,.v-text-field--outline .v-input__prepend-outer{margin-top:18px}.v-text-field--outline.v-input--is-dirty .v-text-field__prefix,.v-text-field--outline.v-input--is-focused .v-text-field__prefix,.v-text-field--outline.v-text-field--placeholder .v-text-field__prefix{margin-top:22px;transition:.3s cubic-bezier(.25,.8,.5,1)}.v-text-field--outline.v-input--has-state>.v-input__control>.v-input__slot,.v-text-field--outline.v-input--is-focused>.v-input__control>.v-input__slot{border:2px solid;transition:border .3s cubic-bezier(.25,.8,.5,1)}.v-text-field.v-text-field--solo .v-label{top:calc(50% - 10px)}.v-text-field.v-text-field--solo .v-input__control{min-height:48px;padding:0}.v-text-field.v-text-field--solo:not(.v-text-field--solo-flat)>.v-input__control>.v-input__slot{box-shadow:0 3px 1px -2px rgba(0,0,0,.2),0 2px 2px 0 rgba(0,0,0,.14),0 1px 5px 0 rgba(0,0,0,.12)}.v-text-field.v-text-field--solo .v-text-field__slot{align-items:center}.v-text-field.v-text-field--solo .v-input__append-inner,.v-text-field.v-text-field--solo .v-input__prepend-inner{align-self:center;margin-top:0}.v-text-field.v-text-field--solo .v-input__append-outer,.v-text-field.v-text-field--solo .v-input__prepend-outer{margin-top:12px}.v-text-field.v-input--is-focused>.v-input__control>.v-input__slot:after{-webkit-transform:scaleX(1);transform:scaleX(1)}.v-text-field.v-input--has-state>.v-input__control>.v-input__slot:before{border-color:currentColor}.theme--light.v-select .v-select__selections{color:rgba(0,0,0,.87)}.theme--light.v-select .v-chip--disabled,.theme--light.v-select.v-input--is-disabled .v-select__selections,.theme--light.v-select .v-select__selection--disabled{color:rgba(0,0,0,.38)}.theme--dark.v-select .v-select__selections,.theme--light.v-select.v-text-field--solo-inverted.v-input--is-focused .v-select__selections{color:#fff}.theme--dark.v-select .v-chip--disabled,.theme--dark.v-select.v-input--is-disabled .v-select__selections,.theme--dark.v-select .v-select__selection--disabled{color:hsla(0,0%,100%,.5)}.theme--dark.v-select.v-text-field--solo-inverted.v-input--is-focused .v-select__selections{color:rgba(0,0,0,.87)}.v-select{position:relative}.v-select>.v-input__control>.v-input__slot{cursor:pointer}.v-select .v-chip{flex:0 1 auto}.v-select .fade-transition-leave-active{position:absolute;left:0}.v-select.v-input--is-dirty ::-webkit-input-placeholder{color:transparent!important}.v-select.v-input--is-dirty :-ms-input-placeholder{color:transparent!important}.v-select.v-input--is-dirty ::-ms-input-placeholder{color:transparent!important}.v-select.v-input--is-dirty ::placeholder{color:transparent!important}.v-select:not(.v-input--is-dirty):not(.v-input--is-focused) .v-text-field__prefix{line-height:20px;position:absolute;top:7px;transition:.3s cubic-bezier(.25,.8,.5,1)}.v-select.v-text-field--enclosed:not(.v-text-field--single-line) .v-select__selections{padding-top:24px}.v-select.v-text-field input{flex:1 1;margin-top:0;min-width:0;pointer-events:none;position:relative}.v-select.v-select--is-menu-active .v-input__icon--append .v-icon{-webkit-transform:rotate(180deg);transform:rotate(180deg)}.v-select.v-select--chips input{margin:0}.v-select.v-select--chips .v-select__selections{min-height:42px}.v-select.v-select--chips.v-select--chips--small .v-select__selections{min-height:32px}.v-select.v-select--chips:not(.v-text-field--single-line).v-text-field--box .v-select__selections,.v-select.v-select--chips:not(.v-text-field--single-line).v-text-field--enclosed .v-select__selections{min-height:68px}.v-select.v-select--chips:not(.v-text-field--single-line).v-text-field--box.v-select--chips--small .v-select__selections,.v-select.v-select--chips:not(.v-text-field--single-line).v-text-field--enclosed.v-select--chips--small .v-select__selections{min-height:56px}.v-select.v-text-field--reverse .v-select__selections,.v-select.v-text-field--reverse .v-select__slot{flex-direction:row-reverse}.v-select__selections{align-items:center;display:flex;flex:1 1 auto;flex-wrap:wrap;line-height:18px}.v-select__selection{max-width:90%}.v-select__selection--comma{align-items:center;display:inline-flex;margin:7px 4px 7px 0}.v-select__slot{position:relative;align-items:center;display:flex;width:100%}.v-select:not(.v-text-field--single-line) .v-select__slot>input{align-self:flex-end}.theme--light.v-input:not(.v-input--is-disabled) input,.theme--light.v-input:not(.v-input--is-disabled) textarea{color:rgba(0,0,0,.87)}.theme--light.v-input input::-webkit-input-placeholder,.theme--light.v-input textarea::-webkit-input-placeholder{color:rgba(0,0,0,.38)}.theme--light.v-input input:-ms-input-placeholder,.theme--light.v-input textarea:-ms-input-placeholder{color:rgba(0,0,0,.38)}.theme--light.v-input input::-ms-input-placeholder,.theme--light.v-input textarea::-ms-input-placeholder{color:rgba(0,0,0,.38)}.theme--light.v-input input::placeholder,.theme--light.v-input textarea::placeholder{color:rgba(0,0,0,.38)}.theme--light.v-input--is-disabled .v-label,.theme--light.v-input--is-disabled input,.theme--light.v-input--is-disabled textarea{color:rgba(0,0,0,.38)}.theme--dark.v-input:not(.v-input--is-disabled) input,.theme--dark.v-input:not(.v-input--is-disabled) textarea{color:#fff}.theme--dark.v-input input::-webkit-input-placeholder,.theme--dark.v-input textarea::-webkit-input-placeholder{color:hsla(0,0%,100%,.5)}.theme--dark.v-input input:-ms-input-placeholder,.theme--dark.v-input textarea:-ms-input-placeholder{color:hsla(0,0%,100%,.5)}.theme--dark.v-input input::-ms-input-placeholder,.theme--dark.v-input textarea::-ms-input-placeholder{color:hsla(0,0%,100%,.5)}.theme--dark.v-input input::placeholder,.theme--dark.v-input textarea::placeholder{color:hsla(0,0%,100%,.5)}.theme--dark.v-input--is-disabled .v-label,.theme--dark.v-input--is-disabled input,.theme--dark.v-input--is-disabled textarea{color:hsla(0,0%,100%,.5)}.v-input{align-items:flex-start;display:flex;flex:1 1 auto;font-size:16px;text-align:left}.v-input .v-progress-linear{top:calc(100% - 1px);left:0;margin:0;position:absolute}.v-input input{max-height:32px}.v-input input:invalid,.v-input textarea:invalid{box-shadow:none}.v-input input:active,.v-input input:focus,.v-input textarea:active,.v-input textarea:focus{outline:none}.v-input .v-label{height:20px;line-height:20px}.v-input__append-outer,.v-input__prepend-outer{display:inline-flex;margin-bottom:4px;margin-top:4px;line-height:1}.v-input__append-outer .v-icon,.v-input__prepend-outer .v-icon{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.v-input__append-outer{margin-left:9px}.v-input__prepend-outer{margin-right:9px}.v-input__control{display:flex;flex-direction:column;height:auto;flex-grow:1;flex-wrap:wrap;width:100%}.v-input__icon{align-items:center;display:inline-flex;height:24px;flex:1 0 auto;justify-content:center;min-width:24px;width:24px}.v-input__icon--clear{border-radius:50%}.v-input__slot{align-items:center;color:inherit;display:flex;margin-bottom:8px;min-height:inherit;position:relative;transition:.3s cubic-bezier(.25,.8,.5,1);width:100%}.v-input--is-disabled:not(.v-input--is-readonly){pointer-events:none}.v-input--is-loading>.v-input__control>.v-input__slot:after,.v-input--is-loading>.v-input__control>.v-input__slot:before{display:none}.v-input--hide-details>.v-input__control>.v-input__slot{margin-bottom:0}.v-input--has-state.error--text .v-label{-webkit-animation:shake .6s cubic-bezier(.25,.8,.5,1);animation:shake .6s cubic-bezier(.25,.8,.5,1)}.theme--light.v-label{color:rgba(0,0,0,.54)}.theme--light.v-label--is-disabled{color:rgba(0,0,0,.38)}.theme--dark.v-label{color:hsla(0,0%,100%,.7)}.theme--dark.v-label--is-disabled{color:hsla(0,0%,100%,.5)}.v-label{font-size:16px;line-height:1;min-height:8px;transition:.3s cubic-bezier(.25,.8,.5,1)}.theme--light.v-messages{color:rgba(0,0,0,.54)}.theme--dark.v-messages{color:hsla(0,0%,100%,.7)}.application--is-rtl .v-messages{text-align:right}.v-messages{flex:1 1 auto;font-size:12px;min-height:12px;min-width:1px;position:relative}.v-messages__message{line-height:1;word-break:break-word;overflow-wrap:break-word;word-wrap:break-word;-webkit-hyphens:auto;-ms-hyphens:auto;hyphens:auto}.v-progress-linear{background:transparent;margin:1rem 0;overflow:hidden;width:100%;position:relative}.v-progress-linear__bar{width:100%;position:relative;z-index:1}.v-progress-linear__bar,.v-progress-linear__bar__determinate{height:inherit;transition:.2s cubic-bezier(.4,0,.6,1)}.v-progress-linear__bar__indeterminate .long,.v-progress-linear__bar__indeterminate .short{height:inherit;position:absolute;left:0;top:0;bottom:0;will-change:left,right;width:auto;background-color:inherit}.v-progress-linear__bar__indeterminate--active .long{-webkit-animation:indeterminate;animation:indeterminate;-webkit-animation-duration:2.2s;animation-duration:2.2s;-webkit-animation-iteration-count:infinite;animation-iteration-count:infinite}.v-progress-linear__bar__indeterminate--active .short{-webkit-animation:indeterminate-short;animation:indeterminate-short;-webkit-animation-duration:2.2s;animation-duration:2.2s;-webkit-animation-iteration-count:infinite;animation-iteration-count:infinite}.v-progress-linear__background{position:absolute;top:0;left:0;bottom:0;transition:.3s ease-in}.v-progress-linear__content{width:100%;position:absolute;top:0;left:0;z-index:2}.v-progress-linear--query .v-progress-linear__bar__indeterminate--active .long{-webkit-animation:query;animation:query;-webkit-animation-duration:2s;animation-duration:2s;-webkit-animation-iteration-count:infinite;animation-iteration-count:infinite}.v-progress-linear--query .v-progress-linear__bar__indeterminate--active .short{-webkit-animation:query-short;animation:query-short;-webkit-animation-duration:2s;animation-duration:2s;-webkit-animation-iteration-count:infinite;animation-iteration-count:infinite}@-webkit-keyframes indeterminate{0%{left:-90%;right:100%}60%{left:-90%;right:100%}to{left:100%;right:-35%}}@keyframes indeterminate{0%{left:-90%;right:100%}60%{left:-90%;right:100%}to{left:100%;right:-35%}}@-webkit-keyframes indeterminate-short{0%{left:-200%;right:100%}60%{left:107%;right:-8%}to{left:107%;right:-8%}}@keyframes indeterminate-short{0%{left:-200%;right:100%}60%{left:107%;right:-8%}to{left:107%;right:-8%}}@-webkit-keyframes query{0%{right:-90%;left:100%}60%{right:-90%;left:100%}to{right:100%;left:-35%}}@keyframes query{0%{right:-90%;left:100%}60%{right:-90%;left:100%}to{right:100%;left:-35%}}@-webkit-keyframes query-short{0%{right:-200%;left:100%}60%{right:107%;left:-8%}to{right:107%;left:-8%}}@keyframes query-short{0%{right:-200%;left:100%}60%{right:107%;left:-8%}to{right:107%;left:-8%}}.theme--light.v-counter{color:rgba(0,0,0,.54)}.theme--dark.v-counter{color:hsla(0,0%,100%,.7)}.v-counter{flex:0 1 auto;font-size:12px;min-height:12px;line-height:1}.theme--light.v-card{background-color:#fff;border-color:#fff;color:rgba(0,0,0,.87)}.theme--dark.v-card{background-color:#424242;border-color:#424242;color:#fff}.v-card{box-shadow:0 3px 1px -2px rgba(0,0,0,.2),0 2px 2px 0 rgba(0,0,0,.14),0 1px 5px 0 rgba(0,0,0,.12);text-decoration:none}.v-card>:first-child:not(.v-btn):not(.v-chip){border-top-left-radius:inherit;border-top-right-radius:inherit}.v-card>:last-child:not(.v-btn):not(.v-chip){border-bottom-left-radius:inherit;border-bottom-right-radius:inherit}.v-card--flat{box-shadow:0 0 0 0 rgba(0,0,0,.2),0 0 0 0 rgba(0,0,0,.14),0 0 0 0 rgba(0,0,0,.12)}.v-card--hover{cursor:pointer;transition:all .4s cubic-bezier(.25,.8,.25,1);transition-property:box-shadow}.v-card--hover:hover{box-shadow:0 5px 5px -3px rgba(0,0,0,.2),0 8px 10px 1px rgba(0,0,0,.14),0 3px 14px 2px rgba(0,0,0,.12)}.v-card__title{align-items:center;display:flex;flex-wrap:wrap;padding:16px}.v-card__title--primary{padding-top:24px}.v-card__text{padding:16px;width:100%}.v-card__actions{align-items:center;display:flex;padding:8px}.v-card__actions .v-btn,.v-card__actions>*{margin:0}.v-card__actions .v-btn+.v-btn{margin-left:8px}.theme--light.v-input--selection-controls.v-input--is-disabled .v-icon{color:rgba(0,0,0,.26)!important}.theme--dark.v-input--selection-controls.v-input--is-disabled .v-icon{color:hsla(0,0%,100%,.3)!important}.application--is-rtl .v-input--selection-controls .v-input--selection-controls__input{margin-right:0;margin-left:8px}.v-input--selection-controls{margin-top:16px;padding-top:4px}.v-input--selection-controls .v-input__append-outer,.v-input--selection-controls .v-input__prepend-outer{margin-top:0;margin-bottom:0}.v-input--selection-controls .v-input__control{flex-grow:0;width:auto}.v-input--selection-controls:not(.v-input--hide-details) .v-input__slot{margin-bottom:12px}.v-input--selection-controls__input{color:inherit;display:inline-flex;flex:0 0 auto;height:24px;position:relative;margin-right:8px;transition:.3s cubic-bezier(.25,.8,.25,1);transition-property:color,-webkit-transform;transition-property:color,transform;transition-property:color,transform,-webkit-transform;width:24px;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.v-input--selection-controls__input input{position:absolute;opacity:0;width:100%;height:100%}.v-input--selection-controls__input+.v-label,.v-input--selection-controls__input input{cursor:pointer;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.v-input--selection-controls__ripple{border-radius:50%;cursor:pointer;height:34px;position:absolute;transition:inherit;width:34px;left:-12px;top:calc(50% - 24px);margin:7px}.v-input--selection-controls__ripple:before{border-radius:inherit;bottom:0;content:\"\";position:absolute;opacity:.2;left:0;right:0;top:0;-webkit-transform-origin:center center;transform-origin:center center;-webkit-transform:scale(.2);transform:scale(.2);transition:inherit}.v-input--selection-controls__ripple .v-ripple__container{-webkit-transform:scale(1.4);transform:scale(1.4)}.v-input--selection-controls.v-input .v-label{align-items:center;display:inline-flex;top:0;height:auto}.v-input--selection-controls.v-input--is-focused .v-input--selection-controls__ripple:before,.v-input--selection-controls .v-radio--is-focused .v-input--selection-controls__ripple:before{background:currentColor;-webkit-transform:scale(.8);transform:scale(.8)}.theme--light.v-divider{border-color:rgba(0,0,0,.12)}.theme--dark.v-divider{border-color:hsla(0,0%,100%,.12)}.v-divider{display:block;flex:1 1 0px;max-width:100%;height:0;max-height:0;border:solid;border-width:thin 0 0;transition:inherit}.v-divider--inset:not(.v-divider--vertical){margin-left:72px;max-width:calc(100% - 72px)}.v-divider--vertical{align-self:stretch;border:solid;border-width:0 thin 0 0;display:inline-flex;height:inherit;min-height:100%;max-height:100%;max-width:0;width:0;vertical-align:text-bottom}.v-divider--vertical.v-divider--inset{margin-top:8px;min-height:0;max-height:calc(100% - 16px)}.theme--light.v-subheader{color:rgba(0,0,0,.54)}.theme--dark.v-subheader{color:hsla(0,0%,100%,.7)}.v-subheader{align-items:center;display:flex;height:48px;font-size:14px;font-weight:500;padding:0 16px}.v-subheader--inset{margin-left:56px}.theme--light.v-list{background:#fff;color:rgba(0,0,0,.87)}.theme--light.v-list .v-list--disabled{color:rgba(0,0,0,.38)}.theme--light.v-list .v-list__tile__sub-title{color:rgba(0,0,0,.54)}.theme--light.v-list .v-list__tile__mask{color:rgba(0,0,0,.38);background:#eee}.theme--light.v-list .v-list__group__header:hover,.theme--light.v-list .v-list__tile--highlighted,.theme--light.v-list .v-list__tile--link:hover{background:rgba(0,0,0,.04)}.theme--light.v-list .v-list__group--active:after,.theme--light.v-list .v-list__group--active:before{background:rgba(0,0,0,.12)}.theme--light.v-list .v-list__group--disabled .v-list__group__header__prepend-icon .v-icon,.theme--light.v-list .v-list__group--disabled .v-list__tile{color:rgba(0,0,0,.38)!important}.theme--dark.v-list{background:#424242;color:#fff}.theme--dark.v-list .v-list--disabled{color:hsla(0,0%,100%,.5)}.theme--dark.v-list .v-list__tile__sub-title{color:hsla(0,0%,100%,.7)}.theme--dark.v-list .v-list__tile__mask{color:hsla(0,0%,100%,.5);background:#494949}.theme--dark.v-list .v-list__group__header:hover,.theme--dark.v-list .v-list__tile--highlighted,.theme--dark.v-list .v-list__tile--link:hover{background:hsla(0,0%,100%,.08)}.theme--dark.v-list .v-list__group--active:after,.theme--dark.v-list .v-list__group--active:before{background:hsla(0,0%,100%,.12)}.theme--dark.v-list .v-list__group--disabled .v-list__group__header__prepend-icon .v-icon,.theme--dark.v-list .v-list__group--disabled .v-list__tile{color:hsla(0,0%,100%,.5)!important}.application--is-rtl .v-list__tile__content,.application--is-rtl .v-list__tile__title{text-align:right}.v-list{list-style-type:none;padding:8px 0;transition:.3s cubic-bezier(.25,.8,.5,1)}.v-list>div{transition:inherit}.v-list__tile{align-items:center;color:inherit;display:flex;font-size:16px;font-weight:400;height:48px;margin:0;padding:0 16px;position:relative;text-decoration:none;transition:background .3s cubic-bezier(.25,.8,.5,1)}.v-list__tile--link{cursor:pointer;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.v-list__tile__action,.v-list__tile__content{height:100%}.v-list__tile__sub-title,.v-list__tile__title{white-space:nowrap;overflow:hidden;text-overflow:ellipsis;transition:.3s cubic-bezier(.25,.8,.5,1);width:100%}.v-list__tile__title{height:24px;line-height:24px;position:relative;text-align:left}.v-list__tile__sub-title{font-size:14px}.v-list__tile__action,.v-list__tile__avatar{display:flex;justify-content:flex-start;min-width:56px}.v-list__tile__action{align-items:center}.v-list__tile__action .v-btn{padding:0;margin:0}.v-list__tile__action .v-btn--icon{margin:-6px}.v-list__tile__action .v-radio.v-radio{margin:0}.v-list__tile__action .v-input--selection-controls{padding:0;margin:0}.v-list__tile__action .v-input--selection-controls .v-messages{display:none}.v-list__tile__action .v-input--selection-controls .v-input__slot{margin:0}.v-list__tile__action-text{color:#9e9e9e;font-size:12px}.v-list__tile__action--stack{align-items:flex-end;justify-content:space-between;padding-top:8px;padding-bottom:8px;white-space:nowrap;flex-direction:column}.v-list__tile__content{text-align:left;flex:1 1 auto;overflow:hidden;display:flex;align-items:flex-start;justify-content:center;flex-direction:column}.v-list__tile__content~.v-list__tile__action:not(.v-list__tile__action--stack),.v-list__tile__content~.v-list__tile__avatar{justify-content:flex-end}.v-list__tile--active .v-list__tile__action:first-of-type .v-icon{color:inherit}.v-list__tile--avatar{height:56px}.v-list--dense{padding-top:4px;padding-bottom:4px}.v-list--dense .v-subheader{font-size:13px;height:40px}.v-list--dense .v-list__group .v-subheader{height:40px}.v-list--dense .v-list__tile{font-size:13px}.v-list--dense .v-list__tile--avatar{height:48px}.v-list--dense .v-list__tile:not(.v-list__tile--avatar){height:40px}.v-list--dense .v-list__tile .v-icon{font-size:22px}.v-list--dense .v-list__tile__sub-title{font-size:13px}.v-list--disabled{pointer-events:none}.v-list--two-line .v-list__tile{height:72px}.v-list--two-line.v-list--dense .v-list__tile{height:60px}.v-list--three-line .v-list__tile{height:88px}.v-list--three-line .v-list__tile__avatar{margin-top:-18px}.v-list--three-line .v-list__tile__sub-title{white-space:normal;-webkit-line-clamp:2;display:-webkit-box}.v-list--three-line.v-list--dense .v-list__tile{height:76px}.v-list>.v-list__group:before{top:0}.v-list>.v-list__group:before .v-list__tile__avatar{margin-top:-14px}.v-list__group{padding:0;position:relative;transition:inherit}.v-list__group:after,.v-list__group:before{content:\"\";height:1px;left:0;position:absolute;transition:.3s cubic-bezier(.25,.8,.5,1);width:100%}.v-list__group--active~.v-list__group:before{display:none}.v-list__group__header{align-items:center;cursor:pointer;display:flex;list-style-type:none}.v-list__group__header>div:not(.v-list__group__header__prepend-icon):not(.v-list__group__header__append-icon){flex:1 1 auto;overflow:hidden}.v-list__group__header .v-list__group__header__append-icon,.v-list__group__header .v-list__group__header__prepend-icon{padding:0 16px;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.v-list__group__header--sub-group{align-items:center;display:flex}.v-list__group__header--sub-group div .v-list__tile{padding-left:0}.v-list__group__header--sub-group .v-list__group__header__prepend-icon{padding:0 0 0 40px;margin-right:8px}.v-list__group__header .v-list__group__header__prepend-icon{display:flex;justify-content:flex-start;min-width:56px}.v-list__group__header--active .v-list__group__header__append-icon .v-icon{-webkit-transform:rotate(-180deg);transform:rotate(-180deg)}.v-list__group__header--active .v-list__group__header__prepend-icon .v-icon{color:inherit}.v-list__group__header--active.v-list__group__header--sub-group .v-list__group__header__prepend-icon .v-icon{-webkit-transform:rotate(-180deg);transform:rotate(-180deg)}.v-list__group__items{position:relative;padding:0;transition:inherit}.v-list__group__items>div{display:block}.v-list__group__items--no-action .v-list__tile{padding-left:72px}.v-list__group--disabled{pointer-events:none}.v-list--subheader{padding-top:0}.v-avatar{align-items:center;border-radius:50%;display:inline-flex;justify-content:center;position:relative;text-align:center;vertical-align:middle}.v-avatar .v-icon,.v-avatar .v-image,.v-avatar img{border-radius:50%;display:inline-flex;height:inherit;width:inherit}.v-avatar--tile,.v-avatar--tile .v-icon,.v-avatar--tile .v-image,.v-avatar--tile img{border-radius:0}.theme--light.v-chip{background:#e0e0e0;color:rgba(0,0,0,.87)}.theme--light.v-chip--disabled{color:rgba(0,0,0,.38)}.theme--dark.v-chip{background:#555;color:#fff}.theme--dark.v-chip--disabled{color:hsla(0,0%,100%,.5)}.application--is-rtl .v-chip__close{margin:0 8px 0 2px}.application--is-rtl .v-chip--removable .v-chip__content{padding:0 12px 0 4px}.application--is-rtl .v-chip--select-multi{margin:4px 0 4px 4px}.application--is-rtl .v-chip .v-avatar{margin-right:-12px;margin-left:8px}.application--is-rtl .v-chip .v-icon--right{margin-right:12px;margin-left:-8px}.application--is-rtl .v-chip .v-icon--left{margin-right:-8px;margin-left:12px}.v-chip{font-size:13px;margin:4px;outline:none;position:relative;transition:.3s cubic-bezier(.25,.8,.5,1)}.v-chip,.v-chip .v-chip__content{align-items:center;border-radius:28px;display:inline-flex;vertical-align:middle}.v-chip .v-chip__content{cursor:default;height:32px;justify-content:space-between;padding:0 12px;white-space:nowrap;z-index:1}.v-chip--removable .v-chip__content{padding:0 4px 0 12px}.v-chip .v-avatar{height:32px!important;margin-left:-12px;margin-right:8px;min-width:32px;width:32px!important}.v-chip .v-avatar img{height:100%;width:100%}.v-chip--active,.v-chip--selected,.v-chip:focus:not(.v-chip--disabled){border-color:rgba(0,0,0,.13);box-shadow:0 3px 1px -2px rgba(0,0,0,.2),0 2px 2px 0 rgba(0,0,0,.14),0 1px 5px 0 rgba(0,0,0,.12)}.v-chip--active:after,.v-chip--selected:after,.v-chip:focus:not(.v-chip--disabled):after{background:currentColor;border-radius:inherit;content:\"\";height:100%;position:absolute;top:0;left:0;transition:inherit;width:100%;pointer-events:none;opacity:.13}.v-chip--label,.v-chip--label .v-chip__content{border-radius:2px}.v-chip.v-chip.v-chip--outline{background:transparent!important;border:1px solid;color:#9e9e9e;height:32px}.v-chip.v-chip.v-chip--outline .v-avatar{margin-left:-13px}.v-chip--small{height:24px!important}.v-chip--small .v-avatar{height:24px!important;min-width:24px;width:24px!important}.v-chip--small .v-icon{font-size:20px}.v-chip__close{align-items:center;color:inherit;display:flex;font-size:20px;margin:0 2px 0 8px;text-decoration:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.v-chip__close>.v-icon{color:inherit!important;font-size:20px;cursor:pointer;opacity:.5}.v-chip__close>.v-icon:hover{opacity:1}.v-chip--disabled .v-chip__close{pointer-events:none}.v-chip--select-multi{margin:4px 4px 4px 0}.v-chip .v-icon{color:inherit}.v-chip .v-icon--right{margin-left:12px;margin-right:-8px}.v-chip .v-icon--left{margin-left:-8px;margin-right:12px}.v-menu{display:block;vertical-align:middle}.v-menu--inline{display:inline-block}.v-menu__activator{align-items:center;cursor:pointer;display:flex}.v-menu__activator *{cursor:pointer}.v-menu__content{position:absolute;display:inline-block;border-radius:2px;max-width:80%;overflow-y:auto;overflow-x:hidden;contain:content;will-change:transform;box-shadow:0 5px 5px -3px rgba(0,0,0,.2),0 8px 10px 1px rgba(0,0,0,.14),0 3px 14px 2px rgba(0,0,0,.12)}.v-menu__content--active{pointer-events:none}.v-menu__content>.card{contain:content;-webkit-backface-visibility:hidden;backface-visibility:hidden}.v-menu>.v-menu__content{max-width:none}.v-menu-transition-enter .v-list__tile{min-width:0;pointer-events:none}.v-menu-transition-enter-to .v-list__tile{pointer-events:auto;transition-delay:.1s}.v-menu-transition-leave-active,.v-menu-transition-leave-to{pointer-events:none}.v-menu-transition-enter,.v-menu-transition-leave-to{opacity:0}.v-menu-transition-enter-active,.v-menu-transition-leave-active{transition:all .3s cubic-bezier(.25,.8,.25,1)}.v-menu-transition-enter.v-menu__content--auto{transition:none!important}.v-menu-transition-enter.v-menu__content--auto .v-list__tile{opacity:0;-webkit-transform:translateY(-15px);transform:translateY(-15px)}.v-menu-transition-enter.v-menu__content--auto .v-list__tile--active{opacity:1;-webkit-transform:none!important;transform:none!important;pointer-events:auto}.application--is-rtl .v-badge__badge{right:auto;left:-22px}.application--is-rtl .v-badge--overlap .v-badge__badge{right:auto;left:-8px}.application--is-rtl .v-badge--overlap.v-badge--left .v-badge__badge{right:-8px;left:auto}.application--is-rtl .v-badge--left .v-badge__badge{right:-22px;left:auto}.v-badge{display:inline-block;position:relative}.v-badge__badge{color:#fff;display:flex;position:absolute;font-size:14px;top:-11px;right:-22px;border-radius:50%;height:22px;width:22px;justify-content:center;align-items:center;flex-direction:row;flex-wrap:wrap;transition:.3s cubic-bezier(.25,.8,.5,1)}.v-badge__badge .v-icon{font-size:14px}.v-badge--overlap .v-badge__badge{top:-8px;right:-8px}.v-badge--overlap.v-badge--left .v-badge__badge{left:-8px;right:auto}.v-badge--overlap.v-badge--bottom .v-badge__badge{bottom:-8px;top:auto}.v-badge--left .v-badge__badge{left:-22px}.v-badge--bottom .v-badge__badge{bottom:-11px;top:auto}.theme--light.v-bottom-nav{background-color:#fff}.theme--light.v-bottom-nav .v-btn:not(.v-btn--active){color:rgba(0,0,0,.54)!important}.theme--dark.v-bottom-nav{background-color:#424242}.theme--dark.v-bottom-nav .v-btn:not(.v-btn--active){color:hsla(0,0%,100%,.7)!important}.v-item-group.v-bottom-nav{bottom:0;box-shadow:0 3px 14px 2px rgba(0,0,0,.12);display:flex;left:0;justify-content:center;-webkit-transform:translateY(60px);transform:translateY(60px);transition:all .4s cubic-bezier(.25,.8,.5,1);width:100%}.v-item-group.v-bottom-nav--absolute{position:absolute}.v-item-group.v-bottom-nav--active{-webkit-transform:translate(0);transform:translate(0)}.v-item-group.v-bottom-nav--fixed{position:fixed;z-index:4}.v-item-group.v-bottom-nav .v-btn{background:transparent!important;border-radius:0;box-shadow:none!important;font-weight:400;height:100%;margin:0;max-width:168px;min-width:80px;padding:8px 12px 10px;text-transform:none;width:100%;flex-shrink:1}.v-item-group.v-bottom-nav .v-btn .v-btn__content{flex-direction:column-reverse;font-size:12px;white-space:nowrap;will-change:font-size}.v-item-group.v-bottom-nav .v-btn .v-btn__content i.v-icon{color:inherit;margin-bottom:4px;transition:all .4s cubic-bezier(.25,.8,.5,1)}.v-item-group.v-bottom-nav .v-btn .v-btn__content span{line-height:1}.v-item-group.v-bottom-nav .v-btn--active{padding-top:6px}.v-item-group.v-bottom-nav .v-btn--active:before{background-color:transparent}.v-item-group.v-bottom-nav .v-btn--active .v-btn__content{font-size:14px}.v-item-group.v-bottom-nav .v-btn--active .v-btn__content .v-icon{-webkit-transform:none;transform:none}.v-item-group.v-bottom-nav--shift .v-btn__content{font-size:14px}.v-item-group.v-bottom-nav--shift .v-btn{transition:all .3s;min-width:56px;max-width:96px}.v-item-group.v-bottom-nav--shift .v-btn--active{min-width:96px;max-width:168px}.v-bottom-nav--shift .v-btn:not(.v-btn--active) .v-btn__content .v-icon{-webkit-transform:scale(1) translateY(8px);transform:scale(1) translateY(8px)}.v-bottom-nav--shift .v-btn:not(.v-btn--active) .v-btn__content>span:not(.v-badge){color:transparent}.v-item-group{flex:0 1 auto;position:relative;transition:.3s cubic-bezier(.25,.8,.5,1)}.v-item-group>*{cursor:pointer;flex:1 1 auto}.v-bottom-sheet.v-dialog{align-self:flex-end;border-radius:0;flex:1 0 100%;margin:0;min-width:100%;overflow:visible;transition:.3s cubic-bezier(.25,.8,.25,1)}.v-bottom-sheet.v-dialog.v-bottom-sheet--inset{max-width:70%;min-width:0}@media only screen and (max-width:599px){.v-bottom-sheet.v-dialog.v-bottom-sheet--inset{max-width:none}}.v-dialog{box-shadow:0 11px 15px -7px rgba(0,0,0,.2),0 24px 38px 3px rgba(0,0,0,.14),0 9px 46px 8px rgba(0,0,0,.12);border-radius:2px;margin:24px;overflow-y:auto;pointer-events:auto;transition:.3s cubic-bezier(.25,.8,.25,1);width:100%;z-index:inherit}.v-dialog__content{align-items:center;display:flex;height:100%;justify-content:center;left:0;pointer-events:none;position:fixed;top:0;transition:.2s cubic-bezier(.25,.8,.25,1);width:100%;z-index:6;outline:none}.v-dialog:not(.v-dialog--fullscreen){max-height:90%}.v-dialog__activator,.v-dialog__activator *{cursor:pointer}.v-dialog__container{display:inline-block;vertical-align:middle}.v-dialog--animated{-webkit-animation-duration:.15s;animation-duration:.15s;-webkit-animation-name:animate-dialog;animation-name:animate-dialog;-webkit-animation-timing-function:cubic-bezier(.25,.8,.25,1);animation-timing-function:cubic-bezier(.25,.8,.25,1)}.v-dialog--fullscreen{border-radius:0;margin:0;height:100%;position:fixed;overflow-y:auto;top:0;left:0}.v-dialog--fullscreen>.v-card{min-height:100%;min-width:100%;margin:0!important;padding:0!important}.v-dialog--scrollable{display:flex}.v-dialog--scrollable>.v-card{display:flex;flex:1 1 100%;flex-direction:column}.v-dialog--scrollable>.v-card>.v-card__actions,.v-dialog--scrollable>.v-card>.v-card__title{flex:1 0 auto}.v-dialog--scrollable>.v-card>.v-card__text{overflow-y:auto;-webkit-backface-visibility:hidden;backface-visibility:hidden}@-webkit-keyframes animate-dialog{0%{-webkit-transform:scale(1);transform:scale(1)}50%{-webkit-transform:scale(1.03);transform:scale(1.03)}to{-webkit-transform:scale(1);transform:scale(1)}}@keyframes animate-dialog{0%{-webkit-transform:scale(1);transform:scale(1)}50%{-webkit-transform:scale(1.03);transform:scale(1.03)}to{-webkit-transform:scale(1);transform:scale(1)}}.v-overlay{position:fixed;top:0;left:0;right:0;bottom:0;pointer-events:none;transition:.3s cubic-bezier(.25,.8,.5,1);z-index:5}.v-overlay--absolute{position:absolute}.v-overlay:before{background-color:#212121;bottom:0;content:\"\";height:100%;left:0;opacity:0;position:absolute;right:0;top:0;transition:inherit;transition-delay:.15s;width:100%}.v-overlay--active{pointer-events:auto;touch-action:none}.v-overlay--active:before{opacity:.46}.theme--light.v-breadcrumbs .v-breadcrumbs__divider,.theme--light.v-breadcrumbs .v-breadcrumbs__item--disabled{color:rgba(0,0,0,.38)}.theme--dark.v-breadcrumbs .v-breadcrumbs__divider,.theme--dark.v-breadcrumbs .v-breadcrumbs__item--disabled{color:hsla(0,0%,100%,.5)}.v-breadcrumbs{align-items:center;display:flex;flex-wrap:wrap;flex:0 1 auto;list-style-type:none;margin:0;padding:18px 12px}.v-breadcrumbs li{align-items:center;display:inline-flex;font-size:14px}.v-breadcrumbs li .v-icon{font-size:16px}.v-breadcrumbs li:nth-child(2n){padding:0 12px}.v-breadcrumbs--large li,.v-breadcrumbs--large li .v-icon{font-size:16px}.v-breadcrumbs__item{align-items:center;display:inline-flex;text-decoration:none;transition:.3s cubic-bezier(.25,.8,.5,1)}.v-breadcrumbs__item--disabled{pointer-events:none}.v-ripple__container{border-radius:inherit;width:100%;height:100%;z-index:0;contain:strict}.v-ripple__animation,.v-ripple__container{color:inherit;position:absolute;left:0;top:0;overflow:hidden;pointer-events:none}.v-ripple__animation{border-radius:50%;background:currentColor;opacity:0;will-change:transform,opacity}.v-ripple__animation--enter{transition:none}.v-ripple__animation--in{transition:opacity .1s cubic-bezier(.4,0,.2,1),-webkit-transform .25s cubic-bezier(.4,0,.2,1);transition:transform .25s cubic-bezier(.4,0,.2,1),opacity .1s cubic-bezier(.4,0,.2,1);transition:transform .25s cubic-bezier(.4,0,.2,1),opacity .1s cubic-bezier(.4,0,.2,1),-webkit-transform .25s cubic-bezier(.4,0,.2,1)}.v-ripple__animation--out{transition:opacity .3s cubic-bezier(.4,0,.2,1)}.theme--light.v-btn{color:rgba(0,0,0,.87)}.theme--light.v-btn.v-btn--disabled,.theme--light.v-btn.v-btn--disabled .v-btn__loading,.theme--light.v-btn.v-btn--disabled .v-icon{color:rgba(0,0,0,.26)!important}.theme--light.v-btn.v-btn--disabled:not(.v-btn--icon):not(.v-btn--flat):not(.v-btn--outline){background-color:rgba(0,0,0,.12)!important}.theme--light.v-btn:not(.v-btn--icon):not(.v-btn--flat){background-color:#f5f5f5}.theme--dark.v-btn{color:#fff}.theme--dark.v-btn.v-btn--disabled,.theme--dark.v-btn.v-btn--disabled .v-btn__loading,.theme--dark.v-btn.v-btn--disabled .v-icon{color:hsla(0,0%,100%,.3)!important}.theme--dark.v-btn.v-btn--disabled:not(.v-btn--icon):not(.v-btn--flat):not(.v-btn--outline){background-color:hsla(0,0%,100%,.12)!important}.theme--dark.v-btn:not(.v-btn--icon):not(.v-btn--flat){background-color:#212121}.v-btn{align-items:center;border-radius:2px;display:inline-flex;height:36px;flex:0 0 auto;font-size:14px;font-weight:500;justify-content:center;margin:6px 8px;min-width:88px;outline:0;text-transform:uppercase;text-decoration:none;transition:.3s cubic-bezier(.25,.8,.5,1),color 1ms;position:relative;vertical-align:middle;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.v-btn:before{border-radius:inherit;color:inherit;content:\"\";position:absolute;left:0;top:0;height:100%;opacity:.12;transition:.3s cubic-bezier(.25,.8,.5,1);width:100%}.v-btn{padding:0 16px}.v-btn--active,.v-btn:focus,.v-btn:hover{position:relative}.v-btn--active:before,.v-btn:focus:before,.v-btn:hover:before{background-color:currentColor}.v-btn__content{align-items:center;border-radius:inherit;color:inherit;display:flex;flex:1 0 auto;justify-content:center;margin:0 auto;position:relative;transition:.3s cubic-bezier(.25,.8,.5,1);white-space:nowrap;width:inherit}.v-btn--small{font-size:13px;height:28px;padding:0 8px}.v-btn--large{font-size:15px;height:44px;padding:0 32px}.v-btn .v-btn__content .v-icon{color:inherit}.v-btn:not(.v-btn--depressed):not(.v-btn--flat){will-change:box-shadow;box-shadow:0 3px 1px -2px rgba(0,0,0,.2),0 2px 2px 0 rgba(0,0,0,.14),0 1px 5px 0 rgba(0,0,0,.12)}.v-btn:not(.v-btn--depressed):not(.v-btn--flat):active{box-shadow:0 5px 5px -3px rgba(0,0,0,.2),0 8px 10px 1px rgba(0,0,0,.14),0 3px 14px 2px rgba(0,0,0,.12)}.v-btn--icon{background:transparent;box-shadow:none!important;border-radius:50%;justify-content:center;min-width:0;width:36px}.v-btn--icon.v-btn--small{width:28px}.v-btn--icon.v-btn--large{width:44px}.v-btn--floating,.v-btn--icon:before{border-radius:50%}.v-btn--floating{min-width:0;height:56px;width:56px;padding:0}.v-btn--floating.v-btn--absolute,.v-btn--floating.v-btn--fixed{z-index:4}.v-btn--floating:not(.v-btn--depressed):not(.v-btn--flat){box-shadow:0 3px 5px -1px rgba(0,0,0,.2),0 6px 10px 0 rgba(0,0,0,.14),0 1px 18px 0 rgba(0,0,0,.12)}.v-btn--floating:not(.v-btn--depressed):not(.v-btn--flat):active{box-shadow:0 7px 8px -4px rgba(0,0,0,.2),0 12px 17px 2px rgba(0,0,0,.14),0 5px 22px 4px rgba(0,0,0,.12)}.v-btn--floating .v-btn__content{flex:1 1 auto;margin:0;height:100%}.v-btn--floating:after{border-radius:50%}.v-btn--floating .v-btn__content :not(:only-child){transition:.3s cubic-bezier(.25,.8,.5,1)}.v-btn--floating .v-btn__content :not(:only-child):first-child{opacity:1}.v-btn--floating .v-btn__content :not(:only-child):last-child{opacity:0;-webkit-transform:rotate(-45deg);transform:rotate(-45deg)}.v-btn--floating .v-btn__content :not(:only-child):first-child,.v-btn--floating .v-btn__content :not(:only-child):last-child{-webkit-backface-visibility:hidden;position:absolute;left:0;top:0}.v-btn--floating.v-btn--active .v-btn__content :not(:only-child):first-child{opacity:0;-webkit-transform:rotate(45deg);transform:rotate(45deg)}.v-btn--floating.v-btn--active .v-btn__content :not(:only-child):last-child{opacity:1;-webkit-transform:rotate(0);transform:rotate(0)}.v-btn--floating .v-icon{height:inherit;width:inherit}.v-btn--floating.v-btn--small{height:40px;width:40px}.v-btn--floating.v-btn--small .v-icon{font-size:18px}.v-btn--floating.v-btn--large{height:72px;width:72px}.v-btn--floating.v-btn--large .v-icon{font-size:30px}.v-btn--reverse .v-btn__content{flex-direction:row-reverse}.v-btn--reverse.v-btn--column .v-btn__content{flex-direction:column-reverse}.v-btn--absolute,.v-btn--fixed{margin:0}.v-btn.v-btn--absolute{position:absolute}.v-btn.v-btn--fixed{position:fixed}.v-btn--top:not(.v-btn--absolute){top:16px}.v-btn--top.v-btn--absolute{top:-28px}.v-btn--top.v-btn--absolute.v-btn--small{top:-20px}.v-btn--top.v-btn--absolute.v-btn--large{top:-36px}.v-btn--bottom:not(.v-btn--absolute){bottom:16px}.v-btn--bottom.v-btn--absolute{bottom:-28px}.v-btn--bottom.v-btn--absolute.v-btn--small{bottom:-20px}.v-btn--bottom.v-btn--absolute.v-btn--large{bottom:-36px}.v-btn--left{left:16px}.v-btn--right{right:16px}.v-btn.v-btn--disabled{box-shadow:none!important;pointer-events:none}.v-btn:not(.v-btn--disabled):not(.v-btn--floating):not(.v-btn--icon) .v-btn__content .v-icon{transition:none}.v-btn--icon{padding:0}.v-btn--loader{pointer-events:none}.v-btn--loader .v-btn__content{opacity:0}.v-btn__loading{align-items:center;display:flex;height:100%;justify-content:center;left:0;position:absolute;top:0;width:100%}.v-btn__loading .v-icon--left{margin-right:1rem;line-height:inherit}.v-btn__loading .v-icon--right{margin-left:1rem;line-height:inherit}.v-btn.v-btn--outline{border:1px solid;background:transparent!important;box-shadow:none}.v-btn.v-btn--outline:hover{box-shadow:none}.v-btn--block{display:flex;flex:1;margin:6px 0;width:100%}.v-btn--round,.v-btn--round:after{border-radius:28px}.v-btn:not(.v-btn--outline).accent,.v-btn:not(.v-btn--outline).error,.v-btn:not(.v-btn--outline).info,.v-btn:not(.v-btn--outline).primary,.v-btn:not(.v-btn--outline).secondary,.v-btn:not(.v-btn--outline).success,.v-btn:not(.v-btn--outline).warning{color:#fff}.v-progress-circular{position:relative;display:inline-flex;vertical-align:middle}.v-progress-circular svg{width:100%;height:100%;margin:auto;position:absolute;top:0;bottom:0;left:0;right:0;z-index:0}.v-progress-circular--indeterminate svg{-webkit-animation:progress-circular-rotate 1.4s linear infinite;animation:progress-circular-rotate 1.4s linear infinite;-webkit-transform-origin:center center;transform-origin:center center;transition:all .2s ease-in-out}.v-progress-circular--indeterminate .v-progress-circular__overlay{-webkit-animation:progress-circular-dash 1.4s ease-in-out infinite;animation:progress-circular-dash 1.4s ease-in-out infinite;stroke-linecap:round;stroke-dasharray:80,200;stroke-dashoffset:0px}.v-progress-circular__underlay{stroke:rgba(0,0,0,.1);z-index:1}.v-progress-circular__overlay{stroke:currentColor;z-index:2;transition:all .6s ease-in-out}.v-progress-circular__info{position:absolute;top:50%;left:50%;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%)}@-webkit-keyframes progress-circular-dash{0%{stroke-dasharray:1,200;stroke-dashoffset:0px}50%{stroke-dasharray:100,200;stroke-dashoffset:-15px}to{stroke-dasharray:100,200;stroke-dashoffset:-125px}}@keyframes progress-circular-dash{0%{stroke-dasharray:1,200;stroke-dashoffset:0px}50%{stroke-dasharray:100,200;stroke-dashoffset:-15px}to{stroke-dasharray:100,200;stroke-dashoffset:-125px}}@-webkit-keyframes progress-circular-rotate{to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}@keyframes progress-circular-rotate{to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}.theme--light.v-btn-toggle{background:#fff}.theme--light.v-btn-toggle .v-btn{color:rgba(0,0,0,.87)}.theme--light.v-btn-toggle:not(.v-btn-toggle--only-child) .v-btn.v-btn--active:not(:last-child){border-right-color:rgba(0,0,0,.26)}.theme--dark.v-btn-toggle{background:#424242}.theme--dark.v-btn-toggle .v-btn{color:#fff}.theme--dark.v-btn-toggle:not(.v-btn-toggle--only-child) .v-btn.v-btn--active:not(:last-child){border-right-color:hsla(0,0%,100%,.3)}.v-btn-toggle{display:inline-flex;border-radius:2px;transition:.3s cubic-bezier(.25,.8,.5,1);will-change:background,box-shadow}.v-btn-toggle .v-btn{justify-content:center;min-width:auto;width:auto;padding:0 8px;margin:0;opacity:.4;border-radius:0}.v-btn-toggle .v-btn:not(:last-child){border-right:1px solid transparent}.v-btn-toggle .v-btn:after{display:none}.v-btn-toggle .v-btn.v-btn--active{opacity:1}.v-btn-toggle .v-btn span+.v-icon{font-size:medium;margin-left:10px}.v-btn-toggle .v-btn:first-child{border-radius:2px 0 0 2px}.v-btn-toggle .v-btn:last-child{border-radius:0 2px 2px 0}.v-btn-toggle--selected{box-shadow:0 3px 1px -2px rgba(0,0,0,.2),0 2px 2px 0 rgba(0,0,0,.14),0 1px 5px 0 rgba(0,0,0,.12)}.theme--light.v-calendar-weekly{background-color:#fff}.theme--light.v-calendar-weekly .v-calendar-weekly__head-weekday{border-right:1px solid #e0e0e0;color:#000}.theme--light.v-calendar-weekly .v-calendar-weekly__head-weekday.v-past{color:rgba(0,0,0,.38)}.theme--light.v-calendar-weekly .v-calendar-weekly__head-weekday.v-outside{background-color:#f7f7f7}.theme--light.v-calendar-weekly .v-calendar-weekly__day{border-right:1px solid #e0e0e0;border-bottom:1px solid #e0e0e0;color:#000}.theme--light.v-calendar-weekly .v-calendar-weekly__day.v-outside{background-color:#f7f7f7}.theme--dark.v-calendar-weekly{background-color:#303030}.theme--dark.v-calendar-weekly .v-calendar-weekly__head-weekday{border-right:1px solid #9e9e9e;color:#fff}.theme--dark.v-calendar-weekly .v-calendar-weekly__head-weekday.v-past{color:hsla(0,0%,100%,.5)}.theme--dark.v-calendar-weekly .v-calendar-weekly__head-weekday.v-outside{background-color:#202020}.theme--dark.v-calendar-weekly .v-calendar-weekly__day{border-right:1px solid #9e9e9e;border-bottom:1px solid #9e9e9e;color:#fff}.theme--dark.v-calendar-weekly .v-calendar-weekly__day.v-outside{background-color:#202020}.v-calendar-weekly{width:100%;height:100%;display:flex;flex-direction:column}.v-calendar-weekly__head{display:flex}.v-calendar-weekly__head,.v-calendar-weekly__head-weekday{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.v-calendar-weekly__head-weekday{flex:1 0 20px;padding:0 4px;font-size:14px}.v-calendar-weekly__week{display:flex;flex:1}.v-calendar-weekly__day{flex:1;width:0;overflow:hidden;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;position:relative;padding:32px 4px 4px}.v-calendar-weekly__day.v-present .v-calendar-weekly__day-label{border:1px solid}.v-calendar-weekly__day.v-present .v-calendar-weekly__day-month{color:currentColor}.v-calendar-weekly__day-label{position:absolute;text-decoration:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:pointer;box-shadow:none;text-align:center;left:0;top:0;border-radius:16px;width:32px;height:32px;line-height:32px}.v-calendar-weekly__day-label:hover{text-decoration:underline}.v-calendar-weekly__day-month{position:absolute;text-decoration:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;box-shadow:none;top:0;left:36px;height:32px;line-height:32px}.theme--light.v-calendar-daily{background-color:#fff}.theme--light.v-calendar-daily .v-calendar-daily__intervals-head{border-right:1px solid #e0e0e0}.theme--light.v-calendar-daily .v-calendar-daily_head-day{border-right:1px solid #e0e0e0;border-bottom:1px solid #e0e0e0;color:#000}.theme--light.v-calendar-daily .v-calendar-daily_head-day.v-past .v-calendar-daily_head-day-label,.theme--light.v-calendar-daily .v-calendar-daily_head-day.v-past .v-calendar-daily_head-weekday{color:rgba(0,0,0,.38)}.theme--light.v-calendar-daily .v-calendar-daily__intervals-body{border-right:1px solid #e0e0e0}.theme--light.v-calendar-daily .v-calendar-daily__intervals-body .v-calendar-daily__interval-text{color:#424242}.theme--light.v-calendar-daily .v-calendar-daily__day{border-right:1px solid #e0e0e0;border-bottom:1px solid #e0e0e0}.theme--light.v-calendar-daily .v-calendar-daily__day-interval{border-top:1px solid #e0e0e0}.theme--light.v-calendar-daily .v-calendar-daily__day-interval:first-child{border-top:none!important}.theme--dark.v-calendar-daily{background-color:#303030}.theme--dark.v-calendar-daily .v-calendar-daily__intervals-head{border-right:1px solid #9e9e9e}.theme--dark.v-calendar-daily .v-calendar-daily_head-day{border-right:1px solid #9e9e9e;border-bottom:1px solid #9e9e9e;color:#fff}.theme--dark.v-calendar-daily .v-calendar-daily_head-day.v-past .v-calendar-daily_head-day-label,.theme--dark.v-calendar-daily .v-calendar-daily_head-day.v-past .v-calendar-daily_head-weekday{color:hsla(0,0%,100%,.5)}.theme--dark.v-calendar-daily .v-calendar-daily__intervals-body{border-right:1px solid #9e9e9e}.theme--dark.v-calendar-daily .v-calendar-daily__intervals-body .v-calendar-daily__interval-text{color:#eee}.theme--dark.v-calendar-daily .v-calendar-daily__day{border-right:1px solid #616161;border-bottom:1px solid #616161}.theme--dark.v-calendar-daily .v-calendar-daily__day-interval{border-top:1px solid #616161}.theme--dark.v-calendar-daily .v-calendar-daily__day-interval:first-child{border-top:none!important}.v-calendar-daily{display:flex;flex-direction:column;overflow:hidden;height:100%}.v-calendar-daily__head{flex:none;display:flex}.v-calendar-daily__intervals-head{flex:none;width:44px}.v-calendar-daily_head-day{flex:1 1 auto;width:0}.v-calendar-daily_head-weekday{padding:4px 4px 4px 8px;font-size:14px}.v-calendar-daily_head-day-label,.v-calendar-daily_head-weekday{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.v-calendar-daily_head-day-label{font-size:40px;padding:0 4px 4px 8px;line-height:40px;cursor:pointer}.v-calendar-daily_head-day-label:hover{text-decoration:underline}.v-calendar-daily__body{flex:1 1 60%;overflow:hidden;display:flex;position:relative;flex-direction:column}.v-calendar-daily__scroll-area{overflow-y:scroll;flex:1 1 auto;display:flex;align-items:flex-start}.v-calendar-daily__pane{width:100%;overflow-y:hidden;flex:none;display:flex;align-items:flex-start}.v-calendar-daily__day-container{display:flex;flex:1;width:100%;height:100%}.v-calendar-daily__intervals-body{flex:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;width:44px}.v-calendar-daily__interval{text-align:center;border-bottom:none}.v-calendar-daily__interval-text{display:block;position:relative;top:-6px;font-size:10px}.v-calendar-daily__day{flex:1;width:0;position:relative}.theme--light.v-sheet{background-color:#fff;border-color:#fff;color:rgba(0,0,0,.87)}.theme--dark.v-sheet{background-color:#424242;border-color:#424242;color:#fff}.v-sheet{display:block;border-radius:2px;position:relative;transition:.3s cubic-bezier(.25,.8,.5,1)}.v-sheet--tile{border-radius:0}.v-image{z-index:0}.v-image__image,.v-image__placeholder{z-index:-1;position:absolute;top:0;left:0;width:100%;height:100%}.v-image__image{background-repeat:no-repeat}.v-image__image--preload{-webkit-filter:blur(2px);filter:blur(2px)}.v-image__image--contain{background-size:contain}.v-image__image--cover{background-size:cover}.v-responsive{position:relative;overflow:hidden;flex:1 0 auto;display:flex}.v-responsive__content{flex:1 0 0px}.v-responsive__sizer{transition:padding-bottom .2s cubic-bezier(.25,.8,.5,1);flex:0 0 0px}.application--is-rtl .v-carousel__prev{left:auto;right:5px}.application--is-rtl .v-carousel__next{left:5px;right:auto}.v-carousel{width:100%;position:relative;overflow:hidden;box-shadow:0 3px 1px -2px rgba(0,0,0,.2),0 2px 2px 0 rgba(0,0,0,.14),0 1px 5px 0 rgba(0,0,0,.12)}.v-carousel__next,.v-carousel__prev{position:absolute;top:50%;z-index:1;-webkit-transform:translateY(-50%);transform:translateY(-50%)}.v-carousel__next .v-btn,.v-carousel__prev .v-btn{margin:0;height:auto;width:auto}.v-carousel__next .v-btn i,.v-carousel__prev .v-btn i{font-size:48px}.v-carousel__next .v-btn:hover,.v-carousel__prev .v-btn:hover{background:none}.v-carousel__prev{left:5px}.v-carousel__next{right:5px}.v-carousel__controls{background:rgba(0,0,0,.5);align-items:center;bottom:0;display:flex;justify-content:center;left:0;position:absolute;height:50px;list-style-type:none;width:100%;z-index:1}.v-carousel__controls>.v-item-group{flex:0 1 auto}.v-carousel__controls__item{margin:0 8px!important}.v-carousel__controls__item .v-icon{opacity:.5;transition:.3s cubic-bezier(.25,.8,.5,1)}.v-carousel__controls__item--active .v-icon{opacity:1;vertical-align:middle}.v-carousel__controls__item:hover{background:none}.v-carousel__controls__item:hover .v-icon{opacity:.8}.v-window__container{position:relative;transition:.3s cubic-bezier(.25,.8,.5,1)}.v-window__container--is-active{overflow:hidden}.v-window-x-reverse-transition-enter-active,.v-window-x-reverse-transition-leave-active,.v-window-x-transition-enter-active,.v-window-x-transition-leave-active,.v-window-y-reverse-transition-enter-active,.v-window-y-reverse-transition-leave-active,.v-window-y-transition-enter-active,.v-window-y-transition-leave-active{transition:.3s cubic-bezier(.25,.8,.5,1)}.v-window-x-reverse-transition-leave,.v-window-x-reverse-transition-leave-to,.v-window-x-transition-leave,.v-window-x-transition-leave-to,.v-window-y-reverse-transition-leave,.v-window-y-reverse-transition-leave-to,.v-window-y-transition-leave,.v-window-y-transition-leave-to{position:absolute!important;top:0;width:100%}.v-window-x-transition-enter{-webkit-transform:translateX(100%);transform:translateX(100%)}.v-window-x-reverse-transition-enter,.v-window-x-transition-leave-to{-webkit-transform:translateX(-100%);transform:translateX(-100%)}.v-window-x-reverse-transition-leave-to{-webkit-transform:translateX(100%);transform:translateX(100%)}.v-window-y-transition-enter{-webkit-transform:translateY(100%);transform:translateY(100%)}.v-window-y-reverse-transition-enter,.v-window-y-transition-leave-to{-webkit-transform:translateY(-100%);transform:translateY(-100%)}.v-window-y-reverse-transition-leave-to{-webkit-transform:translateY(100%);transform:translateY(100%)}.theme--light.v-data-iterator .v-data-iterator__actions{color:rgba(0,0,0,.54)}.theme--light.v-data-iterator .v-data-iterator__actions__select .v-select .v-input__append-inner,.theme--light.v-data-iterator .v-data-iterator__actions__select .v-select .v-select__selection--comma{color:rgba(0,0,0,.54)!important}.theme--dark.v-data-iterator .v-data-iterator__actions{color:hsla(0,0%,100%,.7)}.theme--dark.v-data-iterator .v-data-iterator__actions__select .v-select .v-input__append-inner,.theme--dark.v-data-iterator .v-data-iterator__actions__select .v-select .v-select__selection--comma{color:hsla(0,0%,100%,.7)!important}.v-data-iterator__actions{display:flex;justify-content:flex-end;align-items:center;font-size:12px;flex-wrap:wrap-reverse}.v-data-iterator__actions .v-btn{color:inherit}.v-data-iterator__actions .v-btn:last-of-type{margin-left:14px}.v-data-iterator__actions__range-controls{display:flex;align-items:center;min-height:48px}.v-data-iterator__actions__pagination{display:block;text-align:center;margin:0 32px 0 24px}.v-data-iterator__actions__select{display:flex;align-items:center;justify-content:flex-end;margin-right:14px;white-space:nowrap}.v-data-iterator__actions__select .v-select{flex:0 1 0;margin:13px 0 13px 34px;padding:0;position:static}.v-data-iterator__actions__select .v-select__selections{flex-wrap:nowrap}.v-data-iterator__actions__select .v-select__selections .v-select__selection--comma{font-size:12px}.theme--light.v-overflow-btn .v-input__control:before,.theme--light.v-overflow-btn .v-input__slot:before{background-color:rgba(0,0,0,.12)!important}.theme--light.v-overflow-btn--editable.v-input--is-focused .v-input__append-inner,.theme--light.v-overflow-btn--editable.v-select--is-menu-active .v-input__append-inner,.theme--light.v-overflow-btn--editable:hover .v-input__append-inner,.theme--light.v-overflow-btn--segmented .v-input__append-inner{border-left:1px solid rgba(0,0,0,.12)}.theme--light.v-overflow-btn.v-input--is-focused .v-input__slot,.theme--light.v-overflow-btn.v-select--is-menu-active .v-input__slot,.theme--light.v-overflow-btn:hover .v-input__slot{background:#fff}.theme--dark.v-overflow-btn .v-input__control:before,.theme--dark.v-overflow-btn .v-input__slot:before{background-color:hsla(0,0%,100%,.12)!important}.theme--dark.v-overflow-btn--editable.v-input--is-focused .v-input__append-inner,.theme--dark.v-overflow-btn--editable.v-select--is-menu-active .v-input__append-inner,.theme--dark.v-overflow-btn--editable:hover .v-input__append-inner,.theme--dark.v-overflow-btn--segmented .v-input__append-inner{border-left:1px solid hsla(0,0%,100%,.12)}.theme--dark.v-overflow-btn.v-input--is-focused .v-input__slot,.theme--dark.v-overflow-btn.v-select--is-menu-active .v-input__slot,.theme--dark.v-overflow-btn:hover .v-input__slot{background:#424242}.v-overflow-btn{margin-top:12px;padding-top:0}.v-overflow-btn:not(.v-overflow-btn--editable)>.v-input__control>.v-input__slot{cursor:pointer}.v-overflow-btn .v-select__slot{height:48px}.v-overflow-btn .v-select__slot input{margin-left:16px;cursor:pointer}.v-overflow-btn .v-select__selection--comma:first-child{margin-left:16px}.v-overflow-btn .v-input__slot{transition:.3s cubic-bezier(.25,.8,.5,1)}.v-overflow-btn .v-input__slot:after{content:none}.v-overflow-btn .v-label{margin-left:16px;top:calc(50% - 10px)}.v-overflow-btn .v-input__append-inner{width:48px;height:48px;align-self:auto;align-items:center;margin-top:0;padding:0;flex-shrink:0}.v-overflow-btn .v-input__append-outer,.v-overflow-btn .v-input__prepend-outer{margin-top:12px;margin-bottom:12px}.v-overflow-btn .v-input__control:before{height:1px;top:-1px;content:\"\";left:0;position:absolute;transition:.3s cubic-bezier(.25,.8,.5,1);width:100%}.v-overflow-btn.v-input--is-focused .v-input__slot,.v-overflow-btn.v-select--is-menu-active .v-input__slot{box-shadow:0 3px 1px -2px rgba(0,0,0,.2),0 2px 2px 0 rgba(0,0,0,.14),0 1px 5px 0 rgba(0,0,0,.12)}.v-overflow-btn .v-select__selections{width:0}.v-overflow-btn--segmented .v-select__selections{flex-wrap:nowrap}.v-overflow-btn--segmented .v-select__selections .v-btn{border-radius:0;margin:0 -16px 0 0;height:48px;width:100%}.v-overflow-btn--segmented .v-select__selections .v-btn__content{justify-content:start}.v-overflow-btn--segmented .v-select__selections .v-btn__content:before{background-color:transparent}.v-overflow-btn--editable .v-select__slot input{cursor:text}.v-overflow-btn--editable .v-input__append-inner,.v-overflow-btn--editable .v-input__append-inner *{cursor:pointer}.theme--light.v-table{background-color:#fff;color:rgba(0,0,0,.87)}.theme--light.v-table thead tr:first-child{border-bottom:1px solid rgba(0,0,0,.12)}.theme--light.v-table thead th{color:rgba(0,0,0,.54)}.theme--light.v-table tbody tr:not(:last-child){border-bottom:1px solid rgba(0,0,0,.12)}.theme--light.v-table tbody tr[active]{background:#f5f5f5}.theme--light.v-table tbody tr:hover:not(.v-datatable__expand-row){background:#eee}.theme--light.v-table tfoot tr{border-top:1px solid rgba(0,0,0,.12)}.theme--dark.v-table{background-color:#424242;color:#fff}.theme--dark.v-table thead tr:first-child{border-bottom:1px solid hsla(0,0%,100%,.12)}.theme--dark.v-table thead th{color:hsla(0,0%,100%,.7)}.theme--dark.v-table tbody tr:not(:last-child){border-bottom:1px solid hsla(0,0%,100%,.12)}.theme--dark.v-table tbody tr[active]{background:#505050}.theme--dark.v-table tbody tr:hover:not(.v-datatable__expand-row){background:#616161}.theme--dark.v-table tfoot tr{border-top:1px solid hsla(0,0%,100%,.12)}.v-table__overflow{width:100%;overflow-x:auto;overflow-y:hidden}table.v-table{border-radius:2px;border-collapse:collapse;border-spacing:0;width:100%;max-width:100%}table.v-table tbody td:first-child,table.v-table tbody td:not(:first-child),table.v-table tbody th:first-child,table.v-table tbody th:not(:first-child),table.v-table thead td:first-child,table.v-table thead td:not(:first-child),table.v-table thead th:first-child,table.v-table thead th:not(:first-child){padding:0 24px}table.v-table thead tr{height:56px}table.v-table thead th{font-weight:500;font-size:12px;transition:.3s cubic-bezier(.25,.8,.5,1);white-space:nowrap;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}table.v-table thead th.sortable{pointer-events:auto}table.v-table thead th>div{width:100%}table.v-table tbody tr{transition:background .3s cubic-bezier(.25,.8,.5,1);will-change:background}table.v-table tbody td,table.v-table tbody th{height:48px}table.v-table tbody td{font-weight:400;font-size:13px}table.v-table .input-group--selection-controls{padding:0}table.v-table .input-group--selection-controls .input-group__details{display:none}table.v-table .input-group--selection-controls.checkbox .v-icon{left:50%;-webkit-transform:translateX(-50%);transform:translateX(-50%)}table.v-table .input-group--selection-controls.checkbox .input-group--selection-controls__ripple{left:50%;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%)}table.v-table tfoot tr{height:48px}table.v-table tfoot tr td{padding:0 24px}.theme--light.v-datatable thead th.column.sortable .v-icon{color:rgba(0,0,0,.38)}.theme--light.v-datatable thead th.column.sortable.active,.theme--light.v-datatable thead th.column.sortable.active .v-icon,.theme--light.v-datatable thead th.column.sortable:hover{color:rgba(0,0,0,.87)}.theme--light.v-datatable .v-datatable__actions{background-color:#fff;color:rgba(0,0,0,.54);border-top:1px solid rgba(0,0,0,.12)}.theme--dark.v-datatable thead th.column.sortable .v-icon{color:hsla(0,0%,100%,.5)}.theme--dark.v-datatable thead th.column.sortable.active,.theme--dark.v-datatable thead th.column.sortable.active .v-icon,.theme--dark.v-datatable thead th.column.sortable:hover{color:#fff}.theme--dark.v-datatable .v-datatable__actions{background-color:#424242;color:hsla(0,0%,100%,.7);border-top:1px solid hsla(0,0%,100%,.12)}.v-datatable .v-input--selection-controls{margin:0;padding:0}.v-datatable thead th.column.sortable{cursor:pointer;outline:0}.v-datatable thead th.column.sortable .v-icon{font-size:16px;display:inline-block;opacity:0;transition:.3s cubic-bezier(.25,.8,.5,1)}.v-datatable thead th.column.sortable:focus .v-icon,.v-datatable thead th.column.sortable:hover .v-icon{opacity:.6}.v-datatable thead th.column.sortable.active{-webkit-transform:none;transform:none}.v-datatable thead th.column.sortable.active .v-icon{opacity:1}.v-datatable thead th.column.sortable.active.desc .v-icon{-webkit-transform:rotate(-180deg);transform:rotate(-180deg)}.v-datatable__actions{display:flex;justify-content:flex-end;align-items:center;font-size:12px;flex-wrap:wrap-reverse}.v-datatable__actions .v-btn{color:inherit}.v-datatable__actions .v-btn:last-of-type{margin-left:14px}.v-datatable__actions__range-controls{display:flex;align-items:center;min-height:48px}.v-datatable__actions__pagination{display:block;text-align:center;margin:0 32px 0 24px}.v-datatable__actions__select{display:flex;align-items:center;justify-content:flex-end;margin-right:14px;white-space:nowrap}.v-datatable__actions__select .v-select{flex:0 1 0;margin:13px 0 13px 34px;padding:0;position:static}.v-datatable__actions__select .v-select__selections{flex-wrap:nowrap}.v-datatable__actions__select .v-select__selections .v-select__selection--comma{font-size:12px}.v-datatable__progress,.v-datatable__progress td,.v-datatable__progress th,.v-datatable__progress tr{height:auto!important}.v-datatable__progress th{padding:0!important}.v-datatable__progress th .v-progress-linear{margin:0}.v-datatable__expand-row{border:none!important}.v-datatable__expand-col{padding:0!important;height:0!important}.v-datatable__expand-col--expanded{border-bottom:1px solid rgba(0,0,0,.12)}.v-datatable__expand-content{transition:height .3s cubic-bezier(.25,.8,.5,1)}.v-datatable__expand-content>.card{border-radius:0;box-shadow:none}.theme--light.v-small-dialog a{color:rgba(0,0,0,.87)}.theme--dark.v-small-dialog a{color:#fff}.theme--light.v-small-dialog__content{background:#fff}.theme--dark.v-small-dialog__content{background:#424242}.theme--light.v-small-dialog__actions{background:#fff}.theme--dark.v-small-dialog__actions{background:#424242}.v-small-dialog{display:block;width:100%;height:100%}.v-small-dialog__content{padding:0 24px}.v-small-dialog__actions{text-align:right;white-space:pre}.v-small-dialog a{display:flex;align-items:center;height:100%;text-decoration:none}.v-small-dialog a>*{width:100%}.v-small-dialog .v-menu__activator{height:100%}.theme--light.v-picker__title{background:#e0e0e0}.theme--dark.v-picker__title{background:#616161}.theme--light.v-picker__body{background:#fff}.theme--dark.v-picker__body{background:#424242}.v-picker{border-radius:2px;contain:layout style;display:inline-flex;flex-direction:column;vertical-align:top;position:relative}.v-picker--full-width{display:flex}.v-picker__title{color:#fff;border-top-left-radius:2px;border-top-right-radius:2px;padding:16px}.v-picker__title__btn{transition:.3s cubic-bezier(.25,.8,.5,1)}.v-picker__title__btn:not(.v-picker__title__btn--active){opacity:.6;cursor:pointer}.v-picker__title__btn:not(.v-picker__title__btn--active):hover:not(:focus){opacity:1}.v-picker__title__btn--readonly{pointer-events:none}.v-picker__title__btn--active{opacity:1}.v-picker__body{height:auto;overflow:hidden;position:relative;z-index:0;flex:1 0 auto;display:flex;flex-direction:column;align-items:center}.v-picker__body>div{width:100%}.v-picker__body>div.fade-transition-leave-active{position:absolute}.v-picker--landscape .v-picker__title{border-top-right-radius:0;border-bottom-right-radius:0;width:170px;position:absolute;top:0;left:0;height:100%;z-index:1}.v-picker--landscape .v-picker__actions,.v-picker--landscape .v-picker__body{margin-left:170px}.application--is-rtl .v-date-picker-title .v-picker__title__btn{text-align:right}.v-date-picker-title{display:flex;justify-content:space-between;flex-direction:column;flex-wrap:wrap;line-height:1}.v-date-picker-title__year{align-items:center;display:inline-flex;font-size:14px;font-weight:500;margin-bottom:8px}.v-date-picker-title__date{font-size:34px;text-align:left;font-weight:500;position:relative;overflow:hidden;padding-bottom:8px;margin-bottom:-8px}.v-date-picker-title__date>div{position:relative}.v-date-picker-title--disabled{pointer-events:none}.theme--light.v-date-picker-header .v-date-picker-header__value:not(.v-date-picker-header__value--disabled) button:not(:hover):not(:focus){color:rgba(0,0,0,.87)}.theme--light.v-date-picker-header .v-date-picker-header__value--disabled button{color:rgba(0,0,0,.38)}.theme--dark.v-date-picker-header .v-date-picker-header__value:not(.v-date-picker-header__value--disabled) button:not(:hover):not(:focus){color:#fff}.theme--dark.v-date-picker-header .v-date-picker-header__value--disabled button{color:hsla(0,0%,100%,.5)}.v-date-picker-header{padding:4px 16px;align-items:center;display:flex;justify-content:space-between;position:relative}.v-date-picker-header .v-btn{margin:0;z-index:auto}.v-date-picker-header .v-icon{cursor:pointer;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.v-date-picker-header__value{flex:1;text-align:center;position:relative;overflow:hidden}.v-date-picker-header__value div{transition:.3s cubic-bezier(.25,.8,.5,1);width:100%}.v-date-picker-header__value button{cursor:pointer;font-weight:700;outline:none;padding:.5rem;transition:.3s cubic-bezier(.25,.8,.5,1)}.v-date-picker-header--disabled{pointer-events:none}.theme--light.v-date-picker-table .v-date-picker-table--date__week,.theme--light.v-date-picker-table th{color:rgba(0,0,0,.38)}.theme--dark.v-date-picker-table .v-date-picker-table--date__week,.theme--dark.v-date-picker-table th{color:hsla(0,0%,100%,.5)}.v-date-picker-table{position:relative;padding:0 12px;height:242px}.v-date-picker-table table{transition:.3s cubic-bezier(.25,.8,.5,1);top:0;table-layout:fixed;width:100%}.v-date-picker-table td,.v-date-picker-table th{text-align:center;position:relative}.v-date-picker-table th{font-size:12px}.v-date-picker-table--date .v-btn{height:32px;width:32px}.v-date-picker-table .v-btn{z-index:auto;margin:0;font-size:12px}.v-date-picker-table .v-btn.v-btn--active{color:#fff}.v-date-picker-table--month td{width:33.333333%;height:56px;vertical-align:middle;text-align:center}.v-date-picker-table--month td .v-btn{margin:0 auto;max-width:160px;min-width:40px;width:100%}.v-date-picker-table--date th{padding:8px 0;font-weight:600}.v-date-picker-table--date td{width:45px}.v-date-picker-table__events{height:8px;left:0;position:absolute;text-align:center;white-space:pre;width:100%}.v-date-picker-table__events>div{border-radius:50%;display:inline-block;height:8px;margin:0 1px;width:8px}.v-date-picker-table--date .v-date-picker-table__events{bottom:6px}.v-date-picker-table--month .v-date-picker-table__events{bottom:8px}.v-date-picker-table--disabled{pointer-events:none}.v-date-picker-years{font-size:16px;font-weight:400;height:286px;list-style-type:none;overflow:auto;padding:0;text-align:center}.v-date-picker-years li{cursor:pointer;padding:8px 0;transition:none}.v-date-picker-years li.active{font-size:26px;font-weight:500;padding:10px 0}.v-date-picker-years li:hover{background:rgba(0,0,0,.12)}.v-picker--landscape .v-date-picker-years{height:286px}.theme--light.v-expansion-panel .v-expansion-panel__container{border-top:1px solid rgba(0,0,0,.12);background-color:#fff;color:rgba(0,0,0,.87)}.theme--light.v-expansion-panel .v-expansion-panel__container .v-expansion-panel__header .v-expansion-panel__header__icon .v-icon{color:rgba(0,0,0,.54)}.theme--light.v-expansion-panel .v-expansion-panel__container--disabled{color:rgba(0,0,0,.38)}.theme--light.v-expansion-panel--focusable .v-expansion-panel__container:focus{background-color:#eee}.theme--dark.v-expansion-panel .v-expansion-panel__container{border-top:1px solid hsla(0,0%,100%,.12);background-color:#424242;color:#fff}.theme--dark.v-expansion-panel .v-expansion-panel__container .v-expansion-panel__header .v-expansion-panel__header__icon .v-icon{color:#fff}.theme--dark.v-expansion-panel .v-expansion-panel__container--disabled{color:hsla(0,0%,100%,.5)}.theme--dark.v-expansion-panel--focusable .v-expansion-panel__container:focus{background-color:#494949}.v-expansion-panel{display:flex;flex-wrap:wrap;justify-content:center;list-style-type:none;padding:0;text-align:left;width:100%;box-shadow:0 2px 1px -1px rgba(0,0,0,.2),0 1px 1px 0 rgba(0,0,0,.14),0 1px 3px 0 rgba(0,0,0,.12)}.v-expansion-panel__container{flex:1 0 100%;max-width:100%;outline:none;transition:.3s cubic-bezier(.25,.8,.5,1)}.v-expansion-panel__container:first-child{border-top:none!important}.v-expansion-panel__container .v-expansion-panel__header__iconnel__header__icon{margin-left:auto}.v-expansion-panel__container--disabled .v-expansion-panel__header{pointer-events:none}.v-expansion-panel__container--active>.v-expansion-panel__header .v-expansion-panel__header__icon .v-icon{-webkit-transform:rotate(-180deg);transform:rotate(-180deg)}.v-expansion-panel__header{display:flex;cursor:pointer;align-items:center;position:relative;padding:12px 24px;min-height:48px}.v-expansion-panel__header>:not(.v-expansion-panel__header__icon){flex:1 1 auto}.v-expansion-panel__body{transition:.3s cubic-bezier(.25,.8,.5,1)}.v-expansion-panel__body>.v-card{border-radius:0;box-shadow:0 0 0 0 rgba(0,0,0,.2),0 0 0 0 rgba(0,0,0,.14),0 0 0 0 rgba(0,0,0,.12)!important}.v-expansion-panel--inset,.v-expansion-panel--popout{box-shadow:0 0 0 0 rgba(0,0,0,.2),0 0 0 0 rgba(0,0,0,.14),0 0 0 0 rgba(0,0,0,.12)}.v-expansion-panel--inset .v-expansion-panel__container--active,.v-expansion-panel--popout .v-expansion-panel__container--active{margin:16px;box-shadow:0 3px 3px -2px rgba(0,0,0,.2),0 3px 4px 0 rgba(0,0,0,.14),0 1px 8px 0 rgba(0,0,0,.12)}.v-expansion-panel--inset .v-expansion-panel__container,.v-expansion-panel--popout .v-expansion-panel__container{max-width:95%}.v-expansion-panel--popout .v-expansion-panel__container--active{max-width:100%}.v-expansion-panel--inset .v-expansion-panel__container--active{max-width:85%}.theme--light.v-footer{background:#f5f5f5;color:rgba(0,0,0,.87)}.theme--dark.v-footer{background:#212121;color:#fff}.v-footer{align-items:center;display:flex;flex:0 1 auto!important;min-height:36px;transition:.2s cubic-bezier(.4,0,.2,1)}.v-footer--absolute,.v-footer--fixed{bottom:0;left:0;width:100%;z-index:3}.v-footer--inset{z-index:2}.v-footer--absolute{position:absolute}.v-footer--fixed{position:fixed}.v-form>.container{padding:16px}.v-form>.container>.layout>.flex{padding:8px}.v-form>.container>.layout:only-child{margin:-8px}.v-form>.container>.layout:not(:only-child){margin:auto -8px}.container{flex:1 1 100%;margin:auto;padding:24px;width:100%}.container.fluid{max-width:100%}.container.fill-height{align-items:center;display:flex}.container.fill-height>.layout{height:100%;flex:1 1 auto}.container.grid-list-xs .layout .flex{padding:1px}.container.grid-list-xs .layout:only-child{margin:-1px}.container.grid-list-xs .layout:not(:only-child){margin:auto -1px}.container.grid-list-xs :not(:only-child) .layout:first-child{margin-top:-1px}.container.grid-list-xs :not(:only-child) .layout:last-child{margin-bottom:-1px}.container.grid-list-sm .layout .flex{padding:2px}.container.grid-list-sm .layout:only-child{margin:-2px}.container.grid-list-sm .layout:not(:only-child){margin:auto -2px}.container.grid-list-sm :not(:only-child) .layout:first-child{margin-top:-2px}.container.grid-list-sm :not(:only-child) .layout:last-child{margin-bottom:-2px}.container.grid-list-md .layout .flex{padding:4px}.container.grid-list-md .layout:only-child{margin:-4px}.container.grid-list-md .layout:not(:only-child){margin:auto -4px}.container.grid-list-md :not(:only-child) .layout:first-child{margin-top:-4px}.container.grid-list-md :not(:only-child) .layout:last-child{margin-bottom:-4px}.container.grid-list-lg .layout .flex{padding:8px}.container.grid-list-lg .layout:only-child{margin:-8px}.container.grid-list-lg .layout:not(:only-child){margin:auto -8px}.container.grid-list-lg :not(:only-child) .layout:first-child{margin-top:-8px}.container.grid-list-lg :not(:only-child) .layout:last-child{margin-bottom:-8px}.container.grid-list-xl .layout .flex{padding:12px}.container.grid-list-xl .layout:only-child{margin:-12px}.container.grid-list-xl .layout:not(:only-child){margin:auto -12px}.container.grid-list-xl :not(:only-child) .layout:first-child{margin-top:-12px}.container.grid-list-xl :not(:only-child) .layout:last-child{margin-bottom:-12px}.layout{display:flex;flex:1 1 auto;flex-wrap:nowrap;min-width:0}.layout.row{flex-direction:row}.layout.row.reverse{flex-direction:row-reverse}.layout.column{flex-direction:column}.layout.column.reverse{flex-direction:column-reverse}.layout.column>.flex{max-width:100%}.layout.wrap{flex-wrap:wrap}.child-flex>*,.flex{flex:1 1 auto;max-width:100%}.align-start{align-items:flex-start}.align-end{align-items:flex-end}.align-center{align-items:center}.align-baseline{align-items:baseline}.align-self-start{align-self:flex-start}.align-self-end{align-self:flex-end}.align-self-center{align-self:center}.align-self-baseline{align-self:baseline}.align-content-start{align-content:flex-start}.align-content-end{align-content:flex-end}.align-content-center{align-content:center}.align-content-space-between{align-content:space-between}.align-content-space-around{align-content:space-around}.justify-start{justify-content:flex-start}.justify-end{justify-content:flex-end}.justify-center{justify-content:center}.justify-space-around{justify-content:space-around}.justify-space-between{justify-content:space-between}.justify-self-start{justify-self:flex-start}.justify-self-end{justify-self:flex-end}.justify-self-center{justify-self:center}.justify-self-baseline{justify-self:baseline}.grow,.spacer{flex-grow:1!important}.grow{flex-shrink:0!important}.shrink{flex-grow:0!important;flex-shrink:1!important}.scroll-y{overflow-y:auto}.fill-height{height:100%}.hide-overflow{overflow:hidden!important}.show-overflow{overflow:visible!important}.ellipsis,.no-wrap{white-space:nowrap}.ellipsis{overflow:hidden;text-overflow:ellipsis}.d-flex{display:flex!important}.d-inline-flex{display:inline-flex!important}.d-flex>*,.d-inline-flex>*{flex:1 1 auto!important}.d-block{display:block!important}.d-inline-block{display:inline-block!important}.d-inline{display:inline!important}.d-none{display:none!important}@media only screen and (min-width:960px){.container{max-width:900px}}@media only screen and (min-width:1264px){.container{max-width:1185px}}@media only screen and (min-width:1904px){.container{max-width:1785px}}@media only screen and (max-width:959px){.container{padding:16px}}@media (min-width:0){.flex.xs1{flex-basis:8.333333333333332%;flex-grow:0;max-width:8.333333333333332%}.flex.order-xs1{order:1}.flex.xs2{flex-basis:16.666666666666664%;flex-grow:0;max-width:16.666666666666664%}.flex.order-xs2{order:2}.flex.xs3{flex-basis:25%;flex-grow:0;max-width:25%}.flex.order-xs3{order:3}.flex.xs4{flex-basis:33.33333333333333%;flex-grow:0;max-width:33.33333333333333%}.flex.order-xs4{order:4}.flex.xs5{flex-basis:41.66666666666667%;flex-grow:0;max-width:41.66666666666667%}.flex.order-xs5{order:5}.flex.xs6{flex-basis:50%;flex-grow:0;max-width:50%}.flex.order-xs6{order:6}.flex.xs7{flex-basis:58.333333333333336%;flex-grow:0;max-width:58.333333333333336%}.flex.order-xs7{order:7}.flex.xs8{flex-basis:66.66666666666666%;flex-grow:0;max-width:66.66666666666666%}.flex.order-xs8{order:8}.flex.xs9{flex-basis:75%;flex-grow:0;max-width:75%}.flex.order-xs9{order:9}.flex.xs10{flex-basis:83.33333333333334%;flex-grow:0;max-width:83.33333333333334%}.flex.order-xs10{order:10}.flex.xs11{flex-basis:91.66666666666666%;flex-grow:0;max-width:91.66666666666666%}.flex.order-xs11{order:11}.flex.xs12{flex-basis:100%;flex-grow:0;max-width:100%}.flex.order-xs12{order:12}.flex.offset-xs0{margin-left:0}.flex.offset-xs1{margin-left:8.333333333333332%}.flex.offset-xs2{margin-left:16.666666666666664%}.flex.offset-xs3{margin-left:25%}.flex.offset-xs4{margin-left:33.33333333333333%}.flex.offset-xs5{margin-left:41.66666666666667%}.flex.offset-xs6{margin-left:50%}.flex.offset-xs7{margin-left:58.333333333333336%}.flex.offset-xs8{margin-left:66.66666666666666%}.flex.offset-xs9{margin-left:75%}.flex.offset-xs10{margin-left:83.33333333333334%}.flex.offset-xs11{margin-left:91.66666666666666%}.flex.offset-xs12{margin-left:100%}}@media (min-width:600px){.flex.sm1{flex-basis:8.333333333333332%;flex-grow:0;max-width:8.333333333333332%}.flex.order-sm1{order:1}.flex.sm2{flex-basis:16.666666666666664%;flex-grow:0;max-width:16.666666666666664%}.flex.order-sm2{order:2}.flex.sm3{flex-basis:25%;flex-grow:0;max-width:25%}.flex.order-sm3{order:3}.flex.sm4{flex-basis:33.33333333333333%;flex-grow:0;max-width:33.33333333333333%}.flex.order-sm4{order:4}.flex.sm5{flex-basis:41.66666666666667%;flex-grow:0;max-width:41.66666666666667%}.flex.order-sm5{order:5}.flex.sm6{flex-basis:50%;flex-grow:0;max-width:50%}.flex.order-sm6{order:6}.flex.sm7{flex-basis:58.333333333333336%;flex-grow:0;max-width:58.333333333333336%}.flex.order-sm7{order:7}.flex.sm8{flex-basis:66.66666666666666%;flex-grow:0;max-width:66.66666666666666%}.flex.order-sm8{order:8}.flex.sm9{flex-basis:75%;flex-grow:0;max-width:75%}.flex.order-sm9{order:9}.flex.sm10{flex-basis:83.33333333333334%;flex-grow:0;max-width:83.33333333333334%}.flex.order-sm10{order:10}.flex.sm11{flex-basis:91.66666666666666%;flex-grow:0;max-width:91.66666666666666%}.flex.order-sm11{order:11}.flex.sm12{flex-basis:100%;flex-grow:0;max-width:100%}.flex.order-sm12{order:12}.flex.offset-sm0{margin-left:0}.flex.offset-sm1{margin-left:8.333333333333332%}.flex.offset-sm2{margin-left:16.666666666666664%}.flex.offset-sm3{margin-left:25%}.flex.offset-sm4{margin-left:33.33333333333333%}.flex.offset-sm5{margin-left:41.66666666666667%}.flex.offset-sm6{margin-left:50%}.flex.offset-sm7{margin-left:58.333333333333336%}.flex.offset-sm8{margin-left:66.66666666666666%}.flex.offset-sm9{margin-left:75%}.flex.offset-sm10{margin-left:83.33333333333334%}.flex.offset-sm11{margin-left:91.66666666666666%}.flex.offset-sm12{margin-left:100%}}@media (min-width:960px){.flex.md1{flex-basis:8.333333333333332%;flex-grow:0;max-width:8.333333333333332%}.flex.order-md1{order:1}.flex.md2{flex-basis:16.666666666666664%;flex-grow:0;max-width:16.666666666666664%}.flex.order-md2{order:2}.flex.md3{flex-basis:25%;flex-grow:0;max-width:25%}.flex.order-md3{order:3}.flex.md4{flex-basis:33.33333333333333%;flex-grow:0;max-width:33.33333333333333%}.flex.order-md4{order:4}.flex.md5{flex-basis:41.66666666666667%;flex-grow:0;max-width:41.66666666666667%}.flex.order-md5{order:5}.flex.md6{flex-basis:50%;flex-grow:0;max-width:50%}.flex.order-md6{order:6}.flex.md7{flex-basis:58.333333333333336%;flex-grow:0;max-width:58.333333333333336%}.flex.order-md7{order:7}.flex.md8{flex-basis:66.66666666666666%;flex-grow:0;max-width:66.66666666666666%}.flex.order-md8{order:8}.flex.md9{flex-basis:75%;flex-grow:0;max-width:75%}.flex.order-md9{order:9}.flex.md10{flex-basis:83.33333333333334%;flex-grow:0;max-width:83.33333333333334%}.flex.order-md10{order:10}.flex.md11{flex-basis:91.66666666666666%;flex-grow:0;max-width:91.66666666666666%}.flex.order-md11{order:11}.flex.md12{flex-basis:100%;flex-grow:0;max-width:100%}.flex.order-md12{order:12}.flex.offset-md0{margin-left:0}.flex.offset-md1{margin-left:8.333333333333332%}.flex.offset-md2{margin-left:16.666666666666664%}.flex.offset-md3{margin-left:25%}.flex.offset-md4{margin-left:33.33333333333333%}.flex.offset-md5{margin-left:41.66666666666667%}.flex.offset-md6{margin-left:50%}.flex.offset-md7{margin-left:58.333333333333336%}.flex.offset-md8{margin-left:66.66666666666666%}.flex.offset-md9{margin-left:75%}.flex.offset-md10{margin-left:83.33333333333334%}.flex.offset-md11{margin-left:91.66666666666666%}.flex.offset-md12{margin-left:100%}}@media (min-width:1264px){.flex.lg1{flex-basis:8.333333333333332%;flex-grow:0;max-width:8.333333333333332%}.flex.order-lg1{order:1}.flex.lg2{flex-basis:16.666666666666664%;flex-grow:0;max-width:16.666666666666664%}.flex.order-lg2{order:2}.flex.lg3{flex-basis:25%;flex-grow:0;max-width:25%}.flex.order-lg3{order:3}.flex.lg4{flex-basis:33.33333333333333%;flex-grow:0;max-width:33.33333333333333%}.flex.order-lg4{order:4}.flex.lg5{flex-basis:41.66666666666667%;flex-grow:0;max-width:41.66666666666667%}.flex.order-lg5{order:5}.flex.lg6{flex-basis:50%;flex-grow:0;max-width:50%}.flex.order-lg6{order:6}.flex.lg7{flex-basis:58.333333333333336%;flex-grow:0;max-width:58.333333333333336%}.flex.order-lg7{order:7}.flex.lg8{flex-basis:66.66666666666666%;flex-grow:0;max-width:66.66666666666666%}.flex.order-lg8{order:8}.flex.lg9{flex-basis:75%;flex-grow:0;max-width:75%}.flex.order-lg9{order:9}.flex.lg10{flex-basis:83.33333333333334%;flex-grow:0;max-width:83.33333333333334%}.flex.order-lg10{order:10}.flex.lg11{flex-basis:91.66666666666666%;flex-grow:0;max-width:91.66666666666666%}.flex.order-lg11{order:11}.flex.lg12{flex-basis:100%;flex-grow:0;max-width:100%}.flex.order-lg12{order:12}.flex.offset-lg0{margin-left:0}.flex.offset-lg1{margin-left:8.333333333333332%}.flex.offset-lg2{margin-left:16.666666666666664%}.flex.offset-lg3{margin-left:25%}.flex.offset-lg4{margin-left:33.33333333333333%}.flex.offset-lg5{margin-left:41.66666666666667%}.flex.offset-lg6{margin-left:50%}.flex.offset-lg7{margin-left:58.333333333333336%}.flex.offset-lg8{margin-left:66.66666666666666%}.flex.offset-lg9{margin-left:75%}.flex.offset-lg10{margin-left:83.33333333333334%}.flex.offset-lg11{margin-left:91.66666666666666%}.flex.offset-lg12{margin-left:100%}}@media (min-width:1904px){.flex.xl1{flex-basis:8.333333333333332%;flex-grow:0;max-width:8.333333333333332%}.flex.order-xl1{order:1}.flex.xl2{flex-basis:16.666666666666664%;flex-grow:0;max-width:16.666666666666664%}.flex.order-xl2{order:2}.flex.xl3{flex-basis:25%;flex-grow:0;max-width:25%}.flex.order-xl3{order:3}.flex.xl4{flex-basis:33.33333333333333%;flex-grow:0;max-width:33.33333333333333%}.flex.order-xl4{order:4}.flex.xl5{flex-basis:41.66666666666667%;flex-grow:0;max-width:41.66666666666667%}.flex.order-xl5{order:5}.flex.xl6{flex-basis:50%;flex-grow:0;max-width:50%}.flex.order-xl6{order:6}.flex.xl7{flex-basis:58.333333333333336%;flex-grow:0;max-width:58.333333333333336%}.flex.order-xl7{order:7}.flex.xl8{flex-basis:66.66666666666666%;flex-grow:0;max-width:66.66666666666666%}.flex.order-xl8{order:8}.flex.xl9{flex-basis:75%;flex-grow:0;max-width:75%}.flex.order-xl9{order:9}.flex.xl10{flex-basis:83.33333333333334%;flex-grow:0;max-width:83.33333333333334%}.flex.order-xl10{order:10}.flex.xl11{flex-basis:91.66666666666666%;flex-grow:0;max-width:91.66666666666666%}.flex.order-xl11{order:11}.flex.xl12{flex-basis:100%;flex-grow:0;max-width:100%}.flex.order-xl12{order:12}.flex.offset-xl0{margin-left:0}.flex.offset-xl1{margin-left:8.333333333333332%}.flex.offset-xl2{margin-left:16.666666666666664%}.flex.offset-xl3{margin-left:25%}.flex.offset-xl4{margin-left:33.33333333333333%}.flex.offset-xl5{margin-left:41.66666666666667%}.flex.offset-xl6{margin-left:50%}.flex.offset-xl7{margin-left:58.333333333333336%}.flex.offset-xl8{margin-left:66.66666666666666%}.flex.offset-xl9{margin-left:75%}.flex.offset-xl10{margin-left:83.33333333333334%}.flex.offset-xl11{margin-left:91.66666666666666%}.flex.offset-xl12{margin-left:100%}}.v-content{transition:none;display:flex;flex:1 0 auto;max-width:100%}.v-content[data-booted=true]{transition:.2s cubic-bezier(.4,0,.2,1)}.v-content__wrap{flex:1 1 auto;max-width:100%;position:relative}@media print{@-moz-document url-prefix(){.v-content{display:block}}}.theme--light.v-jumbotron .v-jumbotron__content{color:rgba(0,0,0,.87)}.theme--dark.v-jumbotron .v-jumbotron__content{color:#fff}.v-jumbotron{display:block;top:0;transition:.3s cubic-bezier(.25,.8,.5,1);width:100%}.v-jumbotron__wrapper{height:100%;overflow:hidden;position:relative;transition:inherit;width:100%}.v-jumbotron__background{position:absolute;top:0;left:0;right:0;bottom:0;contain:strict;transition:inherit}.v-jumbotron__image{position:absolute;top:50%;left:50%;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%);min-width:100%;will-change:transform;transition:inherit}.v-jumbotron__content{height:100%;position:relative;transition:inherit}.theme--light.v-navigation-drawer{background-color:#fff}.theme--light.v-navigation-drawer:not(.v-navigation-drawer--floating) .v-navigation-drawer__border{background-color:rgba(0,0,0,.12)}.theme--light.v-navigation-drawer .v-divider{border-color:rgba(0,0,0,.12)}.theme--dark.v-navigation-drawer{background-color:#424242}.theme--dark.v-navigation-drawer:not(.v-navigation-drawer--floating) .v-navigation-drawer__border{background-color:hsla(0,0%,100%,.12)}.theme--dark.v-navigation-drawer .v-divider{border-color:hsla(0,0%,100%,.12)}.v-navigation-drawer{transition:none;display:block;left:0;max-width:100%;overflow-y:auto;overflow-x:hidden;pointer-events:auto;top:0;will-change:transform;z-index:3;-webkit-overflow-scrolling:touch}.v-navigation-drawer[data-booted=true]{transition:.2s cubic-bezier(.4,0,.2,1);transition-property:width,-webkit-transform;transition-property:transform,width;transition-property:transform,width,-webkit-transform}.v-navigation-drawer__border{position:absolute;right:0;top:0;height:100%;width:1px}.v-navigation-drawer.v-navigation-drawer--right:after{left:0;right:auto}.v-navigation-drawer--right{left:auto;right:0}.v-navigation-drawer--right>.v-navigation-drawer__border{right:auto;left:0}.v-navigation-drawer--absolute{position:absolute}.v-navigation-drawer--fixed{position:fixed}.v-navigation-drawer--floating:after{display:none}.v-navigation-drawer--mini-variant{overflow:hidden}.v-navigation-drawer--mini-variant .v-list__group__header__prepend-icon{flex:1 0 auto;justify-content:center;width:100%}.v-navigation-drawer--mini-variant .v-list__tile__action,.v-navigation-drawer--mini-variant .v-list__tile__avatar{justify-content:center;min-width:48px}.v-navigation-drawer--mini-variant .v-list__tile:after,.v-navigation-drawer--mini-variant .v-list__tile__content{opacity:0}.v-navigation-drawer--mini-variant .v-divider,.v-navigation-drawer--mini-variant .v-list--group,.v-navigation-drawer--mini-variant .v-subheader{display:none!important}.v-navigation-drawer--is-mobile,.v-navigation-drawer--temporary{z-index:6}.v-navigation-drawer--is-mobile:not(.v-navigation-drawer--close),.v-navigation-drawer--temporary:not(.v-navigation-drawer--close){box-shadow:0 8px 10px -5px rgba(0,0,0,.2),0 16px 24px 2px rgba(0,0,0,.14),0 6px 30px 5px rgba(0,0,0,.12)}.v-navigation-drawer .v-list{background:inherit}.v-navigation-drawer>.v-list .v-list__tile{transition:none;font-weight:500}.v-navigation-drawer>.v-list .v-list__tile--active .v-list__tile__title{color:inherit}.v-navigation-drawer>.v-list .v-list--group .v-list__tile{font-weight:400}.v-navigation-drawer>.v-list .v-list--group__header--active:after{background:transparent}.v-navigation-drawer>.v-list:not(.v-list--dense) .v-list__tile{font-size:14px}.theme--light.v-pagination .v-pagination__item{background:#fff;color:#000;width:auto;min-width:34px;padding:0 5px}.theme--light.v-pagination .v-pagination__item--active{color:#fff}.theme--light.v-pagination .v-pagination__navigation{background:#fff}.theme--light.v-pagination .v-pagination__navigation .v-icon{color:rgba(0,0,0,.54)}.theme--dark.v-pagination .v-pagination__item{background:#424242;color:#fff;width:auto;min-width:34px;padding:0 5px}.theme--dark.v-pagination .v-pagination__item--active{color:#fff}.theme--dark.v-pagination .v-pagination__navigation{background:#424242}.theme--dark.v-pagination .v-pagination__navigation .v-icon{color:#fff}.v-pagination{align-items:center;display:inline-flex;list-style-type:none;margin:0;max-width:100%;padding:0}.v-pagination>li{align-items:center;display:flex}.v-pagination--circle .v-pagination__item,.v-pagination--circle .v-pagination__more,.v-pagination--circle .v-pagination__navigation{border-radius:50%}.v-pagination--disabled{pointer-events:none;opacity:.6}.v-pagination__item{box-shadow:0 3px 1px -2px rgba(0,0,0,.2),0 2px 2px 0 rgba(0,0,0,.14),0 1px 5px 0 rgba(0,0,0,.12);border-radius:4px;font-size:14px;background:transparent;height:34px;width:34px;margin:.3rem;text-decoration:none;transition:.3s cubic-bezier(0,0,.2,1)}.v-pagination__item--active{box-shadow:0 2px 4px -1px rgba(0,0,0,.2),0 4px 5px 0 rgba(0,0,0,.14),0 1px 10px 0 rgba(0,0,0,.12)}.v-pagination__navigation{box-shadow:0 3px 1px -2px rgba(0,0,0,.2),0 2px 2px 0 rgba(0,0,0,.14),0 1px 5px 0 rgba(0,0,0,.12);display:inline-flex;justify-content:center;align-items:center;text-decoration:none;height:2rem;border-radius:4px;width:2rem;margin:.3rem 10px}.v-pagination__navigation .v-icon{font-size:2rem;transition:.2s cubic-bezier(.4,0,.6,1);vertical-align:middle}.v-pagination__navigation--disabled{opacity:.6;pointer-events:none}.v-pagination__more{margin:.3rem;display:inline-flex;align-items:flex-end;justify-content:center;height:2rem;width:2rem}.v-parallax{position:relative;overflow:hidden;z-index:0}.v-parallax__image-container{position:absolute;top:0;left:0;right:0;bottom:0;z-index:1;contain:strict}.v-parallax__image{position:absolute;bottom:0;left:50%;min-width:100%;min-height:100%;display:none;-webkit-transform:translate(-50%);transform:translate(-50%);will-change:transform;transition:opacity .3s cubic-bezier(.25,.8,.5,1);z-index:1}.v-parallax__content{color:#fff;height:100%;z-index:2;position:relative;display:flex;flex-direction:column;justify-content:center;padding:0 1rem}.v-input--radio-group__input{display:flex;width:100%}.v-input--radio-group--column .v-input--radio-group__input>.v-label{padding-bottom:8px}.v-input--radio-group--row .v-input--radio-group__input>.v-label{padding-right:8px}.v-input--radio-group--row .v-input--radio-group__input{flex-direction:row;flex-wrap:wrap}.v-input--radio-group--column .v-radio:not(:last-child):not(:only-child){margin-bottom:8px}.v-input--radio-group--column .v-input--radio-group__input{flex-direction:column}.theme--light.v-radio--is-disabled label{color:rgba(0,0,0,.38)}.theme--light.v-radio--is-disabled .v-icon{color:rgba(0,0,0,.26)!important}.theme--dark.v-radio--is-disabled label{color:hsla(0,0%,100%,.5)}.theme--dark.v-radio--is-disabled .v-icon{color:hsla(0,0%,100%,.3)!important}.v-radio{align-items:center;display:flex;height:auto;margin-right:16px;outline:none}.v-radio--is-disabled{pointer-events:none}.theme--light.v-input--range-slider.v-input--slider.v-input--is-disabled .v-slider.v-slider .v-slider__thumb{background:#bdbdbd}.theme--dark.v-input--range-slider.v-input--slider.v-input--is-disabled .v-slider.v-slider .v-slider__thumb{background:#424242}.v-input--range-slider.v-input--is-disabled .v-slider__track-fill{display:none}.v-input--range-slider.v-input--is-disabled.v-input--slider .v-slider.v-slider .v-slider__thumb{border-color:transparent}.theme--light.v-input--slider .v-slider__track,.theme--light.v-input--slider .v-slider__track-fill{background:rgba(0,0,0,.26)}.theme--light.v-input--slider .v-slider__track__container:after{border:1px solid rgba(0,0,0,.87)}.theme--light.v-input--slider .v-slider__ticks{border-color:rgba(0,0,0,.87);color:rgba(0,0,0,.54)}.theme--light.v-input--slider:not(.v-input--is-dirty) .v-slider__thumb-label{background:rgba(0,0,0,.26)}.theme--light.v-input--slider:not(.v-input--is-dirty) .v-slider__thumb{border:3px solid rgba(0,0,0,.26)}.theme--light.v-input--slider:not(.v-input--is-dirty).v-input--slider--is-active .v-slider__thumb{border:3px solid rgba(0,0,0,.38)}.theme--light.v-input--slider.v-input--is-disabled .v-slider__thumb{border:5px solid rgba(0,0,0,.26)}.theme--light.v-input--slider.v-input--is-disabled.v-input--is-dirty .v-slider__thumb{background:rgba(0,0,0,.26)}.theme--light.v-input--slider.v-input--slider--is-active .v-slider__track{background:rgba(0,0,0,.38)}.theme--dark.v-input--slider .v-slider__track,.theme--dark.v-input--slider .v-slider__track-fill{background:hsla(0,0%,100%,.2)}.theme--dark.v-input--slider .v-slider__track__container:after{border:1px solid #fff}.theme--dark.v-input--slider .v-slider__ticks{border-color:#fff;color:hsla(0,0%,100%,.7)}.theme--dark.v-input--slider:not(.v-input--is-dirty) .v-slider__thumb-label{background:hsla(0,0%,100%,.2)}.theme--dark.v-input--slider:not(.v-input--is-dirty) .v-slider__thumb{border:3px solid hsla(0,0%,100%,.2)}.theme--dark.v-input--slider:not(.v-input--is-dirty).v-input--slider--is-active .v-slider__thumb{border:3px solid hsla(0,0%,100%,.3)}.theme--dark.v-input--slider.v-input--is-disabled .v-slider__thumb{border:5px solid hsla(0,0%,100%,.2)}.theme--dark.v-input--slider.v-input--is-disabled.v-input--is-dirty .v-slider__thumb{background:hsla(0,0%,100%,.2)}.theme--dark.v-input--slider.v-input--slider--is-active .v-slider__track{background:hsla(0,0%,100%,.3)}.application--is-rtl .v-input--slider .v-label{margin-left:16px;margin-right:0}.v-input--slider{margin-top:16px}.v-input--slider.v-input--is-focused .v-slider__thumb-container--is-active:not(.v-slider__thumb-container--show-label):before{opacity:.2;-webkit-transform:scale(1);transform:scale(1)}.v-input--slider.v-input--is-focused .v-slider__track{transition:none}.v-input--slider.v-input--is-focused.v-input--slider--ticks .v-slider .v-slider__tick,.v-input--slider.v-input--is-focused.v-input--slider--ticks .v-slider__track__container:after,.v-input--slider.v-input--slider--ticks .v-slider__ticks.v-slider__ticks--always-show{opacity:1}.v-input--slider.v-input--slider--ticks-labels .v-input__slot{margin-bottom:16px}.v-input--slider.v-input--is-readonly .v-input__control{pointer-events:none}.v-input--slider.v-input--is-disabled .v-slider__thumb{-webkit-transform:translateY(-50%) scale(.45);transform:translateY(-50%) scale(.45)}.v-input--slider.v-input--is-disabled.v-input--is-dirty .v-slider__thumb{border:0 solid transparent}.v-input--slider .v-input__slot>:first-child:not(:only-child){margin-right:16px}.v-slider{cursor:default;display:flex;align-items:center;position:relative;height:32px;flex:1;outline:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.v-slider input{cursor:default;opacity:0;padding:0;width:100%}.v-slider__track__container{height:2px;left:0;overflow:hidden;pointer-events:none;position:absolute;top:50%;-webkit-transform:translateY(-50%);transform:translateY(-50%);width:100%}.v-slider__track__container:after{content:\"\";position:absolute;right:0;top:0;height:2px;transition:.3s cubic-bezier(.25,.8,.5,1);width:2px;opacity:0}.v-slider__thumb,.v-slider__ticks,.v-slider__track{position:absolute;top:0}.v-slider__track{-webkit-transform-origin:right;transform-origin:right;overflow:hidden}.v-slider__track,.v-slider__track-fill{height:2px;left:0;transition:.3s cubic-bezier(.25,.8,.5,1);width:100%}.v-slider__track-fill{position:absolute;-webkit-transform-origin:left;transform-origin:left}.v-slider__ticks-container{position:absolute;left:0;height:2px;width:100%;top:50%;-webkit-transform:translateY(-50%);transform:translateY(-50%)}.v-slider__ticks{opacity:0;border-style:solid;transition:.3s cubic-bezier(.25,.8,.5,1)}.v-slider__ticks>span{position:absolute;top:8px;-webkit-transform:translateX(-50%);transform:translateX(-50%);white-space:nowrap;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.v-slider__ticks:first-child>span{-webkit-transform:translateX(0);transform:translateX(0)}.v-slider__ticks:last-child>span{-webkit-transform:translateX(-100%);transform:translateX(-100%)}.v-slider:not(.v-input--is-dirty) .v-slider__ticks:first-child{border-color:transparent}.v-slider__thumb-container{position:absolute;top:50%;transition:.3s cubic-bezier(.25,.8,.5,1)}.v-slider__thumb-container:before{content:\"\";color:inherit;background:currentColor;height:32px;left:-16px;opacity:0;overflow:hidden;pointer-events:none;position:absolute;top:-16px;-webkit-transform:scale(.2);transform:scale(.2);width:32px;will-change:transform,opacity}.v-slider__thumb,.v-slider__thumb-container:before{border-radius:50%;transition:.3s cubic-bezier(.25,.8,.5,1)}.v-slider__thumb{width:24px;height:24px;left:-12px;top:50%;background:transparent;-webkit-transform:translateY(-50%) scale(.6);transform:translateY(-50%) scale(.6);-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.v-slider--is-active .v-slider__thumb-container--is-active .v-slider__thumb{-webkit-transform:translateY(-50%) scale(1);transform:translateY(-50%) scale(1)}.v-slider--is-active .v-slider__thumb-container--is-active.v-slider__thumb-container--show-label .v-slider__thumb{-webkit-transform:translateY(-50%) scale(0);transform:translateY(-50%) scale(0)}.v-slider--is-active .v-slider__ticks-container .v-slider__ticks{opacity:1}.v-slider__thumb-label__container{top:0}.v-slider__thumb-label,.v-slider__thumb-label__container{position:absolute;left:0;transition:.3s cubic-bezier(.25,.8,.25,1)}.v-slider__thumb-label{display:flex;align-items:center;justify-content:center;font-size:12px;color:#fff;width:32px;height:32px;border-radius:50% 50% 0;bottom:100%;-webkit-transform:translateY(-20%) translateY(-12px) translateX(-50%) rotate(45deg);transform:translateY(-20%) translateY(-12px) translateX(-50%) rotate(45deg);-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.v-slider__thumb-label>*{-webkit-transform:rotate(-45deg);transform:rotate(-45deg)}.v-slider__track,.v-slider__track-fill{position:absolute}.v-rating .v-icon{padding:.5rem;border-radius:50%;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.v-rating--readonly .v-icon{pointer-events:none}.v-rating--dense .v-icon{padding:.1rem}.application--is-rtl .v-snack__content .v-btn{margin:0 24px 0 0}.v-snack{position:fixed;display:flex;align-items:center;color:#fff;pointer-events:none;z-index:1000;font-size:14px;left:0;right:0}.v-snack--absolute{position:absolute}.v-snack--top{top:0}.v-snack--bottom{bottom:0}.v-snack__wrapper{background-color:#323232;pointer-events:auto;box-shadow:0 3px 5px -1px rgba(0,0,0,.2),0 6px 10px 0 rgba(0,0,0,.14),0 1px 18px 0 rgba(0,0,0,.12)}.v-snack__content,.v-snack__wrapper{display:flex;align-items:center;width:100%}.v-snack__content{height:48px;padding:14px 24px;justify-content:space-between;overflow:hidden}.v-snack__content .v-btn{color:#fff;flex:0 0 auto;padding:8px;margin:0 0 0 24px;height:auto;min-width:auto;width:auto}.v-snack__content .v-btn__content{margin:-2px}.v-snack__content .v-btn:before{display:none}.v-snack--multi-line .v-snack__content{height:80px;padding:24px}.v-snack--vertical .v-snack__content{height:112px;padding:24px 24px 14px;flex-direction:column;align-items:stretch}.v-snack--vertical .v-snack__content .v-btn.v-btn{justify-content:flex-end;padding:0;margin-left:0;margin-top:24px}.v-snack--vertical .v-snack__content .v-btn__content{flex:0 0 auto;margin:0}.v-snack--auto-height .v-snack__content{height:auto}.v-snack-transition-enter-active,.v-snack-transition-leave-active{transition:-webkit-transform .4s cubic-bezier(.25,.8,.5,1);transition:transform .4s cubic-bezier(.25,.8,.5,1);transition:transform .4s cubic-bezier(.25,.8,.5,1),-webkit-transform .4s cubic-bezier(.25,.8,.5,1)}.v-snack-transition-enter-active .v-snack__content,.v-snack-transition-leave-active .v-snack__content{transition:opacity .3s linear .1s}.v-snack-transition-enter .v-snack__content{opacity:0}.v-snack-transition-enter-to .v-snack__content,.v-snack-transition-leave .v-snack__content{opacity:1}.v-snack-transition-enter.v-snack.v-snack--top,.v-snack-transition-leave-to.v-snack.v-snack--top{-webkit-transform:translateY(calc(-100% - 8px));transform:translateY(calc(-100% - 8px))}.v-snack-transition-enter.v-snack.v-snack--bottom,.v-snack-transition-leave-to.v-snack.v-snack--bottom{-webkit-transform:translateY(100%);transform:translateY(100%)}@media only screen and (min-width:600px){.application--is-rtl .v-snack__content .v-btn:first-of-type{margin-left:0;margin-right:42px}.v-snack__wrapper{width:auto;max-width:568px;min-width:288px;margin:0 auto;border-radius:2px}.v-snack--left .v-snack__wrapper{margin-left:0}.v-snack--right .v-snack__wrapper{margin-right:0}.v-snack--left,.v-snack--right{margin:0 24px}.v-snack--left.v-snack--top,.v-snack--right.v-snack--top{-webkit-transform:translateY(24px);transform:translateY(24px)}.v-snack--left.v-snack--bottom,.v-snack--right.v-snack--bottom{-webkit-transform:translateY(-24px);transform:translateY(-24px)}.v-snack__content .v-btn:first-of-type{margin-left:42px}}.v-speed-dial{position:relative}.v-speed-dial--absolute{position:absolute}.v-speed-dial--fixed{position:fixed}.v-speed-dial--absolute,.v-speed-dial--fixed{z-index:4}.v-speed-dial--absolute>.v-btn--floating,.v-speed-dial--fixed>.v-btn--floating{margin:0}.v-speed-dial--top:not(.v-speed-dial--absolute){top:16px}.v-speed-dial--top.v-speed-dial--absolute{top:50%;-webkit-transform:translateY(-50%);transform:translateY(-50%)}.v-speed-dial--bottom:not(.v-speed-dial--absolute){bottom:16px}.v-speed-dial--bottom.v-speed-dial--absolute{bottom:50%;-webkit-transform:translateY(50%);transform:translateY(50%)}.v-speed-dial--left{left:16px}.v-speed-dial--right{right:16px}.v-speed-dial--direction-left .v-speed-dial__list,.v-speed-dial--direction-right .v-speed-dial__list{height:100%;top:0}.v-speed-dial--direction-bottom .v-speed-dial__list,.v-speed-dial--direction-top .v-speed-dial__list{left:0;width:100%}.v-speed-dial--direction-top .v-speed-dial__list{flex-direction:column-reverse;bottom:100%}.v-speed-dial--direction-right .v-speed-dial__list{flex-direction:row;left:100%}.v-speed-dial--direction-bottom .v-speed-dial__list{flex-direction:column;top:100%}.v-speed-dial--direction-left .v-speed-dial__list{flex-direction:row-reverse;right:100%}.v-speed-dial__list{align-items:center;display:flex;justify-content:center;position:absolute}.v-speed-dial__list .v-btn:first-child{transition-delay:.05s}.v-speed-dial__list .v-btn:nth-child(2){transition-delay:.1s}.v-speed-dial__list .v-btn:nth-child(3){transition-delay:.15s}.v-speed-dial__list .v-btn:nth-child(4){transition-delay:.2s}.v-speed-dial__list .v-btn:nth-child(5){transition-delay:.25s}.v-speed-dial__list .v-btn:nth-child(6){transition-delay:.3s}.v-speed-dial__list .v-btn:nth-child(7){transition-delay:.35s}.theme--light.v-stepper{background:#fff}.theme--light.v-stepper .v-stepper__step:not(.v-stepper__step--active):not(.v-stepper__step--complete):not(.v-stepper__step--error) .v-stepper__step__step{background:rgba(0,0,0,.38)}.theme--light.v-stepper .v-stepper__step__step,.theme--light.v-stepper .v-stepper__step__step .v-icon{color:#fff}.theme--light.v-stepper .v-stepper__header .v-divider{border-color:rgba(0,0,0,.12)}.theme--light.v-stepper .v-stepper__step--active .v-stepper__label{text-shadow:0 0 0 #000}.theme--light.v-stepper .v-stepper__step--editable:hover{background:rgba(0,0,0,.06)}.theme--light.v-stepper .v-stepper__step--editable:hover .v-stepper__label{text-shadow:0 0 0 #000}.theme--light.v-stepper .v-stepper__step--complete .v-stepper__label{color:rgba(0,0,0,.87)}.theme--light.v-stepper .v-stepper__step--inactive.v-stepper__step--editable:not(.v-stepper__step--error):hover .v-stepper__step__step{background:rgba(0,0,0,.54)}.theme--light.v-stepper .v-stepper__label{color:rgba(0,0,0,.38)}.theme--light.v-stepper--non-linear .v-stepper__step:not(.v-stepper__step--complete):not(.v-stepper__step--error) .v-stepper__label,.theme--light.v-stepper .v-stepper__label small{color:rgba(0,0,0,.54)}.theme--light.v-stepper--vertical .v-stepper__content:not(:last-child){border-left:1px solid rgba(0,0,0,.12)}.theme--dark.v-stepper{background:#303030}.theme--dark.v-stepper .v-stepper__step:not(.v-stepper__step--active):not(.v-stepper__step--complete):not(.v-stepper__step--error) .v-stepper__step__step{background:hsla(0,0%,100%,.5)}.theme--dark.v-stepper .v-stepper__step__step,.theme--dark.v-stepper .v-stepper__step__step .v-icon{color:#fff}.theme--dark.v-stepper .v-stepper__header .v-divider{border-color:hsla(0,0%,100%,.12)}.theme--dark.v-stepper .v-stepper__step--active .v-stepper__label{text-shadow:0 0 0 #fff}.theme--dark.v-stepper .v-stepper__step--editable:hover{background:hsla(0,0%,100%,.06)}.theme--dark.v-stepper .v-stepper__step--editable:hover .v-stepper__label{text-shadow:0 0 0 #fff}.theme--dark.v-stepper .v-stepper__step--complete .v-stepper__label{color:hsla(0,0%,100%,.87)}.theme--dark.v-stepper .v-stepper__step--inactive.v-stepper__step--editable:not(.v-stepper__step--error):hover .v-stepper__step__step{background:hsla(0,0%,100%,.75)}.theme--dark.v-stepper .v-stepper__label{color:hsla(0,0%,100%,.5)}.theme--dark.v-stepper--non-linear .v-stepper__step:not(.v-stepper__step--complete):not(.v-stepper__step--error) .v-stepper__label,.theme--dark.v-stepper .v-stepper__label small{color:hsla(0,0%,100%,.7)}.theme--dark.v-stepper--vertical .v-stepper__content:not(:last-child){border-left:1px solid hsla(0,0%,100%,.12)}.application--is-rtl .v-stepper .v-stepper__step__step{margin-right:0;margin-left:12px}.v-stepper{overflow:hidden;position:relative}.v-stepper,.v-stepper__header{box-shadow:0 3px 1px -2px rgba(0,0,0,.2),0 2px 2px 0 rgba(0,0,0,.14),0 1px 5px 0 rgba(0,0,0,.12)}.v-stepper__header{height:72px;align-items:stretch;display:flex;flex-wrap:wrap;justify-content:space-between}.v-stepper__header .v-divider{align-self:center;margin:0 -16px}.v-stepper__items{position:relative;overflow:hidden}.v-stepper__step__step{align-items:center;border-radius:50%;display:inline-flex;font-size:12px;justify-content:center;height:24px;margin-right:8px;min-width:24px;width:24px;transition:.3s cubic-bezier(.25,.8,.25,1)}.v-stepper__step__step .v-icon{font-size:18px}.v-stepper__step{align-items:center;display:flex;flex-direction:row;padding:24px;position:relative}.v-stepper__step--active .v-stepper__label{transition:.3s cubic-bezier(.4,0,.6,1)}.v-stepper__step--editable{cursor:pointer}.v-stepper__step.v-stepper__step--error .v-stepper__step__step{background:transparent;color:inherit}.v-stepper__step.v-stepper__step--error .v-stepper__step__step .v-icon{font-size:24px;color:inherit}.v-stepper__step.v-stepper__step--error .v-stepper__label{color:inherit;text-shadow:none;font-weight:500}.v-stepper__step.v-stepper__step--error .v-stepper__label small{color:inherit}.v-stepper__label{align-items:flex-start;display:flex;flex-direction:column;text-align:left}.v-stepper__label small{font-size:12px;font-weight:300;text-shadow:none}.v-stepper__wrapper{overflow:hidden;transition:none}.v-stepper__content{top:0;padding:24px 24px 16px;flex:1 0 auto;width:100%}.v-stepper__content>.v-btn{margin:24px 8px 8px 0}.v-stepper--is-booted .v-stepper__content,.v-stepper--is-booted .v-stepper__wrapper{transition:.3s cubic-bezier(.25,.8,.5,1)}.v-stepper--vertical{padding-bottom:36px}.v-stepper--vertical .v-stepper__content{margin:-8px -36px -16px 36px;padding:16px 60px 16px 23px;width:auto}.v-stepper--vertical .v-stepper__step{padding:24px 24px 16px}.v-stepper--vertical .v-stepper__step__step{margin-right:12px}.v-stepper--alt-labels .v-stepper__header{height:auto}.v-stepper--alt-labels .v-stepper__header .v-divider{margin:35px -67px 0;align-self:flex-start}.v-stepper--alt-labels .v-stepper__step{flex-direction:column;justify-content:flex-start;align-items:center;flex-basis:175px}.v-stepper--alt-labels .v-stepper__step small{align-self:center}.v-stepper--alt-labels .v-stepper__step__step{margin-right:0;margin-bottom:11px}@media only screen and (max-width:959px){.v-stepper:not(.v-stepper--vertical) .v-stepper__label{display:none}.v-stepper:not(.v-stepper--vertical) .v-stepper__step__step{margin-right:0}}.theme--light.v-input--switch__thumb{color:#fafafa}.theme--light.v-input--switch__track{color:rgba(0,0,0,.38)}.theme--light.v-input--switch.v-input--is-disabled .v-input--switch__thumb{color:#bdbdbd!important}.theme--light.v-input--switch.v-input--is-disabled .v-input--switch__track{color:rgba(0,0,0,.12)!important}.theme--dark.v-input--switch__thumb{color:#bdbdbd}.theme--dark.v-input--switch__track{color:hsla(0,0%,100%,.3)}.theme--dark.v-input--switch.v-input--is-disabled .v-input--switch__thumb{color:#424242!important}.theme--dark.v-input--switch.v-input--is-disabled .v-input--switch__track{color:hsla(0,0%,100%,.1)!important}.application--is-rtl .v-input--switch .v-input--selection-controls__ripple{left:auto;right:-14px}.application--is-rtl .v-input--switch.v-input--is-dirty .v-input--selection-controls__ripple,.application--is-rtl .v-input--switch.v-input--is-dirty .v-input--switch__thumb{-webkit-transform:translate(-16px);transform:translate(-16px)}.v-input--switch__thumb,.v-input--switch__track{background-color:currentColor;pointer-events:none;transition:inherit}.v-input--switch__track{border-radius:8px;height:14px;left:2px;opacity:.6;position:absolute;right:2px;top:calc(50% - 7px)}.v-input--switch__thumb{border-radius:50%;top:calc(50% - 10px);height:20px;position:relative;width:20px;display:flex;justify-content:center;align-items:center;box-shadow:0 2px 4px -1px rgba(0,0,0,.2),0 4px 5px 0 rgba(0,0,0,.14),0 1px 10px 0 rgba(0,0,0,.12)}.v-input--switch .v-input--selection-controls__input{width:38px}.v-input--switch .v-input--selection-controls__ripple{left:-14px;top:calc(50% - 24px)}.v-input--switch.v-input--is-dirty .v-input--selection-controls__ripple,.v-input--switch.v-input--is-dirty .v-input--switch__thumb{-webkit-transform:translate(16px);transform:translate(16px)}.theme--light.v-system-bar{background-color:#e0e0e0;color:rgba(0,0,0,.54)}.theme--light.v-system-bar .v-icon{color:rgba(0,0,0,.54)}.theme--light.v-system-bar--lights-out{background-color:hsla(0,0%,100%,.7)!important}.theme--dark.v-system-bar{background-color:#000;color:hsla(0,0%,100%,.7)}.theme--dark.v-system-bar .v-icon{color:hsla(0,0%,100%,.7)}.theme--dark.v-system-bar--lights-out{background-color:rgba(0,0,0,.2)!important}.v-system-bar{align-items:center;display:flex;font-size:14px;font-weight:500;padding:0 8px}.v-system-bar .v-icon{font-size:16px}.v-system-bar--absolute,.v-system-bar--fixed{left:0;top:0;width:100%;z-index:3}.v-system-bar--fixed{position:fixed}.v-system-bar--absolute{position:absolute}.v-system-bar--status .v-icon{margin-right:4px}.v-system-bar--window .v-icon{font-size:20px;margin-right:8px}.theme--light.v-tabs__bar{background-color:#fff}.theme--light.v-tabs__bar .v-tabs__div{color:rgba(0,0,0,.87)}.theme--light.v-tabs__bar .v-tabs__item--disabled{color:rgba(0,0,0,.26)}.theme--dark.v-tabs__bar{background-color:#424242}.theme--dark.v-tabs__bar .v-tabs__div{color:#fff}.theme--dark.v-tabs__bar .v-tabs__item--disabled{color:hsla(0,0%,100%,.3)}.v-tabs,.v-tabs__bar{position:relative}.v-tabs__bar{border-radius:inherit}.v-tabs__icon{align-items:center;cursor:pointer;display:inline-flex;height:100%;position:absolute;top:0;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;width:32px}.v-tabs__icon--prev{left:4px}.v-tabs__icon--next{right:4px}.v-tabs__wrapper{overflow:hidden;contain:content;display:flex}.v-tabs__wrapper--show-arrows{margin-left:40px;margin-right:40px}.v-tabs__wrapper--show-arrows .v-tabs__container--align-with-title{padding-left:16px}.v-tabs__container{flex:1 0 auto;display:flex;height:48px;list-style-type:none;transition:-webkit-transform .6s cubic-bezier(.86,0,.07,1);transition:transform .6s cubic-bezier(.86,0,.07,1);transition:transform .6s cubic-bezier(.86,0,.07,1),-webkit-transform .6s cubic-bezier(.86,0,.07,1);white-space:nowrap;position:relative}.v-tabs__container--overflow .v-tabs__div{flex:1 0 auto}.v-tabs__container--grow .v-tabs__div{flex:1 0 auto;max-width:none}.v-tabs__container--icons-and-text{height:72px}.v-tabs__container--align-with-title{padding-left:56px}.v-tabs__container--fixed-tabs .v-tabs__div,.v-tabs__container--icons-and-text .v-tabs__div{min-width:72px}.v-tabs__container--centered .v-tabs__slider-wrapper+.v-tabs__div,.v-tabs__container--centered>.v-tabs__div:first-child,.v-tabs__container--fixed-tabs .v-tabs__slider-wrapper+.v-tabs__div,.v-tabs__container--fixed-tabs>.v-tabs__div:first-child,.v-tabs__container--right .v-tabs__slider-wrapper+.v-tabs__div,.v-tabs__container--right>.v-tabs__div:first-child{margin-left:auto}.v-tabs__container--centered>.v-tabs__div:last-child,.v-tabs__container--fixed-tabs>.v-tabs__div:last-child{margin-right:auto}.v-tabs__container--icons-and-text .v-tabs__item{flex-direction:column-reverse}.v-tabs__container--icons-and-text .v-tabs__item .v-icon{margin-bottom:6px}.v-tabs__div{align-items:center;display:inline-flex;flex:0 1 auto;font-size:14px;font-weight:500;line-height:normal;height:inherit;max-width:264px;text-align:center;text-transform:uppercase;vertical-align:middle}.v-tabs__item{align-items:center;color:inherit;display:flex;flex:1 1 auto;height:100%;justify-content:center;max-width:inherit;padding:6px 12px;text-decoration:none;transition:.3s cubic-bezier(.25,.8,.5,1);-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;white-space:normal}.v-tabs__item:not(.v-tabs__item--active){opacity:.7}.v-tabs__item--disabled{pointer-events:none}.v-tabs__slider{height:2px;width:100%}.v-tabs__slider-wrapper{bottom:0;margin:0!important;position:absolute;transition:.3s cubic-bezier(.25,.8,.5,1)}@media only screen and (max-width:599px){.v-tabs__wrapper--show-arrows .v-tabs__container--align-with-title{padding-left:24px}.v-tabs__container--fixed-tabs .v-tabs__div{flex:1 0 auto}}@media only screen and (min-width:600px){.v-tabs__container--fixed-tabs .v-tabs__div,.v-tabs__container--icons-and-text .v-tabs__div{min-width:160px}}.theme--light.v-textarea.v-text-field--solo-inverted.v-text-field--solo.v-input--is-focused textarea{color:#fff}.theme--dark.v-textarea.v-text-field--solo-inverted.v-text-field--solo.v-input--is-focused textarea{color:rgba(0,0,0,.87)}.application--is-rtl .v-textarea.v-text-field--enclosed .v-text-field__slot{margin-right:0;margin-left:-12px}.application--is-rtl .v-textarea.v-text-field--enclosed .v-text-field__slot textarea{padding-right:0;padding-left:12px}.v-textarea textarea{flex:1 1 auto;line-height:18px;max-width:100%;min-height:32px;outline:none;padding:7px 0 8px;width:100%}.v-textarea .v-text-field__prefix{padding-top:4px;align-self:start}.v-textarea.v-text-field--full-width.v-text-field--single-line .v-text-field__slot textarea,.v-textarea.v-text-field--full-width .v-text-field__slot textarea{margin-top:0}.v-textarea.v-text-field--full-width.v-text-field--single-line .v-text-field__details,.v-textarea.v-text-field--full-width .v-text-field__details{bottom:4px}.v-textarea.v-text-field--enclosed .v-text-field__slot{margin-right:-12px}.v-textarea.v-text-field--enclosed .v-text-field__slot textarea{padding-right:12px}.v-textarea.v-text-field--box .v-text-field__prefix,.v-textarea.v-text-field--box textarea,.v-textarea.v-text-field--enclosed .v-text-field__prefix,.v-textarea.v-text-field--enclosed textarea{margin-top:24px}.v-textarea.v-text-field--box.v-text-field--single-line .v-text-field__prefix,.v-textarea.v-text-field--box.v-text-field--single-line textarea,.v-textarea.v-text-field--enclosed.v-text-field--single-line .v-text-field__prefix,.v-textarea.v-text-field--enclosed.v-text-field--single-line textarea{margin-top:12px}.v-textarea.v-text-field--box.v-text-field--single-line .v-label,.v-textarea.v-text-field--enclosed.v-text-field--single-line .v-label{top:18px}.v-textarea.v-text-field--box.v-text-field--single-line.v-text-field--outline .v-input__control,.v-textarea.v-text-field--enclosed.v-text-field--single-line.v-text-field--outline .v-input__control{padding-top:0}.v-textarea.v-text-field--solo{align-items:flex-start}.v-textarea.v-text-field--solo .v-input__append-inner,.v-textarea.v-text-field--solo .v-input__append-outer,.v-textarea.v-text-field--solo .v-input__prepend-inner,.v-textarea.v-text-field--solo .v-input__prepend-outer{align-self:flex-start;margin-top:16px}.v-textarea--auto-grow textarea{overflow:hidden}.v-textarea--no-resize textarea{resize:none}.theme--light.v-timeline:before{background:rgba(0,0,0,.12)}.theme--light.v-timeline .v-timeline-item__dot{background:#fff}.theme--light.v-timeline .v-timeline-item .v-card:before{border-right-color:rgba(0,0,0,.12)}.theme--dark.v-timeline:before{background:hsla(0,0%,100%,.12)}.theme--dark.v-timeline .v-timeline-item__dot{background:#424242}.theme--dark.v-timeline .v-timeline-item .v-card:before{border-right-color:rgba(0,0,0,.12)}.v-timeline-item{display:flex;flex-direction:row-reverse;padding-bottom:24px}.v-timeline-item--left,.v-timeline-item:nth-child(odd):not(.v-timeline-item--right){flex-direction:row}.v-timeline-item--left .v-card:after,.v-timeline-item--left .v-card:before,.v-timeline-item:nth-child(odd):not(.v-timeline-item--right) .v-card:after,.v-timeline-item:nth-child(odd):not(.v-timeline-item--right) .v-card:before{-webkit-transform:rotate(180deg);transform:rotate(180deg);left:100%}.v-timeline-item--left .v-timeline-item__opposite,.v-timeline-item:nth-child(odd):not(.v-timeline-item--right) .v-timeline-item__opposite{margin-left:96px;text-align:left}.v-timeline-item--left .v-timeline-item__opposite .v-card:after,.v-timeline-item--left .v-timeline-item__opposite .v-card:before,.v-timeline-item:nth-child(odd):not(.v-timeline-item--right) .v-timeline-item__opposite .v-card:after,.v-timeline-item:nth-child(odd):not(.v-timeline-item--right) .v-timeline-item__opposite .v-card:before{-webkit-transform:rotate(0);transform:rotate(0);left:-10px}.v-timeline-item--right .v-card:after,.v-timeline-item--right .v-card:before,.v-timeline-item:nth-child(2n):not(.v-timeline-item--left) .v-card:after,.v-timeline-item:nth-child(2n):not(.v-timeline-item--left) .v-card:before{right:100%}.v-timeline-item--right .v-timeline-item__opposite,.v-timeline-item:nth-child(2n):not(.v-timeline-item--left) .v-timeline-item__opposite{margin-right:96px;text-align:right}.v-timeline-item--right .v-timeline-item__opposite .v-card:after,.v-timeline-item--right .v-timeline-item__opposite .v-card:before,.v-timeline-item:nth-child(2n):not(.v-timeline-item--left) .v-timeline-item__opposite .v-card:after,.v-timeline-item:nth-child(2n):not(.v-timeline-item--left) .v-timeline-item__opposite .v-card:before{-webkit-transform:rotate(180deg);transform:rotate(180deg);right:-10px}.v-timeline-item__dot,.v-timeline-item__inner-dot{border-radius:50%}.v-timeline-item__dot{box-shadow:0 2px 1px -1px rgba(0,0,0,.2),0 1px 1px 0 rgba(0,0,0,.14),0 1px 3px 0 rgba(0,0,0,.12);align-self:center;position:absolute;height:38px;left:calc(50% - 19px);width:38px}.v-timeline-item__dot .v-timeline-item__inner-dot{height:30px;margin:4px;width:30px}.v-timeline-item__dot--small{height:24px;left:calc(50% - 12px);width:24px}.v-timeline-item__dot--small .v-timeline-item__inner-dot{height:18px;margin:3px;width:18px}.v-timeline-item__dot--large{height:52px;left:calc(50% - 26px);width:52px}.v-timeline-item__dot--large .v-timeline-item__inner-dot{height:42px;margin:5px;width:42px}.v-timeline-item__inner-dot{display:flex;justify-content:center;align-items:center}.v-timeline-item__body{position:relative;height:100%;flex:1 1 100%;max-width:calc(50% - 48px)}.v-timeline-item .v-card:after,.v-timeline-item .v-card:before{content:\"\";position:absolute;border-top:10px solid transparent;border-bottom:10px solid transparent;border-right:10px solid #000;top:calc(50% - 10px)}.v-timeline-item .v-card:after{border-right-color:inherit}.v-timeline-item .v-card:before{top:calc(50% - 8px)}.v-timeline-item__opposite{flex:1 1 auto;align-self:center;max-width:calc(50% - 48px)}.v-timeline-item--fill-dot .v-timeline-item__inner-dot{height:inherit;margin:0;width:inherit}.v-timeline{padding-top:24px;position:relative}.v-timeline:before{bottom:0;content:\"\";height:100%;left:calc(50% - 1px);position:absolute;top:0;width:2px}.v-timeline--align-top .v-timeline-item{position:relative}.v-timeline--align-top .v-timeline-item__dot{top:6px}.v-timeline--align-top .v-timeline-item__dot--small{top:12px}.v-timeline--align-top .v-timeline-item__dot--large{top:0}.v-timeline--align-top .v-timeline-item .v-card:before{top:12px}.v-timeline--align-top .v-timeline-item .v-card:after{top:10px}.v-timeline--dense:before{left:18px}.v-timeline--dense .v-timeline-item--left,.v-timeline--dense .v-timeline-item:nth-child(odd):not(.v-timeline-item--right){flex-direction:row-reverse}.v-timeline--dense .v-timeline-item--left .v-card:after,.v-timeline--dense .v-timeline-item--left .v-card:before,.v-timeline--dense .v-timeline-item:nth-child(odd):not(.v-timeline-item--right) .v-card:after,.v-timeline--dense .v-timeline-item:nth-child(odd):not(.v-timeline-item--right) .v-card:before{right:auto;left:-10px;-webkit-transform:none;transform:none}.v-timeline--dense .v-timeline-item__dot{left:0}.v-timeline--dense .v-timeline-item__dot--small{left:7px}.v-timeline--dense .v-timeline-item__dot--large{left:-7px}.v-timeline--dense .v-timeline-item__body{max-width:calc(100% - 64px)}.v-timeline--dense .v-timeline-item__opposite{display:none}.theme--light.v-time-picker-clock{background:#e0e0e0}.theme--light.v-time-picker-clock .v-time-picker-clock__item--disabled{color:rgba(0,0,0,.26)}.theme--light.v-time-picker-clock .v-time-picker-clock__item--disabled.v-time-picker-clock__item--active{color:hsla(0,0%,100%,.3)}.theme--light.v-time-picker-clock--indeterminate .v-time-picker-clock__hand{background-color:#bdbdbd}.theme--light.v-time-picker-clock--indeterminate .v-time-picker-clock__hand:after{color:#bdbdbd}.theme--light.v-time-picker-clock--indeterminate .v-time-picker-clock__item--active{background-color:#bdbdbd}.theme--dark.v-time-picker-clock{background:#616161}.theme--dark.v-time-picker-clock .v-time-picker-clock__item--disabled,.theme--dark.v-time-picker-clock .v-time-picker-clock__item--disabled.v-time-picker-clock__item--active{color:hsla(0,0%,100%,.3)}.theme--dark.v-time-picker-clock--indeterminate .v-time-picker-clock__hand{background-color:#757575}.theme--dark.v-time-picker-clock--indeterminate .v-time-picker-clock__hand:after{color:#757575}.theme--dark.v-time-picker-clock--indeterminate .v-time-picker-clock__item--active{background-color:#757575}.v-time-picker-clock{border-radius:100%;position:relative;transition:.3s cubic-bezier(.25,.8,.5,1);-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;width:100%;padding-top:100%}.v-time-picker-clock__container{display:flex;align-items:center;justify-content:center;padding:10px}.v-time-picker-clock__hand{height:calc(50% - 4px);width:2px;bottom:50%;left:calc(50% - 1px);-webkit-transform-origin:center bottom;transform-origin:center bottom;position:absolute;will-change:transform;z-index:1}.v-time-picker-clock__hand:before{background:transparent;border:2px solid;border-color:inherit;border-radius:100%;width:10px;height:10px;top:-4px}.v-time-picker-clock__hand:after,.v-time-picker-clock__hand:before{content:\"\";position:absolute;left:50%;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%)}.v-time-picker-clock__hand:after{height:8px;width:8px;top:100%;border-radius:100%;border-style:solid;border-color:inherit;background-color:inherit}.v-time-picker-clock__hand--inner:after{height:14px}.v-picker--full-width .v-time-picker-clock__container{max-width:290px}.v-time-picker-clock__inner{position:absolute;bottom:27px;left:27px;right:27px;top:27px}.v-time-picker-clock__item{align-items:center;border-radius:100%;cursor:default;display:flex;font-size:16px;justify-content:center;height:40px;position:absolute;text-align:center;width:40px;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%)}.v-time-picker-clock__item>span{z-index:1}.v-time-picker-clock__item:after,.v-time-picker-clock__item:before{content:\"\";border-radius:100%;position:absolute;top:50%;left:50%;height:14px;width:14px;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%);height:40px;width:40px}.v-time-picker-clock__item--active{color:#fff;cursor:default;z-index:2}.v-time-picker-clock__item--disabled{pointer-events:none}.v-time-picker-title{color:#fff;display:flex;line-height:1;justify-content:flex-end}.v-time-picker-title__time{white-space:nowrap}.v-time-picker-title__time .v-picker__title__btn,.v-time-picker-title__time span{align-items:center;display:inline-flex;height:70px;font-size:70px;justify-content:center}.v-time-picker-title__ampm{align-self:flex-end;display:flex;flex-direction:column;font-size:16px;margin:8px 0 6px 8px;text-transform:uppercase}.v-time-picker-title__ampm div:only-child{flex-direction:row}.v-picker__title--landscape .v-time-picker-title{flex-direction:column;justify-content:center;height:100%}.v-picker__title--landscape .v-time-picker-title__time{text-align:right}.v-picker__title--landscape .v-time-picker-title__time .v-picker__title__btn,.v-picker__title--landscape .v-time-picker-title__time span{height:55px;font-size:55px}.v-picker__title--landscape .v-time-picker-title__ampm{margin:16px 0 0;align-self:auto;text-align:center}.theme--light.v-toolbar{background-color:#f5f5f5;color:rgba(0,0,0,.87)}.theme--dark.v-toolbar{background-color:#212121;color:#fff}.application--is-rtl .v-toolbar__title:not(:first-child){margin-left:0;margin-right:20px}.v-toolbar{transition:none;box-shadow:0 2px 4px -1px rgba(0,0,0,.2),0 4px 5px 0 rgba(0,0,0,.14),0 1px 10px 0 rgba(0,0,0,.12);position:relative;width:100%;will-change:padding-left,padding-right}.v-toolbar[data-booted=true]{transition:.2s cubic-bezier(.4,0,.2,1)}.v-toolbar .v-text-field--box,.v-toolbar .v-text-field--enclosed{margin:0}.v-toolbar .v-text-field--box .v-text-field__details,.v-toolbar .v-text-field--enclosed .v-text-field__details{display:none}.v-toolbar .v-tabs{width:100%}.v-toolbar__title{font-size:20px;font-weight:500;letter-spacing:.02em;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.v-toolbar__title:not(:first-child){margin-left:20px}.v-toolbar__content,.v-toolbar__extension{align-items:center;display:flex;padding:0 24px}.v-toolbar__content .v-btn--icon,.v-toolbar__extension .v-btn--icon{margin:6px}.v-toolbar__content>:first-child,.v-toolbar__extension>:first-child{margin-left:0}.v-toolbar__content>:first-child.v-btn--icon,.v-toolbar__extension>:first-child.v-btn--icon{margin-left:-6px}.v-toolbar__content>:first-child.v-menu .v-menu__activator .v-btn,.v-toolbar__content>:first-child.v-tooltip span .v-btn,.v-toolbar__extension>:first-child.v-menu .v-menu__activator .v-btn,.v-toolbar__extension>:first-child.v-tooltip span .v-btn{margin-left:0}.v-toolbar__content>:first-child.v-menu .v-menu__activator .v-btn--icon,.v-toolbar__content>:first-child.v-tooltip span .v-btn--icon,.v-toolbar__extension>:first-child.v-menu .v-menu__activator .v-btn--icon,.v-toolbar__extension>:first-child.v-tooltip span .v-btn--icon{margin-left:-6px}.v-toolbar__content>:last-child,.v-toolbar__extension>:last-child{margin-right:0}.v-toolbar__content>:last-child.v-btn--icon,.v-toolbar__extension>:last-child.v-btn--icon{margin-right:-6px}.v-toolbar__content>:last-child.v-menu .v-menu__activator .v-btn,.v-toolbar__content>:last-child.v-tooltip span .v-btn,.v-toolbar__extension>:last-child.v-menu .v-menu__activator .v-btn,.v-toolbar__extension>:last-child.v-tooltip span .v-btn{margin-right:0}.v-toolbar__content>:last-child.v-menu .v-menu__activator .v-btn--icon,.v-toolbar__content>:last-child.v-tooltip span .v-btn--icon,.v-toolbar__extension>:last-child.v-menu .v-menu__activator .v-btn--icon,.v-toolbar__extension>:last-child.v-tooltip span .v-btn--icon{margin-right:-6px}.v-toolbar__content>.v-list,.v-toolbar__extension>.v-list{flex:1 1 auto;max-height:100%}.v-toolbar__content>.v-list:first-child,.v-toolbar__extension>.v-list:first-child{margin-left:-24px}.v-toolbar__content>.v-list:last-child,.v-toolbar__extension>.v-list:last-child{margin-right:-24px}.v-toolbar__extension>.v-toolbar__title{margin-left:72px}.v-toolbar__items{display:flex;height:inherit;max-width:100%;padding:0}.v-toolbar__items .v-btn{align-items:center;align-self:center}.v-toolbar__items .v-tooltip,.v-toolbar__items .v-tooltip>span{height:inherit}.v-toolbar__items .v-btn:not(.v-btn--floating):not(.v-btn--icon),.v-toolbar__items .v-menu,.v-toolbar__items .v-menu__activator{height:inherit;margin:0}.v-toolbar .v-btn-toggle,.v-toolbar .v-overflow-btn{box-shadow:0 0 0 0 rgba(0,0,0,.2),0 0 0 0 rgba(0,0,0,.14),0 0 0 0 rgba(0,0,0,.12)}.v-toolbar .v-input{margin:0}.v-toolbar .v-overflow-btn .v-input__control:before,.v-toolbar .v-overflow-btn .v-input__slot:before{display:none}.v-toolbar--card{border-radius:2px 2px 0 0;box-shadow:0 0 0 0 rgba(0,0,0,.2),0 0 0 0 rgba(0,0,0,.14),0 0 0 0 rgba(0,0,0,.12)}.v-toolbar--fixed{position:fixed;z-index:2}.v-toolbar--absolute,.v-toolbar--fixed{top:0;left:0}.v-toolbar--absolute{position:absolute;z-index:2}.v-toolbar--floating{display:inline-flex;margin:16px;width:auto}.v-toolbar--clipped{z-index:3}@media only screen and (max-width:959px){.v-toolbar__content,.v-toolbar__extension{padding:0 16px}.v-toolbar__content>.v-list:first-child,.v-toolbar__extension>.v-list:first-child{margin-left:-16px}.v-toolbar__content>.v-list:last-child,.v-toolbar__extension>.v-list:last-child{margin-right:-16px}}.v-tooltip__content{background:#616161;border-radius:2px;color:#fff;font-size:12px;display:inline-block;padding:5px 8px;position:absolute;text-transform:none;width:auto;box-shadow:0 3px 1px -2px rgba(0,0,0,.2),0 2px 2px 0 rgba(0,0,0,.14),0 1px 5px 0 rgba(0,0,0,.12)}.v-tooltip__content[class*=-active]{transition:.15s cubic-bezier(.25,.8,.5,1);pointer-events:none}@media only screen and (max-width:959px){.v-tooltip .v-tooltip__content{padding:10px 16px}}.theme--light.v-treeview{color:rgba(0,0,0,.87)}.theme--light.v-treeview--hoverable .v-treeview-node__root:hover,.theme--light.v-treeview .v-treeview-node--active{background:rgba(0,0,0,.12)}.theme--dark.v-treeview{color:#fff}.theme--dark.v-treeview--hoverable .v-treeview-node__root:hover,.theme--dark.v-treeview .v-treeview-node--active{background:hsla(0,0%,100%,.12)}.application--is-rtl .v-treeview>.v-treeview-node{margin-right:0}.application--is-rtl .v-treeview>.v-treeview-node--leaf{margin-right:24px;margin-left:0}.application--is-rtl .v-treeview-node{margin-right:26px;margin-left:0}.application--is-rtl .v-treeview-node--leaf{margin-right:50px;margin-left:0}.application--is-rtl .v-treeview-node__toggle{-webkit-transform:rotate(90deg);transform:rotate(90deg)}.application--is-rtl .v-treeview-node__toggle--open{-webkit-transform:none;transform:none}.v-treeview>.v-treeview-node{margin-left:0}.v-treeview>.v-treeview-node--leaf{margin-left:24px}.v-treeview-node{margin-left:26px}.v-treeview-node--excluded{display:none}.v-treeview-node--click>.v-treeview-node__root,.v-treeview-node--click>.v-treeview-node__root>.v-treeview-node__content>*{cursor:pointer;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.v-treeview-node--leaf{margin-left:50px}.v-treeview-node__root{display:flex;align-items:center;height:34px}.v-treeview-node__content{display:flex;flex-grow:1;flex-shrink:0;align-items:center}.v-treeview-node__content .v-btn{flex-grow:0!important;flex-shrink:1!important}.v-treeview-node__label{font-size:1.2rem;margin-left:6px;flex-grow:1;flex-shrink:0}.v-treeview-node__label .v-icon{padding-right:8px}.v-treeview-node__checkbox,.v-treeview-node__toggle{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.v-treeview-node__toggle{-webkit-transform:rotate(-90deg);transform:rotate(-90deg)}.v-treeview-node__toggle--open{-webkit-transform:none;transform:none}.v-treeview-node__toggle--loading{-webkit-animation:progress-circular-rotate 1s linear infinite;animation:progress-circular-rotate 1s linear infinite}.v-treeview-node__children{transition:all .2s cubic-bezier(0,0,.2,1)}", ""]);

// exports


/***/ }),

/***/ 6:
/***/ (function(module, exports, __webpack_require__) {

/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
  Modified by Evan You @yyx990803
*/

var hasDocument = typeof document !== 'undefined'

if (typeof DEBUG !== 'undefined' && DEBUG) {
  if (!hasDocument) {
    throw new Error(
    'vue-style-loader cannot be used in a non-browser environment. ' +
    "Use { target: 'node' } in your Webpack config to indicate a server-rendering environment."
  ) }
}

var listToStyles = __webpack_require__(21)

/*
type StyleObject = {
  id: number;
  parts: Array<StyleObjectPart>
}

type StyleObjectPart = {
  css: string;
  media: string;
  sourceMap: ?string
}
*/

var stylesInDom = {/*
  [id: number]: {
    id: number,
    refs: number,
    parts: Array<(obj?: StyleObjectPart) => void>
  }
*/}

var head = hasDocument && (document.head || document.getElementsByTagName('head')[0])
var singletonElement = null
var singletonCounter = 0
var isProduction = false
var noop = function () {}
var options = null
var ssrIdKey = 'data-vue-ssr-id'

// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
// tags it will allow on a page
var isOldIE = typeof navigator !== 'undefined' && /msie [6-9]\b/.test(navigator.userAgent.toLowerCase())

module.exports = function (parentId, list, _isProduction, _options) {
  isProduction = _isProduction

  options = _options || {}

  var styles = listToStyles(parentId, list)
  addStylesToDom(styles)

  return function update (newList) {
    var mayRemove = []
    for (var i = 0; i < styles.length; i++) {
      var item = styles[i]
      var domStyle = stylesInDom[item.id]
      domStyle.refs--
      mayRemove.push(domStyle)
    }
    if (newList) {
      styles = listToStyles(parentId, newList)
      addStylesToDom(styles)
    } else {
      styles = []
    }
    for (var i = 0; i < mayRemove.length; i++) {
      var domStyle = mayRemove[i]
      if (domStyle.refs === 0) {
        for (var j = 0; j < domStyle.parts.length; j++) {
          domStyle.parts[j]()
        }
        delete stylesInDom[domStyle.id]
      }
    }
  }
}

function addStylesToDom (styles /* Array<StyleObject> */) {
  for (var i = 0; i < styles.length; i++) {
    var item = styles[i]
    var domStyle = stylesInDom[item.id]
    if (domStyle) {
      domStyle.refs++
      for (var j = 0; j < domStyle.parts.length; j++) {
        domStyle.parts[j](item.parts[j])
      }
      for (; j < item.parts.length; j++) {
        domStyle.parts.push(addStyle(item.parts[j]))
      }
      if (domStyle.parts.length > item.parts.length) {
        domStyle.parts.length = item.parts.length
      }
    } else {
      var parts = []
      for (var j = 0; j < item.parts.length; j++) {
        parts.push(addStyle(item.parts[j]))
      }
      stylesInDom[item.id] = { id: item.id, refs: 1, parts: parts }
    }
  }
}

function createStyleElement () {
  var styleElement = document.createElement('style')
  styleElement.type = 'text/css'
  head.appendChild(styleElement)
  return styleElement
}

function addStyle (obj /* StyleObjectPart */) {
  var update, remove
  var styleElement = document.querySelector('style[' + ssrIdKey + '~="' + obj.id + '"]')

  if (styleElement) {
    if (isProduction) {
      // has SSR styles and in production mode.
      // simply do nothing.
      return noop
    } else {
      // has SSR styles but in dev mode.
      // for some reason Chrome can't handle source map in server-rendered
      // style tags - source maps in <style> only works if the style tag is
      // created and inserted dynamically. So we remove the server rendered
      // styles and inject new ones.
      styleElement.parentNode.removeChild(styleElement)
    }
  }

  if (isOldIE) {
    // use singleton mode for IE9.
    var styleIndex = singletonCounter++
    styleElement = singletonElement || (singletonElement = createStyleElement())
    update = applyToSingletonTag.bind(null, styleElement, styleIndex, false)
    remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true)
  } else {
    // use multi-style-tag mode in all other cases
    styleElement = createStyleElement()
    update = applyToTag.bind(null, styleElement)
    remove = function () {
      styleElement.parentNode.removeChild(styleElement)
    }
  }

  update(obj)

  return function updateStyle (newObj /* StyleObjectPart */) {
    if (newObj) {
      if (newObj.css === obj.css &&
          newObj.media === obj.media &&
          newObj.sourceMap === obj.sourceMap) {
        return
      }
      update(obj = newObj)
    } else {
      remove()
    }
  }
}

var replaceText = (function () {
  var textStore = []

  return function (index, replacement) {
    textStore[index] = replacement
    return textStore.filter(Boolean).join('\n')
  }
})()

function applyToSingletonTag (styleElement, index, remove, obj) {
  var css = remove ? '' : obj.css

  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = replaceText(index, css)
  } else {
    var cssNode = document.createTextNode(css)
    var childNodes = styleElement.childNodes
    if (childNodes[index]) styleElement.removeChild(childNodes[index])
    if (childNodes.length) {
      styleElement.insertBefore(cssNode, childNodes[index])
    } else {
      styleElement.appendChild(cssNode)
    }
  }
}

function applyToTag (styleElement, obj) {
  var css = obj.css
  var media = obj.media
  var sourceMap = obj.sourceMap

  if (media) {
    styleElement.setAttribute('media', media)
  }
  if (options.ssrId) {
    styleElement.setAttribute(ssrIdKey, obj.id)
  }

  if (sourceMap) {
    // https://developer.chrome.com/devtools/docs/javascript-debugging
    // this makes source maps inside style tags work properly in Chrome
    css += '\n/*# sourceURL=' + sourceMap.sources[0] + ' */'
    // http://stackoverflow.com/a/26603875
    css += '\n/*# sourceMappingURL=data:application/json;base64,' + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + ' */'
  }

  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild)
    }
    styleElement.appendChild(document.createTextNode(css))
  }
}


/***/ }),

/***/ 7:
/***/ (function(module, exports) {

/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file.
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

module.exports = function normalizeComponent (
  rawScriptExports,
  compiledTemplate,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier /* server only */
) {
  var esModule
  var scriptExports = rawScriptExports = rawScriptExports || {}

  // ES6 modules interop
  var type = typeof rawScriptExports.default
  if (type === 'object' || type === 'function') {
    esModule = rawScriptExports
    scriptExports = rawScriptExports.default
  }

  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (compiledTemplate) {
    options.render = compiledTemplate.render
    options.staticRenderFns = compiledTemplate.staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = injectStyles
  }

  if (hook) {
    var functional = options.functional
    var existing = functional
      ? options.render
      : options.beforeCreate

    if (!functional) {
      // inject component registration as beforeCreate hook
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    } else {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functioal component in vue file
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return existing(h, context)
      }
    }
  }

  return {
    esModule: esModule,
    exports: scriptExports,
    options: options
  }
}


/***/ })

},[324]);