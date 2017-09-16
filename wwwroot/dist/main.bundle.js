webpackJsonp([1],{

/***/ 103:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_repository__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_contact_model__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__models_company_model__ = __webpack_require__(109);
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
    function AppComponent(repo) {
        this.repo = repo;
    }
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
        template: __webpack_require__(176),
        styles: [__webpack_require__(169)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__models_repository__["a" /* Repository */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__models_repository__["a" /* Repository */]) === "function" && _a || Object])
], AppComponent);

var _a;
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 104:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_routing__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__models_model_module__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__dashboard_dashboard_module__ = __webpack_require__(107);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








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
        providers: [],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 105:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RoutingConfig; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__structure_contactTable_component__ = __webpack_require__(71);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__structure_contactDetail_component__ = __webpack_require__(70);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__dashboard_contactSelection_component__ = __webpack_require__(69);




var routes = [
    { path: "contab", component: __WEBPACK_IMPORTED_MODULE_1__structure_contactTable_component__["a" /* ContactTableComponent */] },
    { path: "condet", component: __WEBPACK_IMPORTED_MODULE_2__structure_contactDetail_component__["a" /* ContactDetailComponent */] },
    { path: "condet/:id", component: __WEBPACK_IMPORTED_MODULE_2__structure_contactDetail_component__["a" /* ContactDetailComponent */] },
    { path: "dashboard", component: __WEBPACK_IMPORTED_MODULE_3__dashboard_contactSelection_component__["a" /* ContactSelectionComponent */] },
    { path: "", component: __WEBPACK_IMPORTED_MODULE_3__dashboard_contactSelection_component__["a" /* ContactSelectionComponent */] }
];
var RoutingConfig = __WEBPACK_IMPORTED_MODULE_0__angular_router__["a" /* RouterModule */].forRoot(routes);
//# sourceMappingURL=app.routing.js.map

/***/ }),

/***/ 106:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_repository__ = __webpack_require__(11);
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
    return ContactListComponent;
}());
ContactListComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_10" /* Component */])({
        selector: "dashboard-contact-list",
        template: __webpack_require__(177)
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__models_repository__["a" /* Repository */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__models_repository__["a" /* Repository */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _b || Object])
], ContactListComponent);

var _a, _b;
//# sourceMappingURL=contactList.component.js.map

/***/ }),

/***/ 107:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__dashboard_pagination_component__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__dashboard_contactList_component__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__dashboard_contactSelection_component__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__structure_contactTable_component__ = __webpack_require__(71);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__structure_contactDetail_component__ = __webpack_require__(70);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__structure_searchFilter_component__ = __webpack_require__(114);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__structure_navigation_component__ = __webpack_require__(113);
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
            __WEBPACK_IMPORTED_MODULE_5__dashboard_contactSelection_component__["a" /* ContactSelectionComponent */],
            __WEBPACK_IMPORTED_MODULE_4__dashboard_contactList_component__["a" /* ContactListComponent */],
            __WEBPACK_IMPORTED_MODULE_8__structure_searchFilter_component__["a" /* SearchFilterComponent */],
            __WEBPACK_IMPORTED_MODULE_3__dashboard_pagination_component__["a" /* PaginationComponent */],
            __WEBPACK_IMPORTED_MODULE_6__structure_contactTable_component__["a" /* ContactTableComponent */],
            __WEBPACK_IMPORTED_MODULE_7__structure_contactDetail_component__["a" /* ContactDetailComponent */],
            __WEBPACK_IMPORTED_MODULE_9__structure_navigation_component__["a" /* NavigationComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* RouterModule */]
        ],
        exports: [__WEBPACK_IMPORTED_MODULE_5__dashboard_contactSelection_component__["a" /* ContactSelectionComponent */]]
    })
], DashboardModule);

//# sourceMappingURL=dashboard.module.js.map

/***/ }),

/***/ 108:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PaginationComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_repository__ = __webpack_require__(11);
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
        template: __webpack_require__(179)
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__models_repository__["a" /* Repository */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__models_repository__["a" /* Repository */]) === "function" && _a || Object])
], PaginationComponent);

var _a;
//# sourceMappingURL=pagination.component.js.map

/***/ }),

/***/ 109:
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

/***/ 11:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Repository; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__configClasses_repository__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(188);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
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
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_http__["d" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_http__["d" /* Http */]) === "function" && _a || Object])
], Repository);

var _a;
//# sourceMappingURL=repository.js.map

/***/ }),

/***/ 110:
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

/***/ 111:
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

/***/ 112:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ModelModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__repository__ = __webpack_require__(11);
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

/***/ 113:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavigationComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_repository__ = __webpack_require__(11);
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
        template: __webpack_require__(182)
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__models_repository__["a" /* Repository */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__models_repository__["a" /* Repository */]) === "function" && _a || Object])
], NavigationComponent);

var _a;
//# sourceMappingURL=navigation.component.js.map

/***/ }),

/***/ 114:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchFilterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_repository__ = __webpack_require__(11);
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
        template: __webpack_require__(183)
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__models_repository__["a" /* Repository */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__models_repository__["a" /* Repository */]) === "function" && _a || Object])
], SearchFilterComponent);

var _a;
//# sourceMappingURL=searchFilter.component.js.map

/***/ }),

/***/ 169:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(55)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 176:
/***/ (function(module, exports) {

module.exports = "<!-- <button class=\"btn btn-primary m-1\" (click)=\"createContact()\">\n  Create Contact\n</button>\n<button class=\"btn btn-primary m-1\" (click)=\"replaceContact()\">\n  Replace Contact\n</button>\n<button class=\"btn btn-primary m-1\" (click)=\"deleteContact()\">\n  Delete Contact\n</button>\n\n<button class=\"btn btn-primary m-1\" (click)=\"createCompany()\">\n  Create Company\n</button>\n<button class=\"btn btn-primary m-1\" (click)=\"replaceCompany()\">\n  Replace Company\n</button>\n<button class=\"btn btn-primary m-1\" (click)=\"deleteCompany()\">\n  Delete Company\n</button> -->\n\n<!-- <div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col\">\n      <search-filter></search-filter>\n      <contact-table></contact-table>\n    </div>\n    <div class=\"col\">\n      <contact-detail></contact-detail>\n    </div>\n  </div>\n</div> -->\n\n<router-outlet></router-outlet>"

/***/ }),

/***/ 177:
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"contacts?.length > 0; else nodata\" class=\"mx-3 my-3\">\n    <div *ngFor=\"let contact of contacts\" class=\"card cats-outline-cyan my-3\">\n        <!-- <div class=\"card-header\">{{contact?.firstname}} {{contact?.surname}}</div> -->\n        <div class=\"row\">\n            <div class=\"col-9\">\n                <div class=\"card-block\">\n                    <h5 class=\"card-title\">{{contact?.firstname}} {{contact?.surname}}</h5>\n                    <h6 class=\"card-subtitle mb-2 text-muted\">{{contact?.company?.name || 'No Data'}}</h6>\n                    <!-- <p class=\"card-text\">Some quick example text to build on the card title and make up the bulk of the card's content.</p> -->\n                </div>\n            </div>\n            <div class=\"col-3\" style=\"min-width: 64px;\">\n                <!-- <img class=\"mx-auto d-block \" src=\"/images/default/cat_64.png\" alt=\"Card image cap\"> -->\n                <img class=\" cats-img-mrt pull-right\" src=\"/images/default/cat_64.png\" alt=\"Card image cap\">\n            </div>\n        </div>\n        <div class=\"row\">\n            <div class=\"col\">\n                <div class=\"card-block\">\n                    <!-- <h5 class=\"card-title\">{{contact?.firstname}} {{contact?.surname}}</h5>\n                    <h6 class=\"card-subtitle mb-2 text-muted\">{{contact?.company?.name || 'No Data'}}</h6> -->\n                    <p class=\"card-text\">Some quick example text to build on the card title and make up the bulk of the card's content.</p>\n                </div>\n            </div>\n        </div>\n        <div class=\"card-footer\">\n            <a class=\"btn btn-default cats-color-dark\" [routerLink]=\"['/conedi', contact.id]\" aria-label=\"Settings\">\n                <i class=\"fa fa-cog fa-lg\" aria-hidden=\"true\"></i>\n            </a>\n            <a class=\"btn btn-default cats-color-dark\" [routerLink]=\"['/condet', contact.id]\" aria-label=\"Address\">\n                <i class=\"fa fa-address-card-o fa-lg\" aria-hidden=\"true\"></i>\n            </a>\n        </div>\n    </div>\n</div>\n\n<ng-template #nodata>\n    <h4 class=\"m-1\">Waiting for data..</h4>\n</ng-template>"

/***/ }),

/***/ 178:
/***/ (function(module, exports) {

module.exports = "<navigation></navigation>\n\n<div class=\"row no-gutters\">\n    <div class=\"col mx-auto\" style=\"max-width: 900px;\">\n        <dashboard-contact-list></dashboard-contact-list>\n        <dashboard-pagination></dashboard-pagination>\n    </div>\n</div>"

/***/ }),

/***/ 179:
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"pages.length > 1\" class=\"text-right my-2\">\n    <button *ngFor=\"let page of pages\"\n        class=\"btn cats-btn-dark mx-1\"\n        [class.active]=\"current == page\"\n        (click)=\"changePage(page)\">\n        {{page}}\n    </button>\n</div>"

/***/ }),

/***/ 180:
/***/ (function(module, exports) {

module.exports = "<navigation></navigation>\n<div class=\"mx-auto my-3\" style=\"max-width: 900px;\">\n    <table class=\"table table-striped\">\n        <tr><th colspan=\"2\" class=\"cats-bg-gray cats-color-dark\">Contact</th></tr>\n        <tr><th>Firstname</th><td>{{contact?.firstname}}</td></tr>\n        <tr><th>Surname</th><td>{{contact?.surname}}</td></tr>\n        <tr><th>Birthday</th><td>{{contact?.birthday || 'No Data'}}</td></tr>\n        <tr><th>E-Mail</th><td>{{contact?.email || 'No Data'}}</td></tr>\n        <tr><th>Website</th><td>{{contact?.website || 'No Data'}}</td></tr>\n        <tr><th>Phone</th><td>{{contact?.phone || 'No Data'}}</td></tr>\n        <tr><th>Company</th><td>{{contact?.company?.name || \"No Data\"}}</td></tr>\n        <tr><th colspan=\"2\" class=\"cats-bg-gray cats-color-dark\">Company</th></tr>\n        <tr><th>Name</th><td>{{contact?.company?.name || \"No Data\"}}</td></tr>\n        <tr><th>Website</th><td>{{contact?.company?.website || \"No Data\"}}</td></tr>\n        <tr><th>E-Mail</th><td>{{contact?.company?.email || \"No Data\"}}</td></tr>\n        <tr><th>Phone</th><td>{{contact?.company?.phone || \"No Data\"}}</td></tr>\n    </table>\n    <div class=\"text-right mx-3 my-3\">\n        <button class=\"btn cats-btn-dark\" routerLink=\"/contab\">Contacts Table</button>\n        <button class=\"btn cats-btn-dark\" routerLink=\"/dashboard\">Dashboard</button>\n    </div>\n</div>"

/***/ }),

/***/ 181:
/***/ (function(module, exports) {

module.exports = "<navigation></navigation>\n<div class=\"mx-auto my-3\" style=\"max-width: 900px;\">\n    <table class=\"table table-striped mx-auto\" style=\"max-width: 900px;\">\n        <tr>\n            <th>Firstname</th>\n            <th>Surname</th>\n            <!-- <th>Birthday</th> -->\n            <th>E-Mail</th>\n            <!-- <th>Website</th> -->\n            <th>Phone</th>\n            <th>Company</th>\n            <th></th>\n            <th></th>\n        </tr>\n        <tr *ngFor=\"let contact of contacts\">\n            <td>{{contact?.firstname}}</td>\n            <td>{{contact?.surname}}</td>\n            <!-- <td>{{contact?.birthday || 'None'}}</td> -->\n            <td>{{contact?.email || 'None'}}</td>\n            <!-- <td>{{contact?.website || 'None'}}</td> -->\n            <td>{{contact?.phone || 'None'}}</td>\n            <td>{{contact?.company?.name}}</td>\n            <!-- <td (click)=\"editContact(contact.id)\">Edit</td> -->\n            <td [routerLink]=\"['/conedi']\">Edit</td>\n            <!-- <td (click)=\"selectContact(contact.id)\">Detail</td> -->\n            <td [routerLink]=\"['/condet', contact.id]\">Detail</td>\n        </tr>\n    </table>\n    <div class=\"text-right mx-3 my-3\">\n        <button class=\"btn cats-btn-dark\" routerLink=\"/dashboard\">Dashboard</button>\n    </div>\n</div>"

/***/ }),

/***/ 182:
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-toggleable-sm cats-navbar-dark cats-bg-dark \">\n    <button class=\"navbar-toggler navbar-toggler-right\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarNavDropdown\" aria-controls=\"navbarNavDropdown\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n        <span class=\"navbar-toggler-icon\"></span>\n    </button>\n    <a class=\"navbar-brand text-white\" href=\"/\">\n        <img src=\"/images/brand/logo_45.png\" width=\"35\" height=\"35\" class=\"d-inline-block align-top\" alt=\"logo\">\n        Cats Love Contacts</a>\n    <div class=\"collapse navbar-collapse\" id=\"navbarNavDropdown\">\n        <ul class=\"navbar-nav mr-auto\">\n            <li class=\"nav-item dropdown\">\n                <a class=\"nav-link dropdown-toggle  disabled\" href=\"http://example.com\" id=\"navbarDropdownMenuLink\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n                Profile\n                </a>\n                <div class=\"dropdown-menu\" aria-labelledby=\"navbarDropdownMenuLink\">\n                    <a class=\"dropdown-item\" href=\"/\">Settings</a>\n                    <a class=\"dropdown-item\" href=\"/\">Login / Logout</a>\n                </div>\n            </li>\n            <li class=\"nav-item\">\n                <a class=\"nav-link\" [routerLink]=\"['/dashboard']\">Dasboard<span class=\"sr-only\">(current)</span></a>\n            </li>\n            <li class=\"nav-item\">\n                <a class=\"nav-link\" [routerLink]=\"['/contab']\">Contacts</a>\n            </li>\n            <li class=\"nav-item\">\n                <a class=\"nav-link\" [routerLink]=\"['/comtab']\">Companies</a>\n            </li>\n        </ul>\n        <ul class=\"navbar-nav\">\n            <li class=\"nav-item\">\n                <search-filter></search-filter>\n            </li>\n        </ul>\n    </div>\n</nav>"

/***/ }),

/***/ 183:
/***/ (function(module, exports) {

module.exports = "<!-- <div class=\"form-group has-feedback\">   \n    <input #searchFilter type=\"text\" class=\"form-control\" placeholder=\"Search...\" (input)=\"setSearch(searchFilter.value)\">\n    <!-- <span class=\"form-control-feedback\">\n        <i class=\"fa fa-search\"></i>\n    </span> -->\n<!-- </div> -->\n<div class=\"input-group input-group-unstyled\">\n    <input #searchFilter type=\"text\" class=\"form-control\" placeholder=\"Search...\" (input)=\"setSearch(searchFilter.value)\" />\n    <span class=\"input-group-addon text-white\">\n        <i class=\"fa fa-search\"></i>\n    </span>\n</div>\n<!-- custom: https://stackoverflow.com/questions/24682421/put-search-icon-near-textbox-using-bootstrap -->"

/***/ }),

/***/ 219:
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(18);
module.exports = __webpack_require__(97);


/***/ }),

/***/ 67:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	return new Promise(function(resolve, reject) { reject(new Error("Cannot find module '" + req + "'.")); });
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 67;

/***/ }),

/***/ 69:
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
        template: __webpack_require__(178)
    })
], ContactSelectionComponent);

//# sourceMappingURL=contactSelection.component.js.map

/***/ }),

/***/ 70:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactDetailComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_repository__ = __webpack_require__(11);
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
        template: __webpack_require__(180)
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__models_repository__["a" /* Repository */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__models_repository__["a" /* Repository */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */]) === "function" && _c || Object])
], ContactDetailComponent);

var _a, _b, _c;
//# sourceMappingURL=contactDetail.component.js.map

/***/ }),

/***/ 71:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactTableComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_repository__ = __webpack_require__(11);
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
    return ContactTableComponent;
}());
ContactTableComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_10" /* Component */])({
        selector: "contact-table",
        template: __webpack_require__(181)
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__models_repository__["a" /* Repository */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__models_repository__["a" /* Repository */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _b || Object])
], ContactTableComponent);

var _a, _b;
//# sourceMappingURL=contactTable.component.js.map

/***/ }),

/***/ 97:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_app_module__ = __webpack_require__(104);


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

/***/ })

},[219]);
//# sourceMappingURL=main.bundle.js.map