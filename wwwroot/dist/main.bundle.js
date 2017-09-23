webpackJsonp([1],{

/***/ 102:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_app_module__ = __webpack_require__(108);


var bootApplication = function () {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_app_module__["a" /* AppModule */]);
};
if (true) {
    module["hot"].accept();
    module["hot"].dispose(function () {
        var oldRootElem = document.querySelector("app-root");
        var newRootElem = document.createElement("app-root");
        oldRootElem.parentNode.insertBefore(newRootElem, oldRootElem);
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().destroy();
    });
}
if (document.readyState === "complete") {
    bootApplication();
}
else {
    document.addEventListener("DOMContentLoaded", bootApplication);
}
//# sourceMappingURL=boot.js.map

/***/ }),

/***/ 107:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_repository__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_contact_model__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__models_company_model__ = __webpack_require__(113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__errorHandler_service__ = __webpack_require__(37);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AppComponent = (function () {
    function AppComponent(repo, errorHandler) {
        var _this = this;
        this.repo = repo;
        errorHandler.errors.subscribe(function (error) {
            _this.lastError = error;
        });
    }
    Object.defineProperty(AppComponent.prototype, "error", {
        get: function () {
            return this.lastError;
        },
        enumerable: true,
        configurable: true
    });
    AppComponent.prototype.clearError = function () {
        this.lastError = null;
    };
    Object.defineProperty(AppComponent.prototype, "contact", {
        get: function () {
            return this.repo.contact;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppComponent.prototype, "contacts", {
        get: function () {
            return this.repo.contacts;
        },
        enumerable: true,
        configurable: true
    });
    AppComponent.prototype.createContact = function () {
        this.repo.createContact(new __WEBPACK_IMPORTED_MODULE_2__models_contact_model__["a" /* Contact */](0, "Lisa", "Zattler", new Date("7.12.92"), "elisabeth.zattler@gmail.com", 
        // "zattler.com", "08178/4516", new Company(0, "Zattler GmbH", "info@zattler.com", "zattler.com")));
        "zattler.com", "08178/4516", new __WEBPACK_IMPORTED_MODULE_3__models_company_model__["a" /* Company */](1)));
    };
    AppComponent.prototype.replaceContact = function () {
        var c = this.repo.contacts[10];
        c.firstname = "Liza";
        c.surname = "Sattler";
        c.company = new __WEBPACK_IMPORTED_MODULE_3__models_company_model__["a" /* Company */](7);
        this.repo.replaceContact(c);
    };
    AppComponent.prototype.deleteContact = function () {
        this.repo.deleteContact(10002);
    };
    Object.defineProperty(AppComponent.prototype, "company", {
        get: function () {
            return this.repo.company;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppComponent.prototype, "companies", {
        get: function () {
            return this.repo.companies;
        },
        enumerable: true,
        configurable: true
    });
    AppComponent.prototype.createCompany = function () {
        this.repo.createCompany(new __WEBPACK_IMPORTED_MODULE_3__models_company_model__["a" /* Company */](0, "CLC Solutions GmbH", "info@clc.com", "clc.com", "089/33333"));
    };
    AppComponent.prototype.replaceCompany = function () {
        var c = new __WEBPACK_IMPORTED_MODULE_3__models_company_model__["a" /* Company */](6, "ASDF AG", "asdf@clc.com", "clc.com", "089/4444");
        this.repo.replaceCompany(c);
    };
    AppComponent.prototype.deleteCompany = function () {
        this.repo.deleteCompany(10003);
    };
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_10" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__(179),
        styles: [__webpack_require__(172)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__models_repository__["a" /* Repository */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__models_repository__["a" /* Repository */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__errorHandler_service__["a" /* ErrorHandlerService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__errorHandler_service__["a" /* ErrorHandlerService */]) === "function" && _b || Object])
], AppComponent);

var _a, _b;
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 108:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export handler */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(70);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(71);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_routing__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__models_model_module__ = __webpack_require__(115);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__dashboard_dashboard_module__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__errorHandler_service__ = __webpack_require__(37);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var eHandler = new __WEBPACK_IMPORTED_MODULE_8__errorHandler_service__["a" /* ErrorHandlerService */]();
function handler() {
    return eHandler;
}
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["a" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_6__models_model_module__["a" /* ModelModule */],
            __WEBPACK_IMPORTED_MODULE_5__app_routing__["a" /* RoutingConfig */],
            __WEBPACK_IMPORTED_MODULE_7__dashboard_dashboard_module__["a" /* DashboardModule */]
        ],
        providers: [
            { provide: __WEBPACK_IMPORTED_MODULE_8__errorHandler_service__["a" /* ErrorHandlerService */], useFactory: handler },
            { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* ErrorHandler */], useFactory: handler }
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 109:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RoutingConfig; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__structure_contactTable_component__ = __webpack_require__(75);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__structure_contactDetail_component__ = __webpack_require__(73);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__structure_contactEdit_component__ = __webpack_require__(74);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__dashboard_contactSelection_component__ = __webpack_require__(72);





var routes = [
    { path: "contab", component: __WEBPACK_IMPORTED_MODULE_1__structure_contactTable_component__["a" /* ContactTableComponent */] },
    { path: "condet", component: __WEBPACK_IMPORTED_MODULE_2__structure_contactDetail_component__["a" /* ContactDetailComponent */] },
    { path: "condet/:id", component: __WEBPACK_IMPORTED_MODULE_2__structure_contactDetail_component__["a" /* ContactDetailComponent */] },
    { path: "conedi/:id", component: __WEBPACK_IMPORTED_MODULE_3__structure_contactEdit_component__["a" /* ContactEditComponent */] },
    { path: "conedi", component: __WEBPACK_IMPORTED_MODULE_3__structure_contactEdit_component__["a" /* ContactEditComponent */] },
    { path: "dashboard", component: __WEBPACK_IMPORTED_MODULE_4__dashboard_contactSelection_component__["a" /* ContactSelectionComponent */] },
    { path: "", component: __WEBPACK_IMPORTED_MODULE_4__dashboard_contactSelection_component__["a" /* ContactSelectionComponent */] }
];
var RoutingConfig = __WEBPACK_IMPORTED_MODULE_0__angular_router__["a" /* RouterModule */].forRoot(routes);
//# sourceMappingURL=app.routing.js.map

/***/ }),

/***/ 110:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_repository__ = __webpack_require__(8);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ContactListComponent = (function () {
    function ContactListComponent(repo, router) {
        this.repo = repo;
        this.router = router;
    }
    Object.defineProperty(ContactListComponent.prototype, "contacts", {
        get: function () {
            if (this.repo.contacts != null && this.repo.contacts.length != null && this.repo.contacts.length > 0) {
                var pageIndex = (this.repo.pagination.currentPage - 1) * this.repo.pagination.contactsPerPage;
                return this.repo.contacts.slice(pageIndex, pageIndex + this.repo.pagination.contactsPerPage);
            }
        },
        enumerable: true,
        configurable: true
    });
    ContactListComponent.prototype.selectContact = function (id) {
        this.repo.getContact(id);
        this.router.navigateByUrl("condet");
    };
    ContactListComponent.prototype.deleteContact = function (id) {
        this.repo.deleteContact(id);
    };
    return ContactListComponent;
}());
ContactListComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_10" /* Component */])({
        selector: "dashboard-contact-list",
        template: __webpack_require__(180)
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__models_repository__["a" /* Repository */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__models_repository__["a" /* Repository */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _b || Object])
], ContactListComponent);

var _a, _b;
//# sourceMappingURL=contactList.component.js.map

/***/ }),

/***/ 111:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__(70);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__dashboard_pagination_component__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__dashboard_contactList_component__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__dashboard_contactSelection_component__ = __webpack_require__(72);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__structure_contactTable_component__ = __webpack_require__(75);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__structure_contactDetail_component__ = __webpack_require__(73);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__structure_contactEdit_component__ = __webpack_require__(74);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__structure_searchFilter_component__ = __webpack_require__(117);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__structure_navigation_component__ = __webpack_require__(116);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












var DashboardModule = (function () {
    function DashboardModule() {
    }
    return DashboardModule;
}());
DashboardModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_6__dashboard_contactSelection_component__["a" /* ContactSelectionComponent */],
            __WEBPACK_IMPORTED_MODULE_5__dashboard_contactList_component__["a" /* ContactListComponent */],
            __WEBPACK_IMPORTED_MODULE_10__structure_searchFilter_component__["a" /* SearchFilterComponent */],
            __WEBPACK_IMPORTED_MODULE_4__dashboard_pagination_component__["a" /* PaginationComponent */],
            __WEBPACK_IMPORTED_MODULE_7__structure_contactTable_component__["a" /* ContactTableComponent */],
            __WEBPACK_IMPORTED_MODULE_8__structure_contactDetail_component__["a" /* ContactDetailComponent */],
            __WEBPACK_IMPORTED_MODULE_9__structure_contactEdit_component__["a" /* ContactEditComponent */],
            __WEBPACK_IMPORTED_MODULE_11__structure_navigation_component__["a" /* NavigationComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* RouterModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormsModule */]
        ],
        exports: [__WEBPACK_IMPORTED_MODULE_6__dashboard_contactSelection_component__["a" /* ContactSelectionComponent */]]
    })
], DashboardModule);

//# sourceMappingURL=dashboard.module.js.map

/***/ }),

/***/ 112:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PaginationComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_repository__ = __webpack_require__(8);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PaginationComponent = (function () {
    function PaginationComponent(repo) {
        this.repo = repo;
    }
    Object.defineProperty(PaginationComponent.prototype, "current", {
        get: function () {
            return this.repo.pagination.currentPage;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PaginationComponent.prototype, "pages", {
        get: function () {
            if (this.repo.contacts != null) {
                return Array(Math.ceil(this.repo.contacts.length / this.repo.pagination.contactsPerPage))
                    .fill(0).map(function (x, i) { return i + 1; });
            }
            else {
                return [];
            }
        },
        enumerable: true,
        configurable: true
    });
    PaginationComponent.prototype.changePage = function (newPage) {
        this.repo.pagination.currentPage = newPage;
    };
    return PaginationComponent;
}());
PaginationComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_10" /* Component */])({
        selector: "dashboard-pagination",
        template: __webpack_require__(182)
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__models_repository__["a" /* Repository */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__models_repository__["a" /* Repository */]) === "function" && _a || Object])
], PaginationComponent);

var _a;
//# sourceMappingURL=pagination.component.js.map

/***/ }),

/***/ 113:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Company; });
var Company = (function () {
    function Company(id, name, email, website, phone, contacts) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.website = website;
        this.phone = phone;
        this.contacts = contacts;
    }
    return Company;
}());

//# sourceMappingURL=company.model.js.map

/***/ }),

/***/ 114:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Filter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return Pagination; });
var Filter = (function () {
    function Filter() {
        this.related = false;
    }
    Filter.prototype.reset = function () {
        this.company = this.search = null;
        this.related = false;
    };
    return Filter;
}());

var Pagination = (function () {
    function Pagination() {
        this.contactsPerPage = 5;
        this.currentPage = 1;
    }
    return Pagination;
}());

//# sourceMappingURL=configClasses.repository.js.map

/***/ }),

/***/ 115:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ModelModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__repository__ = __webpack_require__(8);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


//decorator
var ModelModule = (function () {
    //feature module
    function ModelModule() {
    }
    return ModelModule;
}());
ModelModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* NgModule */])({
        providers: [__WEBPACK_IMPORTED_MODULE_1__repository__["a" /* Repository */]]
    })
    //feature module
], ModelModule);

//# sourceMappingURL=model.module.js.map

/***/ }),

/***/ 116:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavigationComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_repository__ = __webpack_require__(8);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var NavigationComponent = (function () {
    function NavigationComponent(repo) {
        this.repo = repo;
    }
    return NavigationComponent;
}());
NavigationComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_10" /* Component */])({
        selector: "navigation",
        template: __webpack_require__(186)
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__models_repository__["a" /* Repository */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__models_repository__["a" /* Repository */]) === "function" && _a || Object])
], NavigationComponent);

var _a;
//# sourceMappingURL=navigation.component.js.map

/***/ }),

/***/ 117:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchFilterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_repository__ = __webpack_require__(8);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SearchFilterComponent = (function () {
    function SearchFilterComponent(repo) {
        this.repo = repo;
    }
    SearchFilterComponent.prototype.setSearch = function (search) {
        this.repo.filter.search = search;
        this.repo.getContacts();
    };
    return SearchFilterComponent;
}());
SearchFilterComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_10" /* Component */])({
        selector: "search-filter",
        template: __webpack_require__(187)
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__models_repository__["a" /* Repository */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__models_repository__["a" /* Repository */]) === "function" && _a || Object])
], SearchFilterComponent);

var _a;
//# sourceMappingURL=searchFilter.component.js.map

/***/ }),

/***/ 172:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(57)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 179:
/***/ (function(module, exports) {

module.exports = "<!-- <button class=\"btn btn-primary m-1\" (click)=\"createContact()\">\n  Create Contact\n</button>\n<button class=\"btn btn-primary m-1\" (click)=\"replaceContact()\">\n  Replace Contact\n</button>\n<button class=\"btn btn-primary m-1\" (click)=\"deleteContact()\">\n  Delete Contact\n</button>\n\n<button class=\"btn btn-primary m-1\" (click)=\"createCompany()\">\n  Create Company\n</button>\n<button class=\"btn btn-primary m-1\" (click)=\"replaceCompany()\">\n  Replace Company\n</button>\n<button class=\"btn btn-primary m-1\" (click)=\"deleteCompany()\">\n  Delete Company\n</button> -->\n\n<!-- <div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col\">\n      <search-filter></search-filter>\n      <contact-table></contact-table>\n    </div>\n    <div class=\"col\">\n      <contact-detail></contact-detail>\n    </div>\n  </div>\n</div> -->\n\n<div class=\"bg-danger text-white text-center p-2\" *ngIf=\"error != null\">\n  <h6 *ngFor=\"let e of error\">{{e}}</h6>\n  <button class=\"btn btn-danger\" (click)=\"clearError()\">OK</button>\n</div>\n<router-outlet></router-outlet>"

/***/ }),

/***/ 180:
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"contacts?.length > 0; else nodata\" class=\"mx-3 my-3\">\n    <div *ngFor=\"let contact of contacts\" class=\"card cats-outline-cyan my-3\">\n        <!-- <div class=\"card-header\">{{contact?.firstname}} {{contact?.surname}}</div> -->\n        <div class=\"row\">\n            <div class=\"col-9\">\n                <div class=\"card-block\">\n                    <h5 class=\"card-title\">{{contact?.firstname}} {{contact?.surname}}</h5>\n                    <h6 class=\"card-subtitle mb-2 text-muted\">{{contact?.company?.name || 'No Data'}}</h6>\n                    <!-- <p class=\"card-text\">Some quick example text to build on the card title and make up the bulk of the card's content.</p> -->\n                </div>\n            </div>\n            <div class=\"col-3\" style=\"min-width: 64px;\">\n                <!-- <img class=\"mx-auto d-block \" src=\"/images/default/cat_64.png\" alt=\"Card image cap\"> -->\n                <img class=\" cats-img-mrt pull-right\" src=\"/images/default/cat_64.png\" alt=\"Card image cap\">\n            </div>\n        </div>\n        <div class=\"row\">\n            <div class=\"col\">\n                <div class=\"card-block\">\n                    <!-- <h5 class=\"card-title\">{{contact?.firstname}} {{contact?.surname}}</h5>\n                    <h6 class=\"card-subtitle mb-2 text-muted\">{{contact?.company?.name || 'No Data'}}</h6> -->\n                    <p class=\"card-text\">Some quick example text to build on the card title and make up the bulk of the card's content.</p>\n                </div>\n            </div>\n        </div>\n        <div class=\"card-footer\">\n            <div class=\"row\">\n                <div class=\"col\">\n                    <a class=\"btn btn-default\" (click)=\"deleteContact(contact.id)\" aria-label=\"Delete\">\n                        <i class=\"fa fa-trash fa-lg text-danger\" aria-hidden=\"true\"></i>\n                    </a>\n                </div>\n                <div class=\"col text-right\">\n                    <a class=\"btn btn-default cats-color-dark\" [routerLink]=\"['/conedi', contact.id]\" aria-label=\"Settings\">\n                        <i class=\"fa fa-cog fa-lg\" aria-hidden=\"true\"></i>\n                    </a>\n                    <a class=\"btn btn-default cats-color-dark\" [routerLink]=\"['/condet', contact.id]\" aria-label=\"Address\">\n                        <i class=\"fa fa-address-card-o fa-lg\" aria-hidden=\"true\"></i>\n                    </a>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n\n<ng-template #nodata>\n    <h4 class=\"m-1\">Waiting for data..</h4>\n</ng-template>"

/***/ }),

/***/ 181:
/***/ (function(module, exports) {

module.exports = "<navigation></navigation>\n\n<div class=\"row no-gutters\">\n    <div class=\"col mx-auto\" style=\"max-width: 900px;\">\n        <dashboard-contact-list></dashboard-contact-list>\n        <dashboard-pagination></dashboard-pagination>\n    </div>\n</div>"

/***/ }),

/***/ 182:
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"pages.length > 1\" class=\"text-right mx-3 my-3\">\n    <button *ngFor=\"let page of pages\"\n        class=\"btn cats-btn-dark mx-1\"\n        [class.active]=\"current == page\"\n        (click)=\"changePage(page)\">\n        {{page}}\n    </button>\n</div>"

/***/ }),

/***/ 183:
/***/ (function(module, exports) {

module.exports = "<navigation></navigation>\n<div class=\"container\">\n    <div class=\"card cats-outline-cyan my-3\">\n        <div class=\"card-block mx-3\">\n            <h5 class=\"card-title\">Contact</h5>\n            <table class=\"table\">\n                <!-- <tr><th colspan=\"2\" class=\"cats-bg-gray cats-color-dark\" style=\"border-radius: 10px;\">Contact</th></tr> -->\n                <tr><th>Firstname</th><td>{{contact?.firstname}}</td></tr>\n                <tr><th>Surname</th><td>{{contact?.surname}}</td></tr>\n                <tr><th>Birthday</th><td>{{contact.birthday | date: \"dd/MM/yyyy\" || 'No Data'}}</td></tr>\n                <tr><th>E-Mail</th><td>{{contact?.email || 'No Data'}}</td></tr>\n                <tr><th>Website</th><td>{{contact?.website || 'No Data'}}</td></tr>\n                <tr><th>Phone</th><td>{{contact?.phone || 'No Data'}}</td></tr>\n                <tr><th>Company</th><td>{{contact?.company?.name || \"No Data\"}}</td></tr>\n                <!-- <tr><th colspan=\"2\" class=\"cats-bg-gray cats-color-dark\" style=\"border-radius: 10px;\">Company</th></tr>\n                <tr><th>Name</th><td>{{contact?.company?.name || \"No Data\"}}</td></tr>\n                <tr><th>Website</th><td>{{contact?.company?.website || \"No Data\"}}</td></tr>\n                <tr><th>E-Mail</th><td>{{contact?.company?.email || \"No Data\"}}</td></tr>\n                <tr><th>Phone</th><td>{{contact?.company?.phone || \"No Data\"}}</td></tr> -->\n            </table>\n        </div>\n        <div class=\"card-footer text-right\">\n            <button class=\"btn cats-btn-dark\" routerLink=\"/contab\">Contacts Table</button>\n            <button class=\"btn cats-btn-dark\" routerLink=\"/dashboard\">Dashboard</button>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ 184:
/***/ (function(module, exports) {

module.exports = "<navigation></navigation>\n<div class=\"container\" *ngIf=\"contact != null\">\n    <div class=\"card cats-outline-cyan my-3\">\n        <div class=\"card-block mx-3\">\n            <div class=\"form-group row has-danger\">\n                <label class=\"col-form-label col-sm-2\">Firstname</label>\n                <input class=\"form-control col-sm-10 form-control-danger\" [(ngModel)]=\"contact.firstname\" />\n            </div>\n            <div class=\"form-group row has-danger\">\n                <label class=\"col-form-label col-sm-2\">Surname</label>\n                <input class=\"form-control col-sm-10 form-control-danger\" [(ngModel)]=\"contact.surname\" />\n            </div>\n            <div class=\"form-group row\">\n                <label class=\"col-form-label col-sm-2\">E-Mail</label>\n                <input type=\"email\" class=\"form-control col-sm-10\" [(ngModel)]=\"contact.email\" />\n            </div>\n            <div class=\"form-group row\">\n                <label class=\"col-form-label col-sm-2\">Website</label>\n                <input type=\"url\" class=\"form-control col-sm-10\" [(ngModel)]=\"contact.website\" />\n            </div>\n            <div class=\"form-group row\">\n                <label class=\"col-form-label col-sm-2\">Phone</label>\n                <input class=\"form-control col-sm-10\" [(ngModel)]=\"contact.phone\" />\n            </div>\n            <div class=\"form-group row\">\n                <label class=\"col-form-label col-sm-2\">Birthday</label>\n                <input #valueBirthday type=\"date\" class=\"form-control col-sm-10\" value=\"{{contact.birthday | date: 'yyyy-MM-dd'}}\"\n                (input)=\"setBirthday(valueBirthday.value)\" />\n            </div>\n            <div *ngIf=\"companies?.length > 0\" class=\"form-group row\">\n                <label class=\"col-form-label col-sm-2\">Company</label>\n                <!-- <input class=\"form-control col-sm-4\" type=\"text\" [(ngModel)]=\"contact.company.name\" /> -->\n                <select class=\"form-control col-sm-4\">\n                    <option>{{contact?.company?.name}}</option>\n                    <option *ngFor=\"let company of companies\">{{company?.name}}</option>\n                </select>\n            </div>\n            <div *ngIf=\"companies?.length <= 0\">\n                <label class=\"col-form-label col-sm-4\">No Company found</label>\n            </div>\n            <div class=\"form-group row\">\n                <label class=\"col-form-label col-sm-2\">Contact portrait</label>\n                <input type=\"file\" class=\"form-control-file col-sm-4\" aria-describedby=\"fileHelp\" disabled>\n                <!-- <small id=\"fileHelp\" class=\"form-text text-muted\">Select an image</small> -->\n            </div>\n        </div>\n        <div class=\"card-footer text-right\">\n            <button class=\"btn cats-btn-dark mx-1\" (click)=\"saveContact(contact.id)\">\n                Save\n            </button>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ 185:
/***/ (function(module, exports) {

module.exports = "<navigation></navigation>\n<div class=\"container\">\n    <div class=\"card cats-outline-cyan my-3\">\n        <div class=\"card-block mx-3\">\n            <table class=\"table mx-auto\">\n                <tr>\n                    <th>Firstname</th>\n                    <th>Surname</th>\n                    <!-- <th>Birthday</th> -->\n                    <th class=\"hidden-sm-down\">E-Mail</th>\n                    <!-- <th>Website</th> -->\n                    <th class=\"hidden-sm-down\">Phone</th>\n                    <th class=\"hidden-sm-down\">Company</th>\n                    <th class=\"hidden-sm-down\"></th>\n                </tr>\n                <tr *ngFor=\"let contact of contacts\">\n                    <td>{{contact?.firstname}}</td>\n                    <td>{{contact?.surname}}</td>\n                    <!-- <td>{{contact?.birthday || 'None'}}</td> -->\n                    <td class=\"hidden-sm-down\">{{contact?.email || 'None'}}</td>\n                    <!-- <td>{{contact?.website || 'None'}}</td> -->\n                    <td class=\"hidden-sm-down\">{{contact?.phone || 'None'}}</td>\n                    <td class=\"hidden-sm-down\">{{contact?.company?.name}}</td>\n                    <!-- <td (click)=\"editContact(contact.id)\">Edit</td> -->\n                    <!-- <td (click)=\"selectContact(contact.id)\">Detail</td> -->\n                    <!-- <td [routerLink]=\"['/conedi']\">Edit</td>\n                    <td [routerLink]=\"['/condet', contact.id]\">Detail</td> -->\n                    <td class=\"pr-0\">\n                        <div>\n                            <a class=\"btn btn-default\" [routerLink]=\"['/conedi', contact.id]\" aria-label=\"Delete\">\n                                <i class=\"fa fa-trash text-danger\" aria-hidden=\"true\"></i>\n                            </a>\n                            <a class=\"btn btn-default cats-color-dark\" [routerLink]=\"['/conedi', contact.id]\" aria-label=\"Settings\">\n                                <i class=\"fa fa-cog\" aria-hidden=\"true\"></i>\n                            </a>\n                            <a class=\"btn btn-default cats-color-dark\" [routerLink]=\"['/condet', contact.id]\" aria-label=\"Address\">\n                                <i class=\"fa fa-address-card-o\" aria-hidden=\"true\"></i>\n                            </a>\n                    </div>\n                    </td>\n                </tr>\n            </table>\n        </div>\n        <div class=\"card-footer text-right\">\n            <a class=\"btn btn-success\" (click)=\"clearContact()\" aria-label=\"Address\">\n                <i class=\"fa fa-plus fa-lg\" aria-hidden=\"true\"></i>\n            </a>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ 186:
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-toggleable-sm cats-navbar-dark cats-bg-dark \">\n    <button class=\"navbar-toggler navbar-toggler-right\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarNavDropdown\" aria-controls=\"navbarNavDropdown\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n        <span class=\"navbar-toggler-icon\"></span>\n    </button>\n    <a class=\"navbar-brand text-white\" href=\"/\">\n        <img src=\"/images/brand/logo_45.png\" width=\"35\" height=\"35\" class=\"d-inline-block align-top\" alt=\"logo\">\n        Cats Love Contacts</a>\n    <div class=\"collapse navbar-collapse\" id=\"navbarNavDropdown\">\n        <ul class=\"navbar-nav mr-auto\">\n            <li class=\"nav-item dropdown\">\n                <a class=\"nav-link dropdown-toggle  disabled\" href=\"http://example.com\" id=\"navbarDropdownMenuLink\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n                Profile\n                </a>\n                <div class=\"dropdown-menu\" aria-labelledby=\"navbarDropdownMenuLink\">\n                    <a class=\"dropdown-item\" href=\"/\">Settings</a>\n                    <a class=\"dropdown-item\" href=\"/\">Login / Logout</a>\n                </div>\n            </li>\n            <li class=\"nav-item\">\n                <a class=\"nav-link\" [routerLink]=\"['/dashboard']\">Dasboard<span class=\"sr-only\">(current)</span></a>\n            </li>\n            <li class=\"nav-item\">\n                <a class=\"nav-link\" [routerLink]=\"['/contab']\">Contacts</a>\n            </li>\n            <li class=\"nav-item\">\n                <a class=\"nav-link\" [routerLink]=\"['/comtab']\">Companies</a>\n            </li>\n        </ul>\n        <ul class=\"navbar-nav\">\n            <li class=\"nav-item\">\n                <search-filter></search-filter>\n            </li>\n        </ul>\n    </div>\n</nav>"

/***/ }),

/***/ 187:
/***/ (function(module, exports) {

module.exports = "<!-- <div class=\"form-group has-feedback\">   \n    <input #searchFilter type=\"text\" class=\"form-control\" placeholder=\"Search...\" (input)=\"setSearch(searchFilter.value)\">\n    <!-- <span class=\"form-control-feedback\">\n        <i class=\"fa fa-search\"></i>\n    </span> -->\n<!-- </div> -->\n<div class=\"input-group input-group-unstyled\">\n    <input #searchFilter type=\"text\" class=\"form-control\" placeholder=\"Search...\" (input)=\"setSearch(searchFilter.value)\" />\n    <span class=\"input-group-addon text-white\">\n        <i class=\"fa fa-search\"></i>\n    </span>\n</div>\n<!-- custom: https://stackoverflow.com/questions/24682421/put-search-icon-near-textbox-using-bootstrap -->"

/***/ }),

/***/ 223:
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(20);
module.exports = __webpack_require__(102);


/***/ }),

/***/ 37:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ErrorHandlerService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return ValidationError; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var ErrorHandlerService = (function () {
    function ErrorHandlerService() {
        this.subject = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__["Subject"]();
    }
    ErrorHandlerService.prototype.handleError = function (error) {
        var _this = this;
        setTimeout(function () {
            if (error instanceof ValidationError) {
                _this.subject.next(error.errors);
            }
            else if (error instanceof Error) {
                _this.subject.next([error.message]);
            }
            else {
                _this.subject.next(["An error has occured"]);
            }
        });
    };
    Object.defineProperty(ErrorHandlerService.prototype, "errors", {
        get: function () {
            return this.subject;
        },
        enumerable: true,
        configurable: true
    });
    return ErrorHandlerService;
}());
ErrorHandlerService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* Injectable */])()
], ErrorHandlerService);

var ValidationError = (function () {
    function ValidationError(errors) {
        this.errors = errors;
    }
    return ValidationError;
}());

//# sourceMappingURL=errorHandler.service.js.map

/***/ }),

/***/ 38:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Contact; });
var Contact = (function () {
    function Contact(id, firstname, surname, birthday, email, website, phone, company) {
        this.id = id;
        this.firstname = firstname;
        this.surname = surname;
        this.birthday = birthday;
        this.email = email;
        this.website = website;
        this.phone = phone;
        this.company = company;
    }
    return Contact;
}());

//# sourceMappingURL=contact.model.js.map

/***/ }),

/***/ 69:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	return new Promise(function(resolve, reject) { reject(new Error("Cannot find module '" + req + "'.")); });
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 69;

/***/ }),

/***/ 72:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactSelectionComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var ContactSelectionComponent = (function () {
    function ContactSelectionComponent() {
    }
    return ContactSelectionComponent;
}());
ContactSelectionComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_10" /* Component */])({
        selector: "dashboard-contacts",
        template: __webpack_require__(181)
    })
], ContactSelectionComponent);

//# sourceMappingURL=contactSelection.component.js.map

/***/ }),

/***/ 73:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactDetailComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_repository__ = __webpack_require__(8);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ContactDetailComponent = (function () {
    function ContactDetailComponent(repo, router, activeRoute) {
        this.repo = repo;
        var id = Number.parseInt(activeRoute.snapshot.params["id"]);
        if (id) {
            this.repo.getContact(id);
        }
        else {
            router.navigateByUrl("/");
        }
    }
    Object.defineProperty(ContactDetailComponent.prototype, "contact", {
        get: function () {
            return this.repo.contact;
        },
        enumerable: true,
        configurable: true
    });
    return ContactDetailComponent;
}());
ContactDetailComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_10" /* Component */])({
        selector: "contact-detail",
        template: __webpack_require__(183)
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__models_repository__["a" /* Repository */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__models_repository__["a" /* Repository */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */]) === "function" && _c || Object])
], ContactDetailComponent);

var _a, _b, _c;
//# sourceMappingURL=contactDetail.component.js.map

/***/ }),

/***/ 74:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactEditComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_repository__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__models_contact_model__ = __webpack_require__(38);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ContactEditComponent = (function () {
    function ContactEditComponent(repo, router, activeRoute) {
        this.repo = repo;
        var id = Number.parseInt(activeRoute.snapshot.params["id"]);
        if (id >> 0) {
            this.repo.getContact(id);
            this.repo.getCompanies();
        }
        else {
            this.repo.contact = new __WEBPACK_IMPORTED_MODULE_3__models_contact_model__["a" /* Contact */]();
            this.repo.getCompanies();
        }
    }
    Object.defineProperty(ContactEditComponent.prototype, "contact", {
        get: function () {
            return this.repo.contact;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ContactEditComponent.prototype, "company", {
        get: function () {
            return this.repo.company;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ContactEditComponent.prototype, "companies", {
        get: function () {
            return this.repo.companies;
        },
        enumerable: true,
        configurable: true
    });
    ContactEditComponent.prototype.saveContact = function (id) {
        if (id) {
            console.log("replace " + id);
            this.repo.replaceContact(this.repo.contact);
        }
        else {
            console.log("create");
            this.createContact();
        }
    };
    ContactEditComponent.prototype.createContact = function () {
        this.repo.createContact(this.repo.contact);
    };
    ContactEditComponent.prototype.setBirthday = function (value) {
        this.contact.birthday = value;
    };
    return ContactEditComponent;
}());
ContactEditComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_10" /* Component */])({
        selector: "contact-edit",
        template: __webpack_require__(184)
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__models_repository__["a" /* Repository */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__models_repository__["a" /* Repository */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */]) === "function" && _c || Object])
], ContactEditComponent);

var _a, _b, _c;
//# sourceMappingURL=contactEdit.component.js.map

/***/ }),

/***/ 75:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactTableComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_repository__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__models_contact_model__ = __webpack_require__(38);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ContactTableComponent = (function () {
    function ContactTableComponent(repo, router) {
        this.repo = repo;
        this.router = router;
    }
    Object.defineProperty(ContactTableComponent.prototype, "contacts", {
        get: function () {
            return this.repo.contacts;
        },
        enumerable: true,
        configurable: true
    });
    ContactTableComponent.prototype.selectContact = function (id) {
        this.repo.getContact(id);
        this.router.navigateByUrl("condet");
    };
    ContactTableComponent.prototype.clearContact = function () {
        // this.repo.contact = new Contact(0);
        // this.router.navigateByUrl("conedi/" + this.repo.contact.id);
        this.repo.contact = new __WEBPACK_IMPORTED_MODULE_3__models_contact_model__["a" /* Contact */]();
        this.router.navigateByUrl("conedi");
    };
    return ContactTableComponent;
}());
ContactTableComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_10" /* Component */])({
        selector: "contact-table",
        template: __webpack_require__(185)
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__models_repository__["a" /* Repository */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__models_repository__["a" /* Repository */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _b || Object])
], ContactTableComponent);

var _a, _b;
//# sourceMappingURL=contactTable.component.js.map

/***/ }),

/***/ 8:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Repository; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__configClasses_repository__ = __webpack_require__(114);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(71);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(193);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__errorHandler_service__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_catch__ = __webpack_require__(192);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_catch__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var contactUrl = "/api/contacts";
var companyUrl = "/api/companies";
var Repository = (function () {
    function Repository(http) {
        this.http = http;
        this.filterObject = new __WEBPACK_IMPORTED_MODULE_0__configClasses_repository__["a" /* Filter */]();
        this.paginationObject = new __WEBPACK_IMPORTED_MODULE_0__configClasses_repository__["b" /* Pagination */]();
        //this.getContact(2);
        //this.getCompany(1);
        this.filter.related = true;
        this.getContacts();
    }
    Repository.prototype.getContact = function (id) {
        var _this = this;
        this.sendRequest(__WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* RequestMethod */].Get, contactUrl + "/" + id)
            .subscribe(function (response) { _this.contact = response; });
    };
    Repository.prototype.getContacts = function () {
        var _this = this;
        var url = contactUrl + "/" + "?related=" + this.filter.related;
        if (this.filter.company) {
            url += "&company=" + this.filter.company;
        }
        if (this.filter.search) {
            url += "&search=" + this.filter.search;
        }
        this.sendRequest(__WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* RequestMethod */].Get, url)
            .subscribe(function (response) {
            _this.contacts = response;
            _this.pagination.currentPage = 1;
        });
    };
    Repository.prototype.createContact = function (c) {
        var _this = this;
        var data = {
            firstname: c.firstname,
            surname: c.surname,
            birthday: c.birthday,
            email: c.email,
            website: c.website,
            phone: c.phone,
            company: c.company ? c.company.id : 0
        };
        this.sendRequest(__WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* RequestMethod */].Post, contactUrl, data)
            .subscribe(function (response) {
            c.id = response;
            _this.contacts.push(c);
        });
    };
    Repository.prototype.replaceContact = function (c) {
        var _this = this;
        var data = {
            firstname: c.firstname,
            surname: c.surname,
            birthday: c.birthday,
            email: c.email,
            website: c.website,
            phone: c.phone,
            company: c.company ? c.company.id : 0
        };
        this.sendRequest(__WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* RequestMethod */].Put, contactUrl + "/" + c.id, data)
            .subscribe(function (response) { return _this.getContacts(); });
    };
    Repository.prototype.deleteContact = function (id) {
        var _this = this;
        this.sendRequest(__WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* RequestMethod */].Delete, contactUrl + "/" + id)
            .subscribe(function (response) { return _this.getContacts(); });
    };
    Repository.prototype.getCompany = function (id) {
        var _this = this;
        this.sendRequest(__WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* RequestMethod */].Get, companyUrl + "/" + id)
            .subscribe(function (response) { _this.company = response; });
    };
    Repository.prototype.getCompanies = function () {
        var _this = this;
        this.sendRequest(__WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* RequestMethod */].Get, companyUrl)
            .subscribe(function (respone) {
            _this.companies = respone;
        });
    };
    Repository.prototype.createCompany = function (c) {
        var _this = this;
        var data = {
            name: c.name,
            email: c.email,
            website: c.website,
            phone: c.phone,
            contact: null
        };
        this.sendRequest(__WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* RequestMethod */].Post, companyUrl, data)
            .subscribe(function (response) {
            c.id = response;
            _this.companies.push(c);
        });
    };
    Repository.prototype.replaceCompany = function (c) {
        var _this = this;
        var data = {
            name: c.name,
            email: c.email,
            website: c.website,
            phone: c.phone
        };
        this.sendRequest(__WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* RequestMethod */].Put, companyUrl + "/" + c.id, data)
            .subscribe(function (response) { return _this.getCompanies(); });
    };
    Repository.prototype.deleteCompany = function (id) {
        var _this = this;
        this.sendRequest(__WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* RequestMethod */].Delete, companyUrl + "/" + id)
            .subscribe(function (response) { return _this.getCompanies(); });
    };
    Repository.prototype.sendRequest = function (verb, url, data) {
        return this.http.request(new __WEBPACK_IMPORTED_MODULE_2__angular_http__["c" /* Request */]({
            method: verb, url: url, body: data
        })).map(function (response) {
            return response.headers.get("Content-Lenth") != "0" ? response.json() : null;
        }).catch(function (errorResponse) {
            if (errorResponse.status == 400) {
                var jsonData_1;
                try {
                    jsonData_1 = errorResponse.json();
                }
                catch (e) {
                    throw new Error("Network Error");
                }
                var messages = Object.getOwnPropertyNames(jsonData_1)
                    .map(function (p) { return jsonData_1[p]; });
                throw new __WEBPACK_IMPORTED_MODULE_4__errorHandler_service__["b" /* ValidationError */](messages);
            }
            throw new Error("Network Error");
        });
    };
    Object.defineProperty(Repository.prototype, "filter", {
        get: function () {
            return this.filterObject;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Repository.prototype, "pagination", {
        get: function () {
            return this.paginationObject;
        },
        enumerable: true,
        configurable: true
    });
    return Repository;
}());
Repository = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["v" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_http__["d" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_http__["d" /* Http */]) === "function" && _a || Object])
], Repository);

var _a;
//# sourceMappingURL=repository.js.map

/***/ })

},[223]);
//# sourceMappingURL=main.bundle.js.map