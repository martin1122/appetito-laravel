webpackJsonp([2],{

/***/ 175:
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(176);
module.exports = __webpack_require__(227);


/***/ }),

/***/ 176:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_TranslationComponent__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_TranslationComponent___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__components_TranslationComponent__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_Ingredients__ = __webpack_require__(181);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_Ingredients___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__components_Ingredients__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__basic_SearchableSelect__ = __webpack_require__(186);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__basic_SearchableSelect___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__basic_SearchableSelect__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_Directions__ = __webpack_require__(191);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_Directions___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__components_Directions__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__basic_Tabs__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__basic_Tabs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__basic_Tabs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_RecipeCollections__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_RecipeCollections___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__components_RecipeCollections__);







/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

__webpack_require__(205);

window.Vue = __webpack_require__(18);

/**
 * The following block of code may be used to automatically register your
 * Vue components. It will recursively scan this directory for the Vue
 * components and automatically register them with their "basename".
 *
 * Eg. ./components/ExampleComponent.vue -> <example-component></example-component>
 */

//Vue.component('example-component', require('./components/ExampleComponent.vue'));

// const files = require.context('./', true, /\.vue$/i)

// files.keys().map(key => {
//     return Vue.component(_.last(key.split('/')).split('.')[0], files(key))
// })

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

var app = new Vue({
  el: '#app',
  components: {
    TranslatableComponent: __WEBPACK_IMPORTED_MODULE_0__components_TranslationComponent___default.a,
    Ingredients: __WEBPACK_IMPORTED_MODULE_1__components_Ingredients___default.a,
    SearchableSelect: __WEBPACK_IMPORTED_MODULE_2__basic_SearchableSelect___default.a,
    Directions: __WEBPACK_IMPORTED_MODULE_3__components_Directions___default.a,
    Tabs: __WEBPACK_IMPORTED_MODULE_4__basic_Tabs___default.a,
    RecipeCollections: __WEBPACK_IMPORTED_MODULE_5__components_RecipeCollections___default.a
  }
});

/***/ }),

/***/ 177:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(178);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(6)("4a1a029e", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../node_modules/css-loader/index.js!../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-0d47ac37\",\"scoped\":true,\"hasInlineConfig\":true}!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./TranslationComponent.vue", function() {
     var newContent = require("!!../../../node_modules/css-loader/index.js!../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-0d47ac37\",\"scoped\":true,\"hasInlineConfig\":true}!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./TranslationComponent.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 178:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(4)(false);
// imports


// module
exports.push([module.i, "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", ""]);

// exports


/***/ }),

/***/ 179:
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

/* harmony default export */ __webpack_exports__["default"] = ({
    name: "TranslationComponent",
    props: {
        translatable: String,
        type: String,
        visible: Boolean,
        ru: String,
        en: String
    },

    data: function data() {
        return {
            showEn: this.visible,
            showRu: this.visible,
            ruTranslation: this.ru,
            enTranslation: this.en
        };
    }
});

/***/ }),

/***/ 180:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", [
    _c("div", { staticClass: "form-group" }, [
      _c(
        "a",
        {
          staticClass: "btn btn-info",
          on: {
            click: function($event) {
              _vm.showRu = !_vm.showRu
            }
          }
        },
        [_c("span", { staticClass: "text-white" }, [_vm._v("Russian")])]
      ),
      _vm._v(" "),
      _c(
        "a",
        {
          staticClass: "btn btn-info",
          on: {
            click: function($event) {
              _vm.showEn = !_vm.showEn
            }
          }
        },
        [_c("span", { staticClass: "text-white" }, [_vm._v("English")])]
      )
    ]),
    _vm._v(" "),
    _vm.type === "text"
      ? _c("div", [
          _vm.showRu
            ? _c("div", { staticClass: "form-group" }, [
                _c("label", { attrs: { for: _vm.translatable + "Ru" } }, [
                  _vm._v("Russian Translation")
                ]),
                _vm._v(" "),
                _c("input", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.ruTranslation,
                      expression: "ruTranslation"
                    }
                  ],
                  staticClass: "form-control",
                  attrs: {
                    id: _vm.translatable + "Ru",
                    name: _vm.translatable + "[ru]",
                    type: "text"
                  },
                  domProps: { value: _vm.ruTranslation },
                  on: {
                    input: function($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.ruTranslation = $event.target.value
                    }
                  }
                })
              ])
            : _vm._e(),
          _vm._v(" "),
          _vm.showEn
            ? _c("div", { staticClass: "form-group" }, [
                _c("label", { attrs: { for: _vm.translatable + "En" } }, [
                  _vm._v("English Translation")
                ]),
                _vm._v(" "),
                _c("input", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.enTranslation,
                      expression: "enTranslation"
                    }
                  ],
                  staticClass: "form-control",
                  attrs: {
                    id: _vm.translatable + "En",
                    name: _vm.translatable + "[en]",
                    type: "text"
                  },
                  domProps: { value: _vm.enTranslation },
                  on: {
                    input: function($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.enTranslation = $event.target.value
                    }
                  }
                })
              ])
            : _vm._e()
        ])
      : _vm.type === "textarea"
      ? _c("div", [
          _vm.showRu
            ? _c("div", { staticClass: "form-group" }, [
                _c("label", { attrs: { for: _vm.translatable + "Ru" } }, [
                  _vm._v("Russian Translation")
                ]),
                _vm._v(" "),
                _c("textarea", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.ruTranslation,
                      expression: "ruTranslation"
                    }
                  ],
                  staticClass: "form-control",
                  attrs: {
                    name: _vm.translatable + "[ru]",
                    id: _vm.translatable + "Ru"
                  },
                  domProps: { value: _vm.ruTranslation },
                  on: {
                    input: function($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.ruTranslation = $event.target.value
                    }
                  }
                })
              ])
            : _vm._e(),
          _vm._v(" "),
          _vm.showEn
            ? _c("div", { staticClass: "form-group" }, [
                _c("label", { attrs: { for: _vm.translatable + "En" } }, [
                  _vm._v("English Translation")
                ]),
                _vm._v(" "),
                _c("textarea", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.enTranslation,
                      expression: "enTranslation"
                    }
                  ],
                  staticClass: "form-control",
                  attrs: {
                    name: _vm.translatable + "[en]",
                    id: _vm.translatable + "En"
                  },
                  domProps: { value: _vm.enTranslation },
                  on: {
                    input: function($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.enTranslation = $event.target.value
                    }
                  }
                })
              ])
            : _vm._e()
        ])
      : _vm._e()
  ])
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-0d47ac37", module.exports)
  }
}

/***/ }),

/***/ 181:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(182)
}
var normalizeComponent = __webpack_require__(7)
/* script */
var __vue_script__ = __webpack_require__(184)
/* template */
var __vue_template__ = __webpack_require__(185)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-962edab2"
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
Component.options.__file = "resources/js/components/Ingredients.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-962edab2", Component.options)
  } else {
    hotAPI.reload("data-v-962edab2", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 182:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(183);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(6)("0fb8aad8", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../node_modules/css-loader/index.js!../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-962edab2\",\"scoped\":true,\"hasInlineConfig\":true}!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Ingredients.vue", function() {
     var newContent = require("!!../../../node_modules/css-loader/index.js!../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-962edab2\",\"scoped\":true,\"hasInlineConfig\":true}!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Ingredients.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 183:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(4)(false);
// imports


// module
exports.push([module.i, "\n.selectable[data-v-962edab2]:hover{\n    cursor: pointer;\n}\n.big-badge[data-v-962edab2]{\n    font-size: 1.2rem;\n    line-height: 30px;\n    padding-right: 10px;\n    display: inline-block;\n    vertical-align: middle;\n}\n.ingredient-required[data-v-962edab2]{\n    -webkit-box-shadow: 0 0 3px #ff0000;\n            box-shadow: 0 0 3px #ff0000;\n}\n\n", ""]);

// exports


/***/ }),

/***/ 184:
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

/* harmony default export */ __webpack_exports__["default"] = ({
    name: "Ingredients",

    props: {
        ingredients: Array,
        units: Array,
        value: Array
    },

    data: function data() {
        return {
            ingredientClass: 'form-control',
            ingredientList: [],
            unitList: [],
            ingredient: '',
            amount: null,
            unit: '',
            showIngredients: false,
            showUnits: false,
            preparation: []
        };
    },


    methods: {
        createBadge: function createBadge() {
            if (this.ingredient === '') {
                this.ingredientClass = this.ingredientClass + ' ingredient-required';
                return;
            }

            this.preparation.push({
                ingredient: this.ingredient,
                unit: this.unit,
                amount: this.amount
            });

            this.showIngredients = false;
            this.showUnits = false;
            this.ingredient = '';
            this.unit = '';
            this.amount = null;
        },
        checkIngredient: function checkIngredient() {
            this.ingredientClass = 'form-control';
            this.showIngredients = this.ingredient !== '';
        },
        checkUnit: function checkUnit() {
            this.showUnits = this.unit !== '';
        },
        chooseIngredient: function chooseIngredient(item) {
            this.ingredient = item;
            this.showIngredients = false;
        },
        chooseUnit: function chooseUnit(item) {
            this.unit = item;
            this.showUnits = false;
        }
    },

    computed: {
        searchIngredient: function searchIngredient() {
            var _this = this;

            return this.ingredientList.filter(function (item) {
                return item.toLowerCase().includes(_this.ingredient.toLowerCase());
            });
        },
        searchUnit: function searchUnit() {
            var _this2 = this;

            return this.unitList.filter(function (item) {
                return item.toLowerCase().includes(_this2.unit.toLowerCase());
            });
        }
    },

    mounted: function mounted() {
        this.ingredientList = this.ingredients;
        this.unitList = this.units;
        if (this.value) {
            this.preparation = this.value;
        }
    }
});

/***/ }),

/***/ 185:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", [
    _c("div", { staticClass: "row" }, [
      _c("div", { staticClass: "col-md-6" }, [
        _c("label", { attrs: { for: "ingredientInput" } }, [
          _vm._v("New Ingredient")
        ]),
        _vm._v(" "),
        _c("input", {
          directives: [
            {
              name: "model",
              rawName: "v-model",
              value: _vm.ingredient,
              expression: "ingredient"
            }
          ],
          class: _vm.ingredientClass,
          attrs: { id: "ingredientInput", type: "text" },
          domProps: { value: _vm.ingredient },
          on: {
            keyup: _vm.checkIngredient,
            input: function($event) {
              if ($event.target.composing) {
                return
              }
              _vm.ingredient = $event.target.value
            }
          }
        })
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "col-md-2" }, [
        _c("label", { attrs: { for: "unitInput" } }, [_vm._v("Unit")]),
        _vm._v(" "),
        _c("input", {
          directives: [
            {
              name: "model",
              rawName: "v-model",
              value: _vm.unit,
              expression: "unit"
            }
          ],
          staticClass: "form-control",
          attrs: { id: "unitInput", type: "text" },
          domProps: { value: _vm.unit },
          on: {
            keyup: _vm.checkUnit,
            input: function($event) {
              if ($event.target.composing) {
                return
              }
              _vm.unit = $event.target.value
            }
          }
        })
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "col-md-2" }, [
        _c("label", { attrs: { for: "amountInput" } }, [_vm._v("Amount")]),
        _vm._v(" "),
        _c("input", {
          directives: [
            {
              name: "model",
              rawName: "v-model",
              value: _vm.amount,
              expression: "amount"
            }
          ],
          staticClass: "form-control",
          attrs: { id: "amountInput", type: "number", step: "0.01" },
          domProps: { value: _vm.amount },
          on: {
            input: function($event) {
              if ($event.target.composing) {
                return
              }
              _vm.amount = $event.target.value
            }
          }
        })
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "col-md-2 d-flex flex-column" }, [
        _c(
          "a",
          {
            staticClass: "btn btn-info mt-auto",
            on: { click: _vm.createBadge }
          },
          [_c("i", { staticClass: "ti-plus text-white" })]
        )
      ])
    ]),
    _vm._v(" "),
    _c("div", { staticClass: "row" }, [
      _c("div", { staticClass: "col-md-6" }, [
        _vm.showIngredients
          ? _c(
              "ul",
              { staticClass: "list-group" },
              _vm._l(_vm.searchIngredient, function(ingredientItem) {
                return _c(
                  "li",
                  {
                    staticClass: "list-group-item selectable",
                    on: {
                      click: function($event) {
                        return _vm.chooseIngredient(ingredientItem)
                      }
                    }
                  },
                  [_vm._v(_vm._s(ingredientItem))]
                )
              }),
              0
            )
          : _vm._e()
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "col-md-2" }, [
        _vm.showUnits
          ? _c(
              "ul",
              { staticClass: "list-group" },
              _vm._l(_vm.searchUnit, function(unitItem) {
                return _c(
                  "li",
                  {
                    staticClass: "list-group-item selectable",
                    on: {
                      click: function($event) {
                        return _vm.chooseUnit(unitItem)
                      }
                    }
                  },
                  [_vm._v(_vm._s(unitItem))]
                )
              }),
              0
            )
          : _vm._e()
      ]),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "col-md-4 pt-4" },
        _vm._l(_vm.preparation, function(item, index) {
          return _c("div", { key: index }, [
            _c("span", { staticClass: "badge badge-success big-badge m-2" }, [
              _vm._v(
                _vm._s(item.amount) +
                  " " +
                  _vm._s(item.unit) +
                  " " +
                  _vm._s(item.ingredient) +
                  "\n                    "
              ),
              _c("i", {
                staticClass: "ti-close selectable",
                on: {
                  click: function($event) {
                    _vm.preparation.splice(_vm.preparation.indexOf(item), 1)
                  }
                }
              })
            ]),
            _vm._v(" "),
            _c("input", {
              attrs: {
                type: "hidden",
                name: "ingredients[" + index + "][name]"
              },
              domProps: { value: item.ingredient }
            }),
            _vm._v(" "),
            _c("input", {
              attrs: {
                type: "hidden",
                name: "ingredients[" + index + "][amount]"
              },
              domProps: { value: item.amount }
            }),
            _vm._v(" "),
            _c("input", {
              attrs: {
                type: "hidden",
                name: "ingredients[" + index + "][unit]"
              },
              domProps: { value: item.unit }
            })
          ])
        }),
        0
      )
    ])
  ])
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-962edab2", module.exports)
  }
}

/***/ }),

/***/ 186:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(187)
}
var normalizeComponent = __webpack_require__(7)
/* script */
var __vue_script__ = __webpack_require__(189)
/* template */
var __vue_template__ = __webpack_require__(190)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-3db42afd"
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
Component.options.__file = "resources/js/basic/SearchableSelect.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-3db42afd", Component.options)
  } else {
    hotAPI.reload("data-v-3db42afd", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 187:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(188);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(6)("6ba463db", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../node_modules/css-loader/index.js!../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-3db42afd\",\"scoped\":true,\"hasInlineConfig\":true}!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./SearchableSelect.vue", function() {
     var newContent = require("!!../../../node_modules/css-loader/index.js!../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-3db42afd\",\"scoped\":true,\"hasInlineConfig\":true}!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./SearchableSelect.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 188:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(4)(false);
// imports


// module
exports.push([module.i, "\n.selectable[data-v-3db42afd]:hover{\n    cursor: pointer;\n}\n", ""]);

// exports


/***/ }),

/***/ 189:
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

/* harmony default export */ __webpack_exports__["default"] = ({
    name: "SearchableSelect",

    data: function data() {
        return {
            keyword: '',
            list: [],
            showList: false
        };
    },


    props: {
        items: Array,
        label: String,
        name: String,
        value: String
    },

    computed: {
        search: function search() {
            var _this = this;

            return this.list.filter(function (item) {
                return item.toLowerCase().includes(_this.keyword.toLowerCase());
            });
        }
    },

    methods: {
        checkInputValue: function checkInputValue() {
            this.showList = this.keyword !== '';
        },
        chooseOption: function chooseOption(item) {
            this.keyword = item;
            this.showList = false;
        }
    },

    mounted: function mounted() {
        this.list = this.items;
        if (this.value) {
            this.keyword = this.value;
        }
    }
});

/***/ }),

/***/ 190:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", [
    _c("div", { staticClass: "form-group" }, [
      _c("label", { attrs: { for: _vm.name + "Input" } }, [
        _vm._v(_vm._s(_vm.label))
      ]),
      _vm._v(" "),
      _c("input", {
        directives: [
          {
            name: "model",
            rawName: "v-model",
            value: _vm.keyword,
            expression: "keyword"
          }
        ],
        staticClass: "form-control",
        attrs: { id: _vm.name + "Input", type: "text", name: _vm.name },
        domProps: { value: _vm.keyword },
        on: {
          keyup: _vm.checkInputValue,
          input: function($event) {
            if ($event.target.composing) {
              return
            }
            _vm.keyword = $event.target.value
          }
        }
      })
    ]),
    _vm._v(" "),
    _vm.showList
      ? _c(
          "ul",
          { staticClass: "list-group" },
          _vm._l(_vm.search, function(item) {
            return _c(
              "li",
              {
                staticClass: "list-group-item selectable",
                on: {
                  click: function($event) {
                    return _vm.chooseOption(item)
                  }
                }
              },
              [_vm._v(_vm._s(item))]
            )
          }),
          0
        )
      : _vm._e()
  ])
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-3db42afd", module.exports)
  }
}

/***/ }),

/***/ 191:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(192)
}
var normalizeComponent = __webpack_require__(7)
/* script */
var __vue_script__ = __webpack_require__(194)
/* template */
var __vue_template__ = __webpack_require__(199)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-8bbbe902"
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
Component.options.__file = "resources/js/components/Directions.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-8bbbe902", Component.options)
  } else {
    hotAPI.reload("data-v-8bbbe902", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 192:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(193);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(6)("1363015b", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../node_modules/css-loader/index.js!../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-8bbbe902\",\"scoped\":true,\"hasInlineConfig\":true}!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Directions.vue", function() {
     var newContent = require("!!../../../node_modules/css-loader/index.js!../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-8bbbe902\",\"scoped\":true,\"hasInlineConfig\":true}!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Directions.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 193:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(4)(false);
// imports


// module
exports.push([module.i, "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", ""]);

// exports


/***/ }),

/***/ 194:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__TranslationComponent__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__TranslationComponent___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__TranslationComponent__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__basic_Tabs__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__basic_Tabs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__basic_Tabs__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    name: "Directions",

    components: {
        TranslatableComponent: __WEBPACK_IMPORTED_MODULE_0__TranslationComponent___default.a,
        Tabs: __WEBPACK_IMPORTED_MODULE_1__basic_Tabs___default.a
    },

    data: function data() {
        return {
            directions: [],
            direction: {
                id: null,
                order: 1,
                body: {
                    uz: '',
                    en: '',
                    ru: ''
                },
                image: ''
            }
        };
    },


    props: {
        value: Array
    },

    mounted: function mounted() {
        if (this.value) {
            this.directions = this.value;
        }
    },


    methods: {
        addDirection: function addDirection() {
            this.direction.order = this.directions.length + 1;
            this.directions.push(Object.assign({}, {
                order: this.direction.order++,
                body: Object.assign({}, this.direction.body)
            }));
            this.updateBody();
        },
        editDirection: function editDirection(order) {

            var direction = this.directions.find(function (direction) {
                return direction.order === order;
            });
            this.direction.order = direction.order;
            this.updateBody(direction.body.uz, direction.body.ru, direction.body.en);
        },
        updateDirection: function updateDirection() {
            var _this = this;

            this.directions = this.directions.map(function (direction) {
                if (_this.direction.order === direction.order) {
                    direction.body.uz = _this.direction.body.uz;
                    direction.body.ru = _this.direction.body.ru;
                    direction.body.en = _this.direction.body.en;
                }

                return direction;
            });

            this.updateBody();
            this.direction.order = this.directions.length + 1;
        },
        deleteDirection: function deleteDirection(order) {

            this.directions = this.directions.filter(function (direction) {
                return direction.order !== order;
            });
            this.directions = this.directions.map(function (direction, index) {
                direction.order = index + 1;
                return direction;
            });
            this.direction.order = this.directions.length + 1;
        },
        updateBody: function updateBody() {
            var uz = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
            var ru = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
            var en = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '';

            this.direction.body.uz = uz;
            this.direction.body.ru = ru;
            this.direction.body.en = en;
        },
        upButton: function upButton(index) {
            var body = this.directions[index - 1].body;

            Vue.set(this.directions, index - 1, Object.assign({}, this.directions[index - 1], {
                body: this.directions[index].body
            }));

            Vue.set(this.directions, index, Object.assign({}, this.directions[index], {
                body: body
            }));
        },
        downButton: function downButton(index) {
            var body = this.directions[index + 1].body;

            Vue.set(this.directions, index + 1, Object.assign({}, this.directions[index + 1], {
                body: this.directions[index].body
            }));

            Vue.set(this.directions, index, Object.assign({}, this.directions[index], {
                body: body
            }));
        }
    }
});

/***/ }),

/***/ 195:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(196);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(6)("719035d5", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../node_modules/css-loader/index.js!../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-c17b3b46\",\"scoped\":true,\"hasInlineConfig\":true}!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Tabs.vue", function() {
     var newContent = require("!!../../../node_modules/css-loader/index.js!../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-c17b3b46\",\"scoped\":true,\"hasInlineConfig\":true}!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Tabs.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 196:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(4)(false);
// imports


// module
exports.push([module.i, "\n.tabPadding[data-v-c17b3b46]{\n    padding: 20px;\n}\n", ""]);

// exports


/***/ }),

/***/ 197:
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

/* harmony default export */ __webpack_exports__["default"] = ({
    name: "Tabs",

    data: function data() {
        return {};
    },


    props: {
        languages: Object,
        order: Number
    },

    methods: {
        editButtonClicked: function editButtonClicked() {
            this.$emit('edit', this.order);
        },
        deleteButtonClicked: function deleteButtonClicked() {
            this.$emit('delete', this.order);
        }
    }
});

/***/ }),

/***/ 198:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "border border-secondary rounded bg-blue" }, [
    _c("nav", [
      _c(
        "div",
        {
          staticClass: "nav nav-tabs bg-light d-flex",
          attrs: { id: "nav-tab", role: "tablist" }
        },
        [
          _c(
            "a",
            {
              staticClass: "nav-item nav-link active",
              attrs: {
                id: "nav-uz-tab" + _vm.order,
                "data-toggle": "tab",
                href: "#nav-uz" + _vm.order,
                role: "tab",
                "aria-controls": "nav-uz" + _vm.order,
                "aria-selected": "true"
              }
            },
            [_vm._v("Uz")]
          ),
          _vm._v(" "),
          _c(
            "a",
            {
              staticClass: "nav-item nav-link",
              attrs: {
                id: "nav-ru-tab" + _vm.order,
                "data-toggle": "tab",
                href: "#nav-ru" + _vm.order,
                role: "tab",
                "aria-controls": "nav-ru" + _vm.order,
                "aria-selected": "false"
              }
            },
            [_vm._v("Ru")]
          ),
          _vm._v(" "),
          _c(
            "a",
            {
              staticClass: "nav-item nav-link",
              attrs: {
                id: "nav-en-tab" + _vm.order,
                "data-toggle": "tab",
                href: "#nav-en" + _vm.order,
                role: "tab",
                "aria-controls": "nav-en" + _vm.order,
                "aria-selected": "false"
              }
            },
            [_vm._v("En")]
          ),
          _vm._v(" "),
          _c(
            "a",
            {
              staticClass: "nav-item nav-link ml-auto",
              attrs: {
                id: "editTab",
                "data-toggle": "tab",
                href: "#",
                role: "tab",
                "aria-controls": "",
                "aria-selected": "false"
              },
              on: { click: _vm.editButtonClicked }
            },
            [_c("i", { staticClass: "ti-pencil text-primary" })]
          ),
          _vm._v(" "),
          _c(
            "a",
            {
              staticClass: "nav-item nav-link",
              attrs: {
                id: "deleteTab",
                "data-toggle": "tab",
                href: "#",
                role: "tab",
                "aria-controls": "",
                "aria-selected": "false"
              },
              on: { click: _vm.deleteButtonClicked }
            },
            [_c("i", { staticClass: "ti-trash text-danger" })]
          )
        ]
      )
    ]),
    _vm._v(" "),
    _c("div", { staticClass: "tab-content", attrs: { id: "nav-tabContent" } }, [
      _c(
        "div",
        {
          staticClass: "tab-pane fade show active tabPadding",
          attrs: {
            id: "nav-uz" + _vm.order,
            role: "tabpanel",
            "aria-labelledby": "nav-uz-tab" + _vm.order
          }
        },
        [_c("p", [_vm._v(_vm._s(_vm.languages.uz))])]
      ),
      _vm._v(" "),
      _c(
        "div",
        {
          staticClass: "tab-pane fade tabPadding",
          attrs: {
            id: "nav-ru" + _vm.order,
            role: "tabpanel",
            "aria-labelledby": "nav-ru-tab" + _vm.order
          }
        },
        [_c("p", [_vm._v(_vm._s(_vm.languages.ru))])]
      ),
      _vm._v(" "),
      _c(
        "div",
        {
          staticClass: "tab-pane fade tabPadding",
          attrs: {
            id: "nav-en" + _vm.order,
            role: "tabpanel",
            "aria-labelledby": "nav-en-tab" + _vm.order
          }
        },
        [_c("p", [_vm._v(_vm._s(_vm.languages.en))])]
      )
    ])
  ])
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-c17b3b46", module.exports)
  }
}

/***/ }),

/***/ 199:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    [
      _c("div", { staticClass: "row" }, [
        _c("div", { staticClass: "col-md-4" }, [
          _c("div", { staticClass: "form-group" }, [
            _c("label", { attrs: { for: "bodyUz" } }, [
              _vm._v("Instruction Uz")
            ]),
            _vm._v(" "),
            _c("textarea", {
              directives: [
                {
                  name: "model",
                  rawName: "v-model",
                  value: _vm.direction.body.uz,
                  expression: "direction.body.uz"
                }
              ],
              staticClass: "form-control",
              attrs: { id: "bodyUz" },
              domProps: { value: _vm.direction.body.uz },
              on: {
                input: function($event) {
                  if ($event.target.composing) {
                    return
                  }
                  _vm.$set(_vm.direction.body, "uz", $event.target.value)
                }
              }
            })
          ])
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "col-md-4" }, [
          _c("div", { staticClass: "form-group" }, [
            _c("label", { attrs: { for: "bodyRu" } }, [
              _vm._v("Instruction Ru")
            ]),
            _vm._v(" "),
            _c("textarea", {
              directives: [
                {
                  name: "model",
                  rawName: "v-model",
                  value: _vm.direction.body.ru,
                  expression: "direction.body.ru"
                }
              ],
              staticClass: "form-control",
              attrs: { id: "bodyRu" },
              domProps: { value: _vm.direction.body.ru },
              on: {
                input: function($event) {
                  if ($event.target.composing) {
                    return
                  }
                  _vm.$set(_vm.direction.body, "ru", $event.target.value)
                }
              }
            })
          ])
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "col-md-4" }, [
          _c("div", { staticClass: "form-group" }, [
            _c("label", { attrs: { for: "bodyEn" } }, [
              _vm._v("Instruction En")
            ]),
            _vm._v(" "),
            _c("textarea", {
              directives: [
                {
                  name: "model",
                  rawName: "v-model",
                  value: _vm.direction.body.en,
                  expression: "direction.body.en"
                }
              ],
              staticClass: "form-control",
              attrs: { id: "bodyEn" },
              domProps: { value: _vm.direction.body.en },
              on: {
                input: function($event) {
                  if ($event.target.composing) {
                    return
                  }
                  _vm.$set(_vm.direction.body, "en", $event.target.value)
                }
              }
            })
          ])
        ])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "row" }, [
        _c(
          "div",
          { staticClass: "col-md-4 offset-8 d-flex justify-content-between" },
          [
            _c(
              "a",
              {
                staticClass: "btn btn-info text-white",
                on: { click: _vm.updateDirection }
              },
              [_c("i", { staticClass: "ti-check" }), _vm._v(" update ")]
            ),
            _vm._v(" "),
            _c(
              "a",
              {
                staticClass: "btn btn-success text-white",
                on: { click: _vm.addDirection }
              },
              [_c("i", { staticClass: "ti-plus" }), _vm._v(" add ")]
            )
          ]
        )
      ]),
      _vm._v(" "),
      _c("hr"),
      _vm._v(" "),
      _vm._l(_vm.directions, function(dir, index) {
        return _c("div", { key: dir.order, staticClass: "row mb-4" }, [
          _c(
            "div",
            { staticClass: "col-11" },
            [
              _c("tabs", {
                staticClass: "m-4",
                attrs: { order: dir.order, languages: dir.body },
                on: { edit: _vm.editDirection, delete: _vm.deleteDirection }
              })
            ],
            1
          ),
          _vm._v(" "),
          _c("div", { staticClass: "col-1 d-flex align-items-center row" }, [
            _c("div", { staticClass: "col-md-12" }, [
              _c(
                "button",
                {
                  staticClass: "btn btn-warning",
                  attrs: { type: "button", disabled: index === 0 },
                  on: {
                    click: function($event) {
                      return _vm.upButton(index)
                    }
                  }
                },
                [_c("i", { staticClass: "ti-arrow-up" })]
              )
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "col-md-12" }, [
              _c(
                "button",
                {
                  staticClass: "btn btn-warning",
                  attrs: {
                    type: "button",
                    disabled: index === _vm.directions.length - 1
                  },
                  on: {
                    click: function($event) {
                      return _vm.downButton(index)
                    }
                  }
                },
                [_c("i", { staticClass: "ti-arrow-down" })]
              )
            ])
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "col-md-12 m-4" }, [
            _c("img", { attrs: { src: dir.image, alt: "" } }),
            _vm._v(" "),
            _c("label", { attrs: { for: "directionImage" + dir.order } }, [
              _c("strong", [_vm._v("Step " + _vm._s(dir.order) + " image")])
            ]),
            _vm._v(" "),
            _c("input", {
              staticClass: "form-control-file",
              attrs: {
                id: "directionImage" + dir.order,
                type: "file",
                name: "directions[" + dir.order + "][image]"
              }
            }),
            _vm._v(" "),
            _c("span", { staticClass: "small" }, [
              _vm._v("Upload images just before you submit")
            ])
          ]),
          _vm._v(" "),
          _c("div", [
            _c("input", {
              attrs: {
                type: "hidden",
                name: "directions[" + dir.order + "][id]"
              },
              domProps: { value: dir.id }
            }),
            _vm._v(" "),
            _c("input", {
              attrs: {
                type: "hidden",
                name: "directions[" + dir.order + "][body][uz]"
              },
              domProps: { value: dir.body.uz }
            }),
            _vm._v(" "),
            _c("input", {
              attrs: {
                type: "hidden",
                name: "directions[" + dir.order + "][body][ru]"
              },
              domProps: { value: dir.body.ru }
            }),
            _vm._v(" "),
            _c("input", {
              attrs: {
                type: "hidden",
                name: "directions[" + dir.order + "][body][en]"
              },
              domProps: { value: dir.body.en }
            })
          ])
        ])
      })
    ],
    2
  )
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-8bbbe902", module.exports)
  }
}

/***/ }),

/***/ 200:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(201)
}
var normalizeComponent = __webpack_require__(7)
/* script */
var __vue_script__ = __webpack_require__(203)
/* template */
var __vue_template__ = __webpack_require__(204)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-58e6f4cc"
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
Component.options.__file = "resources/js/components/RecipeCollections.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-58e6f4cc", Component.options)
  } else {
    hotAPI.reload("data-v-58e6f4cc", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 201:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(202);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(6)("67b939ce", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../node_modules/css-loader/index.js!../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-58e6f4cc\",\"scoped\":true,\"hasInlineConfig\":true}!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./RecipeCollections.vue", function() {
     var newContent = require("!!../../../node_modules/css-loader/index.js!../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-58e6f4cc\",\"scoped\":true,\"hasInlineConfig\":true}!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./RecipeCollections.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 202:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(4)(false);
// imports


// module
exports.push([module.i, "\n.selectable[data-v-58e6f4cc]:hover {\n    cursor: pointer;\n}\n", ""]);

// exports


/***/ }),

/***/ 203:
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

/* harmony default export */ __webpack_exports__["default"] = ({
    name: "RecipeCollections",

    props: ['collectionId'],

    data: function data() {
        return {
            showRecipes: false,
            id: this.collectionId,
            name: '',
            recipe: {
                id: null,
                name: ''
            },
            recipes: [],
            collection: []
        };
    },


    computed: {
        foundRecipes: function foundRecipes() {
            axios.get('/api/dashboard/recipes', {
                params: {
                    name: this.name
                }
            }).then(function (response) {
                console.log(response.data);
                return response.data;
            }).catch(function (error) {
                console.log(error);
            });
        }
    },

    watch: {
        name: function name(val) {
            var _this = this;

            if (val === '') {
                this.showRecipes = false;
            } else {
                this.showRecipes = true;
                axios.get('/api/dashboard/recipes', {
                    params: {
                        name: val
                    }
                }).then(function (response) {
                    _this.recipes = response.data;
                }).catch(function (error) {
                    console.log(error);
                });
            }
        }
    },

    methods: {
        addRecipe: function addRecipe(recipe) {
            var _this2 = this;

            axios.post('/api/dashboard/collections/add', {
                recipe_id: recipe.id,
                collection_id: this.collectionId
            }).then(function (response) {
                if (response.data.added) {
                    _this2.collection.push(recipe);
                }
            }).catch(function (error) {
                alert('Unable to add recipe');
            });
        },
        removeRecipe: function removeRecipe(recipe) {
            var _this3 = this;

            axios.post('/api/dashboard/collections/remove', {
                recipe_id: recipe.id,
                collection_id: this.collectionId
            }).then(function (response) {
                if (response.data.removed) {
                    var index = _this3.collection.findIndex(function (item) {
                        return item.id === recipe.id;
                    });

                    _this3.collection.splice(index, 1);
                }
            }).catch(function (error) {
                alert('Unable to remove recipe');
            });
        }
    },

    mounted: function mounted() {
        var _this4 = this;

        axios.get('/api/dashboard/collections/' + this.id + '/recipes').then(function (response) {
            _this4.collection = response.data;
        }).catch(function (error) {
            console.log(error);
        });
    }
});

/***/ }),

/***/ 204:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", [
    _c("div", { staticClass: "row" }, [
      _c("div", { staticClass: "col-md-6" }, [
        _c("div", { staticClass: "row" }, [
          _c("div", { staticClass: "col-12" }, [
            _c("label", { attrs: { for: "nameInput" } }, [
              _vm._v("Search recipe")
            ]),
            _vm._v(" "),
            _c("input", {
              directives: [
                {
                  name: "model",
                  rawName: "v-model",
                  value: _vm.name,
                  expression: "name"
                }
              ],
              staticClass: "form-control",
              attrs: { type: "text", id: "nameInput" },
              domProps: { value: _vm.name },
              on: {
                input: function($event) {
                  if ($event.target.composing) {
                    return
                  }
                  _vm.name = $event.target.value
                }
              }
            })
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "col-12" }, [
            _vm.showRecipes
              ? _c(
                  "ul",
                  { staticClass: "list-group" },
                  _vm._l(this.recipes, function(recipe) {
                    return _c(
                      "li",
                      {
                        key: recipe.id,
                        staticClass: "list-group-item selectable",
                        on: {
                          click: function($event) {
                            return _vm.addRecipe(recipe)
                          }
                        }
                      },
                      [_vm._v(_vm._s(recipe.name))]
                    )
                  }),
                  0
                )
              : _vm._e()
          ])
        ])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "col-md-6" }, [
        _vm._v("\n            Recipes in this collection:\n            "),
        _c(
          "ul",
          { staticClass: "list-group" },
          _vm._l(_vm.collection, function(recipe) {
            return _c(
              "li",
              {
                key: recipe.id,
                staticClass:
                  "list-group-item d-flex justify-content-between align-items-center"
              },
              [
                _vm._v(
                  "\n                    " +
                    _vm._s(recipe.name) +
                    "\n                    "
                ),
                _c(
                  "span",
                  {
                    staticClass: "badge badge-primary badge-pill selectable",
                    on: {
                      click: function($event) {
                        return _vm.removeRecipe(recipe)
                      }
                    }
                  },
                  [_vm._v("x")]
                )
              ]
            )
          }),
          0
        )
      ])
    ])
  ])
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-58e6f4cc", module.exports)
  }
}

/***/ }),

/***/ 205:
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(__webpack_provided_window_dot_jQuery) {
window._ = __webpack_require__(11);

/**
 * We'll load jQuery and the Bootstrap jQuery plugin which provides support
 * for JavaScript based Bootstrap features such as modals and tabs. This
 * code may be modified to fit the specific needs of your application.
 */

try {
  window.Popper = __webpack_require__(28).default;
  window.$ = __webpack_provided_window_dot_jQuery = __webpack_require__(2);

  __webpack_require__(22);
} catch (e) {}

/**
 * We'll load the axios HTTP library which allows us to easily issue requests
 * to our Laravel back-end. This library automatically handles sending the
 * CSRF token as a header based on the value of the "XSRF" token cookie.
 */

window.axios = __webpack_require__(12);

window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';

/**
 * Next we will register the CSRF Token as a common header with Axios so that
 * all outgoing HTTP requests automatically have it attached. This is just
 * a simple convenience so we don't have to attach every token manually.
 */

var token = document.head.querySelector('meta[name="csrf-token"]');

if (token) {
  window.axios.defaults.headers.common['X-CSRF-TOKEN'] = token.content;
} else {
  console.error('CSRF token not found: https://laravel.com/docs/csrf#csrf-x-csrf-token');
}

/**
 * Echo exposes an expressive API for subscribing to channels and listening
 * for events that are broadcast by Laravel. Echo and event broadcasting
 * allows your team to easily build robust real-time web applications.
 */

// import Echo from 'laravel-echo'

// window.Pusher = require('pusher-js');

// window.Echo = new Echo({
//     broadcaster: 'pusher',
//     key: process.env.MIX_PUSHER_APP_KEY,
//     cluster: process.env.MIX_PUSHER_APP_CLUSTER,
//     encrypted: true
// });
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2)))

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

/***/ 227:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 25:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(177)
}
var normalizeComponent = __webpack_require__(7)
/* script */
var __vue_script__ = __webpack_require__(179)
/* template */
var __vue_template__ = __webpack_require__(180)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-0d47ac37"
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
Component.options.__file = "resources/js/components/TranslationComponent.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-0d47ac37", Component.options)
  } else {
    hotAPI.reload("data-v-0d47ac37", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 26:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(195)
}
var normalizeComponent = __webpack_require__(7)
/* script */
var __vue_script__ = __webpack_require__(197)
/* template */
var __vue_template__ = __webpack_require__(198)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-c17b3b46"
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
Component.options.__file = "resources/js/basic/Tabs.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-c17b3b46", Component.options)
  } else {
    hotAPI.reload("data-v-c17b3b46", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


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

},[175]);