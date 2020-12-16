(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./package.json":
/*!**********************!*\
  !*** ./package.json ***!
  \**********************/
/*! exports provided: name, version, license, scripts, private, dependencies, devDependencies, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"name\":\"ng-three-template\",\"version\":\"0.0.0\",\"license\":\"MIT\",\"scripts\":{\"ng\":\"ng\",\"start\":\"ng serve\",\"build\":\"ng build\",\"build:prod\":\"ng build --prod\",\"build:both\":\"npm run build && npm run build:prod\",\"test\":\"ng test\",\"lint\":\"ng lint\",\"e2e\":\"ng e2e\",\"postinstall\":\"ngcc\"},\"private\":true,\"dependencies\":{\"@angular/animations\":\"~9.1.0\",\"@angular/common\":\"~9.1.0\",\"@angular/compiler\":\"~9.1.0\",\"@angular/core\":\"~9.1.0\",\"@angular/forms\":\"~9.1.0\",\"@angular/platform-browser\":\"~9.1.0\",\"@angular/platform-browser-dynamic\":\"~9.1.0\",\"@angular/router\":\"~9.1.0\",\"bootstrap\":\"^4.4.1\",\"rxjs\":\"~6.5.5\",\"three\":\"^0.115.0\",\"tslib\":\"^1.11.1\",\"zone.js\":\"~0.10.3\"},\"devDependencies\":{\"@angular-devkit/build-angular\":\"~0.901.0\",\"@angular/cli\":\"~9.1.0\",\"@angular/compiler-cli\":\"~9.1.0\",\"@angular/language-service\":\"~9.1.0\",\"@types/jasmine\":\"~3.5.10\",\"@types/jasminewd2\":\"~2.0.8\",\"@types/node\":\"^12.12.34\",\"@types/three\":\"^0.103.2\",\"@types/webgl2\":\"^0.0.5\",\"codelyzer\":\"^5.2.2\",\"jasmine-core\":\"~3.5.0\",\"jasmine-spec-reporter\":\"~5.0.1\",\"karma\":\"~4.4.1\",\"karma-chrome-launcher\":\"~3.1.0\",\"karma-coverage-istanbul-reporter\":\"~2.1.1\",\"karma-jasmine\":\"~3.1.1\",\"karma-jasmine-html-reporter\":\"~1.5.3\",\"protractor\":\"~5.4.3\",\"ts-node\":\"~8.8.1\",\"tslint\":\"~6.1.0\",\"typescript\":\"~3.8.3\"}}");

/***/ }),

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
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
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ui_ui_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ui/ui.component */ "./src/app/ui/ui.component.ts");
/* harmony import */ var _engine_engine_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./engine/engine.component */ "./src/app/engine/engine.component.ts");




class AppComponent {
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 57, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-ui");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-engine");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Good news, everyone! I've taught the toaster to feel love!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Why, those are the Grunka-Lunkas! They work here in the Slurm factory. Yeah, I do that with my stupidness. I saw you with those two \"ladies of the evening\" at Elzars. Explain that. Why would a robot need to drink?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Now Fry, it's been a few years since medical school, so remind me. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " Disemboweling in your species: fatal or non-fatal?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "em");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " Hey, you add a one and two zeros to that or we walk!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " I usually try to keep my sadness pent up inside where it can fester quietly as a mental illness.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "I suppose I could part with 'one' and still be feared\u2026");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "I'm sorry, guys. I never meant to hurt you. Just to destroy everything you ever believed in. Ugh, it's filthy! Why not create a National Endowment for Strip Clubs while we're at it? Oh sure! Blame the wizards!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "ol");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Stop! Don't shoot fire stick in space canoe! Cause explosive decompression!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "It's okay, Bender. I like cooking too.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Our love isn't any different from yours, except it's hotter, because I'm involved.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Leela, Bender, we're going grave robbing.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Yes, I saw. You were doing well, until everyone died. I usually try to keep my sadness pent up inside where it can fester quietly as a mental illness. I love you, buddy! Who are you, my warranty?!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "This is the worst kind of discrimination: the kind against me!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "I guess because my parents keep telling me to be more ladylike. As though!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Fry! Quit doing the right thing, you jerk!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "Ah, yes! John Quincy Adding Machine. He struck a chord with the voters when he pledged not to go on a killing spree. Maybe I love you so much I love you no matter who you are pretending to be. You mean while I'm sleeping in it?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "Why not indeed! I'll get my kit! Kids have names? Whoa a real live robot; or is that some kind of cheesy New Year's costume? When the lights go out, it's nobody's business what goes on between two consenting adults.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "Yes, if you make it look like an electrical fire. When you do things right, people won't be sure you've done anything at all. Oh God, what have I done? I don't know what you did, Fry, but once again, you screwed up! Now all the planets are gonna start cracking wise about our mamas.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "Alright, let's mafia things up a bit. Joey, burn down the ship. Clamps, burn down the crew. I'm a thing. Yes. You gave me a dollar and some candy. What are you hacking off? Is it my torso?! 'It is!' My precious torso!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "I barely knew Philip, but as a clergyman I have no problem telling his most intimate friends all about him. Hello, little man. I will destroy you! I just told you! You've killed me! What are their names?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "Bender, you risked your life to save me! I suppose I could part with 'one' and still be feared\u2026 Take me to your leader! How much did you make me?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "I was having the most wonderful dream. Except you were there, and you were there, and you were there! And I'm his friend Jesus. And remember, don't do anything that affects anything, unless it turns out you were supposed to, in which case, for the love of God, don't not do it!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "Robot 1-X, save my friends! And Zoidberg! I just want to talk. It has nothing to do with mating. Fry, that doesn't make sense. Does anybody else feel jealous and aroused and worried? Shut up and take my money!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, "For one beautiful night I knew what it was like to be a grandmother. Subjugated, yet honored. You're going to do his laundry? Man, I'm sore all over. I feel like I just went ten rounds with mighty Thor.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, "It's just like the story of the grasshopper and the octopus. All year long, the grasshopper kept burying acorns for winter, while the octopus mooched off his girlfriend and watched TV. But then the winter came, and the grasshopper died, and the octopus ate all his acorns. Also he got a race car. Is any of this getting through to you? Yes, except the Dave Matthews Band doesn't rock.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, "Ask her how her day was. It's just like the story of the grasshopper and the octopus. All year long, the grasshopper kept burying acorns for winter, while the octopus mooched off his girlfriend and watched TV. But then the winter came, and the grasshopper died, and the octopus ate all his acorns. Also he got a race car. Is any of this getting through to you?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_ui_ui_component__WEBPACK_IMPORTED_MODULE_1__["UiComponent"], _engine_engine_component__WEBPACK_IMPORTED_MODULE_2__["EngineComponent"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html'
            }]
    }], null, null); })();


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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _engine_engine_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./engine/engine.component */ "./src/app/engine/engine.component.ts");
/* harmony import */ var _ui_ui_infobar_bottom_ui_infobar_bottom_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ui/ui-infobar-bottom/ui-infobar-bottom.component */ "./src/app/ui/ui-infobar-bottom/ui-infobar-bottom.component.ts");
/* harmony import */ var _ui_ui_infobar_top_ui_infobar_top_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ui/ui-infobar-top/ui-infobar-top.component */ "./src/app/ui/ui-infobar-top/ui-infobar-top.component.ts");
/* harmony import */ var _ui_ui_sidebar_left_ui_sidebar_left_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ui/ui-sidebar-left/ui-sidebar-left.component */ "./src/app/ui/ui-sidebar-left/ui-sidebar-left.component.ts");
/* harmony import */ var _ui_ui_sidebar_right_ui_sidebar_right_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./ui/ui-sidebar-right/ui-sidebar-right.component */ "./src/app/ui/ui-sidebar-right/ui-sidebar-right.component.ts");
/* harmony import */ var _ui_ui_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./ui/ui.component */ "./src/app/ui/ui.component.ts");
/* harmony import */ var _engine_profilepic_profilepic_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./engine/profilepic/profilepic.component */ "./src/app/engine/profilepic/profilepic.component.ts");











class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
        _engine_engine_component__WEBPACK_IMPORTED_MODULE_3__["EngineComponent"],
        _engine_profilepic_profilepic_component__WEBPACK_IMPORTED_MODULE_9__["ProfilepicComponent"],
        _ui_ui_component__WEBPACK_IMPORTED_MODULE_8__["UiComponent"],
        _ui_ui_infobar_bottom_ui_infobar_bottom_component__WEBPACK_IMPORTED_MODULE_4__["UiInfobarBottomComponent"],
        _ui_ui_infobar_top_ui_infobar_top_component__WEBPACK_IMPORTED_MODULE_5__["UiInfobarTopComponent"],
        _ui_ui_sidebar_left_ui_sidebar_left_component__WEBPACK_IMPORTED_MODULE_6__["UiSidebarLeftComponent"],
        _ui_ui_sidebar_right_ui_sidebar_right_component__WEBPACK_IMPORTED_MODULE_7__["UiSidebarRightComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
                    _engine_engine_component__WEBPACK_IMPORTED_MODULE_3__["EngineComponent"],
                    _engine_profilepic_profilepic_component__WEBPACK_IMPORTED_MODULE_9__["ProfilepicComponent"],
                    _ui_ui_component__WEBPACK_IMPORTED_MODULE_8__["UiComponent"],
                    _ui_ui_infobar_bottom_ui_infobar_bottom_component__WEBPACK_IMPORTED_MODULE_4__["UiInfobarBottomComponent"],
                    _ui_ui_infobar_top_ui_infobar_top_component__WEBPACK_IMPORTED_MODULE_5__["UiInfobarTopComponent"],
                    _ui_ui_sidebar_left_ui_sidebar_left_component__WEBPACK_IMPORTED_MODULE_6__["UiSidebarLeftComponent"],
                    _ui_ui_sidebar_right_ui_sidebar_right_component__WEBPACK_IMPORTED_MODULE_7__["UiSidebarRightComponent"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"]
                ],
                providers: [],
                bootstrap: [
                    _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/engine/engine.component.ts":
/*!********************************************!*\
  !*** ./src/app/engine/engine.component.ts ***!
  \********************************************/
/*! exports provided: EngineComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EngineComponent", function() { return EngineComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _engine_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./engine.service */ "./src/app/engine/engine.service.ts");
/* harmony import */ var _profilepic_profilepic_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./profilepic/profilepic.component */ "./src/app/engine/profilepic/profilepic.component.ts");





const _c0 = ["rendererCanvas"];
class EngineComponent {
    constructor(engServ) {
        this.engServ = engServ;
    }
    ngAfterViewInit() {
        this.engServ.createScene(this.rendererCanvas);
        this.rendererCanvas.nativeElement.width = 100;
        this.engServ.animate();
    }
    ngOnInit() {
    }
}
EngineComponent.ɵfac = function EngineComponent_Factory(t) { return new (t || EngineComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_engine_service__WEBPACK_IMPORTED_MODULE_1__["EngineService"])); };
EngineComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: EngineComponent, selectors: [["app-engine"]], viewQuery: function EngineComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstaticViewQuery"](_c0, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.rendererCanvas = _t.first);
    } }, decls: 4, vars: 0, consts: [[1, "engine-wrapper"], ["width", "600", "height", "300", "id", "renderCanvas"], ["rendererCanvas", ""]], template: function EngineComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-profilepic");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "canvas", 1, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_profilepic_profilepic_component__WEBPACK_IMPORTED_MODULE_2__["ProfilepicComponent"]], styles: ["#renderCanvas[_ngcontent-%COMP%]{\r\n  width   : 100%;\r\n  height  : 100%;\r\n  touch-action: none;\r\n  display: block;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZW5naW5lL2VuZ2luZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsY0FBYztFQUNkLGNBQWM7RUFDZCxrQkFBa0I7RUFDbEIsY0FBYztBQUNoQiIsImZpbGUiOiJzcmMvYXBwL2VuZ2luZS9lbmdpbmUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIiNyZW5kZXJDYW52YXN7XHJcbiAgd2lkdGggICA6IDEwMCU7XHJcbiAgaGVpZ2h0ICA6IDEwMCU7XHJcbiAgdG91Y2gtYWN0aW9uOiBub25lO1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG59XHJcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](EngineComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-engine',
                templateUrl: './engine.component.html',
                styleUrls: ['./engine.component.css']
            }]
    }], function () { return [{ type: _engine_service__WEBPACK_IMPORTED_MODULE_1__["EngineService"] }]; }, { rendererCanvas: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['rendererCanvas', { static: true }]
        }] }); })();


/***/ }),

/***/ "./src/app/engine/engine.service.ts":
/*!******************************************!*\
  !*** ./src/app/engine/engine.service.ts ***!
  \******************************************/
/*! exports provided: EngineService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EngineService", function() { return EngineService; });
/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! three */ "./node_modules/three/build/three.module.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var three_examples_jsm_WebGL_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! three/examples/jsm/WebGL.js */ "./node_modules/three/examples/jsm/WebGL.js");




const fontJson = __webpack_require__(/*! ./../../assets/fonts/aldoapache.typeface.json */ "./src/assets/fonts/aldoapache.typeface.json");
class EngineService {
    constructor(ngZone) {
        this.ngZone = ngZone;
        this.frameId = null;
        this.scenes = new Array();
        this.time = 0;
    }
    ngOnDestroy() {
        if (this.frameId != null) {
            cancelAnimationFrame(this.frameId);
        }
    }
    getScene() {
        return this.scene;
    }
    getRenderer() {
        return this.renderer;
    }
    getCanvas() {
        return this.canvas;
    }
    createScene(canvas) {
        if (three_examples_jsm_WebGL_js__WEBPACK_IMPORTED_MODULE_2__["WEBGL"].isWebGL2Available() === false) {
            document.body.appendChild(three_examples_jsm_WebGL_js__WEBPACK_IMPORTED_MODULE_2__["WEBGL"].getWebGL2ErrorMessage());
        }
        console.log(canvas);
        // The first step is to get the reference of the canvas element from our HTML document
        this.canvas = canvas.nativeElement;
        this.renderer = new three__WEBPACK_IMPORTED_MODULE_0__["WebGLRenderer"]({
            canvas: this.canvas,
            alpha: true,
            antialias: true // smooth edges
        });
        this.renderer.setSize(window.innerWidth, window.innerHeight);
        // create the scene
        this.scene = new three__WEBPACK_IMPORTED_MODULE_0__["Scene"]();
        // this.camera = new THREE.OrthographicCamera( window.innerWidth / - 2, window.innerWidth / 2, window.innerHeight / 2, window.innerHeight / - 2, 1, 1000 );
        this.camera = new three__WEBPACK_IMPORTED_MODULE_0__["PerspectiveCamera"](75, window.innerWidth / window.innerHeight, 0.1, 1000);
        this.camera.position.z = 1;
        this.scene.add(this.camera);
        // soft white light
        this.light = new three__WEBPACK_IMPORTED_MODULE_0__["AmbientLight"](0x404040);
        this.light.position.z = 10;
        this.scene.add(this.light);
        const geometry = new three__WEBPACK_IMPORTED_MODULE_0__["BoxGeometry"](1, 1, 1);
        var shader = `
    varying vec2 vUv;
    void main() {
      vUv = uv;
      gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
    }
    `;
        const loader = new three__WEBPACK_IMPORTED_MODULE_0__["TextureLoader"]();
        const texture = loader.load('./../../assets/pics/profilepic.png');
        texture.minFilter = three__WEBPACK_IMPORTED_MODULE_0__["NearestFilter"];
        texture.magFilter = three__WEBPACK_IMPORTED_MODULE_0__["NearestFilter"];
        texture.wrapS = three__WEBPACK_IMPORTED_MODULE_0__["RepeatWrapping"];
        texture.wrapT = three__WEBPACK_IMPORTED_MODULE_0__["RepeatWrapping"];
        const textureCRTAmstrad = loader.load('./../../assets/pics/amstradcutted.png');
        textureCRTAmstrad.minFilter = three__WEBPACK_IMPORTED_MODULE_0__["NearestFilter"];
        textureCRTAmstrad.magFilter = three__WEBPACK_IMPORTED_MODULE_0__["NearestFilter"];
        textureCRTAmstrad.wrapS = three__WEBPACK_IMPORTED_MODULE_0__["RepeatWrapping"];
        textureCRTAmstrad.wrapT = three__WEBPACK_IMPORTED_MODULE_0__["RepeatWrapping"];
        this.uniforms = {
            iTime: { value: 0.1 },
            iResolution: { type: "v3", value: new three__WEBPACK_IMPORTED_MODULE_0__["Vector3"]() },
            U_mouse: { type: "v2", value: new three__WEBPACK_IMPORTED_MODULE_0__["Vector2"]() },
            iChannel0: { value: texture },
        };
        var fs = ` 
    // Overly satisfying by nimitz (twitter: @stormoid)
    // https://www.shadertoy.com/view/Mts3zM
    // License Creative Commons Attribution-NonCommercial-ShareAlike 3.0 Unported License
    // Contact the author for other licensing options
    
    //This might look like a lot of code but the base implementation of the gif itself is ~10loc
    #include <common>
 
    uniform vec3 iResolution;
    uniform float iTime;
    #define time iTime*1.2
    #define pi 3.14159265
    
    #define NUM 20.
    #define PALETTE vec3(.0, 1.4, 2.)+1.5
    
    #define COLORED
    #define MIRROR
    //#define ROTATE
    #define ROT_OFST
    #define TRIANGLE_NOISE
    
    //#define SHOW_TRIANGLE_NOISE_ONLY
    
    mat2 mm2(in float a){float c = cos(a), s = sin(a);return mat2(c,-s,s,c);}
    float tri(in float x){return abs(fract(x)-.5);}
    vec2 tri2(in vec2 p){return vec2(tri(p.x+tri(p.y*2.)),tri(p.y+tri(p.x*2.)));}
    mat2 m2 = mat2( 0.970,  0.242, -0.242,  0.970 );
    
    //Animated triangle noise, cheap and pretty decent looking.
    float triangleNoise(in vec2 p)
    {
        float z=1.5;
        float z2=1.5;
      float rz = 0.;
        vec2 bp = p;
      for (float i=0.; i<=3.; i++ )
      {
            vec2 dg = tri2(bp*2.)*.8;
            dg *= mm2(time*.3);
            p += dg/z2;
    
            bp *= 1.6;
            z2 *= .6;
        z *= 1.8;
        p *= 1.2;
            p*= m2;
            
            rz+= (tri(p.x+tri(p.y)))/z;
      }
      return rz;
    }
    
    void mainImage( out vec4 fragColor, in vec2 fragCoord )
    {
       float aspect = iResolution.x/iResolution.y;
       float w = 50./sqrt(iResolution.x*aspect+iResolution.y);
    
        vec2 p = fragCoord.xy / iResolution.xy*2.-1.;
      p.x *= aspect;
        p*= 1.05;
        vec2 bp = p;
        
        #ifdef ROTATE
        p *= mm2(time*.25);
        #endif
        
        float lp = length(p);
        float id = floor(lp*NUM+.5)/NUM;
        
        #ifdef ROT_OFST
        p *= mm2(id*11.);
        #endif
        
        #ifdef MIRROR
        p.y = abs(p.y); 
        #endif
        
        //polar coords
        vec2 plr = vec2(lp, atan(p.y, p.x));
        
        //Draw concentric circles
        float rz = 1.-pow(abs(sin(plr.x*pi*NUM))*1.25/pow(w,0.25),2.5);
        
        //get the current arc length for a given id
        float enp = plr.y+sin((time+id*5.5))*1.52-1.5;
        rz *= smoothstep(0., 0.05, enp);
        
        //smooth out both sides of the arcs (and clamp the number)
        rz *= smoothstep(0.,.022*w/plr.x, enp)*step(id,1.);
        #ifndef MIRROR
        rz *= smoothstep(-0.01,.02*w/plr.x,pi-plr.y);
        #endif
        
        #ifdef TRIANGLE_NOISE
        rz *= (triangleNoise(p/(w*w))*0.9+0.4);
        vec3 col = (sin(PALETTE+id*5.+time)*0.5+0.5)*rz;
        col += smoothstep(.4,1.,rz)*0.15;
        col *= smoothstep(.2,1.,rz)+1.;
        
        #else
        vec3 col = (sin(PALETTE+id*5.+time)*0.5+0.5)*rz;
        col *= smoothstep(.8,1.15,rz)*.7+.8;
        #endif
        
        #ifndef COLORED
        col = vec3(dot(col,vec3(.7)));
        #endif
        
        #ifdef SHOW_TRIANGLE_NOISE_ONLY
        col = vec3(triangleNoise(bp));
        #endif
        
      fragColor = vec4(col,1.0);
    }
      void main() {
        mainImage(gl_FragColor, gl_FragCoord.xy);
      }
    
    `;
        var fsNoise = `
      // Author @patriciogv - 2015
// http://patriciogonzalezvivo.com

#ifdef GL_ES
precision mediump float;
#endif

uniform vec2 iResolution;
uniform vec2 iMouse;
uniform float iTime;

float random (in vec2 _st) {
    return fract(sin(dot(_st.xy,
                         vec2(12.9898,78.233)))*
        43758.5453123);
}

// Based on Morgan McGuire @morgan3d
// https://www.shadertoy.com/view/4dS3Wd
float noise (in vec2 _st) {
    vec2 i = floor(_st);
    vec2 f = fract(_st);

    // Four corners in 2D of a tile
    float a = random(i);
    float b = random(i + vec2(1.0, 0.0));
    float c = random(i + vec2(0.0, 1.0));
    float d = random(i + vec2(1.0, 1.0));

    vec2 u = f * f * (3.0 - 2.0 * f);

    return mix(a, b, u.x) +
            (c - a)* u.y * (1.0 - u.x) +
            (d - b) * u.x * u.y;
}

#define NUM_OCTAVES 5

float fbm ( in vec2 _st) {
    float v = 0.0;
    float a = 0.5;
    vec2 shift = vec2(100.0);
    // Rotate to reduce axial bias
    mat2 rot = mat2(cos(0.5), sin(0.5),
                    -sin(0.5), cos(0.50));
    for (int i = 0; i < NUM_OCTAVES; ++i) {
        v += a * noise(_st);
        _st = rot * _st * 2.0 + shift;
        a *= 0.5;
    }
    return v;
}

void main() {
    vec2 st = gl_FragCoord.xy/iResolution.xy*3.;
    // st += st * abs(sin(iTime*0.1)*3.0);
    vec3 color = vec3(0.0);

    vec2 q = vec2(0.);
    q.x = fbm( st + 0.00*iTime);
    q.y = fbm( st + vec2(1.0));

    vec2 r = vec2(0.);
    r.x = fbm( st + 1.0*q + vec2(1.7,9.2)+ 0.15*iTime );
    r.y = fbm( st + 1.0*q + vec2(8.3,2.8)+ 0.126*iTime);

    float f = fbm(st+r);

    color = mix(vec3(0.101961,0.619608,0.666667),
                vec3(0.666667,0.666667,0.498039),
                clamp((f*f)*4.0,0.0,1.0));

    color = mix(color,
                vec3(0,0,0.164706),
                clamp(length(q),0.0,1.0));

    color = mix(color,
                vec3(0.666667,1,1),
                clamp(length(r.x),0.0,1.0));

    gl_FragColor = vec4((f*f*f+.6*f*f+.5*f)*color,1.);
}
`;
        this.material = new three__WEBPACK_IMPORTED_MODULE_0__["ShaderMaterial"]({
            uniforms: this.uniforms,
            vertexShader: shader.trim(),
            fragmentShader: fsNoise.trim()
        });
        this.materialBack =
            new three__WEBPACK_IMPORTED_MODULE_0__["ShaderMaterial"]({
                uniforms: this.uniforms,
                vertexShader: shader.trim(),
                fragmentShader: fs.trim()
            });
        const plane = new three__WEBPACK_IMPORTED_MODULE_0__["PlaneBufferGeometry"](10, 10);
        plane.scale(1.5, 1.5, 1);
        const material2 = new three__WEBPACK_IMPORTED_MODULE_0__["MeshBasicMaterial"]({
            color: 0x222222,
        });
        const font = new three__WEBPACK_IMPORTED_MODULE_0__["Font"](fontJson);
        var textGeo = new three__WEBPACK_IMPORTED_MODULE_0__["TextGeometry"]("Fullstack Developer", {
            font: font,
            size: 0.5,
            height: 0.1,
        });
        this.cube = new three__WEBPACK_IMPORTED_MODULE_0__["Mesh"](textGeo, [this.material, material2]);
        // this.cube.scale.set(0.5,0.5,1);
        this.planeBack = new three__WEBPACK_IMPORTED_MODULE_0__["Mesh"](plane, this.materialBack);
        // this.cube = new THREE.Mesh( geometry, this.material );
        // this.scene.add(this.cube);
        /* var x= 100;
         var y= 100;
         var z=100;*/
        this.cube.position.set(-2.5, 0, -2);
        //this.planeBack.position.set(0,0,-2);
        // this.scene.add(this.planeBack);
        this.scene.add(this.cube);
        //var axesHelper = new THREE.AxesHelper( 5 );
        //this.scene.add( axesHelper );
        var planeHelp = new three__WEBPACK_IMPORTED_MODULE_0__["Plane"](new three__WEBPACK_IMPORTED_MODULE_0__["Vector3"](1, 1, 0.2), 3);
        var helper = new three__WEBPACK_IMPORTED_MODULE_0__["PlaneHelper"](planeHelp, 1, 0xffffff);
        //this.scene.add( helper );
        this.addSceneToRender({ name: 'background', scene: this.scene, camera: this.camera });
    }
    animate() {
        // We have to run this outside angular zones,
        // because it could trigger heavy changeDetection cycles.
        this.ngZone.runOutsideAngular(() => {
            if (document.readyState !== 'loading') {
                this.render();
            }
            else {
                window.addEventListener('DOMContentLoaded', () => {
                    this.render();
                });
            }
            window.addEventListener('resize', () => {
                this.resize();
            });
        });
    }
    render() {
        this.frameId = requestAnimationFrame(() => {
            this.render();
        });
        //console.log(this.uniforms.iTime.value);
        this.material.uniforms.iResolution.value.set(this.canvas.width, this.canvas.height, 1);
        this.uniforms.iTime.value += 0.02;
        //console.log('render inside');
        //console.log(this.cube.material);
        // this.cube.rotation.x += 0.01;
        // this.cube.rotation.y += 0.01;
        this.renderAllscenes();
        console.log(window.innerHeight, window.innerWidth);
        //this.renderer.render(this.scene, this.camera);
    }
    addSceneToRender(scene) {
        this.scenes.push(scene);
        console.log(this.scenes);
    }
    renderAllscenes() {
        this.time += 0.1;
        this.renderer.setScissorTest(false);
        this.renderer.clear(true, true);
        this.renderer.setScissorTest(true);
        this.renderer.setSize(1000, 230);
        for (let renderScene of this.scenes) {
            renderScene.camera.updateProjectionMatrix();
            if (renderScene.name === 'background') {
                //console.log(renderScene.camera.position);
                this.renderer.setViewport(0, 0, 800, 300);
                this.renderer.setScissor(0, 0, 800, 300);
                renderScene.camera.lookAt((Math.sin(this.time) * 0.01), 0, 0);
                this.renderer.render(renderScene.scene, renderScene.camera);
            }
            else {
                this.renderer.setScissor(800, 0, 200, 200);
                renderScene.camera.aspect = 1;
                this.renderer.setViewport(800, 0, 200, 200);
                // renderScene.camera.lookAt((Math.sin(this.time)*0.01),0,0);
                this.renderer.render(renderScene.scene, renderScene.camera);
            }
        }
    }
    resize() {
        const canvas = this.renderer.domElement;
        const width = canvas.clientWidth;
        const height = canvas.clientHeight;
        /*this.camera.updateProjectionMatrix();
        
        this.camera.aspect = window.innerWidth / window.innerHeight;
                    this.camera.updateProjectionMatrix();
                    this.renderer.setSize( window.innerWidth, window.innerHeight );
        const needResize = canvas.width !== width || canvas.height !== height;*/
        //if (needResize) {
        console.log("resizing", this.canvas.width);
        // this.renderer.setSize(width, height, false);
        //}
        this.renderer.setSize(this.canvas.width, this.canvas.height);
    }
}
EngineService.ɵfac = function EngineService_Factory(t) { return new (t || EngineService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"])); };
EngineService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: EngineService, factory: EngineService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](EngineService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
        args: [{ providedIn: 'root' }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"] }]; }, null); })();


/***/ }),

/***/ "./src/app/engine/profilepic/profilepic.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/engine/profilepic/profilepic.component.ts ***!
  \***********************************************************/
/*! exports provided: ProfilepicComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfilepicComponent", function() { return ProfilepicComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _profilepic_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./profilepic.service */ "./src/app/engine/profilepic/profilepic.service.ts");




const _c0 = ["rendererCanvas"];
class ProfilepicComponent {
    constructor(profilepicService) {
        this.profilepicService = profilepicService;
    }
    ngOnInit() {
        this.profilepicService.createScene();
        this.profilepicService.animate();
    }
}
ProfilepicComponent.ɵfac = function ProfilepicComponent_Factory(t) { return new (t || ProfilepicComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_profilepic_service__WEBPACK_IMPORTED_MODULE_1__["ProfilepicService"])); };
ProfilepicComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ProfilepicComponent, selectors: [["app-profilepic"]], viewQuery: function ProfilepicComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstaticViewQuery"](_c0, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.rendererCanvas = _t.first);
    } }, decls: 0, vars: 0, template: function ProfilepicComponent_Template(rf, ctx) { }, encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProfilepicComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-profilepic',
                templateUrl: './profilepic.component.html'
            }]
    }], function () { return [{ type: _profilepic_service__WEBPACK_IMPORTED_MODULE_1__["ProfilepicService"] }]; }, { rendererCanvas: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['rendererCanvas', { static: true }]
        }] }); })();


/***/ }),

/***/ "./src/app/engine/profilepic/profilepic.service.ts":
/*!*********************************************************!*\
  !*** ./src/app/engine/profilepic/profilepic.service.ts ***!
  \*********************************************************/
/*! exports provided: ProfilepicService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfilepicService", function() { return ProfilepicService; });
/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! three */ "./node_modules/three/build/three.module.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _engine_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../engine.service */ "./src/app/engine/engine.service.ts");





class ProfilepicService {
    constructor(ngZone, engineService) {
        this.ngZone = ngZone;
        this.engineService = engineService;
        this.frameId = null;
    }
    ngOnDestroy() {
        if (this.frameId != null) {
            cancelAnimationFrame(this.frameId);
        }
    }
    createScene() {
        this.canvas = this.engineService.getCanvas();
        this.scene = new three__WEBPACK_IMPORTED_MODULE_0__["Scene"]();
        this.camera = // new THREE.PerspectiveCamera(50,1,0.1,1000);
            this.camera = new three__WEBPACK_IMPORTED_MODULE_0__["PerspectiveCamera"](75, 1, 0.1, 1000);
        this.camera.position.z = 1;
        this.scene.add(this.camera);
        // const texture = loader.load('https://threejsfundamentals.org/threejs/resources/images/bayer.png');
        //const cube = new THREE.Mesh(cubeGeo,this.material);
        // this.planeBack.position.set(0,-12,-2 );
        this.camera.position.set(0, 0, 2);
        this.camera.lookAt(0, 0, 0);
        this.scene.add(this.createAmstradPic());
        this.scene.add(this.createProfilePic());
        this.engineService.addSceneToRender({ name: 'profile_pic', scene: this.scene, camera: this.camera });
    }
    createAmstradPic() {
        const loader = new three__WEBPACK_IMPORTED_MODULE_0__["TextureLoader"]();
        const textureAmstradCRT = loader.load('./../../assets/pics/amstradcutted.png');
        textureAmstradCRT.minFilter = three__WEBPACK_IMPORTED_MODULE_0__["LinearMipMapLinearFilter"];
        textureAmstradCRT.magFilter = three__WEBPACK_IMPORTED_MODULE_0__["LinearMipMapLinearFilter"];
        textureAmstradCRT.wrapS = three__WEBPACK_IMPORTED_MODULE_0__["RepeatWrapping"];
        textureAmstradCRT.wrapT = three__WEBPACK_IMPORTED_MODULE_0__["RepeatWrapping"];
        var shader = `
    varying vec2 vUv;
    void main() {
      vUv = uv;
      gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
    }
    `;
        var uniforms = {
            iTime: { value: 0.1 },
            iResolution: { type: "v3", value: new three__WEBPACK_IMPORTED_MODULE_0__["Vector3"](1, 1, 1) },
            U_mouse: { type: "v2", value: new three__WEBPACK_IMPORTED_MODULE_0__["Vector2"]() },
            iChannel0: { value: textureAmstradCRT },
        };
        var fs = `
    uniform sampler2D iChannel0;
    varying vec2 vUv;

    void main()
    {
        gl_FragColor = texture2D(iChannel0, vUv); 
    }
    `;
        var material = new three__WEBPACK_IMPORTED_MODULE_0__["ShaderMaterial"]({
            uniforms: uniforms,
            vertexShader: shader.trim(),
            fragmentShader: fs.trim(),
            transparent: true
        });
        const plane2 = new three__WEBPACK_IMPORTED_MODULE_0__["PlaneBufferGeometry"](3, 3);
        var planeBack = new three__WEBPACK_IMPORTED_MODULE_0__["Mesh"](plane2, material);
        return planeBack;
    }
    createProfilePic() {
        const loader = new three__WEBPACK_IMPORTED_MODULE_0__["TextureLoader"]();
        const texture = loader.load('./../../assets/pics/profilepic.jpg');
        texture.minFilter = three__WEBPACK_IMPORTED_MODULE_0__["LinearMipMapLinearFilter"];
        texture.magFilter = three__WEBPACK_IMPORTED_MODULE_0__["LinearMipMapLinearFilter"];
        texture.wrapS = three__WEBPACK_IMPORTED_MODULE_0__["RepeatWrapping"];
        texture.wrapT = three__WEBPACK_IMPORTED_MODULE_0__["RepeatWrapping"];
        this.uniforms = {
            iTime: { value: 0.1 },
            iResolution: { type: "v3", value: new three__WEBPACK_IMPORTED_MODULE_0__["Vector3"](1, 1, 1) },
            U_mouse: { type: "v2", value: new three__WEBPACK_IMPORTED_MODULE_0__["Vector2"]() },
            iChannel0: { value: texture },
        };
        var fs = ` 
    uniform sampler2D iChannel0;
    uniform vec3 iResolution;
    varying vec2 vUv;
    uniform float iTime;
    //
    vec3 scanline(vec2 coord, vec3 screen)
    {
      screen.rgb -= sin(
        (coord.y + (iTime*29.0))
        ) * 0.02;
      return screen;
    }
    
    vec2 crt(vec2 coord, float bend)
    {
      // put in symmetrical coords
      coord = (coord - 0.5) * 2.0;
    
      coord *= 1.1;	
    
      // deform coords
      coord.x *= 1.0 + pow((abs(coord.y) / bend), 2.0);
      coord.y *= 1.0 + pow((abs(coord.x) / bend), 2.0);
    
      // transform back to 0.0 - 1.0 space
      coord  = (coord / 2.0) + 0.5;
    
      return coord;
    }
    
    vec3 sampleSplit(sampler2D tex, vec2 coord)
    {
      vec3 frag;
     
      frag.r = texture2D(tex, vec2(coord.x - 0.01 * sin(iTime), coord.y)).r;
      frag.g = texture2D(tex, vec2(coord.x , coord.y)).g;
      frag.b = texture2D(tex, vec2(coord.x + 0.01 * sin(iTime), coord.y)).b;
   
      return frag;
    }
    float scanlines (vec2 uv){
      return sin(uv.y*200.+iTime*7.0);
    }
    void mainImage( out vec4 fragColor, in vec2 fragCoord )
    {
      vec2 uv = fragCoord.xy / iResolution.xy;
      // uv.y = 1.0 - uv.y; // flip tex
      vec2 crtCoords = crt(uv, 3.2);
      //vec2 crtCoords = uv;
    
      // shadertoy has tiling textures. wouldn't be needed
      // if you set up your tex params properly
      if (crtCoords.x < 0.0 || crtCoords.x > 1.0 || crtCoords.y < 0.0 || crtCoords.y > 1.0)
        discard;
    
      // Split the color channels
      fragColor.rgb = sampleSplit(iChannel0, crtCoords);
    
      // HACK: this bend produces a shitty moire pattern.
      // Up the bend for the scanline
      // vec2 screenSpace = uv * crtCoords;
      // fragColor.rgb = scanline(screenSpace, fragColor.rgb);
      fragColor.rgb -= vec3(scanlines(vUv))*0.02;
    }
   
    void main() {
      mainImage(gl_FragColor, vUv);
    }
    
    `;
        var shader = `
    varying vec2 vUv;
    void main() {
      vUv = uv;
      gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
    }
    `;
        this.material = new three__WEBPACK_IMPORTED_MODULE_0__["ShaderMaterial"]({
            uniforms: this.uniforms,
            vertexShader: shader.trim(),
            fragmentShader: fs.trim()
        });
        const plane = new three__WEBPACK_IMPORTED_MODULE_0__["PlaneBufferGeometry"](1.8, 1.8);
        plane.translate(-0.05, 0.48, -0.05);
        this.planeBack = new three__WEBPACK_IMPORTED_MODULE_0__["Mesh"](plane, this.material);
        return this.planeBack;
    }
    animate() {
        // We have to run this outside angular zones,
        // because it could trigger heavy changeDetection cycles.
        this.ngZone.runOutsideAngular(() => {
            if (document.readyState !== 'loading') {
                this.render();
            }
            else {
                window.addEventListener('DOMContentLoaded', () => {
                    this.render();
                });
            }
        });
    }
    render() {
        this.frameId = requestAnimationFrame(() => {
            this.render();
        });
        //this.engineService.getRenderer().setSize(100,100);
        //  this.engineService.getRenderer().render(this.scene, this.camera);
        //this.engineService.getRenderer().setViewport(0,0,100,100)
        //this.material.uniforms.iResolution.value.set(this.canvas.width, this.canvas.height, 1);
        this.uniforms.iTime.value += 0.05;
        // if (this.uniforms.iTime.value>5) this.uniforms.iTime.value=0;
    }
}
ProfilepicService.ɵfac = function ProfilepicService_Factory(t) { return new (t || ProfilepicService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_engine_service__WEBPACK_IMPORTED_MODULE_2__["EngineService"])); };
ProfilepicService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: ProfilepicService, factory: ProfilepicService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ProfilepicService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
        args: [{ providedIn: 'root' }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"] }, { type: _engine_service__WEBPACK_IMPORTED_MODULE_2__["EngineService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/ui/ui-infobar-bottom/ui-infobar-bottom.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/ui/ui-infobar-bottom/ui-infobar-bottom.component.ts ***!
  \*********************************************************************/
/*! exports provided: UiInfobarBottomComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UiInfobarBottomComponent", function() { return UiInfobarBottomComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


class UiInfobarBottomComponent {
    constructor() { }
    ngOnInit() {
    }
}
UiInfobarBottomComponent.ɵfac = function UiInfobarBottomComponent_Factory(t) { return new (t || UiInfobarBottomComponent)(); };
UiInfobarBottomComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: UiInfobarBottomComponent, selectors: [["app-ui-infobar-bottom"]], decls: 1, vars: 0, template: function UiInfobarBottomComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "p");
    } }, encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UiInfobarBottomComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-ui-infobar-bottom',
                templateUrl: './ui-infobar-bottom.component.html'
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/ui/ui-infobar-top/ui-infobar-top.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/ui/ui-infobar-top/ui-infobar-top.component.ts ***!
  \***************************************************************/
/*! exports provided: UiInfobarTopComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UiInfobarTopComponent", function() { return UiInfobarTopComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


class UiInfobarTopComponent {
    constructor() { }
    ngOnInit() {
    }
}
UiInfobarTopComponent.ɵfac = function UiInfobarTopComponent_Factory(t) { return new (t || UiInfobarTopComponent)(); };
UiInfobarTopComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: UiInfobarTopComponent, selectors: [["app-ui-infobar-top"]], decls: 1, vars: 0, template: function UiInfobarTopComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "p");
    } }, encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UiInfobarTopComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-ui-infobar-top',
                templateUrl: './ui-infobar-top.component.html'
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/ui/ui-sidebar-left/ui-sidebar-left.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/ui/ui-sidebar-left/ui-sidebar-left.component.ts ***!
  \*****************************************************************/
/*! exports provided: UiSidebarLeftComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UiSidebarLeftComponent", function() { return UiSidebarLeftComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


class UiSidebarLeftComponent {
    constructor() { }
    ngOnInit() {
    }
}
UiSidebarLeftComponent.ɵfac = function UiSidebarLeftComponent_Factory(t) { return new (t || UiSidebarLeftComponent)(); };
UiSidebarLeftComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: UiSidebarLeftComponent, selectors: [["app-ui-sidebar-left"]], decls: 1, vars: 0, template: function UiSidebarLeftComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "p");
    } }, encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UiSidebarLeftComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-ui-sidebar-left',
                templateUrl: './ui-sidebar-left.component.html'
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/ui/ui-sidebar-right/ui-sidebar-right.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/ui/ui-sidebar-right/ui-sidebar-right.component.ts ***!
  \*******************************************************************/
/*! exports provided: UiSidebarRightComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UiSidebarRightComponent", function() { return UiSidebarRightComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


class UiSidebarRightComponent {
    constructor() { }
    ngOnInit() {
    }
}
UiSidebarRightComponent.ɵfac = function UiSidebarRightComponent_Factory(t) { return new (t || UiSidebarRightComponent)(); };
UiSidebarRightComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: UiSidebarRightComponent, selectors: [["app-ui-sidebar-right"]], decls: 0, vars: 0, template: function UiSidebarRightComponent_Template(rf, ctx) { }, encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UiSidebarRightComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-ui-sidebar-right',
                templateUrl: './ui-sidebar-right.component.html'
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/ui/ui.component.ts":
/*!************************************!*\
  !*** ./src/app/ui/ui.component.ts ***!
  \************************************/
/*! exports provided: UiComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UiComponent", function() { return UiComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ui_infobar_top_ui_infobar_top_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ui-infobar-top/ui-infobar-top.component */ "./src/app/ui/ui-infobar-top/ui-infobar-top.component.ts");
/* harmony import */ var _ui_sidebar_left_ui_sidebar_left_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ui-sidebar-left/ui-sidebar-left.component */ "./src/app/ui/ui-sidebar-left/ui-sidebar-left.component.ts");
/* harmony import */ var _ui_sidebar_right_ui_sidebar_right_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ui-sidebar-right/ui-sidebar-right.component */ "./src/app/ui/ui-sidebar-right/ui-sidebar-right.component.ts");
/* harmony import */ var _ui_infobar_bottom_ui_infobar_bottom_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ui-infobar-bottom/ui-infobar-bottom.component */ "./src/app/ui/ui-infobar-bottom/ui-infobar-bottom.component.ts");






class UiComponent {
    constructor() { }
    ngOnInit() {
    }
}
UiComponent.ɵfac = function UiComponent_Factory(t) { return new (t || UiComponent)(); };
UiComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: UiComponent, selectors: [["app-ui"]], decls: 5, vars: 0, consts: [[1, "ui-wrapper"]], template: function UiComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-ui-infobar-top");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-ui-sidebar-left");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "app-ui-sidebar-right");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "app-ui-infobar-bottom");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_ui_infobar_top_ui_infobar_top_component__WEBPACK_IMPORTED_MODULE_1__["UiInfobarTopComponent"], _ui_sidebar_left_ui_sidebar_left_component__WEBPACK_IMPORTED_MODULE_2__["UiSidebarLeftComponent"], _ui_sidebar_right_ui_sidebar_right_component__WEBPACK_IMPORTED_MODULE_3__["UiSidebarRightComponent"], _ui_infobar_bottom_ui_infobar_bottom_component__WEBPACK_IMPORTED_MODULE_4__["UiInfobarBottomComponent"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UiComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-ui',
                templateUrl: './ui.component.html'
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/assets/fonts/aldoapache.typeface.json":
/*!***************************************************!*\
  !*** ./src/assets/fonts/aldoapache.typeface.json ***!
  \***************************************************/
/*! exports provided: glyphs, familyName, ascender, descender, underlinePosition, underlineThickness, boundingBox, resolution, original_font_information, cssFontWeight, cssFontStyle, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"glyphs\":{\"0\":{\"ha\":654,\"x_min\":34,\"x_max\":615,\"o\":\"m 615 135 l 469 0 l 34 0 l 34 846 l 180 981 l 615 981 l 615 135 m 240 794 l 240 186 l 410 186 l 410 794 l 240 794 z \"},\"1\":{\"ha\":444,\"x_min\":37,\"x_max\":396,\"o\":\"m 64 720 l 37 845 l 191 980 l 191 981 l 396 981 l 396 0 l 191 0 l 191 720 l 64 720 z \"},\"2\":{\"ha\":627,\"x_min\":34,\"x_max\":581,\"o\":\"m 581 0 l 34 0 l 34 334 l 376 644 l 376 794 l 240 794 l 240 689 l 44 689 l 44 845 l 180 981 l 581 981 l 581 568 l 240 264 l 240 186 l 581 186 l 581 0 z \"},\"3\":{\"ha\":662,\"x_min\":34,\"x_max\":615,\"o\":\"m 615 497 l 615 136 l 479 0 l 34 0 l 34 315 l 234 315 l 234 186 l 410 186 l 410 406 l 319 406 l 319 593 l 410 593 l 410 796 l 234 796 l 234 675 l 34 675 l 34 846 l 180 981 l 599 981 l 599 593 l 488 497 l 615 497 z \"},\"4\":{\"ha\":714,\"x_min\":39,\"x_max\":675,\"o\":\"m 389 0 l 389 185 l 154 185 l 39 367 l 370 981 l 451 981 l 587 845 l 587 366 l 675 366 l 675 195 l 587 195 l 587 0 l 389 0 m 233 356 l 389 356 l 389 683 l 233 356 z \"},\"5\":{\"ha\":627,\"x_min\":34,\"x_max\":581,\"o\":\"m 253 612 l 435 612 l 581 476 l 581 0 l 180 0 l 34 135 l 34 298 l 234 298 l 234 187 l 376 187 l 376 424 l 51 424 l 51 981 l 554 981 l 554 794 l 253 794 l 253 612 z \"},\"6\":{\"ha\":621,\"x_min\":34,\"x_max\":581,\"o\":\"m 381 689 l 381 794 l 241 794 l 241 587 l 581 587 l 581 135 l 435 0 l 34 0 l 34 846 l 180 981 l 581 981 l 581 689 l 381 689 m 241 186 l 375 186 l 375 399 l 241 399 l 241 186 z \"},\"7\":{\"ha\":642,\"x_min\":34,\"x_max\":601,\"o\":\"m 214 794 l 214 689 l 34 689 l 34 981 l 460 981 l 601 823 l 308 0 l 97 0 l 391 794 l 214 794 z \"},\"8\":{\"ha\":648,\"x_min\":34,\"x_max\":601,\"o\":\"m 404 582 l 404 794 l 235 794 l 235 582 l 404 582 m 235 186 l 404 186 l 404 406 l 235 406 l 235 186 m 50 501 l 50 845 l 186 981 l 585 981 l 585 607 l 468 501 l 601 501 l 601 136 l 465 0 l 34 0 l 34 401 l 168 501 l 50 501 z \"},\"9\":{\"ha\":615,\"x_min\":34,\"x_max\":583,\"o\":\"m 34 845 l 193 981 l 583 981 l 583 136 l 448 0 l 34 0 l 34 305 l 234 305 l 234 186 l 376 186 l 376 400 l 34 400 l 34 845 m 240 589 l 376 589 l 376 794 l 240 794 l 240 589 z \"},\"\\\"\":{\"ha\":491,\"x_min\":34,\"x_max\":463,\"o\":\"m 34 686 l 34 1082 l 208 1082 l 208 686 l 34 686 m 289 686 l 289 1082 l 463 1082 l 463 686 l 289 686 z \"},\"#\":{\"ha\":938,\"x_min\":31,\"x_max\":916,\"o\":\"m 727 705 l 916 705 l 899 571 l 713 571 l 695 410 l 888 410 l 873 277 l 680 277 l 648 0 l 502 0 l 532 277 l 370 277 l 338 0 l 192 0 l 222 277 l 31 277 l 49 410 l 237 410 l 256 571 l 56 571 l 73 705 l 271 705 l 302 981 l 449 981 l 419 705 l 580 705 l 611 981 l 758 981 l 727 705 m 549 408 l 568 571 l 401 571 l 382 408 l 549 408 z \"},\"$\":{\"ha\":605,\"x_min\":34,\"x_max\":573,\"o\":\"m 227 1083 l 389 1083 l 389 981 l 567 981 l 567 689 l 380 689 l 380 793 l 246 793 l 246 665 l 573 420 l 573 0 l 381 0 l 381 -102 l 218 -102 l 218 0 l 34 0 l 34 305 l 239 305 l 239 186 l 367 186 l 367 342 l 41 588 l 41 981 l 227 981 l 227 1083 z \"},\"%\":{\"ha\":974,\"x_min\":34,\"x_max\":909,\"o\":\"m 909 127 l 805 0 l 539 0 l 539 365 l 636 492 l 909 492 l 909 127 m 404 616 l 307 489 l 34 489 l 34 854 l 138 981 l 404 981 l 404 616 m 90 52 l 782 987 l 861 932 l 161 -7 l 90 52 m 677 125 l 771 125 l 771 367 l 677 367 l 677 125 m 173 614 l 266 614 l 266 856 l 173 856 l 173 614 z \"},\"'\":{\"ha\":239,\"x_min\":34,\"x_max\":208,\"o\":\"m 34 686 l 34 1082 l 208 1082 l 208 686 l 34 686 z \"},\"(\":{\"ha\":390,\"x_min\":34,\"x_max\":349,\"o\":\"m 193 84 l 349 84 l 349 -102 l 170 -102 l 34 39 l 34 945 l 170 1082 l 349 1082 l 349 897 l 193 897 l 193 84 z \"},\")\":{\"ha\":394,\"x_min\":34,\"x_max\":349,\"o\":\"m 191 897 l 34 897 l 34 1082 l 214 1082 l 349 945 l 349 39 l 214 -102 l 34 -102 l 34 84 l 191 84 l 191 897 z \"},\"*\":{\"ha\":627,\"x_min\":43,\"x_max\":582,\"o\":\"m 538 892 l 582 749 l 416 705 l 530 564 l 406 473 l 317 627 l 218 473 l 95 564 l 212 705 l 43 749 l 85 892 l 245 825 l 235 1002 l 388 1002 l 375 825 l 538 892 z \"},\",\":{\"ha\":300,\"x_min\":42,\"x_max\":250,\"o\":\"m 42 0 l 42 220 l 250 220 l 250 0 l 134 -177 l 46 -117 l 122 0 l 42 0 z \"},\"-\":{\"ha\":372,\"x_min\":34,\"x_max\":325,\"o\":\"m 34 414 l 34 556 l 325 556 l 325 414 l 34 414 z \"},\".\":{\"ha\":282,\"x_min\":34,\"x_max\":241,\"o\":\"m 34 0 l 34 220 l 241 220 l 241 0 l 34 0 z \"},\"/\":{\"ha\":398,\"x_min\":40,\"x_max\":351,\"o\":\"m 147 -102 l 40 -102 l 243 1082 l 351 1082 l 147 -102 z \"},\":\":{\"ha\":287,\"x_min\":34,\"x_max\":241,\"o\":\"m 34 0 l 34 220 l 241 220 l 241 0 l 34 0 m 34 621 l 34 842 l 241 842 l 241 621 l 34 621 z \"},\";\":{\"ha\":327,\"x_min\":43,\"x_max\":251,\"o\":\"m 43 0 l 43 220 l 251 220 l 251 0 l 135 -177 l 47 -117 l 124 0 l 43 0 m 43 621 l 43 842 l 251 842 l 251 621 l 43 621 z \"},\"<\":{\"ha\":765,\"x_min\":34,\"x_max\":697,\"o\":\"m 697 128 l 697 -34 l 34 360 l 34 495 l 697 887 l 697 725 l 185 427 l 697 128 z \"},\"=\":{\"ha\":736,\"x_min\":34,\"x_max\":684,\"o\":\"m 34 402 l 684 402 l 684 267 l 34 267 l 34 402 m 34 694 l 684 694 l 684 559 l 34 559 l 34 694 z \"},\">\":{\"ha\":745,\"x_min\":34,\"x_max\":697,\"o\":\"m 34 725 l 34 887 l 697 495 l 697 360 l 34 -34 l 34 128 l 546 427 l 34 725 z \"},\"?\":{\"ha\":606,\"x_min\":34,\"x_max\":559,\"o\":\"m 233 689 l 34 689 l 34 981 l 413 981 l 559 846 l 559 570 l 393 404 l 393 282 l 208 282 l 208 459 l 357 614 l 357 800 l 233 800 l 233 689 m 201 0 l 201 191 l 400 191 l 400 0 l 201 0 z \"},\"@\":{\"ha\":960,\"x_min\":34,\"x_max\":897,\"o\":\"m 34 0 l 34 845 l 170 981 l 897 981 l 897 136 l 762 0 l 324 0 l 324 571 l 458 707 l 705 707 l 705 804 l 226 804 l 226 0 l 34 0 m 530 520 l 530 186 l 705 186 l 705 520 l 530 520 z \"},\"B\":{\"ha\":682,\"x_min\":34,\"x_max\":629,\"o\":\"m 629 408 l 629 0 l 170 0 l 34 136 l 34 981 l 454 981 l 593 851 l 593 581 l 497 504 l 629 408 m 423 186 l 423 408 l 239 408 l 239 186 l 423 186 m 390 591 l 390 794 l 239 794 l 239 591 l 390 591 z \"},\"C\":{\"ha\":660,\"x_min\":34,\"x_max\":612,\"o\":\"m 406 186 l 406 305 l 612 305 l 612 136 l 476 0 l 34 0 l 34 846 l 180 981 l 612 981 l 612 610 l 406 610 l 406 794 l 240 794 l 240 186 l 406 186 z \"},\"D\":{\"ha\":662,\"x_min\":34,\"x_max\":614,\"o\":\"m 34 981 l 456 981 l 614 825 l 614 136 l 476 0 l 34 0 l 34 981 m 408 186 l 408 794 l 239 794 l 239 186 l 408 186 z \"},\"E\":{\"ha\":558,\"x_min\":34,\"x_max\":517,\"o\":\"m 34 981 l 510 981 l 510 794 l 237 794 l 237 605 l 496 605 l 496 422 l 240 422 l 240 186 l 517 186 l 517 0 l 34 0 l 34 981 z \"},\"F\":{\"ha\":554,\"x_min\":34,\"x_max\":503,\"o\":\"m 239 422 l 239 0 l 34 0 l 34 845 l 170 981 l 503 981 l 503 794 l 239 794 l 239 605 l 482 605 l 482 422 l 239 422 z \"},\"G\":{\"ha\":680,\"x_min\":34,\"x_max\":620,\"o\":\"m 416 186 l 416 337 l 333 337 l 333 511 l 620 511 l 620 0 l 34 0 l 34 981 l 586 981 l 586 794 l 240 794 l 240 186 l 416 186 z \"},\"H\":{\"ha\":675,\"x_min\":34,\"x_max\":621,\"o\":\"m 239 578 l 416 578 l 416 981 l 621 981 l 621 0 l 416 0 l 416 392 l 239 392 l 239 0 l 34 0 l 34 981 l 239 981 l 239 578 z \"},\"I\":{\"ha\":429,\"x_min\":34,\"x_max\":375,\"o\":\"m 375 186 l 375 0 l 34 0 l 34 186 l 102 186 l 102 795 l 34 795 l 34 981 l 375 981 l 375 795 l 307 795 l 307 186 l 375 186 z \"},\"J\":{\"ha\":617,\"x_min\":34,\"x_max\":559,\"o\":\"m 34 305 l 239 305 l 239 186 l 353 186 l 353 774 l 130 774 l 130 981 l 559 981 l 559 135 l 414 0 l 34 0 l 34 305 z \"},\"K\":{\"ha\":714,\"x_min\":34,\"x_max\":652,\"o\":\"m 652 543 l 652 0 l 446 0 l 446 358 l 239 358 l 239 0 l 34 0 l 34 981 l 239 981 l 239 543 l 253 543 l 446 981 l 650 981 l 463 543 l 652 543 z \"},\"L\":{\"ha\":581,\"x_min\":34,\"x_max\":527,\"o\":\"m 34 0 l 34 981 l 239 981 l 239 186 l 527 186 l 527 0 l 34 0 z \"},\"M\":{\"ha\":847,\"x_min\":34,\"x_max\":780,\"o\":\"m 543 981 l 780 981 l 780 0 l 590 0 l 590 610 l 437 0 l 376 0 l 224 610 l 224 0 l 34 0 l 34 981 l 271 981 l 407 492 l 543 981 z \"},\"N\":{\"ha\":693,\"x_min\":34,\"x_max\":631,\"o\":\"m 437 418 l 437 981 l 631 981 l 631 0 l 427 0 l 227 563 l 227 0 l 34 0 l 34 981 l 237 981 l 437 418 z \"},\"O\":{\"ha\":682,\"x_min\":34,\"x_max\":626,\"o\":\"m 34 981 l 626 981 l 626 0 l 34 0 l 34 981 m 240 186 l 420 186 l 420 794 l 240 794 l 240 186 z \"},\"P\":{\"ha\":656,\"x_min\":34,\"x_max\":603,\"o\":\"m 239 0 l 34 0 l 34 842 l 182 981 l 603 981 l 603 249 l 239 249 l 239 0 m 397 437 l 397 794 l 239 794 l 239 437 l 397 437 z \"},\"Q\":{\"ha\":682,\"x_min\":34,\"x_max\":629,\"o\":\"m 615 -170 l 412 0 l 34 0 l 34 845 l 170 981 l 629 981 l 629 -170 l 615 -170 m 240 794 l 240 186 l 423 186 l 423 794 l 240 794 z \"},\"R\":{\"ha\":664,\"x_min\":34,\"x_max\":622,\"o\":\"m 416 0 l 294 355 l 239 355 l 239 0 l 34 0 l 34 842 l 183 981 l 603 981 l 603 357 l 492 357 l 622 0 l 416 0 m 397 538 l 397 794 l 239 794 l 239 538 l 397 538 z \"},\"S\":{\"ha\":628,\"x_min\":34,\"x_max\":573,\"o\":\"m 573 0 l 34 0 l 34 305 l 239 305 l 239 186 l 367 186 l 367 342 l 41 588 l 41 981 l 567 981 l 567 689 l 380 689 l 380 793 l 246 793 l 246 665 l 573 420 l 573 0 z \"},\"T\":{\"ha\":667,\"x_min\":34,\"x_max\":618,\"o\":\"m 618 794 l 433 794 l 433 0 l 226 0 l 226 794 l 34 794 l 34 981 l 618 981 l 618 794 z \"},\"U\":{\"ha\":671,\"x_min\":34,\"x_max\":614,\"o\":\"m 614 0 l 34 0 l 34 981 l 239 981 l 239 186 l 408 186 l 408 981 l 614 981 l 614 0 z \"},\"V\":{\"ha\":675,\"x_min\":39,\"x_max\":627,\"o\":\"m 416 981 l 627 981 l 497 0 l 172 0 l 39 981 l 253 981 l 334 227 l 416 981 z \"},\"W\":{\"ha\":1025,\"x_min\":40,\"x_max\":969,\"o\":\"m 396 0 l 209 0 l 40 981 l 240 981 l 328 396 l 433 981 l 576 981 l 681 396 l 769 981 l 969 981 l 800 0 l 613 0 l 505 608 l 396 0 z \"},\"X\":{\"ha\":743,\"x_min\":47,\"x_max\":704,\"o\":\"m 269 0 l 47 0 l 227 515 l 79 981 l 290 981 l 376 691 l 463 981 l 674 981 l 525 515 l 704 0 l 482 0 l 376 304 l 269 0 z \"},\"Y\":{\"ha\":714,\"x_min\":47,\"x_max\":671,\"o\":\"m 458 981 l 671 981 l 340 0 l 126 0 l 253 375 l 47 981 l 260 981 l 355 677 l 458 981 z \"},\"Z\":{\"ha\":624,\"x_min\":34,\"x_max\":569,\"o\":\"m 34 0 l 34 163 l 330 794 l 54 794 l 54 981 l 508 981 l 569 825 l 276 186 l 559 186 l 559 0 l 34 0 z \"},\"[\":{\"ha\":350,\"x_min\":34,\"x_max\":295,\"o\":\"m 193 84 l 295 84 l 295 -102 l 34 -102 l 34 1082 l 295 1082 l 295 897 l 193 897 l 193 84 z \"},\"\\\\\":{\"ha\":390,\"x_min\":40,\"x_max\":351,\"o\":\"m 148 1082 l 351 -102 l 244 -102 l 40 1082 l 148 1082 z \"},\"]\":{\"ha\":339,\"x_min\":34,\"x_max\":295,\"o\":\"m 136 897 l 34 897 l 34 1082 l 295 1082 l 295 -102 l 34 -102 l 34 84 l 136 84 l 136 897 z \"},\"_\":{\"ha\":743,\"x_min\":34,\"x_max\":701,\"o\":\"m 34 -92 l 701 -92 l 701 -230 l 34 -230 l 34 -92 z \"},\"`\":{\"ha\":370,\"x_min\":65,\"x_max\":323,\"o\":\"m 235 1244 l 323 1051 l 199 1051 l 65 1244 l 235 1244 z \"},\"i\":{\"ha\":281,\"x_min\":34,\"x_max\":239,\"o\":\"m 239 680 l 239 0 l 34 0 l 34 680 l 239 680 m 239 981 l 239 739 l 34 739 l 34 981 l 239 981 z \"},\"j\":{\"ha\":613,\"x_min\":34,\"x_max\":559,\"o\":\"m 34 305 l 239 305 l 239 186 l 353 186 l 353 692 l 559 692 l 559 135 l 414 0 l 34 0 l 34 305 m 559 981 l 559 746 l 353 746 l 353 981 l 559 981 z \"},\"A\":{\"ha\":678,\"x_min\":34,\"x_max\":621,\"o\":\"m 240 0 l 34 0 l 34 825 l 192 981 l 621 981 l 621 0 l 415 0 l 415 322 l 240 322 l 240 0 m 415 509 l 415 794 l 240 794 l 240 509 l 415 509 z \"},\"+\":{\"ha\":913,\"x_min\":86,\"x_max\":826,\"o\":\"m 86 606 l 346 606 l 346 867 l 565 867 l 565 606 l 826 606 l 826 387 l 565 387 l 565 127 l 346 127 l 346 387 l 86 387 l 86 606 z \"},\" \":{\"ha\":317,\"x_min\":0,\"x_max\":0,\"o\":\"\"},\"&\":{\"ha\":913,\"x_min\":86,\"x_max\":826,\"o\":\"m 86 606 l 346 606 l 346 867 l 565 867 l 565 606 l 826 606 l 826 387 l 346 127 l 346 387 l 86 387 l 86 606 z \"},\"a\":{\"ha\":664,\"x_min\":34,\"x_max\":621,\"o\":\"m 240 0 l 34 0 l 34 825 l 192 981 l 621 981 l 621 0 l 415 0 l 415 322 l 240 322 l 240 0 m 415 509 l 415 794 l 240 794 l 240 509 l 415 509 z \"},\"b\":{\"ha\":682,\"x_min\":34,\"x_max\":629,\"o\":\"m 629 408 l 629 0 l 170 0 l 34 136 l 34 981 l 454 981 l 593 851 l 593 581 l 497 504 l 629 408 m 423 186 l 423 408 l 239 408 l 239 186 l 423 186 m 390 591 l 390 794 l 239 794 l 239 591 l 390 591 z \"},\"c\":{\"ha\":660,\"x_min\":34,\"x_max\":612,\"o\":\"m 406 186 l 406 305 l 612 305 l 612 136 l 476 0 l 34 0 l 34 846 l 180 981 l 612 981 l 612 610 l 406 610 l 406 794 l 240 794 l 240 186 l 406 186 z \"},\"d\":{\"ha\":662,\"x_min\":34,\"x_max\":614,\"o\":\"m 34 981 l 456 981 l 614 825 l 614 136 l 476 0 l 34 0 l 34 981 m 408 186 l 408 794 l 239 794 l 239 186 l 408 186 z \"},\"e\":{\"ha\":558,\"x_min\":34,\"x_max\":517,\"o\":\"m 34 981 l 510 981 l 510 794 l 237 794 l 237 605 l 496 605 l 496 422 l 240 422 l 240 186 l 517 186 l 517 0 l 34 0 l 34 981 z \"},\"f\":{\"ha\":554,\"x_min\":34,\"x_max\":503,\"o\":\"m 239 422 l 239 0 l 34 0 l 34 845 l 170 981 l 503 981 l 503 794 l 239 794 l 239 605 l 482 605 l 482 422 l 239 422 z \"},\"g\":{\"ha\":680,\"x_min\":34,\"x_max\":620,\"o\":\"m 416 186 l 416 337 l 333 337 l 333 511 l 620 511 l 620 0 l 34 0 l 34 981 l 586 981 l 586 794 l 240 794 l 240 186 l 416 186 z \"},\"h\":{\"ha\":675,\"x_min\":34,\"x_max\":621,\"o\":\"m 239 578 l 416 578 l 416 981 l 621 981 l 621 0 l 416 0 l 416 392 l 239 392 l 239 0 l 34 0 l 34 981 l 239 981 l 239 578 z \"},\"k\":{\"ha\":714,\"x_min\":34,\"x_max\":652,\"o\":\"m 652 543 l 652 0 l 446 0 l 446 358 l 239 358 l 239 0 l 34 0 l 34 981 l 239 981 l 239 543 l 253 543 l 446 981 l 650 981 l 463 543 l 652 543 z \"},\"l\":{\"ha\":581,\"x_min\":34,\"x_max\":527,\"o\":\"m 34 0 l 34 981 l 239 981 l 239 186 l 527 186 l 527 0 l 34 0 z \"},\"m\":{\"ha\":847,\"x_min\":34,\"x_max\":780,\"o\":\"m 543 981 l 780 981 l 780 0 l 590 0 l 590 610 l 437 0 l 376 0 l 224 610 l 224 0 l 34 0 l 34 981 l 271 981 l 407 492 l 543 981 z \"},\"n\":{\"ha\":693,\"x_min\":34,\"x_max\":631,\"o\":\"m 437 418 l 437 981 l 631 981 l 631 0 l 427 0 l 227 563 l 227 0 l 34 0 l 34 981 l 237 981 l 437 418 z \"},\"o\":{\"ha\":682,\"x_min\":34,\"x_max\":626,\"o\":\"m 34 981 l 626 981 l 626 0 l 34 0 l 34 981 m 240 186 l 420 186 l 420 794 l 240 794 l 240 186 z \"},\"p\":{\"ha\":656,\"x_min\":34,\"x_max\":603,\"o\":\"m 239 0 l 34 0 l 34 842 l 182 981 l 603 981 l 603 249 l 239 249 l 239 0 m 397 437 l 397 794 l 239 794 l 239 437 l 397 437 z \"},\"q\":{\"ha\":682,\"x_min\":34,\"x_max\":629,\"o\":\"m 615 -170 l 412 0 l 34 0 l 34 845 l 170 981 l 629 981 l 629 -170 l 615 -170 m 240 794 l 240 186 l 423 186 l 423 794 l 240 794 z \"},\"r\":{\"ha\":664,\"x_min\":34,\"x_max\":622,\"o\":\"m 416 0 l 294 355 l 239 355 l 239 0 l 34 0 l 34 842 l 183 981 l 603 981 l 603 357 l 492 357 l 622 0 l 416 0 m 397 538 l 397 794 l 239 794 l 239 538 l 397 538 z \"},\"s\":{\"ha\":628,\"x_min\":34,\"x_max\":573,\"o\":\"m 573 0 l 34 0 l 34 305 l 239 305 l 239 186 l 367 186 l 367 342 l 41 588 l 41 981 l 567 981 l 567 689 l 380 689 l 380 793 l 246 793 l 246 665 l 573 420 l 573 0 z \"},\"t\":{\"ha\":667,\"x_min\":34,\"x_max\":618,\"o\":\"m 618 794 l 433 794 l 433 0 l 226 0 l 226 794 l 34 794 l 34 981 l 618 981 l 618 794 z \"},\"u\":{\"ha\":671,\"x_min\":34,\"x_max\":614,\"o\":\"m 614 0 l 34 0 l 34 981 l 239 981 l 239 186 l 408 186 l 408 981 l 614 981 l 614 0 z \"},\"v\":{\"ha\":675,\"x_min\":39,\"x_max\":627,\"o\":\"m 416 981 l 627 981 l 497 0 l 172 0 l 39 981 l 253 981 l 334 227 l 416 981 z \"},\"w\":{\"ha\":1025,\"x_min\":40,\"x_max\":969,\"o\":\"m 396 0 l 209 0 l 40 981 l 240 981 l 328 396 l 433 981 l 576 981 l 681 396 l 769 981 l 969 981 l 800 0 l 613 0 l 505 608 l 396 0 z \"},\"x\":{\"ha\":743,\"x_min\":47,\"x_max\":704,\"o\":\"m 269 0 l 47 0 l 227 515 l 79 981 l 290 981 l 376 691 l 463 981 l 674 981 l 525 515 l 704 0 l 482 0 l 376 304 l 269 0 z \"},\"y\":{\"ha\":714,\"x_min\":47,\"x_max\":671,\"o\":\"m 458 981 l 671 981 l 340 0 l 126 0 l 253 375 l 47 981 l 260 981 l 355 677 l 458 981 z \"},\"z\":{\"ha\":624,\"x_min\":34,\"x_max\":569,\"o\":\"m 34 0 l 34 163 l 330 794 l 54 794 l 54 981 l 508 981 l 569 825 l 276 186 l 559 186 l 559 0 l 34 0 z \"},\"!\":{\"ha\":259,\"x_min\":34,\"x_max\":238,\"o\":\"m 238 981 l 238 837 l 193 282 l 79 282 l 34 837 l 34 981 l 238 981 m 43 0 l 43 191 l 229 191 l 229 0 l 43 0 z \"}},\"familyName\":\"Aldo the Apache\",\"ascender\":1015,\"descender\":-134,\"underlinePosition\":-237,\"underlineThickness\":54,\"boundingBox\":{\"yMin\":-230,\"xMin\":31,\"yMax\":1244,\"xMax\":969},\"resolution\":1000,\"original_font_information\":{\"format\":0,\"fontFamily\":\"Aldo the Apache\",\"fontSubfamily\":\"Regular\",\"uniqueID\":\"1.000;ST  ;AldotheApache\",\"fullName\":\"Aldo the Apache\",\"version\":\"I\",\"postScriptName\":\"AldotheApache\",\"manufacturer\":\"AJ Paglia\",\"designer\":\"AJ Paglia\",\"designerURL\":\"www.ajpaglia.com\",\"preferredFamily\":\"Aldo the Apache\"},\"cssFontWeight\":\"normal\",\"cssFontStyle\":\"normal\"}");

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
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
const environment = {
    production: false,
    version: __webpack_require__(/*! ../../package.json */ "./package.json").version
};


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"], [{
        defaultEncapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None
    }]).catch(err => console.log(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Git\personal-webpage\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map