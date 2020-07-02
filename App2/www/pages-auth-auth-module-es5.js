function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-auth-auth-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/auth/auth.page.html":
  /*!*********************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/auth/auth.page.html ***!
    \*********************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesAuthAuthPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n<ion-content>\n  <div>\n    <form [formGroup]=\"ComponentLoginForm\">\n      <ion-input clearInput=true formControlName=\"email\" type=\"email\" placeholder=\"Email\"\n        [ngClass]=\"{ 'invalid': invalidEmail }\"></ion-input>\n      <p *ngIf='!ComponentLoginForm.controls.email.valid'>Enter a valid email.</p>\n      <ion-input clearInput=true formControlName=\"password\" type=\"password\" placeholder=\"Password\" required=\"true\"\n        [ngClass]=\"{ 'invalid': invalidPassword }\"></ion-input>\n      <p *ngIf='!ComponentLoginForm.controls.password.valid'>Enter a password</p>\n    </form>\n    <ion-row style=\"text-align: center\">\n      <ion-button [disabled]=\"!ComponentLoginForm.valid\" size=\"default\" (click)=\"summit()\">LogIn\n      </ion-button>\n    </ion-row>\n  </div>\n</ion-content>";
    /***/
  },

  /***/
  "./src/app/pages/auth/auth-routing.module.ts":
  /*!***************************************************!*\
    !*** ./src/app/pages/auth/auth-routing.module.ts ***!
    \***************************************************/

  /*! exports provided: AuthPageRoutingModule */

  /***/
  function srcAppPagesAuthAuthRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AuthPageRoutingModule", function () {
      return AuthPageRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _auth_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./auth.page */
    "./src/app/pages/auth/auth.page.ts");

    var routes = [{
      path: '',
      component: _auth_page__WEBPACK_IMPORTED_MODULE_3__["AuthPage"]
    }];

    var AuthPageRoutingModule = function AuthPageRoutingModule() {
      _classCallCheck(this, AuthPageRoutingModule);
    };

    AuthPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], AuthPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/pages/auth/auth.module.ts":
  /*!*******************************************!*\
    !*** ./src/app/pages/auth/auth.module.ts ***!
    \*******************************************/

  /*! exports provided: AuthPageModule */

  /***/
  function srcAppPagesAuthAuthModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AuthPageModule", function () {
      return AuthPageModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var _auth_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./auth-routing.module */
    "./src/app/pages/auth/auth-routing.module.ts");
    /* harmony import */


    var _auth_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./auth.page */
    "./src/app/pages/auth/auth.page.ts");

    var AuthPageModule = function AuthPageModule() {
      _classCallCheck(this, AuthPageModule);
    };

    AuthPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _auth_routing_module__WEBPACK_IMPORTED_MODULE_5__["AuthPageRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"]],
      declarations: [_auth_page__WEBPACK_IMPORTED_MODULE_6__["AuthPage"]]
    })], AuthPageModule);
    /***/
  },

  /***/
  "./src/app/pages/auth/auth.page.scss":
  /*!*******************************************!*\
    !*** ./src/app/pages/auth/auth.page.scss ***!
    \*******************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesAuthAuthPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "ion-content {\n  padding: 0px;\n}\nion-content div {\n  background: url(/assets/img/backgroundSingIn.png);\n  height: 100%;\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\nion-content div .invalid {\n  size: 80%;\n  border: 1px solid #ea6153;\n  border-radius: 20px;\n}\nion-content div form p {\n  margin: 2px;\n  font-size: 10px;\n  color: white;\n}\nion-content div form ion-input {\n  border: 1px solid white;\n  margin-top: 10px;\n  margin-bottom: 10px;\n  --placeholder-color:white;\n  --color: white;\n}\nion-content div ion-button {\n  margin-top: 20px;\n  --background: #47525E;\n  --color: white;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2JicmVuZXMvcHJvamVjdHMvVEVDL0NFMzEwMS1Db1RFQy1NYXAvQXBwMi9zcmMvYXBwL3BhZ2VzL2F1dGgvYXV0aC5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL2F1dGgvYXV0aC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxZQUFBO0FDQ0o7QURBSTtFQUNJLGlEQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0FDRVI7QUREUTtFQUNJLFNBQUE7RUFDQSx5QkFBQTtFQUNBLG1CQUFBO0FDR1o7QURBWTtFQUNJLFdBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtBQ0VoQjtBREFZO0VBQ0ksdUJBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EseUJBQUE7RUFDQSxjQUFBO0FDRWhCO0FERVE7RUFDSSxnQkFBQTtFQUNBLHFCQUFBO0VBQ0EsY0FBQTtBQ0FaIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvYXV0aC9hdXRoLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1jb250ZW50IHtcbiAgICBwYWRkaW5nOiAwcHg7XG4gICAgZGl2IHtcbiAgICAgICAgYmFja2dyb3VuZDogdXJsKC9hc3NldHMvaW1nL2JhY2tncm91bmRTaW5nSW4ucG5nKTtcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIC5pbnZhbGlkIHtcbiAgICAgICAgICAgIHNpemU6IDgwJTtcbiAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNlYTYxNTM7XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xuICAgICAgICB9XG4gICAgICAgIGZvcm0ge1xuICAgICAgICAgICAgcCB7XG4gICAgICAgICAgICAgICAgbWFyZ2luOiAycHg7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxMHB4O1xuICAgICAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlvbi1pbnB1dCB7XG4gICAgICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgd2hpdGU7XG4gICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMTBweDtcbiAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICAgICAgICAgICAgICAgIC0tcGxhY2Vob2xkZXItY29sb3I6d2hpdGU7XG4gICAgICAgICAgICAgICAgLS1jb2xvcjogd2hpdGU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpb24tYnV0dG9uIHtcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDIwcHg7XG4gICAgICAgICAgICAtLWJhY2tncm91bmQ6ICM0NzUyNUU7XG4gICAgICAgICAgICAtLWNvbG9yOiB3aGl0ZTtcbiAgICAgICAgfVxuICAgIH1cbn1cbiIsImlvbi1jb250ZW50IHtcbiAgcGFkZGluZzogMHB4O1xufVxuaW9uLWNvbnRlbnQgZGl2IHtcbiAgYmFja2dyb3VuZDogdXJsKC9hc3NldHMvaW1nL2JhY2tncm91bmRTaW5nSW4ucG5nKTtcbiAgaGVpZ2h0OiAxMDAlO1xuICB3aWR0aDogMTAwJTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5pb24tY29udGVudCBkaXYgLmludmFsaWQge1xuICBzaXplOiA4MCU7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNlYTYxNTM7XG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XG59XG5pb24tY29udGVudCBkaXYgZm9ybSBwIHtcbiAgbWFyZ2luOiAycHg7XG4gIGZvbnQtc2l6ZTogMTBweDtcbiAgY29sb3I6IHdoaXRlO1xufVxuaW9uLWNvbnRlbnQgZGl2IGZvcm0gaW9uLWlucHV0IHtcbiAgYm9yZGVyOiAxcHggc29saWQgd2hpdGU7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gIC0tcGxhY2Vob2xkZXItY29sb3I6d2hpdGU7XG4gIC0tY29sb3I6IHdoaXRlO1xufVxuaW9uLWNvbnRlbnQgZGl2IGlvbi1idXR0b24ge1xuICBtYXJnaW4tdG9wOiAyMHB4O1xuICAtLWJhY2tncm91bmQ6ICM0NzUyNUU7XG4gIC0tY29sb3I6IHdoaXRlO1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/pages/auth/auth.page.ts":
  /*!*****************************************!*\
    !*** ./src/app/pages/auth/auth.page.ts ***!
    \*****************************************/

  /*! exports provided: AuthPage */

  /***/
  function srcAppPagesAuthAuthPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AuthPage", function () {
      return AuthPage;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");

    var AuthPage = /*#__PURE__*/function () {
      /**
       * Constructor will contain the form validators
       * @param cdr Detect Changes in the ngOnInit
       * @param formBuilder Charge of form and validations
       * @param toastController Controller of Toast Component
       * @param router Controller for the Router
       */
      function AuthPage(cdr, toastController, formBuilder, router) {
        _classCallCheck(this, AuthPage);

        this.cdr = cdr;
        this.toastController = toastController;
        this.formBuilder = formBuilder;
        this.router = router;
        /**
         * Boolean for the valid email
         */

        this.invalidEmail = false;
        /**
         * Boolean for the valid password
         */

        this.invalidPassword = false;
        /**
         * Funtion that valid the password as an input required and the email with an specific patter
         */

        this.ComponentLoginForm = formBuilder.group({
          password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
          email: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}'), _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required])]
        });
      }

      _createClass(AuthPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
        /**
         * Funtion for send all the information of the forms
         */

      }, {
        key: "summit",
        value: function summit() {
          // The credentials was valid so the value containt an object with the values
          if (!this.ComponentLoginForm.valid) {
            console.log('Invalid');
            this.presentToastEmail('Invalid credentials', 'danger');

            if (!this.ComponentLoginForm.controls.email.valid) {
              console.log('email invalido');
              this.invalidEmail = true;
            } else if (!this.ComponentLoginForm.controls.password.valid) {
              console.log('password invalid');
              this.invalidPassword = true;
            }
          } else {
            this.presentToastEmail('Valid credentials', 'success');
            this.router.navigateByUrl('home');
          }
        }
        /**
         * Funtion that show Toast notification on the aplication at the begging for show the proper way to enter the email
         */

      }, {
        key: "presentToastEmail",
        value: function presentToastEmail(messageT, colorT) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
            var toast;
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    _context.next = 2;
                    return this.toastController.create({
                      message: messageT,
                      color: colorT,
                      duration: 4000
                    });

                  case 2:
                    toast = _context.sent;
                    toast.present();

                  case 4:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));
        }
      }]);

      return AuthPage;
    }();

    AuthPage.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ToastController"]
      }, {
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }];
    };

    AuthPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-auth',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./auth.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/auth/auth.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./auth.page.scss */
      "./src/app/pages/auth/auth.page.scss"))["default"]]
    })], AuthPage);
    /***/
  }
}]);
//# sourceMappingURL=pages-auth-auth-module-es5.js.map