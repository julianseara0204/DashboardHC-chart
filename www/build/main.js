webpackJsonp([1],{

/***/ 103:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ForgetPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_login__ = __webpack_require__(47);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the ForgetPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ForgetPage = /** @class */ (function () {
    function ForgetPage(navCtrl, navParams, toastCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.toastCtrl = toastCtrl;
        this.userData = { "username": "", "lang": "en" };
    }
    ForgetPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ForgetPage');
    };
    ForgetPage.prototype.reset = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__login_login__["a" /* LoginPage */]);
        // if(this.userData.username){
        //   this.common.presentLoading();
        //   const credentials = new FormData();
        //   credentials.append('email', this.userData.username);
        //   credentials.append('lang',
        //     'en');
        //   console.log(credentials);
        //   this.authService.postData(credentials, "iworksafely/appapi/json/forgetpassword").then((result) =>{
        //     this.resposeData = result;
        //
        //     this.common.closeLoading();
        //     if(this.resposeData.status==true){
        //       console.log(this.resposeData);
        //       this.presentToast("Password Reset link send to Email");
        //       localStorage.setItem('userData', JSON.stringify(this.resposeData) )
        //       this.navCtrl.push(Login);
        //     }
        //     else{
        //       this.presentToast("Please give valid Email");
        //     }
        //
        //
        //
        //   }, (err) => {
        //     //Connection failed message
        //   });
        // }
        // else{
        //   this.presentToast("Give username and password");
        // }
    };
    ForgetPage.prototype.presentToast = function (msg) {
        var toast = this.toastCtrl.create({
            message: msg,
            duration: 2000,
            cssClass: 'yourClass'
        });
        toast.present();
    };
    ForgetPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-forget',template:/*ion-inline-start:"E:\testing\ionic\firebase-notification-with-ionic\src\pages\forget\forget.html"*/'<!-- -->\n<ion-content padding class="animated fadeIn login auth-page">\n  <div class="login-content">\n    <p text-center ion-text color="light">Reset Password</p>\n    <!-- Logo -->\n    <div padding-horizontal   text-center class="animated fadeInDown logo">\n      <div class="logo" ></div>\n\n      <div class="head_top_logo"><img src="assets/imgs/dashboard-logo.png" style=""></div>\n\n    </div>\n\n    <!-- Login form -->\n    <form class="list-form">\n      <ion-item>\n        <ion-label floating>\n          <ion-icon name="mail" item-start  style="color: #FFFFFF"></ion-icon>\n          <!--<ion-icon name="repeat" item-start  style="color: #FFFFFF"></ion-icon>-->\n          <span style="color: #FFFFFF;font-weight: 100;font-size: 1.4rem;">Email</span>\n        </ion-label>\n        <ion-input type="email"></ion-input>\n      </ion-item>\n\n\n    </form>\n\n\n    <div style="    padding: 0 1.2rem;">\n      <button ion-button icon-start block style="background-color: #4dd0E1;    margin-top: 60%;    height: 4.6rem;" tappable (click)="reset()">\n        Reset\n      </button>\n\n\n    </div>\n\n  </div>\n</ion-content>\n\n<style>\n  ion-content{\n    background-image: linear-gradient(to bottom right, #24c4e3, #0e808f);\n  }\n  .item-md {\n    background-color: transparent;\n  }\n  .logo{\n    padding-top: 24px !important;\n    padding-bottom: 16px;\n  }\n  ion-item {\n    padding: 0 1.2rem;\n  }\n\n</style>'/*ion-inline-end:"E:\testing\ionic\firebase-notification-with-ionic\src\pages\forget\forget.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ToastController */]])
    ], ForgetPage);
    return ForgetPage;
}());

//# sourceMappingURL=forget.js.map

/***/ }),

/***/ 113:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 113;

/***/ }),

/***/ 154:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/forget/forget.module": [
		407,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 154;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 155:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Common; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/*
  Generated class for the Common provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
var Common = /** @class */ (function () {
    function Common(loadingCtrl) {
        this.loadingCtrl = loadingCtrl;
        console.log('Hello Common Provider');
    }
    Common.prototype.presentLoading = function () {
        this.loader = this.loadingCtrl.create({ content: "Please wait ...", cssClass: 'custom-loading' });
        // this.loader = this.loadingCtrl.create({content: "Please wait ...",duration: 5000, cssClass: 'custom-loading'})
        this.loader.present();
    };
    Common.prototype.closeLoading = function () {
        this.loader.dismiss();
    };
    Common = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */]])
    ], Common);
    return Common;
}());

//# sourceMappingURL=common.js.map

/***/ }),

/***/ 327:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AboutPage = /** @class */ (function () {
    function AboutPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    AboutPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-about',template:/*ion-inline-start:"E:\testing\ionic\firebase-notification-with-ionic\src\pages\about\about.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      About\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n\n</ion-content>\n'/*ion-inline-end:"E:\testing\ionic\firebase-notification-with-ionic\src\pages\about\about.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */]])
    ], AboutPage);
    return AboutPage;
}());

//# sourceMappingURL=about.js.map

/***/ }),

/***/ 328:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(329);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(351);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 351:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(397);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_common__ = __webpack_require__(155);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_about_about__ = __webpack_require__(327);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_contact_contact__ = __webpack_require__(405);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_home_home__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_tabs_tabs__ = __webpack_require__(406);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_login_login__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_forget_forget__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__ionic_native_status_bar__ = __webpack_require__(322);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__ionic_native_splash_screen__ = __webpack_require__(324);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__ionic_native_toast__ = __webpack_require__(325);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__ionic_native_fcm__ = __webpack_require__(326);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_5__pages_about_about__["a" /* AboutPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_contact_contact__["a" /* ContactPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_forget_forget__["a" /* ForgetPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/forget/forget.module#ForgetPageModule', name: 'ForgetPage', segment: 'forget', priority: 'low', defaultHistory: [] }
                    ]
                })
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_5__pages_about_about__["a" /* AboutPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_contact_contact__["a" /* ContactPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_forget_forget__["a" /* ForgetPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_11__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_12__ionic_native_splash_screen__["a" /* SplashScreen */], __WEBPACK_IMPORTED_MODULE_4__providers_common__["a" /* Common */],
                { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_13__ionic_native_toast__["a" /* Toast */],
                __WEBPACK_IMPORTED_MODULE_14__ionic_native_fcm__["a" /* FCM */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 379:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": 156,
	"./af.js": 156,
	"./ar": 157,
	"./ar-dz": 158,
	"./ar-dz.js": 158,
	"./ar-kw": 159,
	"./ar-kw.js": 159,
	"./ar-ly": 160,
	"./ar-ly.js": 160,
	"./ar-ma": 161,
	"./ar-ma.js": 161,
	"./ar-sa": 162,
	"./ar-sa.js": 162,
	"./ar-tn": 163,
	"./ar-tn.js": 163,
	"./ar.js": 157,
	"./az": 164,
	"./az.js": 164,
	"./be": 165,
	"./be.js": 165,
	"./bg": 166,
	"./bg.js": 166,
	"./bm": 167,
	"./bm.js": 167,
	"./bn": 168,
	"./bn.js": 168,
	"./bo": 169,
	"./bo.js": 169,
	"./br": 170,
	"./br.js": 170,
	"./bs": 171,
	"./bs.js": 171,
	"./ca": 172,
	"./ca.js": 172,
	"./cs": 173,
	"./cs.js": 173,
	"./cv": 174,
	"./cv.js": 174,
	"./cy": 175,
	"./cy.js": 175,
	"./da": 176,
	"./da.js": 176,
	"./de": 177,
	"./de-at": 178,
	"./de-at.js": 178,
	"./de-ch": 179,
	"./de-ch.js": 179,
	"./de.js": 177,
	"./dv": 180,
	"./dv.js": 180,
	"./el": 181,
	"./el.js": 181,
	"./en-SG": 182,
	"./en-SG.js": 182,
	"./en-au": 183,
	"./en-au.js": 183,
	"./en-ca": 184,
	"./en-ca.js": 184,
	"./en-gb": 185,
	"./en-gb.js": 185,
	"./en-ie": 186,
	"./en-ie.js": 186,
	"./en-il": 187,
	"./en-il.js": 187,
	"./en-nz": 188,
	"./en-nz.js": 188,
	"./eo": 189,
	"./eo.js": 189,
	"./es": 190,
	"./es-do": 191,
	"./es-do.js": 191,
	"./es-us": 192,
	"./es-us.js": 192,
	"./es.js": 190,
	"./et": 193,
	"./et.js": 193,
	"./eu": 194,
	"./eu.js": 194,
	"./fa": 195,
	"./fa.js": 195,
	"./fi": 196,
	"./fi.js": 196,
	"./fo": 197,
	"./fo.js": 197,
	"./fr": 198,
	"./fr-ca": 199,
	"./fr-ca.js": 199,
	"./fr-ch": 200,
	"./fr-ch.js": 200,
	"./fr.js": 198,
	"./fy": 201,
	"./fy.js": 201,
	"./ga": 202,
	"./ga.js": 202,
	"./gd": 203,
	"./gd.js": 203,
	"./gl": 204,
	"./gl.js": 204,
	"./gom-latn": 205,
	"./gom-latn.js": 205,
	"./gu": 206,
	"./gu.js": 206,
	"./he": 207,
	"./he.js": 207,
	"./hi": 208,
	"./hi.js": 208,
	"./hr": 209,
	"./hr.js": 209,
	"./hu": 210,
	"./hu.js": 210,
	"./hy-am": 211,
	"./hy-am.js": 211,
	"./id": 212,
	"./id.js": 212,
	"./is": 213,
	"./is.js": 213,
	"./it": 214,
	"./it-ch": 215,
	"./it-ch.js": 215,
	"./it.js": 214,
	"./ja": 216,
	"./ja.js": 216,
	"./jv": 217,
	"./jv.js": 217,
	"./ka": 218,
	"./ka.js": 218,
	"./kk": 219,
	"./kk.js": 219,
	"./km": 220,
	"./km.js": 220,
	"./kn": 221,
	"./kn.js": 221,
	"./ko": 222,
	"./ko.js": 222,
	"./ku": 223,
	"./ku.js": 223,
	"./ky": 224,
	"./ky.js": 224,
	"./lb": 225,
	"./lb.js": 225,
	"./lo": 226,
	"./lo.js": 226,
	"./lt": 227,
	"./lt.js": 227,
	"./lv": 228,
	"./lv.js": 228,
	"./me": 229,
	"./me.js": 229,
	"./mi": 230,
	"./mi.js": 230,
	"./mk": 231,
	"./mk.js": 231,
	"./ml": 232,
	"./ml.js": 232,
	"./mn": 233,
	"./mn.js": 233,
	"./mr": 234,
	"./mr.js": 234,
	"./ms": 235,
	"./ms-my": 236,
	"./ms-my.js": 236,
	"./ms.js": 235,
	"./mt": 237,
	"./mt.js": 237,
	"./my": 238,
	"./my.js": 238,
	"./nb": 239,
	"./nb.js": 239,
	"./ne": 240,
	"./ne.js": 240,
	"./nl": 241,
	"./nl-be": 242,
	"./nl-be.js": 242,
	"./nl.js": 241,
	"./nn": 243,
	"./nn.js": 243,
	"./pa-in": 244,
	"./pa-in.js": 244,
	"./pl": 245,
	"./pl.js": 245,
	"./pt": 246,
	"./pt-br": 247,
	"./pt-br.js": 247,
	"./pt.js": 246,
	"./ro": 248,
	"./ro.js": 248,
	"./ru": 249,
	"./ru.js": 249,
	"./sd": 250,
	"./sd.js": 250,
	"./se": 251,
	"./se.js": 251,
	"./si": 252,
	"./si.js": 252,
	"./sk": 253,
	"./sk.js": 253,
	"./sl": 254,
	"./sl.js": 254,
	"./sq": 255,
	"./sq.js": 255,
	"./sr": 256,
	"./sr-cyrl": 257,
	"./sr-cyrl.js": 257,
	"./sr.js": 256,
	"./ss": 258,
	"./ss.js": 258,
	"./sv": 259,
	"./sv.js": 259,
	"./sw": 260,
	"./sw.js": 260,
	"./ta": 261,
	"./ta.js": 261,
	"./te": 262,
	"./te.js": 262,
	"./tet": 263,
	"./tet.js": 263,
	"./tg": 264,
	"./tg.js": 264,
	"./th": 265,
	"./th.js": 265,
	"./tl-ph": 266,
	"./tl-ph.js": 266,
	"./tlh": 267,
	"./tlh.js": 267,
	"./tr": 268,
	"./tr.js": 268,
	"./tzl": 269,
	"./tzl.js": 269,
	"./tzm": 270,
	"./tzm-latn": 271,
	"./tzm-latn.js": 271,
	"./tzm.js": 270,
	"./ug-cn": 272,
	"./ug-cn.js": 272,
	"./uk": 273,
	"./uk.js": 273,
	"./ur": 274,
	"./ur.js": 274,
	"./uz": 275,
	"./uz-latn": 276,
	"./uz-latn.js": 276,
	"./uz.js": 275,
	"./vi": 277,
	"./vi.js": 277,
	"./x-pseudo": 278,
	"./x-pseudo.js": 278,
	"./yo": 279,
	"./yo.js": 279,
	"./zh-cn": 280,
	"./zh-cn.js": 280,
	"./zh-hk": 281,
	"./zh-hk.js": 281,
	"./zh-tw": 282,
	"./zh-tw.js": 282
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number or string
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 379;

/***/ }),

/***/ 397:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(322);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(324);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_toast__ = __webpack_require__(325);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_fcm__ = __webpack_require__(326);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_login_login__ = __webpack_require__(47);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen, toast, fcm) {
        this.toast = toast;
        this.fcm = fcm;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_6__pages_login_login__["a" /* LoginPage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp.prototype.openPage = function (page) {
        this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_6__pages_login_login__["a" /* LoginPage */]);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Nav */])
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"E:\testing\ionic\firebase-notification-with-ionic\src\app\app.html"*/'<!--Side Menu with avatar-->\n<ion-menu [content]="content" id="menu-avatar">\n    <ion-content>\n        <div #header>\n            <ion-row style="align-items:center;">\n                <ion-col col-3>\n\n                </ion-col>\n                <ion-col col-6>\n                    <img class="user-avatar round" src="http://www.precision-spine.com/wp-content/uploads/2015/09/person-icon.png"\n                    />\n                </ion-col>\n                <ion-col col-3>\n\n                </ion-col>\n            </ion-row>\n            <ion-row style="justify-content: center;">\n                <h3>Manoj</h3>\n            </ion-row>\n        </div>\n        <ion-list>\n            <button ion-item (click)="openPage(\'HomePage\')" menuToggle>\n                Home\n            </button>\n            <button ion-item (click)="openPage(friendsPage)" menuToggle>\n               Smoothies\n            </button>\n            <button ion-item (click)="openPage(eventsPage)" menuToggle>\n               My Order\n            </button>\n            <button ion-item (click)="openPage(\'LoginPage\')" menuToggle>\n               Sign Out\n            </button>\n        </ion-list>\n    </ion-content>\n</ion-menu>\n<!-- Disable swipe-to-go-back because it\'s poor UX to combine STGB with side menus -->\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>\n'/*ion-inline-end:"E:\testing\ionic\firebase-notification-with-ionic\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */], __WEBPACK_IMPORTED_MODULE_4__ionic_native_toast__["a" /* Toast */], __WEBPACK_IMPORTED_MODULE_5__ionic_native_fcm__["a" /* FCM */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 405:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ContactPage = /** @class */ (function () {
    function ContactPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    ContactPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-contact',template:/*ion-inline-start:"E:\testing\ionic\firebase-notification-with-ionic\src\pages\contact\contact.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      Contact\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <ion-list>\n    <ion-list-header>Follow us on Twitter</ion-list-header>\n    <ion-item>\n      <ion-icon name="ionic" item-start></ion-icon>\n      @ionicframework\n    </ion-item>\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"E:\testing\ionic\firebase-notification-with-ionic\src\pages\contact\contact.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */]])
    ], ContactPage);
    return ContactPage;
}());

//# sourceMappingURL=contact.js.map

/***/ }),

/***/ 406:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__about_about__ = __webpack_require__(327);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__login_login__ = __webpack_require__(47);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var TabsPage = /** @class */ (function () {
    function TabsPage() {
        this.tab1Root = __WEBPACK_IMPORTED_MODULE_2__home_home__["a" /* HomePage */];
        this.tab2Root = __WEBPACK_IMPORTED_MODULE_1__about_about__["a" /* AboutPage */];
        this.tab3Root = __WEBPACK_IMPORTED_MODULE_3__login_login__["a" /* LoginPage */];
    }
    TabsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"E:\testing\ionic\firebase-notification-with-ionic\src\pages\tabs\tabs.html"*/'<script src="../../../../New folder/ionic3-start-theme-master/src/app/app.component.ts"></script>\n\n<ion-tabs>\n\n  <ion-tab [root]="tab1Root" tabTitle="Home" tabIcon="home"></ion-tab>\n\n  <ion-tab [root]="tab2Root" tabTitle="About" tabIcon="information-circle"></ion-tab>\n\n  <ion-tab [root]="tab3Root" tabTitle="Contact" tabIcon="contacts"></ion-tab>\n\n</ion-tabs>\n\n'/*ion-inline-end:"E:\testing\ionic\firebase-notification-with-ionic\src\pages\tabs\tabs.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], TabsPage);
    return TabsPage;
}());

//# sourceMappingURL=tabs.js.map

/***/ }),

/***/ 47:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_common__ = __webpack_require__(155);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_home__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__forget_forget__ = __webpack_require__(103);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var LoginPage = /** @class */ (function () {
    function LoginPage(common, nav, forgotCtrl, menu, toastCtrl) {
        this.common = common;
        this.nav = nav;
        this.forgotCtrl = forgotCtrl;
        this.menu = menu;
        this.toastCtrl = toastCtrl;
        this.menu.swipeEnable(false);
    }
    // go to register page
    // register() {
    //   this.nav.setRoot(RegisterPage);
    // }
    // login and go to home page
    LoginPage.prototype.login = function () {
        this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_3__home_home__["a" /* HomePage */]);
    };
    LoginPage.prototype.forget = function () {
        this.common.presentLoading();
        this.common.closeLoading();
        this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_4__forget_forget__["a" /* ForgetPage */]);
    };
    LoginPage.prototype.forgotPass = function () {
        var _this = this;
        var forgot = this.forgotCtrl.create({
            title: 'Forgot Password?',
            message: "Enter you email address to send a reset link password.",
            inputs: [
                {
                    name: 'email',
                    placeholder: 'Email',
                    type: 'email'
                },
            ],
            buttons: [
                {
                    text: 'Cancel',
                    handler: function (data) {
                        console.log('Cancel clicked');
                    }
                },
                {
                    text: 'Send',
                    handler: function (data) {
                        console.log('Send clicked');
                        var toast = _this.toastCtrl.create({
                            message: 'Email was sended successfully',
                            duration: 3000,
                            position: 'top',
                            cssClass: 'dark-trans',
                            closeButtonText: 'OK',
                            showCloseButton: true
                        });
                        toast.present();
                    }
                }
            ]
        });
        forgot.present();
    };
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-login',template:/*ion-inline-start:"E:\testing\ionic\firebase-notification-with-ionic\src\pages\login\login.html"*/'<!-- -->\n<ion-content padding class="animated fadeIn login auth-page">\n  <div class="login-content">\n<p text-center ion-text color="light">Sign In</p>\n    <!-- Logo -->\n    <div padding-horizontal   text-center class="animated fadeInDown logo">\n      <div class="logo" ></div>\n\n          <div class="head_top_logo"><img src="assets/imgs/dashboard-logo.png" style=""></div>\n\n    </div>\n\n    <!-- Login form -->\n    <form class="list-form">\n      <ion-item>\n        <ion-label floating>\n          <ion-icon name="person" item-start  style="color: #FFFFFF"></ion-icon>\n            <span style="color: #FFFFFF;font-weight: 100;font-size: 1.4rem;">User Name</span>\n        </ion-label>\n        <ion-input type="email"></ion-input>\n      </ion-item>\n\n      <ion-item style="">\n        <ion-label floating>\n          <ion-icon name="key" item-start  style="color: #FFFFFF"></ion-icon>\n            <span style="color: #FFFFFF;font-weight: 100;font-size: 1.4rem;">Password</span>\n        </ion-label>\n        <ion-input type="password"></ion-input>\n      </ion-item>\n    </form>\n\n   \n    <div style="    padding: 0 1.2rem;">\n      <button ion-button icon-start block style="background-color: #4dd0E1;    margin-top: 26%;    height: 4.6rem;" tappable (click)="login()">\n        <ion-icon name="log-in"></ion-icon>\n        Sign In\n      </button>\n\n   \n    </div>\n\n\n    <!-- Other links -->\n    <div text-center margin-top>\n        <span ion-text style="color: rgba(234, 226, 226, 0.5);" tappable >Forget Password?  <span ion-text color="light" (click)="forget()">Reset</span></span>\n    </div>\n\n  </div>\n</ion-content>\n\n<style>\n    ion-content{\n        background-image: linear-gradient(to bottom right, #24c4e3, #0e808f);\n    }\n.item-md {\n    background-color: transparent;\n}\n    .logo{\n        padding-top: 24px !important;\n        padding-bottom: 16px;\n    }\n    ion-item {\n        padding: 0 1.2rem;\n    }\n    .item-input-has-focus .label-md[stacked],\n    .input-has-focus .label-md[stacked],\n    .item-input-has-focus .label-md[floating],\n    .input-has-focus .label-md[floating]\n    {\n        color: #3df5d6 !important;\n    }\n    .ionlabel {\n        width: 1%;\n        white-space: nowrap;\n        padding-left: 16px;\n        color:#999;\n        font-size: 16px;\n        font-weight: 400;\n    }\n</style>'/*ion-inline-end:"E:\testing\ionic\firebase-notification-with-ionic\src\pages\login\login.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__providers_common__["a" /* Common */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* MenuController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ToastController */]])
    ], LoginPage);
    return LoginPage;
}());

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 80:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_chart_js__ = __webpack_require__(377);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_chart_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_chart_js__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HomePage = /** @class */ (function () {
    function HomePage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    HomePage.prototype.ionViewDidLoad = function () {
        this.barChart = new __WEBPACK_IMPORTED_MODULE_2_chart_js__["Chart"](this.barCanvas.nativeElement, {
            type: 'bar',
            data: {
                labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
                datasets: [{
                        label: '# of Votes',
                        data: [12, 19, 3, 5, 2, 3],
                        backgroundColor: [
                            'rgba(255, 99, 132, 0.2)',
                            'rgba(54, 162, 235, 0.2)',
                            'rgba(255, 206, 86, 0.2)',
                            'rgba(75, 192, 192, 0.2)',
                            'rgba(153, 102, 255, 0.2)',
                            'rgba(255, 159, 64, 0.2)'
                        ],
                        borderColor: [
                            'rgba(255,99,132,1)',
                            'rgba(54, 162, 235, 1)',
                            'rgba(255, 206, 86, 1)',
                            'rgba(75, 192, 192, 1)',
                            'rgba(153, 102, 255, 1)',
                            'rgba(255, 159, 64, 1)'
                        ],
                        borderWidth: 1
                    }]
            },
            options: {
                scales: {
                    yAxes: [{
                            ticks: {
                                beginAtZero: true
                            }
                        }]
                }
            }
        });
        this.doughnutChart = new __WEBPACK_IMPORTED_MODULE_2_chart_js__["Chart"](this.doughnutCanvas.nativeElement, {
            type: 'doughnut',
            data: {
                labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
                datasets: [{
                        label: '# of Votes',
                        data: [12, 19, 3, 5, 2, 3],
                        backgroundColor: [
                            'rgba(255, 99, 132, 0.2)',
                            'rgba(54, 162, 235, 0.2)',
                            'rgba(255, 206, 86, 0.2)',
                            'rgba(75, 192, 192, 0.2)',
                            'rgba(153, 102, 255, 0.2)',
                            'rgba(255, 159, 64, 0.2)'
                        ],
                        hoverBackgroundColor: [
                            "#FF6384",
                            "#36A2EB",
                            "#FFCE56",
                            "#FF6384",
                            "#36A2EB",
                            "#FFCE56"
                        ]
                    }]
            }
        });
        this.lineChart = new __WEBPACK_IMPORTED_MODULE_2_chart_js__["Chart"](this.lineCanvas.nativeElement, {
            type: 'line',
            data: {
                labels: ["January", "February", "March", "April", "May", "June", "July"],
                datasets: [
                    {
                        label: "My First dataset",
                        fill: false,
                        lineTension: 0.1,
                        backgroundColor: "rgba(75,192,192,0.4)",
                        borderColor: "rgba(75,192,192,1)",
                        borderCapStyle: 'butt',
                        borderDash: [],
                        borderDashOffset: 0.0,
                        borderJoinStyle: 'miter',
                        pointBorderColor: "rgba(75,192,192,1)",
                        pointBackgroundColor: "#fff",
                        pointBorderWidth: 1,
                        pointHoverRadius: 5,
                        pointHoverBackgroundColor: "rgba(75,192,192,1)",
                        pointHoverBorderColor: "rgba(220,220,220,1)",
                        pointHoverBorderWidth: 2,
                        pointRadius: 1,
                        pointHitRadius: 10,
                        data: [65, 59, 80, 81, 56, 55, 40],
                        spanGaps: false,
                    }
                ]
            }
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('barCanvas'),
        __metadata("design:type", Object)
    ], HomePage.prototype, "barCanvas", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('doughnutCanvas'),
        __metadata("design:type", Object)
    ], HomePage.prototype, "doughnutCanvas", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('lineCanvas'),
        __metadata("design:type", Object)
    ], HomePage.prototype, "lineCanvas", void 0);
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"E:\testing\ionic\firebase-notification-with-ionic\src\pages\home\home.html"*/'<!-- -->\n<ion-header style="background-color: #efefef">\n  <ion-navbar color="primary">\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title style="padding-left: 20%">\n      Dashboard\n    </ion-title>\n    <!--<ion-buttons end>-->\n      <!--<button ion-button tappable (click)="presentNotifications($event)">-->\n        <!--<ion-icon name="notifications"></ion-icon>-->\n      <!--</button>-->\n      <!--<button ion-button tappable (click)="goToAccount()">-->\n        <!--<ion-icon name="cog"></ion-icon>-->\n      <!--</button>-->\n    <!--</ion-buttons>-->\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding class="animated fadeIn common-bg" style="background-color: #efefef">\n    <ion-card>\n        <ion-card-header>\n            Bar Chart\n        </ion-card-header>\n        <ion-card-content>\n            <canvas #barCanvas></canvas>\n        </ion-card-content>\n    </ion-card>\n\n    <ion-card>\n        <ion-card-header>\n            Doughnut Chart\n        </ion-card-header>\n        <ion-card-content>\n            <canvas #doughnutCanvas></canvas>\n        </ion-card-content>\n    </ion-card>\n\n    <ion-card>\n        <ion-card-header>\n            Line Chart\n        </ion-card-header>\n        <ion-card-content>\n            <canvas #lineCanvas></canvas>\n        </ion-card-content>\n    </ion-card>\n\n  <!--<button ion-button icon-start block no-margin color="primary" class="round" tappable (click)="doSearch()">-->\n    <!--<ion-icon name="search"></ion-icon> Search-->\n  <!--</button>-->\n\n</ion-content>\n'/*ion-inline-end:"E:\testing\ionic\firebase-notification-with-ionic\src\pages\home\home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ })

},[328]);
//# sourceMappingURL=main.js.map