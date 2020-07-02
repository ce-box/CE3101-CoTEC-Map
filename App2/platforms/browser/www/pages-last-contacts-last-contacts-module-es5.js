function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-last-contacts-last-contacts-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/last-contacts/last-contacts.page.html":
  /*!***************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/last-contacts/last-contacts.page.html ***!
    \***************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesLastContactsLastContactsPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-content>\n  <div>\n    <ion-button routerLink=\"/home\">\n      <ion-icon name=\"arrow-back-outline\"></ion-icon>\n    </ion-button>\n    <h3>Management of te last contact per patient</h3>\n    <div class=\"buttons\">\n      <ion-button (click)=\"presentModal('add')\">Agregar</ion-button>\n      <ion-button>Eliminar</ion-button>\n      <ion-button (click)=\"presentModal('edit')\">Editar</ion-button>\n    </div>\n    <div class=\"table\">\n      <ion-grid>\n        <ion-row class=\"titles\">\n          <ion-col size=\"4\">\n            <ion-text>Name</ion-text>\n          </ion-col>\n          <ion-col size=\"4\">\n            <ion-text>LastName</ion-text>\n          </ion-col>\n          <ion-col size=\"4\">\n            <ion-text>Id</ion-text>\n          </ion-col>\n        </ion-row>\n        <ion-row *ngFor=\"let item of listPatients1\">\n          <ion-col size=\"4\">\n            <ion-text>{{item.Name}}</ion-text>\n          </ion-col>\n          <ion-col size=\"4\">\n            <ion-text>{{item.LastName}}</ion-text>\n          </ion-col>\n          <ion-col size=\"4\">\n            <ion-text>{{item.Id}}</ion-text>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n      <ion-grid>\n        <ion-row class=\"titles\">\n          <ion-col size=\"5\">\n            <ion-text>Address</ion-text>\n          </ion-col>\n          <ion-col size=\"2\">\n            <ion-text>Age</ion-text>\n          </ion-col>\n          <ion-col size=\"5\">\n            <ion-text>email</ion-text>\n          </ion-col>\n        </ion-row>\n        <ion-row *ngFor=\"let item of listPatients1\">\n          <ion-col size=\"5\">\n            <ion-text>{{item.Address}}</ion-text>\n          </ion-col>\n          <ion-col size=\"2\">\n            <ion-text>{{item.Age}}</ion-text>\n          </ion-col>\n          <ion-col size=\"5\">\n            <ion-text>{{item.email}}</ion-text>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n      <ion-grid>\n        <ion-row class=\"titles\">\n          <ion-col size=\"6\">\n            <ion-text>Pathology</ion-text>\n          </ion-col>\n          <ion-col size=\"6\">\n            <ion-text>Nationality</ion-text>\n          </ion-col>\n        </ion-row>\n        <ion-row *ngFor=\"let item of listPatients1\">\n          <ion-col size=\"6\">\n            {{item.Pathology}}\n          </ion-col>\n          <ion-col size=\"6\">\n            <ion-text>{{item.Nationality}}</ion-text>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n    </div>\n  </div>\n</ion-content>";
    /***/
  },

  /***/
  "./src/app/pages/last-contacts/last-contacts-routing.module.ts":
  /*!*********************************************************************!*\
    !*** ./src/app/pages/last-contacts/last-contacts-routing.module.ts ***!
    \*********************************************************************/

  /*! exports provided: LastContactsPageRoutingModule */

  /***/
  function srcAppPagesLastContactsLastContactsRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LastContactsPageRoutingModule", function () {
      return LastContactsPageRoutingModule;
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


    var _last_contacts_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./last-contacts.page */
    "./src/app/pages/last-contacts/last-contacts.page.ts");

    var routes = [{
      path: '',
      component: _last_contacts_page__WEBPACK_IMPORTED_MODULE_3__["LastContactsPage"]
    }];

    var LastContactsPageRoutingModule = function LastContactsPageRoutingModule() {
      _classCallCheck(this, LastContactsPageRoutingModule);
    };

    LastContactsPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], LastContactsPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/pages/last-contacts/last-contacts.module.ts":
  /*!*************************************************************!*\
    !*** ./src/app/pages/last-contacts/last-contacts.module.ts ***!
    \*************************************************************/

  /*! exports provided: LastContactsPageModule */

  /***/
  function srcAppPagesLastContactsLastContactsModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LastContactsPageModule", function () {
      return LastContactsPageModule;
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


    var _last_contacts_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./last-contacts-routing.module */
    "./src/app/pages/last-contacts/last-contacts-routing.module.ts");
    /* harmony import */


    var _last_contacts_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./last-contacts.page */
    "./src/app/pages/last-contacts/last-contacts.page.ts");

    var LastContactsPageModule = function LastContactsPageModule() {
      _classCallCheck(this, LastContactsPageModule);
    };

    LastContactsPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _last_contacts_routing_module__WEBPACK_IMPORTED_MODULE_5__["LastContactsPageRoutingModule"]],
      declarations: [_last_contacts_page__WEBPACK_IMPORTED_MODULE_6__["LastContactsPage"]]
    })], LastContactsPageModule);
    /***/
  },

  /***/
  "./src/app/pages/last-contacts/last-contacts.page.scss":
  /*!*************************************************************!*\
    !*** ./src/app/pages/last-contacts/last-contacts.page.scss ***!
    \*************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesLastContactsLastContactsPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "ion-content div {\n  background-color: #7EA470;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\nion-content div ion-button {\n  align-self: flex-start;\n  --background: transparent;\n}\nion-content div h3 {\n  margin-top: 20px;\n  color: white;\n  text-align: center;\n}\nion-content div div.buttons {\n  margin: 10px 0px;\n  display: flex;\n  flex-direction: row;\n}\nion-content div div.buttons ion-button {\n  --background: #3AC0BB;\n  --color: #343F4B;\n}\nion-content div ion-grid {\n  color: white;\n  width: 100%;\n}\nion-content div ion-grid ion-row {\n  border-bottom: 1px solid gray;\n}\nion-content div ion-grid ion-row.titles {\n  background: #3AC0BB;\n  border-bottom: none;\n  margin: 10px 0px 0px;\n}\nion-content div ion-grid ion-row ion-col ul {\n  padding-left: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2JicmVuZXMvcHJvamVjdHMvVEVDL0NFMzEwMS1Db1RFQy1NYXAvQXBwMi9zcmMvYXBwL3BhZ2VzL2xhc3QtY29udGFjdHMvbGFzdC1jb250YWN0cy5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL2xhc3QtY29udGFjdHMvbGFzdC1jb250YWN0cy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0k7RUFDSSx5QkFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7QUNBUjtBREVRO0VBQ0ksc0JBQUE7RUFDQSx5QkFBQTtBQ0FaO0FERVE7RUFDSSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtBQ0FaO0FERVE7RUFDSSxnQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtBQ0FaO0FEQ1k7RUFDSSxxQkFBQTtFQUNBLGdCQUFBO0FDQ2hCO0FERVE7RUFDSSxZQUFBO0VBQ0EsV0FBQTtBQ0FaO0FEQ1k7RUFDSSw2QkFBQTtBQ0NoQjtBREFnQjtFQUNJLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxvQkFBQTtBQ0VwQjtBRENvQjtFQUNJLGtCQUFBO0FDQ3hCIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvbGFzdC1jb250YWN0cy9sYXN0LWNvbnRhY3RzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1jb250ZW50e1xuICAgIGRpdntcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzdFQTQ3MCA7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuXG4gICAgICAgIGlvbi1idXR0b257XG4gICAgICAgICAgICBhbGlnbi1zZWxmOiBmbGV4LXN0YXJ0O1xuICAgICAgICAgICAgLS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgICAgICAgfVxuICAgICAgICBoM3tcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDIwcHg7XG4gICAgICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIH1cbiAgICAgICAgZGl2LmJ1dHRvbnN7XG4gICAgICAgICAgICBtYXJnaW46IDEwcHggMHB4O1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgICAgICAgICBpb24tYnV0dG9ue1xuICAgICAgICAgICAgICAgIC0tYmFja2dyb3VuZDogIzNBQzBCQjtcbiAgICAgICAgICAgICAgICAtLWNvbG9yOiAjMzQzRjRCO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlvbi1ncmlke1xuICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICBpb24tcm93e1xuICAgICAgICAgICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBncmF5O1xuICAgICAgICAgICAgICAgICYudGl0bGVze1xuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiMzQUMwQkIgO1xuICAgICAgICAgICAgICAgICAgICBib3JkZXItYm90dG9tOiBub25lO1xuICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDEwcHggMHB4IDBweDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaW9uLWNvbHtcbiAgICAgICAgICAgICAgICAgICAgdWx7XG4gICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59IiwiaW9uLWNvbnRlbnQgZGl2IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzdFQTQ3MDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5pb24tY29udGVudCBkaXYgaW9uLWJ1dHRvbiB7XG4gIGFsaWduLXNlbGY6IGZsZXgtc3RhcnQ7XG4gIC0tYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG59XG5pb24tY29udGVudCBkaXYgaDMge1xuICBtYXJnaW4tdG9wOiAyMHB4O1xuICBjb2xvcjogd2hpdGU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbmlvbi1jb250ZW50IGRpdiBkaXYuYnV0dG9ucyB7XG4gIG1hcmdpbjogMTBweCAwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG59XG5pb24tY29udGVudCBkaXYgZGl2LmJ1dHRvbnMgaW9uLWJ1dHRvbiB7XG4gIC0tYmFja2dyb3VuZDogIzNBQzBCQjtcbiAgLS1jb2xvcjogIzM0M0Y0Qjtcbn1cbmlvbi1jb250ZW50IGRpdiBpb24tZ3JpZCB7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgd2lkdGg6IDEwMCU7XG59XG5pb24tY29udGVudCBkaXYgaW9uLWdyaWQgaW9uLXJvdyB7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBncmF5O1xufVxuaW9uLWNvbnRlbnQgZGl2IGlvbi1ncmlkIGlvbi1yb3cudGl0bGVzIHtcbiAgYmFja2dyb3VuZDogIzNBQzBCQjtcbiAgYm9yZGVyLWJvdHRvbTogbm9uZTtcbiAgbWFyZ2luOiAxMHB4IDBweCAwcHg7XG59XG5pb24tY29udGVudCBkaXYgaW9uLWdyaWQgaW9uLXJvdyBpb24tY29sIHVsIHtcbiAgcGFkZGluZy1sZWZ0OiAxMHB4O1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/pages/last-contacts/last-contacts.page.ts":
  /*!***********************************************************!*\
    !*** ./src/app/pages/last-contacts/last-contacts.page.ts ***!
    \***********************************************************/

  /*! exports provided: LastContactsPage */

  /***/
  function srcAppPagesLastContactsLastContactsPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LastContactsPage", function () {
      return LastContactsPage;
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


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var src_app_components_edit_edit_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/components/edit/edit.component */
    "./src/app/components/edit/edit.component.ts");

    var LastContactsPage = /*#__PURE__*/function () {
      function LastContactsPage(modalController) {
        _classCallCheck(this, LastContactsPage);

        this.modalController = modalController;
        this.listPatients1 = [{
          Name: 'Bertha',
          LastName: 'Brenes Brenes',
          Id: 304980542,
          Age: 23,
          Nationality: 'costarricense',
          Address: 'Cartago',
          Pathology: 'asthmatic, hypertensive',
          email: 'bertacaro1996@gmail.com'
        }, {
          Name: 'Alberto',
          LastName: 'Brenes Brenes',
          Id: 304980285,
          Age: 23,
          Nationality: 'costarricense',
          Address: 'Cartago',
          Pathology: 'asthmatic, hypertensive',
          email: 'bertacaro1996@gmail.com'
        }, {
          Name: 'Ivannia',
          LastName: 'Brenes Fernandez',
          Id: 303020181,
          Age: 23,
          Nationality: 'costarricense',
          Address: 'Cartago',
          Pathology: 'asthmatic, hypertensive',
          email: 'bertacaro1996@gmail.com'
        }];
        this.keysLast = ['Name', 'LastName', 'Id', 'Age', 'Nationality', 'Address', 'Pathology', 'email'];
      }

      _createClass(LastContactsPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "presentModal",
        value: function presentModal(idM) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
            var modal;
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    _context.next = 2;
                    return this.modalController.create({
                      component: src_app_components_edit_edit_component__WEBPACK_IMPORTED_MODULE_3__["EditComponent"],
                      cssClass: 'EditComponent',
                      componentProps: {
                        id: idM,
                        data: this.listPatients1,
                        keysParent: this.keysLast
                      }
                    });

                  case 2:
                    modal = _context.sent;
                    _context.next = 5;
                    return modal.present();

                  case 5:
                    return _context.abrupt("return", _context.sent);

                  case 6:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));
        }
      }]);

      return LastContactsPage;
    }();

    LastContactsPage.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"]
      }];
    };

    LastContactsPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-last-contacts',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./last-contacts.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/last-contacts/last-contacts.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./last-contacts.page.scss */
      "./src/app/pages/last-contacts/last-contacts.page.scss"))["default"]]
    })], LastContactsPage);
    /***/
  }
}]);
//# sourceMappingURL=pages-last-contacts-last-contacts-module-es5.js.map