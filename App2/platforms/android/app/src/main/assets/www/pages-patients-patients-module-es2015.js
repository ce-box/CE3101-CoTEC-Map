(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-patients-patients-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/patients/patients.page.html":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/patients/patients.page.html ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content>\n  <div>\n    <ion-button routerLink=\"/home\">\n      <ion-icon name=\"arrow-back-outline\"></ion-icon>\n    </ion-button>\n    <h3>Management of Patients</h3>\n    <div class=\"buttons\">\n      <ion-button (click)=\"presentModal('add')\">Agregar</ion-button>\n      <ion-button>Eliminar</ion-button>\n      <ion-button (click)=\"presentModal('edit')\">Editar</ion-button>\n    </div>\n    <div class=\"table\">\n      <ion-grid>\n        <ion-row class=\"titles\">\n          <ion-col size=\"4\">\n            <ion-text>Name</ion-text>\n          </ion-col>\n          <ion-col size=\"4\">\n            <ion-text>LastName</ion-text>\n          </ion-col>\n          <ion-col size=\"4\">\n            <ion-text>Id</ion-text>\n          </ion-col>\n        </ion-row>\n        <ion-row *ngFor=\"let item of listPatients1\">\n          <ion-col size=\"4\">\n            <ion-text>{{item.Name}}</ion-text>\n          </ion-col>\n          <ion-col size=\"4\">\n            <ion-text>{{item.LastName}}</ion-text>\n          </ion-col>\n          <ion-col size=\"4\">\n            <ion-text>{{item.Id}}</ion-text>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n      <ion-grid>\n        <ion-row class=\"titles\">\n          <ion-col size=\"4\">\n            <ion-text>Region</ion-text>\n          </ion-col>\n          <ion-col size=\"4\">\n            <ion-text>Age</ion-text>\n          </ion-col>\n          <ion-col size=\"4\">\n            <ion-text>Status</ion-text>\n          </ion-col>\n        </ion-row>\n        <ion-row *ngFor=\"let item of listPatients1\">\n          <ion-col size=\"4\">\n            <ion-text>{{item.Region}}</ion-text>\n          </ion-col>\n          <ion-col size=\"4\">\n            <ion-text>{{item.Age}}</ion-text>\n          </ion-col>\n          <ion-col size=\"4\">\n            <ion-text>{{item.Status}}</ion-text>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n      <ion-grid>\n        <ion-row class=\"titles\">\n          <ion-col size=\"4\">\n            <ion-text>Hospitalize</ion-text>\n          </ion-col>\n          <ion-col size=\"4\">\n            <ion-text>UCI</ion-text>\n          </ion-col>\n          <ion-col size=\"4\">\n            <ion-text>Nationality</ion-text>\n          </ion-col>\n        </ion-row>\n        <ion-row *ngFor=\"let item of listPatients1\">\n          <ion-col size=\"4\">\n            <ion-text>{{item.Hospitalize}}</ion-text>\n          </ion-col>\n          <ion-col size=\"4\">\n            <ion-text>{{item.UCI}}</ion-text>\n          </ion-col>\n          <ion-col size=\"4\">\n            <ion-text>{{item.Nationality}}</ion-text>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n      <ion-grid>\n        <ion-row class=\"titles\">\n          <ion-col size=\"6\">\n            <ion-text>Pathology</ion-text>\n          </ion-col>\n          <ion-col size=\"6\">\n            <ion-text>Medication</ion-text>\n          </ion-col>\n        </ion-row>\n        <ion-row *ngFor=\"let item of listPatients1\">\n          <ion-col size=\"6\">\n            {{item.Pathology}}\n          </ion-col>\n          <ion-col size=\"6\">\n            {{item.Medication}}\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n    </div>\n  </div>\n</ion-content>");

/***/ }),

/***/ "./src/app/module/statusEnum.ts":
/*!**************************************!*\
  !*** ./src/app/module/statusEnum.ts ***!
  \**************************************/
/*! exports provided: statusEnum */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "statusEnum", function() { return statusEnum; });
var statusEnum;
(function (statusEnum) {
    statusEnum["ACTIVE"] = "Activa";
    statusEnum["INFECTED"] = "Contagiada";
    statusEnum["RECOVERED"] = "Recuperada";
    statusEnum["DEAD"] = "Muerta";
})(statusEnum || (statusEnum = {}));


/***/ }),

/***/ "./src/app/pages/patients/patients-routing.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/pages/patients/patients-routing.module.ts ***!
  \***********************************************************/
/*! exports provided: PatientsPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PatientsPageRoutingModule", function() { return PatientsPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _patients_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./patients.page */ "./src/app/pages/patients/patients.page.ts");




const routes = [
    {
        path: '',
        component: _patients_page__WEBPACK_IMPORTED_MODULE_3__["PatientsPage"]
    }
];
let PatientsPageRoutingModule = class PatientsPageRoutingModule {
};
PatientsPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], PatientsPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/patients/patients.module.ts":
/*!***************************************************!*\
  !*** ./src/app/pages/patients/patients.module.ts ***!
  \***************************************************/
/*! exports provided: PatientsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PatientsPageModule", function() { return PatientsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _patients_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./patients-routing.module */ "./src/app/pages/patients/patients-routing.module.ts");
/* harmony import */ var _patients_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./patients.page */ "./src/app/pages/patients/patients.page.ts");







let PatientsPageModule = class PatientsPageModule {
};
PatientsPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _patients_routing_module__WEBPACK_IMPORTED_MODULE_5__["PatientsPageRoutingModule"]
        ],
        declarations: [_patients_page__WEBPACK_IMPORTED_MODULE_6__["PatientsPage"]]
    })
], PatientsPageModule);



/***/ }),

/***/ "./src/app/pages/patients/patients.page.scss":
/*!***************************************************!*\
  !*** ./src/app/pages/patients/patients.page.scss ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-content div {\n  background-color: #7ea470;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\nion-content div ion-button {\n  align-self: flex-start;\n  --background: transparent;\n}\nion-content div h3 {\n  margin-top: 20px;\n  color: white;\n}\nion-content div div.buttons {\n  margin: 10px 0px;\n  display: flex;\n  flex-direction: row;\n}\nion-content div div.buttons ion-button {\n  --background: #3ac0bb;\n  --color: #343f4b;\n}\nion-content div ion-grid {\n  color: white;\n  width: 100%;\n}\nion-content div ion-grid ion-row {\n  border-bottom: 1px solid gray;\n}\nion-content div ion-grid ion-row.titles {\n  background: #3ac0bb;\n  border-bottom: none;\n  margin: 10px 0px 0px;\n}\nion-content div ion-grid ion-row ion-col ul {\n  padding-left: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2JicmVuZXMvcHJvamVjdHMvVEVDL0NFMzEwMS1Db1RFQy1NYXAvQXBwMi9zcmMvYXBwL3BhZ2VzL3BhdGllbnRzL3BhdGllbnRzLnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMvcGF0aWVudHMvcGF0aWVudHMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNJO0VBQ0kseUJBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0FDQVI7QURDUTtFQUNJLHNCQUFBO0VBQ0EseUJBQUE7QUNDWjtBRENRO0VBQ0ksZ0JBQUE7RUFDQSxZQUFBO0FDQ1o7QURDUTtFQUNJLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0FDQ1o7QURBWTtFQUNJLHFCQUFBO0VBQ0EsZ0JBQUE7QUNFaEI7QURDUTtFQUNJLFlBQUE7RUFDQSxXQUFBO0FDQ1o7QURBWTtFQUNJLDZCQUFBO0FDRWhCO0FERGdCO0VBQ0ksbUJBQUE7RUFDQSxtQkFBQTtFQUNBLG9CQUFBO0FDR3BCO0FEQW9CO0VBQ0ksa0JBQUE7QUNFeEIiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9wYXRpZW50cy9wYXRpZW50cy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tY29udGVudCB7XG4gICAgZGl2IHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzdlYTQ3MDtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIGlvbi1idXR0b24ge1xuICAgICAgICAgICAgYWxpZ24tc2VsZjogZmxleC1zdGFydDtcbiAgICAgICAgICAgIC0tYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gICAgICAgIH1cbiAgICAgICAgaDMge1xuICAgICAgICAgICAgbWFyZ2luLXRvcDogMjBweDtcbiAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgfVxuICAgICAgICBkaXYuYnV0dG9ucyB7XG4gICAgICAgICAgICBtYXJnaW46IDEwcHggMHB4O1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgICAgICAgICBpb24tYnV0dG9uIHtcbiAgICAgICAgICAgICAgICAtLWJhY2tncm91bmQ6ICMzYWMwYmI7XG4gICAgICAgICAgICAgICAgLS1jb2xvcjogIzM0M2Y0YjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpb24tZ3JpZCB7XG4gICAgICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgIGlvbi1yb3cge1xuICAgICAgICAgICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBncmF5O1xuICAgICAgICAgICAgICAgICYudGl0bGVzIHtcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogIzNhYzBiYjtcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogbm9uZTtcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAxMHB4IDBweCAwcHg7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlvbi1jb2wge1xuICAgICAgICAgICAgICAgICAgICB1bCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59XG4iLCJpb24tY29udGVudCBkaXYge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjN2VhNDcwO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbmlvbi1jb250ZW50IGRpdiBpb24tYnV0dG9uIHtcbiAgYWxpZ24tc2VsZjogZmxleC1zdGFydDtcbiAgLS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbn1cbmlvbi1jb250ZW50IGRpdiBoMyB7XG4gIG1hcmdpbi10b3A6IDIwcHg7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cbmlvbi1jb250ZW50IGRpdiBkaXYuYnV0dG9ucyB7XG4gIG1hcmdpbjogMTBweCAwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG59XG5pb24tY29udGVudCBkaXYgZGl2LmJ1dHRvbnMgaW9uLWJ1dHRvbiB7XG4gIC0tYmFja2dyb3VuZDogIzNhYzBiYjtcbiAgLS1jb2xvcjogIzM0M2Y0Yjtcbn1cbmlvbi1jb250ZW50IGRpdiBpb24tZ3JpZCB7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgd2lkdGg6IDEwMCU7XG59XG5pb24tY29udGVudCBkaXYgaW9uLWdyaWQgaW9uLXJvdyB7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBncmF5O1xufVxuaW9uLWNvbnRlbnQgZGl2IGlvbi1ncmlkIGlvbi1yb3cudGl0bGVzIHtcbiAgYmFja2dyb3VuZDogIzNhYzBiYjtcbiAgYm9yZGVyLWJvdHRvbTogbm9uZTtcbiAgbWFyZ2luOiAxMHB4IDBweCAwcHg7XG59XG5pb24tY29udGVudCBkaXYgaW9uLWdyaWQgaW9uLXJvdyBpb24tY29sIHVsIHtcbiAgcGFkZGluZy1sZWZ0OiAxMHB4O1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/pages/patients/patients.page.ts":
/*!*************************************************!*\
  !*** ./src/app/pages/patients/patients.page.ts ***!
  \*************************************************/
/*! exports provided: PatientsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PatientsPage", function() { return PatientsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var src_app_service_data_base_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/service/data-base.service */ "./src/app/service/data-base.service.ts");
/* harmony import */ var src_app_components_edit_edit_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/components/edit/edit.component */ "./src/app/components/edit/edit.component.ts");
/* harmony import */ var src_app_module_statusEnum__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/module/statusEnum */ "./src/app/module/statusEnum.ts");






let PatientsPage = class PatientsPage {
    constructor(modalController, db) {
        this.modalController = modalController;
        this.db = db;
        this.listPatients1 = [
            {
                Name: 'Bertha',
                LastName: 'Brenes Brenes',
                Id: 304980542,
                Age: 23,
                Nationality: 'costarricense',
                Region: 'Cartago',
                Pathology: ['asthmatic', 'hypertensive'],
                Status: src_app_module_statusEnum__WEBPACK_IMPORTED_MODULE_5__["statusEnum"].ACTIVE,
                Medication: 'Ibuprofen',
                Hospitalize: true,
                UCI: true
            },
            {
                Name: 'Alberto',
                LastName: 'Brenes Brenes',
                Id: 304980541,
                Age: 23,
                Nationality: 'costarricense',
                Region: 'Cartago',
                Pathology: ['asthmatic', 'hypertensive'],
                Status: src_app_module_statusEnum__WEBPACK_IMPORTED_MODULE_5__["statusEnum"].ACTIVE,
                Medication: ['Ibuprofen'],
                Hospitalize: true,
                UCI: true
            },
            {
                Name: 'Esmaik',
                LastName: 'Brenes Brenes',
                Id: 304780542,
                Age: 23,
                Nationality: 'costarricense',
                Region: 'Cartago',
                Pathology: ['asthmatic', 'hypertensive'],
                Status: src_app_module_statusEnum__WEBPACK_IMPORTED_MODULE_5__["statusEnum"].ACTIVE,
                Medication: ['Ibuprofen'],
                Hospitalize: true,
                UCI: true
            }
        ];
        this.keyPatients = [
            'Name',
            'LastName',
            'Id',
            'Age',
            'Nationality',
            'Region',
            'Pathology',
            'Status',
            'Medication',
            'Hospitalize',
            'UCI'
        ];
    }
    ngOnInit() {
        console.log('ngOnit');
        this.db.getDatabaseState().subscribe(rdy => {
            console.log(rdy);
            if (rdy) {
                console.log('ready', rdy);
                this.db.getContacts().subscribe(devs => {
                    this.patientsDb = devs;
                    console.log('inside ready', devs);
                });
            }
            console.log(this.db.getPatients());
        });
    }
    presentModal(idM) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const modal = yield this.modalController.create({
                component: src_app_components_edit_edit_component__WEBPACK_IMPORTED_MODULE_4__["EditComponent"],
                cssClass: 'EditComponent',
                componentProps: {
                    id: idM,
                    data: this.listPatients1,
                    keysParent: this.keyPatients
                }
            });
            return yield modal.present();
        });
    }
};
PatientsPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"] },
    { type: src_app_service_data_base_service__WEBPACK_IMPORTED_MODULE_3__["DataBaseService"] }
];
PatientsPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-patients',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./patients.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/patients/patients.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./patients.page.scss */ "./src/app/pages/patients/patients.page.scss")).default]
    })
], PatientsPage);



/***/ }),

/***/ "./src/app/service/data-base.service.ts":
/*!**********************************************!*\
  !*** ./src/app/service/data-base.service.ts ***!
  \**********************************************/
/*! exports provided: DataBaseService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataBaseService", function() { return DataBaseService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _ionic_native_sqlite_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic-native/sqlite/ngx */ "./node_modules/@ionic-native/sqlite/__ivy_ngcc__/ngx/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _ionic_native_sqlite_porter_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic-native/sqlite-porter/ngx */ "./node_modules/@ionic-native/sqlite-porter/__ivy_ngcc__/ngx/index.js");







let DataBaseService = class DataBaseService {
    /**
     * First method of the service
     * @param http Controller for the http Client
     * @param sqlite Controller for the sqlite
     * @param plt Controller for the platform
     * @param sqlitePorter Controller fro the porter of sql
     */
    constructor(http, sqlite, plt, sqlitePorter) {
        this.http = http;
        this.sqlite = sqlite;
        this.plt = plt;
        this.sqlitePorter = sqlitePorter;
        this.dbReady = new rxjs__WEBPACK_IMPORTED_MODULE_4__["BehaviorSubject"](false);
        this.patients = new rxjs__WEBPACK_IMPORTED_MODULE_4__["BehaviorSubject"]([]);
        /**
         * Contact
         */
        this.contacts = new rxjs__WEBPACK_IMPORTED_MODULE_4__["BehaviorSubject"]([]);
        console.log('ngInit database');
        this.plt.ready().then(() => {
            console.log('ready platform');
            const sql = this.sqlite.create({
                name: 'patient.db',
                location: 'default'
            })
                .then((db) => {
                db.executeSql('create table danceMoves(name VARCHAR(32))', [])
                    .then(() => console.log('Executed SQL'))
                    .catch(e => console.log(e));
            })
                .catch(e => console.log(e));
        });
    }
    seedDatabase() {
        console.log('access');
        this.http.get('assets/data/seed.sql', { responseType: 'text' })
            .subscribe(sql => {
            this.sqlitePorter.importSqlToDb(this.database, sql)
                .then(_ => {
                this.getContacts();
                this.getPatients();
                this.dbReady.next(true);
            })
                .catch(e => console.error(e));
        });
    }
    getDatabaseState() {
        return this.dbReady.asObservable();
    }
    getContacts() {
        return this.contacts.asObservable();
    }
    getPatients() {
        return this.patients.asObservable();
    }
    /**
     * Patient Management
     */
    loadpatient() {
        return this.database.executeSql('SELECT * FROM patient', []).then(data => {
            const patient = [];
            if (data.rows.length > 0) {
                for (let i = 0; i < data.rows.length; i++) {
                    patient.push({
                        id: data.rows.item(i).id,
                        name: data.rows.item(i).name,
                        lastName: data.rows.item(i).lastName,
                        age: data.row.item(i).age,
                        region: data.row.item(i).region,
                        status: data.row.item(i).status,
                        hospitalize: data.row.item(i).hospitalize,
                        uci: data.row.item(i).uci,
                        nationality: data.row.item(i).nationality,
                        pathology: data.row.item(i).pathology,
                        medication: data.row.item(i).medication
                    });
                }
            }
            this.patients.next(patient);
        });
    }
    addPatient(Name, LastName, Id, Age, Nationality, Region, Pathology, Status, Medication, Hospitalize, UCI) {
        const data = [Name, LastName, Id, Age, Nationality, Region, Pathology, Status, Medication, Hospitalize, UCI];
        return this.database.executeSql('INSERT INTO patient (Name, LastName, Id, Age, Nationality, Region, Pathology, Status, Medication, Hospitalize, UCI) VALUES (?, ?, ?)', data).then(dataR => {
            console.log('data add', dataR);
            this.loadpatient();
        });
    }
    getPatient(id) {
        return this.database.executeSql('SELECT * FROM patient WHERE id = ?', [id]).then(data => {
            return {
                id: data.rows.item(0).id,
                name: data.rows.item(0).name,
                lastName: data.rows.item(0).lastName,
                age: data.row.item(0).age,
                region: data.row.item(0).region,
                status: data.row.item(0).status,
                Hospitalize: data.row.item(0).Hospitalize,
                UCI: data.row.item(0).UCI,
                nationality: data.row.item(0).nationality,
                pathology: data.row.item(0).pathology,
                medication: data.row.item(0).medication
            };
        });
    }
    deletePatient(id) {
        return this.database.executeSql('DELETE FROM patient WHERE id = ?', [id]).then(_ => {
            this.loadpatient();
        });
    }
    updatePatient(dev) {
        // tslint:disable-next-line: max-line-length
        const data = [dev.name, dev.LastName, dev.Id, dev.Age, dev.Nationality, dev.Region, dev.Pathology, dev.Status, dev.Medication, dev.Hospitalize, dev.UCI];
        return this.database.executeSql(`UPDATE patient SET name = ?, LastName = ?, Age = ?, Nationality = ?, Region = ?, Status = ?, Medication = ?, Hospitalize = ?, UCI = ? WHERE Id = ${dev.id}`, data).then(dataR => {
            console.log('data update', dataR);
            this.loadpatient();
        });
    }
    /**
     * Contact management
     */
    loadContact() {
        // tslint:disable-next-line: max-line-length
        const query = 'SELECT * FROM contact';
        return this.database.executeSql(query, []).then(data => {
            const contact = [];
            if (data.rows.length > 0) {
                // tslint:disable-next-line: prefer-for-of
                for (let i = 0; i < data.rows.length; i++) {
                    contact.push({
                        Id: data.rows.item(0).id,
                        Name: data.rows.item(0).name,
                        LastName: data.rows.item(0).lastName,
                        Age: data.row.item(0).age,
                        Address: data.row.item(0).Address,
                        Nationality: data.row.item(0).nationality,
                        Pathology: data.row.item(0).pathology,
                        email: data.row.item(0).email
                    });
                }
            }
            this.contacts.next(contact);
        });
    }
    addContact(Name, LastName, Id, Age, Nationality, Address, Pathology, email) {
        const data = [Name, LastName, Id, Age, Nationality, Address, Pathology, email];
        // tslint:disable-next-line: max-line-length
        return this.database.executeSql('INSERT INTO contact (Name, LastName, Id, Age, Nationality, Address, Pathology, email) VALUES (?, ?, ?, ?, ?, ?, ?, ?)', data).then(dataR => {
            console.log('data add Contact', dataR);
            this.loadContact();
        });
    }
    updateContact(dev) {
        // tslint:disable-next-line: max-line-length
        const data = [dev.name, dev.LastName, dev.Id, dev.Age, dev.Nationality, dev.Address, dev.Pathology, dev.email];
        return this.database.executeSql(`UPDATE contact SET name = ?, LastName = ?, Age = ?, Nationality = ?, Address = ?, email = ? WHERE Id = ${dev.Id}`, data).then(dataR => {
            console.log('data update', dataR);
            this.loadpatient();
        });
    }
    deleteContact(id) {
        return this.database.executeSql('DELETE FROM contact WHERE id = ?', [id]).then(_ => {
            this.loadContact();
        });
    }
    getContact(id) {
        return this.database.executeSql('SELECT * FROM contact WHERE id = ?', [id]).then(data => {
            return {
                Id: data.rows.item(0).id,
                Name: data.rows.item(0).name,
                LastName: data.rows.item(0).lastName,
                Age: data.row.item(0).age,
                Address: data.row.item(0).Address,
                Nationality: data.row.item(0).nationality,
                Pathology: data.row.item(0).pathology,
                email: data.row.item(0).email
            };
        });
    }
};
DataBaseService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
    { type: _ionic_native_sqlite_ngx__WEBPACK_IMPORTED_MODULE_3__["SQLite"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["Platform"] },
    { type: _ionic_native_sqlite_porter_ngx__WEBPACK_IMPORTED_MODULE_6__["SQLitePorter"] }
];
DataBaseService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], DataBaseService);



/***/ })

}]);
//# sourceMappingURL=pages-patients-patients-module-es2015.js.map