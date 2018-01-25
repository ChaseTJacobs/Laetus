webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
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
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<div style=\"text-align:center\">\n\t<app-header></app-header>\n  \t<router-outlet></router-outlet>\n</div>\n\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'Joyful Networking';
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ngx_bootstrap__ = __webpack_require__("../../../../ngx-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_header_header_component__ = __webpack_require__("../../../../../src/app/components/header/header.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_module_display_module_display_component__ = __webpack_require__("../../../../../src/app/components/module-display/module-display.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_register_register_component__ = __webpack_require__("../../../../../src/app/components/register/register.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_home_home_component__ = __webpack_require__("../../../../../src/app/components/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_landing_landing_component__ = __webpack_require__("../../../../../src/app/components/landing/landing.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__services_contact_service__ = __webpack_require__("../../../../../src/app/services/contact.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
// Modules





// Components






// Services

// Any angular object(component??) MUST be put into this
// file in order to work in the rest of the app
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */], __WEBPACK_IMPORTED_MODULE_6__components_header_header_component__["a" /* HeaderComponent */], __WEBPACK_IMPORTED_MODULE_7__components_module_display_module_display_component__["a" /* ModuleDisplayComponent */], __WEBPACK_IMPORTED_MODULE_8__components_register_register_component__["a" /* RegisterComponent */], __WEBPACK_IMPORTED_MODULE_9__components_home_home_component__["a" /* HomeComponent */], __WEBPACK_IMPORTED_MODULE_10__components_landing_landing_component__["a" /* LandingComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_http__["b" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_2_ngx_bootstrap__["a" /* AlertModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* RouterModule */].forRoot([
                    {
                        path: '',
                        component: __WEBPACK_IMPORTED_MODULE_9__components_home_home_component__["a" /* HomeComponent */]
                    },
                    {
                        path: 'home',
                        component: __WEBPACK_IMPORTED_MODULE_9__components_home_home_component__["a" /* HomeComponent */]
                    },
                    {
                        path: 'landing',
                        component: __WEBPACK_IMPORTED_MODULE_10__components_landing_landing_component__["a" /* LandingComponent */]
                    },
                    {
                        path: 'register',
                        component: __WEBPACK_IMPORTED_MODULE_8__components_register_register_component__["a" /* RegisterComponent */]
                    },
                    {
                        path: 'module-test',
                        component: __WEBPACK_IMPORTED_MODULE_7__components_module_display_module_display_component__["a" /* ModuleDisplayComponent */]
                    },
                    {
                        path: '**',
                        component: __WEBPACK_IMPORTED_MODULE_9__components_home_home_component__["a" /* HomeComponent */]
                    }
                ])
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_11__services_contact_service__["a" /* ContactService */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/components/header/header.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".bg-navbar-color {\n\tbackground-color: #343434;\n}\n\n.bg-navbar-color .navbar-nav > .active > a,\n.bg-navbar-color .navbar-nav > .active > a:hover,\n.bg-navbar-color .navbar-nav > .active > a:focus {\n\tbackground-color: #2FCF99;\n}\n\n.nav-item {\n\tmin-width: 100px;\n}\n\n.navbar {\n    padding-top: 0;\n    padding-bottom: 0;\n    min-height: 80px;\n  }\n\n.nav-pills .nav-link {\n\tpadding-top: 30px;\n    padding-bottom: 30px;\n    border-radius: 0;\n}\n\n.logoFormat {\n\theight: 45px;\n\twidth: 45px;\n}\n\n.header-text {\n\tfont-size: 26px;\n\tvertical-align: middle;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/header/header.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-lg navbar-dark bg-navbar-color\">\n  <a class=\"navbar-brand\" [routerLink]=\"['home']\"><img class=\"logoFormat\" src=\"assets/logo.png\"> <span class=\"header-text\">WAYFINDER</span></a>\n  <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\" aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n    <span class=\"navbar-toggler-icon\"></span>\n  </button>\n\n  <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\n    <ul class=\"navbar-nav mr-auto nav-pills\">\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" href=\"/home\"> <span class=\"sr-only\">(current)</span></a>\n      </li>\n    </ul>\n    <ul class=\"navbar-nav nav-pills\">\n      <li class=\"nav-item\"  [routerLinkActive]=\"['active']\">\n        <a class=\"nav-link testin\" [routerLink]=\"['home']\">Home</a>\n      </li>\n      <li class=\"nav-item\"  [routerLinkActive]=\"['active']\">\n        <a class=\"nav-link\" [routerLink]=\"['module-test']\">Modules</a>\n      </li>\n      <li class=\"nav-item\"  [routerLinkActive]=\"['active']\">\n        <a class=\"nav-link\" [routerLink]=\"['tools']\">Tools</a>\n      </li>\n      <li class=\"nav-item\"  [routerLinkActive]=\"['active']\">\n        <a class=\"nav-link\" [routerLink]=\"['login']\">Login</a>\n      </li>\n      <li class=\"nav-item\"  [routerLinkActive]=\"['active']\">\n        <a class=\"nav-link\" [routerLink]=\"['register']\">Register</a>\n      </li>\n    </ul>\t\n  </div>\n</nav>\n"

/***/ }),

/***/ "../../../../../src/app/components/header/header.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeaderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HeaderComponent = /** @class */ (function () {
    function HeaderComponent() {
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-header',
            template: __webpack_require__("../../../../../src/app/components/header/header.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/header/header.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/home/home.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  home works!\n</p>\n"

/***/ }),

/***/ "../../../../../src/app/components/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-home',
            template: __webpack_require__("../../../../../src/app/components/home/home.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/landing/landing.component.css":
/***/ (function(module, exports, __webpack_require__) {

var escape = __webpack_require__("../../../../css-loader/lib/url/escape.js");
exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".testin {\n\tbackground-image: url(" + escape(__webpack_require__("../../../../../src/assets/blacknwhite_stock.jpg")) + ");\n\twidth: 100%;\n\theight: 100vh;\n\tbackground-repeat: no-repeat;\n\tbackground-position: center center;\n\tbackground-size: 100% 100%;\n}\n\n.intro-text {\n\tcolor: white;\n\tfont-size: 58px;\n\tfont-weight: bold;\n}\n\n.intro-description {\n\tcolor: white;\n}\n\n.intro-button {\n\tcolor: white;\n\tbackground-color: #2FCF99;\n\tborder: 3px solid #2FCF99;\n    border-radius: 10px;\n    line-height: 43px;\n    min-height: 50px;\n    margin-left: 20%;\n    margin-right: 20%;\n}\n\n.bottom-banner {\n\tbackground-color: #2FCF99;\n\tcolor: white;\n}\n\n.icon-format {\n\twidth: 50px;\n\theight: 50px;\n  -webkit-filter: invert(100%);\n          filter: invert(100%);\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/landing/landing.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"testin\">\n  <div class=\"container-fluid\">\n    <div class=\"row\">\n      <div class=\"col-sm-1\"></div>\n      <div class=\"col-sm-5 text-left\">\n        <span class=\"intro-text\">YOUR GUIDE TO FINDING INTERNSHIPS</span>\n      </div>\n    </div>\n    <div class=\"row\">\n      <div class=\"col-sm-1\"></div>\n      <div class=\"col-sm-5 text-left\">\n        <span class=\"intro-description\">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sit amet enim sed lacus consectetur cursus eget sed felis. Mauris egestas est eget consequat molestie. Ut at tellus ac lacus mattis efficitur. Nunc metus ex, molestie quis condimentum sit amet, aliquet sit amet nisl. Pellentesque accumsan nisi sit amet ante lacinia, eget venenatis enim cursus. Donec sollicitudin augue eget varius luctus.</span>\n      </div>\n    </div>\n    <div class=\"row mt-3\">\n      <div class=\"col-sm-1\"></div>\n      <div class=\"col-sm-5\">\n        <div class=\"intro-button\">TAKE QUIZ</div>\n      </div>\n    </div>\n    <div class=\"row bottom-banner mt-5\">\n      <div class=\"col-sm-12 col-md-12 col-lg-2\"></div>\n      <div class=\"col-sm-6 col-md-6 col-lg-2 mt-3 mb-3\">\n        <div><img class=\"icon-format\" src=\"../../../assets/user-icon.png\"/></div>\n        <div class=\"medium-text mb-1\">Personalized</div>\n        <div class=\"small-text\">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>\n      </div>\n      <div class=\"col-sm-6 col-md-6 col-lg-2 mt-3 mb-3\">\n        <div><img class=\"icon-format\" src=\"../../../assets/map-marker-icon.png\"/></div>\n        <div class=\"medium-text mb-1\">Clear Map</div>\n        <div class=\"small-text\">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>\n      </div>\n      <div class=\"col-sm-6 col-md-6 col-lg-2 mt-3 mb-3\">\n        <div><img class=\"icon-format\" src=\"../../../assets/time-icon.png\"/></div>\n        <div class=\"medium-text mb-1\">Quick Application</div>\n        <div class=\"small-text\">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>\n      </div>\n      <div class=\"col-sm-6 col-md-6 col-lg-2 mt-3 mb-3\">\n        <div><img class=\"icon-format\" src=\"../../../assets/briefcase.png\"/></div>\n        <div class=\"medium-text mb-1\">Networking Tools</div>\n        <div class=\"small-text\">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>\n      </div>\n      <div class=\"col-sm-12 col-md-12 col-lg-2\"></div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/landing/landing.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LandingComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var LandingComponent = /** @class */ (function () {
    function LandingComponent() {
    }
    LandingComponent.prototype.ngOnInit = function () {
    };
    LandingComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-landing',
            template: __webpack_require__("../../../../../src/app/components/landing/landing.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/landing/landing.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], LandingComponent);
    return LandingComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/module-display/module-display.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/module-display/module-display.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n    Name: {{contact?.name}}\n</p>\n<p>\n    Email: {{contact?.email}}\n</p>\n<p>\n    Number: {{contact?.phone}}\n</p>"

/***/ }),

/***/ "../../../../../src/app/components/module-display/module-display.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ModuleDisplayComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_contact_service__ = __webpack_require__("../../../../../src/app/services/contact.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ModuleDisplayComponent = /** @class */ (function () {
    function ModuleDisplayComponent(contactService) {
        this.contactService = contactService;
    }
    ModuleDisplayComponent.prototype.ngOnInit = function () {
        //this.contact = this.contactService.getContact(0);
        // This stuff could/should go in a event listener, like a button.
        this.contactService.getAllContacts().subscribe(function (response) {
            var res = response.json();
            console.log(res);
            // put something from res in this.contact
        }, function (error) { return console.log(error); });
    };
    ModuleDisplayComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-module-display',
            template: __webpack_require__("../../../../../src/app/components/module-display/module-display.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/module-display/module-display.component.css")],
            providers: [__WEBPACK_IMPORTED_MODULE_1__services_contact_service__["a" /* ContactService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_contact_service__["a" /* ContactService */]])
    ], ModuleDisplayComponent);
    return ModuleDisplayComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/register/register.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/register/register.component.html":
/***/ (function(module, exports) {

module.exports = "<h1>\n  This is the Register page!\n</h1>\n"

/***/ }),

/***/ "../../../../../src/app/components/register/register.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var RegisterComponent = /** @class */ (function () {
    function RegisterComponent() {
    }
    RegisterComponent.prototype.ngOnInit = function () {
    };
    RegisterComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-register',
            template: __webpack_require__("../../../../../src/app/components/register/register.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/register/register.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], RegisterComponent);
    return RegisterComponent;
}());



/***/ }),

/***/ "../../../../../src/app/services/contact.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


// OnInit pull from data server?
// HTTP requests should be handled in a centralized Service meant for that.
// only if you're injecting a service into a service, i.e. we're using Angular's Http service here INSIDE our ContactService
var ContactService = /** @class */ (function () {
    function ContactService(http) {
        this.http = http;
        this.contacts = [];
        /*
        // dummy data for now.
        this.contacts[0] = new Contact("Chase Chase'ums", "asdf@byui.edu", "208-496-3768");
        this.contacts[1] = new Contact("Nate Tastic", "asdf@byui.edu", "208-496-3766");
        this.contacts[2] = new Contact("Kimmy Dean", "asdf@byui.edu", "208-496-3767");
        */
    }
    ContactService.prototype.getAllContacts = function () {
        return this.http.get('http://localhost:3001/'); // <-- get() returns an Observable.
    };
    ContactService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]])
    ], ContactService);
    return ContactService;
}());



/***/ }),

/***/ "../../../../../src/assets/blacknwhite_stock.jpg":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "blacknwhite_stock.b79f8fb9b64e43f1a8b4.jpg";

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map