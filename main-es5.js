(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- start nav -->\n<nav class=\"navbar\" id=\"navbar\" appScroll>\n    <div class=\"logo\"><span id=\"brand\" class=\"brand\">TaReK</span><span class=\"lan gradient\" style=\"display: none;\"><a href=\"ar/index.html\">ع</a></span></div>\n    <input type=\"checkbox\" id=\"toggle\">\n    <label for=\"toggle\" class=\"click\">\n    <span class=\"background1\"></span>\n    <span class=\"background1\"></span>\n    <span class=\"background1\"></span>\n  </label>\n    <div class=\"menu\">\n        <a href=\"#\" class=\"menu-item active color1\" id=\"home\" routerLink=\"\">Home</a>\n        <a href=\"#\" class=\"menu-item color1\" id=\"moree\" routerLink=\"\">About Me</a>\n        <a href=\"#\" class=\"menu-item color1\" routerLink=\"/Portfolio\">Portfolio</a>\n        <a href=\"#\" class=\"menu-item color1\" routerLink=\"/services\" id=\"Services\">Services</a>\n        <a href=\"#\" class=\"menu-item color1\" routerLink=\"/contact\" id=\"Contact\">Contact Me</a>\n    </div>\n    <div class=\"progress-page\">\n        <div class=\"prog background1\" id=\"myprog\"></div>\n    </div>\n</nav>\n<!-- end nav -->\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/home/home.component.html":
/*!*******************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/home/home.component.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"intro\">\n    <div class=\"bg\">\n\n    </div>\n    <div class=\"content\">\n        <div class=\"row\">\n            <div class=\"col-md-6\">\n                <div class=\"brif\">\n                    <div class=\"profile-pic\">\n                        <img src=\"../../../assets/imgs/profile.jpg\" alt=\"Tarek Rida Photo\" title=\"Tarek Rida\">\n                        <span></span>\n                        <span></span>\n                        <span></span>\n                        <span></span>\n                    </div>\n                    <h1 class=\"title\">Tarek Rida</h1>\n                    <div class=\"div1\">\n                        <div class=\"div2\">\n                            <h1 class=\"text1\">Front End Developer</h1>\n                            <h2 class=\"text2\">|</h2>\n                        </div>\n                        <div class=\"div3\">\n                            <h1 class=\"text1\">Ui & Ux Developer</h1>\n                            <h2 class=\"text2\">|</h2>\n                        </div>\n                    </div>\n                    <div class=\"at\">\n                        <p>at <a href=\"https://menatechecosystem.com\">Mena Tech Ecosystem</a></p>\n                    </div>\n                    <div class=\"social d-flex\">\n                        <a href=\"https://wa.me/+0201065596566\">\n                            <div class=\"icon\">\n                                <i class=\"fab fa-whatsapp\"></i>\n                            </div>\n                        </a>\n                        <a href=\"mailto:tarek.rida1@hotmail.com\">\n                            <div class=\"icon\">\n\n                                <i class=\"fas fa-envelope\"></i>\n\n                            </div>\n                        </a>\n                        <a href=\"https://github.com/Tarekrida1\">\n                            <div class=\"icon\">\n\n                                <i class=\"fab fa-github-square\"></i>\n\n                            </div>\n                        </a>\n                        <a href=\"https://www.linkedin.com/in/tarekrida1\">\n                            <div class=\"icon\">\n\n                                <i class=\"fab fa-linkedin\"></i>\n\n                            </div>\n                        </a>\n                        <a href=\"https://www.facebook.com/tarek.rida1\">\n                            <div class=\"icon\">\n\n                                <i class=\"fab fa-facebook\"></i>\n\n                            </div>\n                        </a>\n                    </div>\n                    <div class=\"main_btns\">\n                        \n                 <a href=\"\" class=\"portfolio_btn\">Download CV</a>\n                 <a href=\"\" class=\"portfolio_btn\">Hire Me</a>\n                    </div>\n                </div>\n            </div>\n            <div class=\"col-md-6 m-hide\" style=\"margin-top: 30px\">\n                <img src=\"../../../assets/imgs/img.svg\" alt=\"programmer-img\" width=\"80%\">\n\n            </div>\n        </div>\n    </div>\n</section>\n<section class=\"about_me\">\n<div class=\"container\">\n    <h4>About Me</h4>\n    <p>I am a front-end developer.\n        I developing websites based on web standard technologies like HTML5, CSS, JavaScript \n        And Make websites more interaction on any browser in any screen,\n        And I Looking For More Experience In Web Development And Looking Forward For More Challenge And learning,\n        Do More Effort In a Variet Fields Like UI Design, \n         Graphic Design And Web Development.\n    </p>\n</div>\n</section>"

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/home/home.component */ "./src/app/components/home/home.component.ts");




var routes = [
    { path: '', component: _components_home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"] },
    { path: '**', component: _components_home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'tarekrida';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/home/home.component */ "./src/app/components/home/home.component.ts");






var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _components_home_home_component__WEBPACK_IMPORTED_MODULE_5__["HomeComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/home/home.component.scss":
/*!*****************************************************!*\
  !*** ./src/app/components/home/home.component.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "body {\n  background: #FDFDFD;\n}\n\n@-webkit-keyframes rotation {\n  0% {\n    transform: translate(0px, 0px) rotate(0deg);\n  }\n  50% {\n    transform: translate(-10px, 10px) rotate(359deg);\n  }\n  100% {\n    transform: translate(0px, 0px) rotate(0deg);\n  }\n}\n\n@keyframes rotation {\n  0% {\n    transform: translate(0px, 0px) rotate(0deg);\n  }\n  50% {\n    transform: translate(-10px, 10px) rotate(359deg);\n  }\n  100% {\n    transform: translate(0px, 0px) rotate(0deg);\n  }\n}\n\n.intro {\n  position: relative;\n  height: 90vh;\n}\n\n.intro .bg {\n  position: absolute;\n  left: 0;\n  top: 0;\n  height: 100%;\n  /* background-image: url(./bg.svg); */\n  width: 81%;\n  background-repeat: no-repeat;\n  background-position: top;\n  background-size: cover;\n  /* background: red; */\n  background: linear-gradient(to right, #1fa2ff, #12d8fa, #a6ffcb);\n  border-radius: 0% 100% 70% 0/0% 0 89% 0;\n  /* transform: rotate(24deg) translate(-315px, 59px); */\n  opacity: 0.2;\n  box-shadow: 0px 0px 15px 2px rgba(0, 0, 0, 0.4);\n}\n\n.intro .row {\n  height: 100%;\n  margin: 0;\n}\n\n.intro .row .col-md-6 {\n  align-self: center;\n  margin: 0 auto;\n}\n\n.intro .content {\n  height: 100%;\n}\n\n.intro .content .brif {\n  margin-top: 20px;\n}\n\n.intro .content .brif .profile-pic {\n  margin: auto;\n  position: relative;\n  width: 240px;\n  height: 240px;\n}\n\n.intro .content .brif .profile-pic img {\n  position: absolute;\n  z-index: 1;\n  width: 100%;\n  border-radius: 59% 41% 37% 63%/27% 26% 74% 73%;\n  box-shadow: 2px 2px 10px 0 rgba(0, 0, 0, 0.18);\n}\n\n.intro .content .brif .profile-pic span {\n  opacity: 0.8;\n  position: absolute;\n}\n\n.intro .content .brif .profile-pic span:nth-of-type(1) {\n  top: 0;\n  right: 0;\n  width: 40px;\n  height: 40px;\n  border-radius: 50%;\n  border: 5px solid #8dccfc;\n  -webkit-animation: rotation 44s infinite;\n          animation: rotation 44s infinite;\n}\n\n.intro .content .brif .profile-pic span:nth-of-type(2) {\n  top: -3px;\n  left: 56px;\n  width: 30px;\n  z-index: 2;\n  height: 30px;\n  background: #ffd378;\n  -webkit-clip-path: polygon(50% 0%, 0% 100%, 100% 100%);\n          clip-path: polygon(50% 0%, 0% 100%, 100% 100%);\n  -webkit-animation: rotation 57s infinite;\n          animation: rotation 57s infinite;\n}\n\n.intro .content .brif .profile-pic span:nth-of-type(3) {\n  top: 9px;\n  left: 14px;\n  width: 20px;\n  z-index: 2;\n  height: 20px;\n  background: #26d07c;\n  border-radius: 50%;\n  -webkit-animation: rotation 69s infinite;\n          animation: rotation 69s infinite;\n}\n\n.intro .content .brif .profile-pic span:nth-of-type(4) {\n  bottom: 9px;\n  left: 63px;\n  width: 30px;\n  z-index: 2;\n  height: 30px;\n  background: #7fbeeb;\n  -webkit-animation: rotation 77s infinite;\n          animation: rotation 77s infinite;\n}\n\n.intro .content .brif h1 {\n  font-size: 2rem;\n}\n\n.intro .content .brif .title {\n  color: #6371fc;\n  text-align: center;\n  margin-top: 25px;\n  font-weight: bold;\n  font-size: 40px;\n  margin-bottom: 0;\n}\n\n.intro .content .brif .at p {\n  text-align: center;\n  font-family: serif;\n  font-weight: 600;\n  font-size: 13px;\n}\n\n.intro .content .brif .social {\n  justify-content: center;\n}\n\n.intro .content .brif .social .icon {\n  width: 40px;\n  height: 40px;\n  background: #29c0ff;\n  border-radius: 50%;\n  text-align: center;\n  line-height: 45px;\n  margin-right: 5px;\n  box-shadow: 2px 2px 5px 2px rgba(0, 0, 0, 0.1);\n  transition: all 0.3s ease-in-out;\n}\n\n.intro .content .brif .social .icon i {\n  color: #fff;\n  font-size: 20px;\n}\n\n.intro .content .brif .social .icon:hover {\n  background: #6371fc;\n  box-shadow: 2px 2px 6px 2px rgba(0, 0, 0, 0.2);\n}\n\n@-webkit-keyframes width1 {\n  0% {\n    width: 0;\n    transform: translateX(-11px);\n  }\n  33.333333333333% {\n    width: 100%;\n    transform: translateX(0);\n  }\n  66.666666666666% {\n    width: 0px;\n    transform: translateX(-11px);\n  }\n  100% {\n    width: 0;\n    transform: translateX(-11px);\n  }\n}\n\n@keyframes width1 {\n  0% {\n    width: 0;\n    transform: translateX(-11px);\n  }\n  33.333333333333% {\n    width: 100%;\n    transform: translateX(0);\n  }\n  66.666666666666% {\n    width: 0px;\n    transform: translateX(-11px);\n  }\n  100% {\n    width: 0;\n    transform: translateX(-11px);\n  }\n}\n\n@-webkit-keyframes width2 {\n  0% {\n    width: 0;\n    transform: translateX(-11px);\n  }\n  33.333333333333% {\n    width: 0;\n    transform: translateX(-11px);\n  }\n  66.666666666666% {\n    width: 0;\n    transform: translateX(-11px);\n  }\n  90% {\n    width: 100%;\n    transform: translateX(0);\n  }\n  100% {\n    width: 0;\n    transform: translateX(-11px);\n  }\n}\n\n@keyframes width2 {\n  0% {\n    width: 0;\n    transform: translateX(-11px);\n  }\n  33.333333333333% {\n    width: 0;\n    transform: translateX(-11px);\n  }\n  66.666666666666% {\n    width: 0;\n    transform: translateX(-11px);\n  }\n  90% {\n    width: 100%;\n    transform: translateX(0);\n  }\n  100% {\n    width: 0;\n    transform: translateX(-11px);\n  }\n}\n\n@-webkit-keyframes opa {\n  0% {\n    opacity: 0;\n  }\n  100% {\n    opacity: 1;\n  }\n}\n\n@keyframes opa {\n  0% {\n    opacity: 0;\n  }\n  100% {\n    opacity: 1;\n  }\n}\n\n.intro .content .brif .div1 {\n  width: 320px;\n  height: 50px;\n  line-height: 50px;\n  position: relative;\n  margin: auto;\n}\n\n.intro .content .brif .div1 .div2,\n.intro .content .brif .div1 .div3 {\n  display: flex;\n  height: 100%;\n  top: 0;\n  left: 0;\n  overflow: hidden;\n  position: absolute;\n}\n\n.intro .content .brif .div2 {\n  margin-left: 10px;\n}\n\n.intro .content .brif .div3 {\n  margin-left: 20px;\n}\n\n.intro .content .brif .div1 .div2 {\n  -webkit-animation: width1 10s infinite;\n          animation: width1 10s infinite;\n  z-index: 1;\n}\n\n.intro .content .brif .div1 .div3 {\n  -webkit-animation: width2 10s infinite;\n          animation: width2 10s infinite;\n  width: 0;\n  z-index: 2;\n}\n\n.intro .content .brif .text2 {\n  color: #2d4057;\n  margin: 0;\n  font-size: 35px;\n  font-weight: bold;\n  -webkit-animation: opa 0.4s infinite;\n          animation: opa 0.4s infinite;\n}\n\n.intro .content .brif .text1 {\n  color: #2d4057;\n  white-space: nowrap;\n  text-overflow: clip;\n  padding-right: 5px;\n  margin: 0;\n  overflow: hidden;\n}\n\n.main_btns {\n  display: flex;\n  justify-content: center;\n}\n\n.main_btns a {\n  min-width: 155px;\n  text-align: center;\n  margin-right: 15px;\n}\n\n.about_me {\n  margin-top: 30px;\n}\n\n.about_me h4 {\n  color: #6371fc;\n}\n\n.about_me p {\n  color: #2d4057;\n  font-size: 14px;\n  white-space: pre-wrap;\n}\n\n@media only screen and (max-width: 768px) {\n  .m-hide {\n    display: none;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9ob21lL0M6XFxVc2Vyc1xcVGFyZWtcXHRhcmVrcmlkYS9zcmNcXGFwcFxcY29tcG9uZW50c1xcaG9tZVxcaG9tZS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9ob21lL2hvbWUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxtQkFBQTtBQ0NGOztBRElBO0VBQ0U7SUFDSSwyQ0FBQTtFQ0RKO0VER0E7SUFDRSxnREFBQTtFQ0RGO0VER0E7SUFDRSwyQ0FBQTtFQ0RGO0FBQ0Y7O0FEUkE7RUFDRTtJQUNJLDJDQUFBO0VDREo7RURHQTtJQUNFLGdEQUFBO0VDREY7RURHQTtJQUNFLDJDQUFBO0VDREY7QUFDRjs7QURPQTtFQUNFLGtCQUFBO0VBQ0EsWUFBQTtBQ0xGOztBRE1FO0VBQ0Usa0JBQUE7RUFDQSxPQUFBO0VBQ0EsTUFBQTtFQUNBLFlBQUE7RUFDQSxxQ0FBQTtFQUNBLFVBQUE7RUFDQSw0QkFBQTtFQUNBLHdCQUFBO0VBQ0Esc0JBQUE7RUFDQSxxQkFBQTtFQUNBLGdFQUFBO0VBQ0EsdUNBQUE7RUFDQSxzREFBQTtFQUNBLFlBQUE7RUFDQSwrQ0FBQTtBQ0pKOztBRE9FO0VBQ0UsWUFBQTtFQUNBLFNBQUE7QUNMSjs7QURPSTtFQUNFLGtCQUFBO0VBQ0MsY0FBQTtBQ0xQOztBRFNFO0VBQ0UsWUFBQTtBQ1BKOztBRFFJO0VBRUUsZ0JBQUE7QUNQTjs7QURTTTtFQUNFLFlBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0FDUFI7O0FEUVE7RUFDRSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0VBQ0EsOENBQUE7RUFDQSw4Q0FBQTtBQ05WOztBRFFFO0VBQ0UsWUFBQTtFQUNBLGtCQUFBO0FDTko7O0FEUU07RUFFRixNQUFBO0VBQ0EsUUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkFBQTtFQUNBLHdDQUFB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Qkk7RUFDSSxjQTVPSztFQTZPTCxtQkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxTQUFBO0VBQ0EsZ0JBQUE7QUN4QlI7O0FEK0JBO0VBQ0UsYUFBQTtFQUNBLHVCQUFBO0FDNUJGOztBRDZCRTtFQUNFLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtBQzNCSjs7QUQ4QkE7RUFDRSxnQkFBQTtBQzNCRjs7QUQ0QkU7RUFDRSxjQXRRUztBQzRPYjs7QUQ0QkU7RUFDRSxjQXZRUztFQXdRVCxlQUFBO0VBQ0EscUJBQUE7QUMxQko7O0FENkJBO0VBQ0U7SUFDRixhQUFBO0VDMUJFO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2hvbWUvaG9tZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImJvZHkge1xyXG4gIGJhY2tncm91bmQ6ICNGREZERkRcclxufVxyXG5cclxuXHJcblxyXG5Aa2V5ZnJhbWVzIHJvdGF0aW9uIHtcclxuICAwJSB7XHJcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDBweCwgMHB4KSByb3RhdGUoMGRlZyk7XHJcbiAgfVxyXG4gIDUwJSB7XHJcbiAgICB0cmFuc2Zvcm06dHJhbnNsYXRlKC0xMHB4LCAxMHB4KSByb3RhdGUoMzU5ZGVnKTtcclxufVxyXG4gIDEwMCUge1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMHB4LCAwcHgpIHJvdGF0ZSgwZGVnKTtcclxuICB9XHJcbn1cclxuXHJcbiRmaXJ0X2NvbG9yOiAjNjM3MWZjO1xyXG4kc2Vjb25kX2NvbG9yOiAjMjljMGZmO1xyXG4kZ3JleV9jb2xvcjogIzJkNDA1NztcclxuLmludHJvIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgaGVpZ2h0OiA5MHZoO1xyXG4gIC5iZyB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgLyogYmFja2dyb3VuZC1pbWFnZTogdXJsKC4vYmcuc3ZnKTsgKi9cclxuICAgIHdpZHRoOiA4MSU7XHJcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogdG9wO1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICAgIC8qIGJhY2tncm91bmQ6IHJlZDsgKi9cclxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgIzFmYTJmZiwgIzEyZDhmYSwgI2E2ZmZjYik7XHJcbiAgICBib3JkZXItcmFkaXVzOiAwJSAxMDAlIDcwJSAwIC8gMCUgMCA4OSUgMDtcclxuICAgIC8qIHRyYW5zZm9ybTogcm90YXRlKDI0ZGVnKSB0cmFuc2xhdGUoLTMxNXB4LCA1OXB4KTsgKi9cclxuICAgIG9wYWNpdHk6IDAuMjtcclxuICAgIGJveC1zaGFkb3c6IDBweCAwcHggMTVweCAycHggcmdiYSgwLCAwLCAwLCAwLjQpO1xyXG4gICAgXHJcbiAgfVxyXG4gIC5yb3cge1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgbWFyZ2luOiAwO1xyXG5cclxuICAgIC5jb2wtbWQtNiB7XHJcbiAgICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcclxuICAgICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICBcclxuICAgIH1cclxuICB9XHJcbiAgLmNvbnRlbnQge1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgLmJyaWYge1xyXG5cclxuICAgICAgbWFyZ2luLXRvcDogMjBweDtcclxuICAgICBcclxuICAgICAgLnByb2ZpbGUtcGlje1xyXG4gICAgICAgIG1hcmdpbjogYXV0bztcclxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgd2lkdGg6IDI0MHB4O1xyXG4gICAgICAgIGhlaWdodDogMjQwcHg7XHJcbiAgICAgICAgaW1nIHtcclxuICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgIHotaW5kZXg6IDE7XHJcbiAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDU5JSA0MSUgMzclIDYzJSAvIDI3JSAyNiUgNzQlIDczJTtcclxuICAgICAgICAgIGJveC1zaGFkb3c6IDJweCAycHggMTBweCAwIHJnYmEoMCwgMCwgMCwgMC4xOCk7XHJcbiAgICAgIH1cclxuICBzcGFuIHtcclxuICAgIG9wYWNpdHk6IC44O1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIH1cclxuICAgICAgc3BhbjpudGgtb2YtdHlwZSgxKSB7XHJcbiAgICAgIFxyXG4gICAgdG9wOiAwO1xyXG4gICAgcmlnaHQ6IDA7XHJcbiAgICB3aWR0aDogNDBweDtcclxuICAgIGhlaWdodDogNDBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgIGJvcmRlcjogNXB4IHNvbGlkICM4ZGNjZmM7XHJcbiAgICBhbmltYXRpb246IHJvdGF0aW9uIDQ0cyBpbmZpbml0ZSBcclxuICAgICAgfVxyXG4gICAgICBzcGFuOm50aC1vZi10eXBlKDIpIHtcclxuICBcclxuICAgICAgICB0b3A6IC0zcHg7XHJcbiAgICAgICAgbGVmdDogNTZweDtcclxuICAgICAgICB3aWR0aDogMzBweDtcclxuICAgICAgICB6LWluZGV4OiAyO1xyXG4gICAgICAgIGhlaWdodDogMzBweDtcclxuICAgICAgICBiYWNrZ3JvdW5kOiAjZmZkMzc4O1xyXG4gICAgICAgIGNsaXAtcGF0aDogcG9seWdvbig1MCUgMCUsIDAlIDEwMCUsIDEwMCUgMTAwJSk7XHJcbiAgICAgICAgYW5pbWF0aW9uOiByb3RhdGlvbiA1N3MgaW5maW5pdGUgXHJcblxyXG4gICAgICB9XHJcbiAgICAgIHNwYW46bnRoLW9mLXR5cGUoMykge1xyXG4gICBcclxuICAgICAgICB0b3A6IDlweDtcclxuICAgICAgICBsZWZ0OiAxNHB4O1xyXG4gICAgICAgIHdpZHRoOiAyMHB4O1xyXG4gICAgICAgIHotaW5kZXg6IDI7XHJcbiAgICAgICAgaGVpZ2h0OiAyMHB4O1xyXG4gICAgICAgIGJhY2tncm91bmQ6ICMyNmQwN2M7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgICAgIGFuaW1hdGlvbjogcm90YXRpb24gNjlzIGluZmluaXRlIFxyXG4gICAgICB9XHJcbiAgICAgIHNwYW46bnRoLW9mLXR5cGUoNCkge1xyXG4gICAgICAgXHJcbiAgICAgICAgYm90dG9tOiA5cHg7XHJcbiAgICAgICAgbGVmdDogNjNweDtcclxuICAgICAgICB3aWR0aDogMzBweDtcclxuICAgICAgICB6LWluZGV4OiAyO1xyXG4gICAgICAgIGhlaWdodDogMzBweDtcclxuICAgICAgICBiYWNrZ3JvdW5kOiAjN2ZiZWViO1xyXG4gICAgICAgIGFuaW1hdGlvbjogcm90YXRpb24gNzdzIGluZmluaXRlIFxyXG4gICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgIGgxIHtcclxuICAgICAgICBmb250LXNpemU6IDJyZW07XHJcbiAgICB9XHJcbiAgICAudGl0bGUge1xyXG4gICAgICBjb2xvcjogJGZpcnRfY29sb3I7XHJcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgbWFyZ2luLXRvcDogMjVweDtcclxuICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgIGZvbnQtc2l6ZTogNDBweDtcclxuICAgICAgbWFyZ2luLWJvdHRvbTogMDtcclxuICAgIH1cclxuICAgIC5hdCB7XHJcbnAge1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBmb250LWZhbWlseTogc2VyaWY7XHJcbiAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICBmb250LXNpemU6IDEzcHg7XHJcbn1cclxuICAgIH1cclxuICAgIC5zb2NpYWwge1xyXG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgLmljb24ge1xyXG4gICAgICAgIHdpZHRoOiA0MHB4O1xyXG4gICAgaGVpZ2h0OiA0MHB4O1xyXG4gICAgYmFja2dyb3VuZDogJHNlY29uZF9jb2xvcjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGxpbmUtaGVpZ2h0OiA0NXB4O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiA1cHg7XHJcbiAgICBib3gtc2hhZG93OiAycHggMnB4IDVweCAycHggcmdiYSgwLCAwLCAwLCAwLjEpO1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIC4zcyBlYXNlLWluLW91dDtcclxuXHJcbiAgICBpIHtcclxuICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICAgIGZvbnQtc2l6ZTogMjBweDtcclxuXHJcbiAgICB9XHJcbiAgICAmOmhvdmVyIHtcclxuICAgICAgYmFja2dyb3VuZDogJGZpcnRfY29sb3I7XHJcbiAgICAgIGJveC1zaGFkb3c6IDJweCAycHggNnB4IDJweCByZ2JhKDAsIDAsIDAsIDAuMik7XHJcbiAgICB9XHJcbiAgICAgIH1cclxuICAgXHJcbiAgICB9XHJcbiAgICAgIEBrZXlmcmFtZXMgd2lkdGgxIHtcclxuICAgICAgICAwJSB7XHJcbiAgICAgICAgICAgIHdpZHRoOiAwO1xyXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTExcHgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICAzMy4zMzMzMzMzMzMzMzMlIHtcclxuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgNjYuNjY2NjY2NjY2NjY2JSB7XHJcbiAgICAgICAgICAgIHdpZHRoOiAwcHg7XHJcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMTFweCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIDEwMCUge1xyXG4gICAgICAgICAgICB3aWR0aDogMDtcclxuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0xMXB4KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBcclxuICAgIEBrZXlmcmFtZXMgd2lkdGgyIHtcclxuICAgICAgICAwJSB7XHJcbiAgICAgICAgICAgIHdpZHRoOiAwO1xyXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTExcHgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICAzMy4zMzMzMzMzMzMzMzMlIHtcclxuICAgICAgICAgICAgd2lkdGg6IDA7XHJcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMTFweCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIDY2LjY2NjY2NjY2NjY2NiUge1xyXG4gICAgICAgICAgICB3aWR0aDogMDtcclxuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0xMXB4KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgOTAlIHtcclxuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgMTAwJSB7XHJcbiAgICAgICAgICAgIHdpZHRoOiAwO1xyXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTExcHgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIFxyXG4gICAgQGtleWZyYW1lcyBvcGEge1xyXG4gICAgICAgIDAlIHtcclxuICAgICAgICAgICAgb3BhY2l0eTogMFxyXG4gICAgICAgIH1cclxuICAgICAgICAxMDAlIHtcclxuICAgICAgICAgICAgb3BhY2l0eTogMVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIFxyXG4gICAgLmRpdjEge1xyXG4gICAgICAgIHdpZHRoOiAzMjBweDtcclxuICAgICAgICBoZWlnaHQ6IDUwcHg7XHJcbiAgICAgICAgbGluZS1oZWlnaHQ6IDUwcHg7XHJcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgbWFyZ2luOiAgYXV0bztcclxuICAgIH1cclxuICAgIFxyXG4gICAgLmRpdjEgLmRpdjIsXHJcbiAgICAuZGl2MSAuZGl2MyB7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgdG9wOiAwO1xyXG4gICAgICAgIGxlZnQ6IDA7XHJcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB9XHJcbiAgICAuZGl2MiB7XHJcbiAgICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xyXG4gICAgfVxyXG4gICAgLmRpdjMge1xyXG4gICAgICBtYXJnaW4tbGVmdDogMjBweDtcclxuICAgIH1cclxuICAgIC5kaXYxIC5kaXYyIHtcclxuICAgICAgICBhbmltYXRpb246IHdpZHRoMSAxMHMgaW5maW5pdGU7XHJcbiAgICAgICAgei1pbmRleDogMTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgLmRpdjEgLmRpdjMge1xyXG4gICAgICAgIGFuaW1hdGlvbjogd2lkdGgyIDEwcyBpbmZpbml0ZTtcclxuICAgICAgICB3aWR0aDogMDtcclxuICAgICAgICB6LWluZGV4OiAyO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAudGV4dDIge1xyXG4gICAgICAgIGNvbG9yOiAkZ3JleV9jb2xvcjtcclxuICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgZm9udC1zaXplOiAzNXB4O1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICAgIGFuaW1hdGlvbjogb3BhIC40cyBpbmZpbml0ZTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgLnRleHQxIHtcclxuICAgICAgICBjb2xvcjogJGdyZXlfY29sb3I7XHJcbiAgICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuICAgICAgICB0ZXh0LW92ZXJmbG93OiBjbGlwO1xyXG4gICAgICAgIHBhZGRpbmctcmlnaHQ6IDVweDtcclxuICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIH1cclxuICAgIFxyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuLm1haW5fYnRucyB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhIHtcclxuICAgIG1pbi13aWR0aDogMTU1cHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDE1cHg7XHJcbiAgfVxyXG59XHJcbi5hYm91dF9tZSB7XHJcbiAgbWFyZ2luLXRvcDogMzBweDtcclxuICBoNCB7XHJcbiAgICBjb2xvcjogJGZpcnRfY29sb3JcclxuICB9XHJcbiAgcCB7XHJcbiAgICBjb2xvcjogJGdyZXlfY29sb3I7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICB3aGl0ZS1zcGFjZTogcHJlLXdyYXA7XHJcbiAgfVxyXG59XHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcclxuICAubS1oaWRlIHsgXHJcbmRpc3BsYXk6IG5vbmVcclxuICB9XHJcbn0iLCJib2R5IHtcbiAgYmFja2dyb3VuZDogI0ZERkRGRDtcbn1cblxuQGtleWZyYW1lcyByb3RhdGlvbiB7XG4gIDAlIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwcHgsIDBweCkgcm90YXRlKDBkZWcpO1xuICB9XG4gIDUwJSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTEwcHgsIDEwcHgpIHJvdGF0ZSgzNTlkZWcpO1xuICB9XG4gIDEwMCUge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDBweCwgMHB4KSByb3RhdGUoMGRlZyk7XG4gIH1cbn1cbi5pbnRybyB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgaGVpZ2h0OiA5MHZoO1xufVxuLmludHJvIC5iZyB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogMDtcbiAgdG9wOiAwO1xuICBoZWlnaHQ6IDEwMCU7XG4gIC8qIGJhY2tncm91bmQtaW1hZ2U6IHVybCguL2JnLnN2Zyk7ICovXG4gIHdpZHRoOiA4MSU7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IHRvcDtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgLyogYmFja2dyb3VuZDogcmVkOyAqL1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICMxZmEyZmYsICMxMmQ4ZmEsICNhNmZmY2IpO1xuICBib3JkZXItcmFkaXVzOiAwJSAxMDAlIDcwJSAwLzAlIDAgODklIDA7XG4gIC8qIHRyYW5zZm9ybTogcm90YXRlKDI0ZGVnKSB0cmFuc2xhdGUoLTMxNXB4LCA1OXB4KTsgKi9cbiAgb3BhY2l0eTogMC4yO1xuICBib3gtc2hhZG93OiAwcHggMHB4IDE1cHggMnB4IHJnYmEoMCwgMCwgMCwgMC40KTtcbn1cbi5pbnRybyAucm93IHtcbiAgaGVpZ2h0OiAxMDAlO1xuICBtYXJnaW46IDA7XG59XG4uaW50cm8gLnJvdyAuY29sLW1kLTYge1xuICBhbGlnbi1zZWxmOiBjZW50ZXI7XG4gIG1hcmdpbjogMCBhdXRvO1xufVxuLmludHJvIC5jb250ZW50IHtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuLmludHJvIC5jb250ZW50IC5icmlmIHtcbiAgbWFyZ2luLXRvcDogMjBweDtcbn1cbi5pbnRybyAuY29udGVudCAuYnJpZiAucHJvZmlsZS1waWMge1xuICBtYXJnaW46IGF1dG87XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgd2lkdGg6IDI0MHB4O1xuICBoZWlnaHQ6IDI0MHB4O1xufVxuLmludHJvIC5jb250ZW50IC5icmlmIC5wcm9maWxlLXBpYyBpbWcge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHotaW5kZXg6IDE7XG4gIHdpZHRoOiAxMDAlO1xuICBib3JkZXItcmFkaXVzOiA1OSUgNDElIDM3JSA2MyUvMjclIDI2JSA3NCUgNzMlO1xuICBib3gtc2hhZG93OiAycHggMnB4IDEwcHggMCByZ2JhKDAsIDAsIDAsIDAuMTgpO1xufVxuLmludHJvIC5jb250ZW50IC5icmlmIC5wcm9maWxlLXBpYyBzcGFuIHtcbiAgb3BhY2l0eTogMC44O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG59XG4uaW50cm8gLmNvbnRlbnQgLmJyaWYgLnByb2ZpbGUtcGljIHNwYW46bnRoLW9mLXR5cGUoMSkge1xuICB0b3A6IDA7XG4gIHJpZ2h0OiAwO1xuICB3aWR0aDogNDBweDtcbiAgaGVpZ2h0OiA0MHB4O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGJvcmRlcjogNXB4IHNvbGlkICM4ZGNjZmM7XG4gIGFuaW1hdGlvbjogcm90YXRpb24gNDRzIGluZmluaXRlO1xufVxuLmludHJvIC5jb250ZW50IC5icmlmIC5wcm9maWxlLXBpYyBzcGFuOm50aC1vZi10eXBlKDIpIHtcbiAgdG9wOiAtM3B4O1xuICBsZWZ0OiA1NnB4O1xuICB3aWR0aDogMzBweDtcbiAgei1pbmRleDogMjtcbiAgaGVpZ2h0OiAzMHB4O1xuICBiYWNrZ3JvdW5kOiAjZmZkMzc4O1xuICBjbGlwLXBhdGg6IHBvbHlnb24oNTAlIDAlLCAwJSAxMDAlLCAxMDAlIDEwMCUpO1xuICBhbmltYXRpb246IHJvdGF0aW9uIDU3cyBpbmZpbml0ZTtcbn1cbi5pbnRybyAuY29udGVudCAuYnJpZiAucHJvZmlsZS1waWMgc3BhbjpudGgtb2YtdHlwZSgzKSB7XG4gIHRvcDogOXB4O1xuICBsZWZ0OiAxNHB4O1xuICB3aWR0aDogMjBweDtcbiAgei1pbmRleDogMjtcbiAgaGVpZ2h0OiAyMHB4O1xuICBiYWNrZ3JvdW5kOiAjMjZkMDdjO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGFuaW1hdGlvbjogcm90YXRpb24gNjlzIGluZmluaXRlO1xufVxuLmludHJvIC5jb250ZW50IC5icmlmIC5wcm9maWxlLXBpYyBzcGFuOm50aC1vZi10eXBlKDQpIHtcbiAgYm90dG9tOiA5cHg7XG4gIGxlZnQ6IDYzcHg7XG4gIHdpZHRoOiAzMHB4O1xuICB6LWluZGV4OiAyO1xuICBoZWlnaHQ6IDMwcHg7XG4gIGJhY2tncm91bmQ6ICM3ZmJlZWI7XG4gIGFuaW1hdGlvbjogcm90YXRpb24gNzdzIGluZmluaXRlO1xufVxuLmludHJvIC5jb250ZW50IC5icmlmIGgxIHtcbiAgZm9udC1zaXplOiAycmVtO1xufVxuLmludHJvIC5jb250ZW50IC5icmlmIC50aXRsZSB7XG4gIGNvbG9yOiAjNjM3MWZjO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbi10b3A6IDI1cHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBmb250LXNpemU6IDQwcHg7XG4gIG1hcmdpbi1ib3R0b206IDA7XG59XG4uaW50cm8gLmNvbnRlbnQgLmJyaWYgLmF0IHAge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtZmFtaWx5OiBzZXJpZjtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgZm9udC1zaXplOiAxM3B4O1xufVxuLmludHJvIC5jb250ZW50IC5icmlmIC5zb2NpYWwge1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cbi5pbnRybyAuY29udGVudCAuYnJpZiAuc29jaWFsIC5pY29uIHtcbiAgd2lkdGg6IDQwcHg7XG4gIGhlaWdodDogNDBweDtcbiAgYmFja2dyb3VuZDogIzI5YzBmZjtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGxpbmUtaGVpZ2h0OiA0NXB4O1xuICBtYXJnaW4tcmlnaHQ6IDVweDtcbiAgYm94LXNoYWRvdzogMnB4IDJweCA1cHggMnB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1pbi1vdXQ7XG59XG4uaW50cm8gLmNvbnRlbnQgLmJyaWYgLnNvY2lhbCAuaWNvbiBpIHtcbiAgY29sb3I6ICNmZmY7XG4gIGZvbnQtc2l6ZTogMjBweDtcbn1cbi5pbnRybyAuY29udGVudCAuYnJpZiAuc29jaWFsIC5pY29uOmhvdmVyIHtcbiAgYmFja2dyb3VuZDogIzYzNzFmYztcbiAgYm94LXNoYWRvdzogMnB4IDJweCA2cHggMnB4IHJnYmEoMCwgMCwgMCwgMC4yKTtcbn1cbkBrZXlmcmFtZXMgd2lkdGgxIHtcbiAgMCUge1xuICAgIHdpZHRoOiAwO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMTFweCk7XG4gIH1cbiAgMzMuMzMzMzMzMzMzMzMzJSB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApO1xuICB9XG4gIDY2LjY2NjY2NjY2NjY2NiUge1xuICAgIHdpZHRoOiAwcHg7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0xMXB4KTtcbiAgfVxuICAxMDAlIHtcbiAgICB3aWR0aDogMDtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTExcHgpO1xuICB9XG59XG5Aa2V5ZnJhbWVzIHdpZHRoMiB7XG4gIDAlIHtcbiAgICB3aWR0aDogMDtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTExcHgpO1xuICB9XG4gIDMzLjMzMzMzMzMzMzMzMyUge1xuICAgIHdpZHRoOiAwO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMTFweCk7XG4gIH1cbiAgNjYuNjY2NjY2NjY2NjY2JSB7XG4gICAgd2lkdGg6IDA7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0xMXB4KTtcbiAgfVxuICA5MCUge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKTtcbiAgfVxuICAxMDAlIHtcbiAgICB3aWR0aDogMDtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTExcHgpO1xuICB9XG59XG5Aa2V5ZnJhbWVzIG9wYSB7XG4gIDAlIHtcbiAgICBvcGFjaXR5OiAwO1xuICB9XG4gIDEwMCUge1xuICAgIG9wYWNpdHk6IDE7XG4gIH1cbn1cbi5pbnRybyAuY29udGVudCAuYnJpZiAuZGl2MSB7XG4gIHdpZHRoOiAzMjBweDtcbiAgaGVpZ2h0OiA1MHB4O1xuICBsaW5lLWhlaWdodDogNTBweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBtYXJnaW46IGF1dG87XG59XG4uaW50cm8gLmNvbnRlbnQgLmJyaWYgLmRpdjEgLmRpdjIsXG4uaW50cm8gLmNvbnRlbnQgLmJyaWYgLmRpdjEgLmRpdjMge1xuICBkaXNwbGF5OiBmbGV4O1xuICBoZWlnaHQ6IDEwMCU7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xufVxuLmludHJvIC5jb250ZW50IC5icmlmIC5kaXYyIHtcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XG59XG4uaW50cm8gLmNvbnRlbnQgLmJyaWYgLmRpdjMge1xuICBtYXJnaW4tbGVmdDogMjBweDtcbn1cbi5pbnRybyAuY29udGVudCAuYnJpZiAuZGl2MSAuZGl2MiB7XG4gIGFuaW1hdGlvbjogd2lkdGgxIDEwcyBpbmZpbml0ZTtcbiAgei1pbmRleDogMTtcbn1cbi5pbnRybyAuY29udGVudCAuYnJpZiAuZGl2MSAuZGl2MyB7XG4gIGFuaW1hdGlvbjogd2lkdGgyIDEwcyBpbmZpbml0ZTtcbiAgd2lkdGg6IDA7XG4gIHotaW5kZXg6IDI7XG59XG4uaW50cm8gLmNvbnRlbnQgLmJyaWYgLnRleHQyIHtcbiAgY29sb3I6ICMyZDQwNTc7XG4gIG1hcmdpbjogMDtcbiAgZm9udC1zaXplOiAzNXB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgYW5pbWF0aW9uOiBvcGEgMC40cyBpbmZpbml0ZTtcbn1cbi5pbnRybyAuY29udGVudCAuYnJpZiAudGV4dDEge1xuICBjb2xvcjogIzJkNDA1NztcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgdGV4dC1vdmVyZmxvdzogY2xpcDtcbiAgcGFkZGluZy1yaWdodDogNXB4O1xuICBtYXJnaW46IDA7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG5cbi5tYWluX2J0bnMge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cbi5tYWluX2J0bnMgYSB7XG4gIG1pbi13aWR0aDogMTU1cHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWFyZ2luLXJpZ2h0OiAxNXB4O1xufVxuXG4uYWJvdXRfbWUge1xuICBtYXJnaW4tdG9wOiAzMHB4O1xufVxuLmFib3V0X21lIGg0IHtcbiAgY29sb3I6ICM2MzcxZmM7XG59XG4uYWJvdXRfbWUgcCB7XG4gIGNvbG9yOiAjMmQ0MDU3O1xuICBmb250LXNpemU6IDE0cHg7XG4gIHdoaXRlLXNwYWNlOiBwcmUtd3JhcDtcbn1cblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xuICAubS1oaWRlIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG59Il19 */"

/***/ }),

/***/ "./src/app/components/home/home.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/home/home.component.ts ***!
  \***************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! raw-loader!./home.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.scss */ "./src/app/components/home/home.component.scss")]
        })
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Tarek\tarekrida\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es5.js.map