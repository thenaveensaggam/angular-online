(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "/oCP":
/*!*****************************************!*\
  !*** ./src/app/effects/root.effects.ts ***!
  \*****************************************/
/*! exports provided: RootEffects */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RootEffects", function() { return RootEffects; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/effects */ "9jGm");



class RootEffects {
    constructor(actions$) {
        this.actions$ = actions$;
    }
}
RootEffects.ɵfac = function RootEffects_Factory(t) { return new (t || RootEffects)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["Actions"])); };
RootEffects.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: RootEffects, factory: RootEffects.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RootEffects, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["Actions"] }]; }, null); })();


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! E:\Angular_10_for_Students\BrainsKartApplication\client\src\main.ts */"zUnb");


/***/ }),

/***/ "38Tt":
/*!***********************************************!*\
  !*** ./src/app/users/actions/user.actions.ts ***!
  \***********************************************/
/*! exports provided: loadUser, loadUserSuccess, loadUserFailure, registerUser, registerUserSuccess, registerUserFailure, loginUser, loginUserSuccess, loginUserFailure, logOut, updateAddress, updateAddressSuccess, updateAddressFailure */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadUser", function() { return loadUser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadUserSuccess", function() { return loadUserSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadUserFailure", function() { return loadUserFailure; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "registerUser", function() { return registerUser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "registerUserSuccess", function() { return registerUserSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "registerUserFailure", function() { return registerUserFailure; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loginUser", function() { return loginUser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loginUserSuccess", function() { return loginUserSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loginUserFailure", function() { return loginUserFailure; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "logOut", function() { return logOut; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateAddress", function() { return updateAddress; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateAddressSuccess", function() { return updateAddressSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateAddressFailure", function() { return updateAddressFailure; });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ "l7P3");

// Get User Info from server , after login
const loadUser = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[User] Load User');
const loadUserSuccess = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[User] Load User Success', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
const loadUserFailure = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[User] Load User Failure', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
// register a user
const registerUser = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[User] register User', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
const registerUserSuccess = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[User] register User Success', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
const registerUserFailure = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[User] register User Failure', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
// Login a user
const loginUser = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[User] Login User', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
const loginUserSuccess = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[User] Login User Success', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
const loginUserFailure = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[User] Login User Failure', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
// Logout  a user
const logOut = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[User] Logout User');
// Update Address of user
const updateAddress = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[User] Update Address', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
const updateAddressSuccess = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[User] Update Address Success', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
const updateAddressFailure = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[User] Update Address Failure', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());


/***/ }),

/***/ "AytR":
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
const environment = {
    production: false,
    apiURL: 'https://evening-woodland-49120.herokuapp.com',
    stripe_publishable_key: 'pk_test_51Gp6XPGiODtWn5F0vtxvFvIwcU5cOQfH2ltufOmqQBXYEw5SGaWrg9uBP90Kl2CJaGFIrpFP79jQvDwM43vfjFuJ0097fvqDzq'
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

/***/ "I7aM":
/*!******************************************************!*\
  !*** ./src/app/products/reducers/product.reducer.ts ***!
  \******************************************************/
/*! exports provided: productFeatureKey, initialState, reducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "productFeatureKey", function() { return productFeatureKey; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return initialState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reducer", function() { return reducer; });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ "l7P3");
/* harmony import */ var _actions_product_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../actions/product.actions */ "lzi2");


const productFeatureKey = 'product';
const initialState = {
    loading: false,
    products: [],
    selectedProduct: null,
    errorMessage: ''
};
const reducer = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createReducer"])(initialState, Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_actions_product_actions__WEBPACK_IMPORTED_MODULE_1__["uploadProducts"], (state, { product }) => {
    return Object.assign(Object.assign({}, state), { loading: true });
}), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_actions_product_actions__WEBPACK_IMPORTED_MODULE_1__["uploadProductsSuccess"], (state, { product }) => {
    return Object.assign(Object.assign({}, state), { loading: false });
}), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_actions_product_actions__WEBPACK_IMPORTED_MODULE_1__["uploadProductsFailure"], (state, { error }) => {
    return Object.assign(Object.assign({}, state), { loading: false, errorMessage: error });
}), 
// Get Men's Collection
Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_actions_product_actions__WEBPACK_IMPORTED_MODULE_1__["getMensCollection"], (state) => {
    return Object.assign(Object.assign({}, state), { loading: true });
}), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_actions_product_actions__WEBPACK_IMPORTED_MODULE_1__["getMensCollectionSuccess"], (state, { products }) => {
    return Object.assign(Object.assign({}, state), { loading: false, products: products });
}), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_actions_product_actions__WEBPACK_IMPORTED_MODULE_1__["getMensCollectionFailure"], (state, { error }) => {
    return Object.assign(Object.assign({}, state), { loading: false, errorMessage: error });
}), 
// Get Women's Collection
Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_actions_product_actions__WEBPACK_IMPORTED_MODULE_1__["getWomensCollection"], (state) => {
    return Object.assign(Object.assign({}, state), { loading: true });
}), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_actions_product_actions__WEBPACK_IMPORTED_MODULE_1__["getWomensCollectionSuccess"], (state, { products }) => {
    return Object.assign(Object.assign({}, state), { loading: false, products: products });
}), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_actions_product_actions__WEBPACK_IMPORTED_MODULE_1__["getWomensCollectionFailure"], (state, { error }) => {
    return Object.assign(Object.assign({}, state), { loading: false, errorMessage: error });
}), 
// Get Kid's Collection
Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_actions_product_actions__WEBPACK_IMPORTED_MODULE_1__["getKidsCollection"], (state) => {
    return Object.assign(Object.assign({}, state), { loading: true });
}), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_actions_product_actions__WEBPACK_IMPORTED_MODULE_1__["getKidsCollectionSuccess"], (state, { products }) => {
    return Object.assign(Object.assign({}, state), { loading: false, products: products });
}), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_actions_product_actions__WEBPACK_IMPORTED_MODULE_1__["getKidsCollectionFailure"], (state, { error }) => {
    return Object.assign(Object.assign({}, state), { loading: false, errorMessage: error });
}), 
// Get Product Details
Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_actions_product_actions__WEBPACK_IMPORTED_MODULE_1__["getProductDetails"], (state) => {
    return Object.assign(Object.assign({}, state), { loading: true });
}), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_actions_product_actions__WEBPACK_IMPORTED_MODULE_1__["getProductDetailsSuccess"], (state, { product }) => {
    return Object.assign(Object.assign({}, state), { loading: false, selectedProduct: product });
}), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_actions_product_actions__WEBPACK_IMPORTED_MODULE_1__["getProductDetailsFailure"], (state, { error }) => {
    return Object.assign(Object.assign({}, state), { loading: false, errorMessage: error });
}));


/***/ }),

/***/ "IGZg":
/*!***********************************!*\
  !*** ./src/app/reducers/index.ts ***!
  \***********************************/
/*! exports provided: reducers, metaReducers */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reducers", function() { return reducers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "metaReducers", function() { return metaReducers; });
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../environments/environment */ "AytR");
/* harmony import */ var _products_reducers_product_reducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../products/reducers/product.reducer */ "I7aM");
/* harmony import */ var _orders_reducers_order_reducer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../orders/reducers/order.reducer */ "RVPP");
/* harmony import */ var _users_reducers_user_reducer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../users/reducers/user.reducer */ "x2SL");




const reducers = {
    [_products_reducers_product_reducer__WEBPACK_IMPORTED_MODULE_1__["productFeatureKey"]]: _products_reducers_product_reducer__WEBPACK_IMPORTED_MODULE_1__["reducer"],
    [_orders_reducers_order_reducer__WEBPACK_IMPORTED_MODULE_2__["orderFeatureKey"]]: _orders_reducers_order_reducer__WEBPACK_IMPORTED_MODULE_2__["reducer"],
    [_users_reducers_user_reducer__WEBPACK_IMPORTED_MODULE_3__["userFeatureKey"]]: _users_reducers_user_reducer__WEBPACK_IMPORTED_MODULE_3__["reducer"]
};
const metaReducers = !_environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].production ? [] : [];


/***/ }),

/***/ "IQPI":
/*!*******************************************************!*\
  !*** ./src/app/root/interceptors/auth.interceptor.ts ***!
  \*******************************************************/
/*! exports provided: AuthInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthInterceptor", function() { return AuthInterceptor; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/auth.service */ "kkBn");



class AuthInterceptor {
    constructor(authService) {
        this.authService = authService;
    }
    intercept(request, next) {
        let tokenizedRequest = request.clone({
            setHeaders: {
                'Authorization': `Bearer ${this.authService.getToken()}`
            }
        });
        return next.handle(tokenizedRequest);
    }
}
AuthInterceptor.ɵfac = function AuthInterceptor_Factory(t) { return new (t || AuthInterceptor)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"])); };
AuthInterceptor.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AuthInterceptor, factory: AuthInterceptor.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthInterceptor, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"] }]; }, null); })();


/***/ }),

/***/ "JKHU":
/*!***********************************************!*\
  !*** ./src/app/users/effects/user.effects.ts ***!
  \***********************************************/
/*! exports provided: UserEffects */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserEffects", function() { return UserEffects; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/effects */ "9jGm");
/* harmony import */ var _actions_user_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../actions/user.actions */ "38Tt");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../services/user.service */ "zLM3");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "tyNb");










class UserEffects {
    constructor(actions$, userService, router) {
        this.actions$ = actions$;
        this.userService = userService;
        this.router = router;
        this.registerUser = () => {
            return this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_actions_user_actions__WEBPACK_IMPORTED_MODULE_3__["registerUser"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["concatMap"])((action) => this.userService.registerUser(action.user).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])((obj) => _actions_user_actions__WEBPACK_IMPORTED_MODULE_3__["registerUserSuccess"]({ result: obj.result })), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])((error) => Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["of"])(_actions_user_actions__WEBPACK_IMPORTED_MODULE_3__["registerUserFailure"]({ error: error }))))));
        };
        this.loginUser = () => {
            return this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_actions_user_actions__WEBPACK_IMPORTED_MODULE_3__["loginUser"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["concatMap"])((action) => this.userService.loginUser(action.user).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])((obj) => _actions_user_actions__WEBPACK_IMPORTED_MODULE_3__["loginUserSuccess"]({ result: obj.result, token: obj.token })), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])((error) => Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["of"])(_actions_user_actions__WEBPACK_IMPORTED_MODULE_3__["loginUserFailure"]({ error: error }))))));
        };
        this.loadUser = () => {
            return this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_actions_user_actions__WEBPACK_IMPORTED_MODULE_3__["loadUser"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["mergeMap"])((action) => this.userService.loadUser().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])((user) => _actions_user_actions__WEBPACK_IMPORTED_MODULE_3__["loadUserSuccess"]({ user: user })), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])((error) => Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["of"])(_actions_user_actions__WEBPACK_IMPORTED_MODULE_3__["loadUserFailure"]({ error: error }))))));
        };
        this.updateAddress = () => {
            return this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_actions_user_actions__WEBPACK_IMPORTED_MODULE_3__["updateAddress"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["concatMap"])((action) => this.userService.updateAddress(action.address).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])((user) => _actions_user_actions__WEBPACK_IMPORTED_MODULE_3__["updateAddressSuccess"]({ user: user })), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])((error) => Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["of"])(_actions_user_actions__WEBPACK_IMPORTED_MODULE_3__["updateAddressFailure"]({ error: error }))))));
        };
        // register User Success redirect to 'login page'
        this.registerUserSuccess = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_actions_user_actions__WEBPACK_IMPORTED_MODULE_3__["registerUserSuccess"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(() => this.router.navigate(['/users/login'])));
        // login User Success redirect to 'home page'
        this.loginUserSuccess = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_actions_user_actions__WEBPACK_IMPORTED_MODULE_3__["loginUserSuccess"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(() => this.router.navigate(['/'])));
    }
}
UserEffects.ɵfac = function UserEffects_Factory(t) { return new (t || UserEffects)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Actions"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_services_user_service__WEBPACK_IMPORTED_MODULE_6__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"])); };
UserEffects.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: UserEffects, factory: UserEffects.ɵfac });
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Effect"])() // registerUser
], UserEffects.prototype, "registerUser", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Effect"])() // loginUser
], UserEffects.prototype, "loginUser", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Effect"])() // loadUser
], UserEffects.prototype, "loadUser", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Effect"])() // update Address
], UserEffects.prototype, "updateAddress", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Effect"])({ dispatch: false })
], UserEffects.prototype, "registerUserSuccess", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Effect"])({ dispatch: false })
], UserEffects.prototype, "loginUserSuccess", void 0);
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](UserEffects, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"]
    }], function () { return [{ type: _ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Actions"] }, { type: _services_user_service__WEBPACK_IMPORTED_MODULE_6__["UserService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"] }]; }, { registerUser: [], loginUser: [], loadUser: [], updateAddress: [], registerUserSuccess: [], loginUserSuccess: [] }); })();


/***/ }),

/***/ "QiYn":
/*!**************************************************!*\
  !*** ./src/app/orders/services/order.service.ts ***!
  \**************************************************/
/*! exports provided: OrderService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderService", function() { return OrderService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../environments/environment */ "AytR");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "tk/3");






class OrderService {
    constructor(httpClient) {
        this.httpClient = httpClient;
    }
    // send Cart Items to Server
    sendCartToServer(cartItems) {
        let dataURL = `${_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiURL}/payment/send-cart`;
        return this.httpClient.post(dataURL, cartItems).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retry"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
    }
    // place Order
    placeOrder({ items, tax, total }) {
        let dataURL = `${_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiURL}/order`;
        return this.httpClient.post(dataURL, { items, tax, total }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retry"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
    }
    // load all Orders
    loadOrders() {
        let dataURL = `${_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiURL}/order`;
        return this.httpClient.get(dataURL).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retry"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
    }
    handleError(error) {
        let errorMessage = "";
        if (error.error instanceof ErrorEvent) {
            // client side error
            errorMessage = error.error.message;
        }
        else {
            // server error
            errorMessage = `Status : ${error.status}  MESSAGE : ${error.message}`;
        }
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(errorMessage);
    }
}
OrderService.ɵfac = function OrderService_Factory(t) { return new (t || OrderService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"])); };
OrderService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: OrderService, factory: OrderService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](OrderService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "RVPP":
/*!**************************************************!*\
  !*** ./src/app/orders/reducers/order.reducer.ts ***!
  \**************************************************/
/*! exports provided: orderFeatureKey, initialState, reducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "orderFeatureKey", function() { return orderFeatureKey; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return initialState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reducer", function() { return reducer; });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ "l7P3");
/* harmony import */ var _actions_order_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../actions/order.actions */ "abVj");


const orderFeatureKey = 'order';
const initialState = {
    loading: false,
    cartItems: [],
    errorMessage: '',
    orders: []
};
const reducer = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createReducer"])(initialState, Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_actions_order_actions__WEBPACK_IMPORTED_MODULE_1__["addToCart"], (state, { product, qty }) => {
    let selectedProduct = Object.assign(Object.assign({}, product), { qty: qty });
    let existingProduct = state.cartItems.find(cartItem => cartItem._id == product._id);
    if (!existingProduct) {
        return Object.assign(Object.assign({}, state), { cartItems: [...state.cartItems, selectedProduct] });
    }
    else {
        return state;
    }
}), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_actions_order_actions__WEBPACK_IMPORTED_MODULE_1__["incrProductQty"], (state, { product }) => {
    let updatedCartItems = state.cartItems.map(cartItem => {
        if (cartItem._id === product._id) {
            return Object.assign(Object.assign({}, cartItem), { qty: cartItem.qty + 1 });
        }
        return cartItem;
    });
    return Object.assign(Object.assign({}, state), { cartItems: [...updatedCartItems] });
}), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_actions_order_actions__WEBPACK_IMPORTED_MODULE_1__["decrProductQty"], (state, { product }) => {
    let updatedCartItems = state.cartItems.map(cartItem => {
        if (cartItem._id === product._id) {
            return Object.assign(Object.assign({}, cartItem), { qty: (cartItem.qty - 1 > 0) ? cartItem.qty - 1 : 1 });
        }
        return cartItem;
    });
    return Object.assign(Object.assign({}, state), { cartItems: [...updatedCartItems] });
}), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_actions_order_actions__WEBPACK_IMPORTED_MODULE_1__["deleteCartItem"], (state, { product }) => {
    let updatedCartItems = state.cartItems.filter(cartItem => cartItem._id !== product._id);
    return Object.assign(Object.assign({}, state), { cartItems: [...updatedCartItems] });
}), 
// send cart Items to server
Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_actions_order_actions__WEBPACK_IMPORTED_MODULE_1__["sendCartToServer"], (state, { cartItems }) => {
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
    return Object.assign(Object.assign({}, state), { loading: true });
}), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_actions_order_actions__WEBPACK_IMPORTED_MODULE_1__["sendCartToServerSuccess"], (state, { data }) => {
    return Object.assign(Object.assign({}, state), { loading: false });
}), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_actions_order_actions__WEBPACK_IMPORTED_MODULE_1__["sendCartToServerFailure"], (state, { error }) => {
    return Object.assign(Object.assign({}, state), { loading: false, errorMessage: error });
}), 
// Place An Order
Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_actions_order_actions__WEBPACK_IMPORTED_MODULE_1__["placeOrder"], (state, { items, tax, total }) => {
    return Object.assign(Object.assign({}, state), { loading: true });
}), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_actions_order_actions__WEBPACK_IMPORTED_MODULE_1__["placeOrderSuccess"], (state, { order }) => {
    return Object.assign(Object.assign({}, state), { loading: false });
}), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_actions_order_actions__WEBPACK_IMPORTED_MODULE_1__["placeOrderFailure"], (state, { error }) => {
    return Object.assign(Object.assign({}, state), { loading: false, errorMessage: error });
}), 
// Load All Orders
Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_actions_order_actions__WEBPACK_IMPORTED_MODULE_1__["loadOrders"], (state) => {
    return Object.assign(Object.assign({}, state), { loading: true });
}), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_actions_order_actions__WEBPACK_IMPORTED_MODULE_1__["loadOrdersSuccess"], (state, { orders }) => {
    return Object.assign(Object.assign({}, state), { loading: false, orders: orders });
}), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_actions_order_actions__WEBPACK_IMPORTED_MODULE_1__["loadOrdersFailure"], (state, { error }) => {
    return Object.assign(Object.assign({}, state), { loading: false, orders: [], errorMessage: error });
}));


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _users_actions_user_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./users/actions/user.actions */ "38Tt");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/store */ "l7P3");
/* harmony import */ var _root_services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./root/services/auth.service */ "kkBn");
/* harmony import */ var _root_components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./root/components/navbar/navbar.component */ "hlyh");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");







class AppComponent {
    constructor(store, authService) {
        this.store = store;
        this.authService = authService;
        this.title = 'BrainsKart | Angular';
        if (authService.getToken()) {
            this.store.dispatch(_users_actions_user_actions__WEBPACK_IMPORTED_MODULE_1__["loadUser"]());
        }
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_root_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"])); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 2, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-navbar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "router-outlet");
    } }, directives: [_root_components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_4__["NavbarComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterOutlet"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.css']
            }]
    }], function () { return [{ type: _ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"] }, { type: _root_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] }]; }, null); })();


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _root_components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./root/components/navbar/navbar.component */ "hlyh");
/* harmony import */ var _root_components_home_home_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./root/components/home/home.component */ "vg3d");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngrx/store */ "l7P3");
/* harmony import */ var _reducers__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./reducers */ "IGZg");
/* harmony import */ var _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ngrx/store-devtools */ "agSv");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../environments/environment */ "AytR");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ngrx/effects */ "9jGm");
/* harmony import */ var _effects_root_effects__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./effects/root.effects */ "/oCP");
/* harmony import */ var _root_interceptors_auth_interceptor__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./root/interceptors/auth.interceptor */ "IQPI");
/* harmony import */ var _users_effects_user_effects__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./users/effects/user.effects */ "JKHU");
/* harmony import */ var _orders_effects_order_effects__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./orders/effects/order.effects */ "oG+y");
/* harmony import */ var _products_effects_product_effects__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./products/effects/product.effects */ "Za8q");






















class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [{
            provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HTTP_INTERCEPTORS"],
            useClass: _root_interceptors_auth_interceptor__WEBPACK_IMPORTED_MODULE_14__["AuthInterceptor"],
            multi: true
        }], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
            _ngrx_store__WEBPACK_IMPORTED_MODULE_8__["StoreModule"].forRoot(_reducers__WEBPACK_IMPORTED_MODULE_9__["reducers"], { metaReducers: _reducers__WEBPACK_IMPORTED_MODULE_9__["metaReducers"] }),
            !_environments_environment__WEBPACK_IMPORTED_MODULE_11__["environment"].production ? _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_10__["StoreDevtoolsModule"].instrument() : [],
            _ngrx_effects__WEBPACK_IMPORTED_MODULE_12__["EffectsModule"].forRoot([_effects_root_effects__WEBPACK_IMPORTED_MODULE_13__["RootEffects"], _users_effects_user_effects__WEBPACK_IMPORTED_MODULE_15__["UserEffects"], _orders_effects_order_effects__WEBPACK_IMPORTED_MODULE_16__["OrderEffects"], _products_effects_product_effects__WEBPACK_IMPORTED_MODULE_17__["ProductEffects"]])
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
        _root_components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_6__["NavbarComponent"],
        _root_components_home_home_component__WEBPACK_IMPORTED_MODULE_7__["HomeComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"], _ngrx_store__WEBPACK_IMPORTED_MODULE_8__["StoreRootModule"], _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_10__["StoreDevtoolsModule"], _ngrx_effects__WEBPACK_IMPORTED_MODULE_12__["EffectsRootModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                    _root_components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_6__["NavbarComponent"],
                    _root_components_home_home_component__WEBPACK_IMPORTED_MODULE_7__["HomeComponent"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
                    _ngrx_store__WEBPACK_IMPORTED_MODULE_8__["StoreModule"].forRoot(_reducers__WEBPACK_IMPORTED_MODULE_9__["reducers"], { metaReducers: _reducers__WEBPACK_IMPORTED_MODULE_9__["metaReducers"] }),
                    !_environments_environment__WEBPACK_IMPORTED_MODULE_11__["environment"].production ? _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_10__["StoreDevtoolsModule"].instrument() : [],
                    _ngrx_effects__WEBPACK_IMPORTED_MODULE_12__["EffectsModule"].forRoot([_effects_root_effects__WEBPACK_IMPORTED_MODULE_13__["RootEffects"], _users_effects_user_effects__WEBPACK_IMPORTED_MODULE_15__["UserEffects"], _orders_effects_order_effects__WEBPACK_IMPORTED_MODULE_16__["OrderEffects"], _products_effects_product_effects__WEBPACK_IMPORTED_MODULE_17__["ProductEffects"]])
                ],
                providers: [{
                        provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HTTP_INTERCEPTORS"],
                        useClass: _root_interceptors_auth_interceptor__WEBPACK_IMPORTED_MODULE_14__["AuthInterceptor"],
                        multi: true
                    }],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "Za8q":
/*!*****************************************************!*\
  !*** ./src/app/products/effects/product.effects.ts ***!
  \*****************************************************/
/*! exports provided: ProductEffects */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductEffects", function() { return ProductEffects; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/effects */ "9jGm");
/* harmony import */ var _actions_product_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../actions/product.actions */ "lzi2");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _services_product_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../services/product.service */ "czkf");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "tyNb");










class ProductEffects {
    constructor(actions$, productService, router) {
        this.actions$ = actions$;
        this.productService = productService;
        this.router = router;
        this.uploadProduct = () => {
            return this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_actions_product_actions__WEBPACK_IMPORTED_MODULE_3__["uploadProducts"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["concatMap"])((action) => this.productService.uploadProduct(action.product).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])((product) => _actions_product_actions__WEBPACK_IMPORTED_MODULE_3__["uploadProductsSuccess"]({ product: product })), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])((error) => Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["of"])(_actions_product_actions__WEBPACK_IMPORTED_MODULE_3__["uploadProductsFailure"]({ error: error }))))));
        };
        this.getMensCollection = () => {
            return this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_actions_product_actions__WEBPACK_IMPORTED_MODULE_3__["getMensCollection"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["mergeMap"])((action) => this.productService.getMensCollection().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])((products) => _actions_product_actions__WEBPACK_IMPORTED_MODULE_3__["getMensCollectionSuccess"]({ products: products })), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])((error) => Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["of"])(_actions_product_actions__WEBPACK_IMPORTED_MODULE_3__["getMensCollectionFailure"]({ error: error }))))));
        };
        this.getWomensCollection = () => {
            return this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_actions_product_actions__WEBPACK_IMPORTED_MODULE_3__["getWomensCollection"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["mergeMap"])((action) => this.productService.getWomensCollection().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])((products) => _actions_product_actions__WEBPACK_IMPORTED_MODULE_3__["getWomensCollectionSuccess"]({ products: products })), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])((error) => Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["of"])(_actions_product_actions__WEBPACK_IMPORTED_MODULE_3__["getWomensCollectionFailure"]({ error: error }))))));
        };
        this.getKidsCollection = () => {
            return this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_actions_product_actions__WEBPACK_IMPORTED_MODULE_3__["getKidsCollection"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["mergeMap"])((action) => this.productService.getKidsCollection().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])((products) => _actions_product_actions__WEBPACK_IMPORTED_MODULE_3__["getKidsCollectionSuccess"]({ products: products })), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])((error) => Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["of"])(_actions_product_actions__WEBPACK_IMPORTED_MODULE_3__["getKidsCollectionFailure"]({ error: error }))))));
        };
        this.getProductDetails = () => {
            return this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_actions_product_actions__WEBPACK_IMPORTED_MODULE_3__["getProductDetails"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["mergeMap"])((action) => this.productService.getProductDetails(action.productId).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])((product) => _actions_product_actions__WEBPACK_IMPORTED_MODULE_3__["getProductDetailsSuccess"]({ product: product })), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])((error) => Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["of"])(_actions_product_actions__WEBPACK_IMPORTED_MODULE_3__["getProductDetailsFailure"]({ error: error }))))));
        };
        // Upload Product Success redirect to 'home page'
        this.uploadProductsSuccess = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_actions_product_actions__WEBPACK_IMPORTED_MODULE_3__["uploadProductsSuccess"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(() => this.router.navigate(['/'])));
    }
}
ProductEffects.ɵfac = function ProductEffects_Factory(t) { return new (t || ProductEffects)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Actions"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_services_product_service__WEBPACK_IMPORTED_MODULE_6__["ProductService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"])); };
ProductEffects.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: ProductEffects, factory: ProductEffects.ɵfac });
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Effect"])() // create a product
], ProductEffects.prototype, "uploadProduct", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Effect"])() // get Men's collection
], ProductEffects.prototype, "getMensCollection", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Effect"])() // get Women's collection
], ProductEffects.prototype, "getWomensCollection", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Effect"])() // get kid's collection
], ProductEffects.prototype, "getKidsCollection", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Effect"])() // get Product Details
], ProductEffects.prototype, "getProductDetails", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Effect"])({ dispatch: false })
], ProductEffects.prototype, "uploadProductsSuccess", void 0);
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ProductEffects, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"]
    }], function () { return [{ type: _ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Actions"] }, { type: _services_product_service__WEBPACK_IMPORTED_MODULE_6__["ProductService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"] }]; }, { uploadProduct: [], getMensCollection: [], getWomensCollection: [], getKidsCollection: [], getProductDetails: [], uploadProductsSuccess: [] }); })();


/***/ }),

/***/ "abVj":
/*!*************************************************!*\
  !*** ./src/app/orders/actions/order.actions.ts ***!
  \*************************************************/
/*! exports provided: loadOrders, loadOrdersSuccess, loadOrdersFailure, addToCart, incrProductQty, decrProductQty, deleteCartItem, placeOrder, placeOrderSuccess, placeOrderFailure, sendCartToServer, sendCartToServerSuccess, sendCartToServerFailure */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadOrders", function() { return loadOrders; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadOrdersSuccess", function() { return loadOrdersSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadOrdersFailure", function() { return loadOrdersFailure; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addToCart", function() { return addToCart; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "incrProductQty", function() { return incrProductQty; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "decrProductQty", function() { return decrProductQty; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deleteCartItem", function() { return deleteCartItem; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "placeOrder", function() { return placeOrder; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "placeOrderSuccess", function() { return placeOrderSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "placeOrderFailure", function() { return placeOrderFailure; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sendCartToServer", function() { return sendCartToServer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sendCartToServerSuccess", function() { return sendCartToServerSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sendCartToServerFailure", function() { return sendCartToServerFailure; });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ "l7P3");

const loadOrders = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Order] Load Orders');
const loadOrdersSuccess = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Order] Load Orders Success', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
const loadOrdersFailure = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Order] Load Orders Failure', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
// add To Cart
const addToCart = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Order] add To Cart', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
// incr Product Qty
const incrProductQty = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Order] Incr Product Qty', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
// decr Product Qty
const decrProductQty = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Order] Decr Product Qty', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
// Delete a cart Item
const deleteCartItem = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Order] Delete Cart Item', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
// place an order
const placeOrder = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Order] Place Orders', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
const placeOrderSuccess = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Order] Place Order Success', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
const placeOrderFailure = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Order] Place Order Failure', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
// send Cart Info to server
const sendCartToServer = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Order] sendCartToServer', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
const sendCartToServerSuccess = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Order] sendCartToServer Success', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
const sendCartToServerFailure = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Order] sendCartToServer Failure', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());


/***/ }),

/***/ "czkf":
/*!******************************************************!*\
  !*** ./src/app/products/services/product.service.ts ***!
  \******************************************************/
/*! exports provided: ProductService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductService", function() { return ProductService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../environments/environment */ "AytR");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "tk/3");






class ProductService {
    constructor(httpClient) {
        this.httpClient = httpClient;
    }
    // upload Product
    uploadProduct(product) {
        let dataURL = `${_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiURL}/product/upload`;
        return this.httpClient.post(dataURL, product).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["retry"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError));
    }
    // get Men's Collection
    getMensCollection() {
        let dataURL = `${_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiURL}/product/men`;
        return this.httpClient.get(dataURL).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["retry"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError));
    }
    // get Women's Collection
    getWomensCollection() {
        let dataURL = `${_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiURL}/product/women`;
        return this.httpClient.get(dataURL).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["retry"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError));
    }
    // get kid's Collection
    getKidsCollection() {
        let dataURL = `${_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiURL}/product/kids`;
        return this.httpClient.get(dataURL).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["retry"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError));
    }
    // get Product Details
    getProductDetails(productID) {
        let dataURL = `${_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiURL}/product/${productID}`;
        return this.httpClient.get(dataURL).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["retry"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError));
    }
    handleError(error) {
        let errorMessage = "";
        if (error.error instanceof ErrorEvent) {
            // client side error
            errorMessage = error.error.message;
        }
        else {
            // server error
            errorMessage = `Status : ${error.status}  MESSAGE : ${error.message}`;
        }
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])(errorMessage);
    }
}
ProductService.ɵfac = function ProductService_Factory(t) { return new (t || ProductService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"])); };
ProductService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ProductService, factory: ProductService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProductService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "hlyh":
/*!************************************************************!*\
  !*** ./src/app/root/components/navbar/navbar.component.ts ***!
  \************************************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _orders_reducers_order_reducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../orders/reducers/order.reducer */ "RVPP");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/store */ "l7P3");
/* harmony import */ var _users_actions_user_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../users/actions/user.actions */ "38Tt");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/auth.service */ "kkBn");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "ofXK");









function NavbarComponent_li_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Upload");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function NavbarComponent_li_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Orders");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function NavbarComponent_li_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    var tmp_0_0 = null;
    var tmp_1_0 = null;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", (tmp_0_0 = ctx_r2.authService.getUserInfo()) == null ? null : tmp_0_0.avatar, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", (tmp_1_0 = ctx_r2.authService.getUserInfo()) == null ? null : tmp_1_0.name, "");
} }
function NavbarComponent_li_24_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavbarComponent_li_24_Template_a_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r6.clickLogOut(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "i", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " LogOut");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function NavbarComponent_li_25_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "i", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Login");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function NavbarComponent_li_26_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "i", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Register");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class NavbarComponent {
    constructor(store, authService, router) {
        this.store = store;
        this.authService = authService;
        this.router = router;
        this.cartItems = [];
    }
    ngOnInit() {
        this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["select"])(_orders_reducers_order_reducer__WEBPACK_IMPORTED_MODULE_1__["orderFeatureKey"])).subscribe((state) => {
            this.cartItems = state.cartItems;
        });
    }
    // click Logout
    clickLogOut() {
        this.router.navigate(['/']);
        this.store.dispatch(_users_actions_user_actions__WEBPACK_IMPORTED_MODULE_3__["logOut"]());
    }
}
NavbarComponent.ɵfac = function NavbarComponent_Factory(t) { return new (t || NavbarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"])); };
NavbarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NavbarComponent, selectors: [["app-navbar"]], decls: 27, vars: 7, consts: [[1, "navbar", "navbar-dark", "bg-dark", "navbar-expand-sm"], [1, "container"], ["routerLink", "/", 1, "navbar-brand"], ["src", "../../../../assets/img/brand.PNG", "alt", "", "height", "35", "width", "150"], [1, "collapse", "navbar-collapse"], [1, "navbar-nav"], [1, "nav-item", "px-2"], ["routerLink", "/products/men", 1, "nav-link"], ["routerLink", "/products/kids", 1, "nav-link"], ["routerLink", "/products/women", 1, "nav-link"], ["class", "nav-item px-2", 4, "ngIf"], ["routerLink", "/orders/cart", 1, "nav-link"], [1, "fa", "fa-shopping-cart"], [1, "badge", "badge-success"], [1, "navbar-nav", "ml-auto"], ["routerLink", "/products/upload", 1, "nav-link"], ["routerLink", "/orders/order-list", 1, "nav-link"], ["routerLink", "/users/profile", 1, "nav-link"], ["width", "20", "height", "20", "alt", "", 1, "rounded-circle", 3, "src"], [1, "nav-link", 3, "click"], [1, "fa", "fa-sign-out-alt"], ["routerLink", "/users/login", 1, "nav-link"], [1, "fa", "fa-sign-in-alt"], ["routerLink", "/users/register", 1, "nav-link"], [1, "fa", "fa-user-cog"]], template: function NavbarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nav", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "ul", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "li", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Men's Wear");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "li", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Kids Wear");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "li", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Women's Wear");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, NavbarComponent_li_15_Template, 3, 0, "li", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "li", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "i", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "span", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, NavbarComponent_li_21_Template, 3, 0, "li", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "ul", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](23, NavbarComponent_li_23_Template, 4, 2, "li", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](24, NavbarComponent_li_24_Template, 4, 0, "li", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](25, NavbarComponent_li_25_Template, 4, 0, "li", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](26, NavbarComponent_li_26_Template, 4, 0, "li", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.authService.isLoggedIn());
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.cartItems.length);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.authService.isAdminUser());
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.authService.isLoggedIn());
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.authService.isLoggedIn());
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.authService.isLoggedIn());
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.authService.isLoggedIn());
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterLinkWithHref"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Jvb3QvY29tcG9uZW50cy9uYXZiYXIvbmF2YmFyLmNvbXBvbmVudC5jc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NavbarComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-navbar',
                templateUrl: './navbar.component.html',
                styleUrls: ['./navbar.component.css']
            }]
    }], function () { return [{ type: _ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"] }, { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }]; }, null); })();


/***/ }),

/***/ "kkBn":
/*!***********************************************!*\
  !*** ./src/app/root/services/auth.service.ts ***!
  \***********************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class AuthService {
    constructor() { }
    // isLoggedIn
    isLoggedIn() {
        return !!localStorage.getItem('token');
    }
    // get Token
    getToken() {
        return localStorage.getItem('token');
    }
    // getUserInfo
    getUserInfo() {
        return JSON.parse(localStorage.getItem('user'));
    }
    // isAdminUser
    isAdminUser() {
        let user = this.getUserInfo();
        return user === null || user === void 0 ? void 0 : user.isAdmin;
    }
}
AuthService.ɵfac = function AuthService_Factory(t) { return new (t || AuthService)(); };
AuthService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AuthService, factory: AuthService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "lzi2":
/*!*****************************************************!*\
  !*** ./src/app/products/actions/product.actions.ts ***!
  \*****************************************************/
/*! exports provided: loadProducts, loadProductsSuccess, loadProductsFailure, uploadProducts, uploadProductsSuccess, uploadProductsFailure, getMensCollection, getMensCollectionSuccess, getMensCollectionFailure, getWomensCollection, getWomensCollectionSuccess, getWomensCollectionFailure, getKidsCollection, getKidsCollectionSuccess, getKidsCollectionFailure, getProductDetails, getProductDetailsSuccess, getProductDetailsFailure */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadProducts", function() { return loadProducts; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadProductsSuccess", function() { return loadProductsSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadProductsFailure", function() { return loadProductsFailure; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "uploadProducts", function() { return uploadProducts; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "uploadProductsSuccess", function() { return uploadProductsSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "uploadProductsFailure", function() { return uploadProductsFailure; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getMensCollection", function() { return getMensCollection; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getMensCollectionSuccess", function() { return getMensCollectionSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getMensCollectionFailure", function() { return getMensCollectionFailure; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getWomensCollection", function() { return getWomensCollection; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getWomensCollectionSuccess", function() { return getWomensCollectionSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getWomensCollectionFailure", function() { return getWomensCollectionFailure; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getKidsCollection", function() { return getKidsCollection; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getKidsCollectionSuccess", function() { return getKidsCollectionSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getKidsCollectionFailure", function() { return getKidsCollectionFailure; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getProductDetails", function() { return getProductDetails; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getProductDetailsSuccess", function() { return getProductDetailsSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getProductDetailsFailure", function() { return getProductDetailsFailure; });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ "l7P3");

const loadProducts = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Product] Load Products');
const loadProductsSuccess = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Product] Load Products Success', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
const loadProductsFailure = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Product] Load Products Failure', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
// Upload Products
const uploadProducts = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Product] upload Products', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
const uploadProductsSuccess = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Product] upload Products Success', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
const uploadProductsFailure = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Product] upload Products Failure', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
// Get Men's Collection
const getMensCollection = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Product] Get Mens Collections');
const getMensCollectionSuccess = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Product] get Mens Collection Success', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
const getMensCollectionFailure = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Product] get Mens Collection Failure', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
// Get women's Collection
const getWomensCollection = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Product] Get Womens Collections');
const getWomensCollectionSuccess = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Product] get womens Collection Success', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
const getWomensCollectionFailure = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Product] get womens Collection Failure', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
// Get kid's Collection
const getKidsCollection = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Product] Get kids Collections');
const getKidsCollectionSuccess = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Product] get kids Collection Success', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
const getKidsCollectionFailure = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Product] get kids Collection Failure', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
// Get a Single Product
const getProductDetails = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Product] Get Product Details', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
const getProductDetailsSuccess = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Product] get Product Details Success', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
const getProductDetailsFailure = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Product] get Product Details Failure', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());


/***/ }),

/***/ "oG+y":
/*!*************************************************!*\
  !*** ./src/app/orders/effects/order.effects.ts ***!
  \*************************************************/
/*! exports provided: OrderEffects */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderEffects", function() { return OrderEffects; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/effects */ "9jGm");
/* harmony import */ var _actions_order_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../actions/order.actions */ "abVj");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _services_order_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../services/order.service */ "QiYn");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "tyNb");










class OrderEffects {
    constructor(actions$, orderService, router) {
        this.actions$ = actions$;
        this.orderService = orderService;
        this.router = router;
        this.sendCartToServer = () => {
            return this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_actions_order_actions__WEBPACK_IMPORTED_MODULE_3__["sendCartToServer"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["concatMap"])((action) => this.orderService.sendCartToServer(action.cartItems).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])((msg) => _actions_order_actions__WEBPACK_IMPORTED_MODULE_3__["sendCartToServerSuccess"]({ data: msg })), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])((error) => Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["of"])(_actions_order_actions__WEBPACK_IMPORTED_MODULE_3__["sendCartToServerFailure"]({ error: error }))))));
        };
        this.placeOrder = () => {
            return this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_actions_order_actions__WEBPACK_IMPORTED_MODULE_3__["placeOrder"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["concatMap"])((action) => this.orderService.placeOrder({ items: action.items, tax: action.tax, total: action.total }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])((order) => _actions_order_actions__WEBPACK_IMPORTED_MODULE_3__["placeOrderSuccess"]({ order: order })), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])((error) => Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["of"])(_actions_order_actions__WEBPACK_IMPORTED_MODULE_3__["placeOrderFailure"]({ error: error }))))));
        };
        this.loadOrders = () => {
            return this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_actions_order_actions__WEBPACK_IMPORTED_MODULE_3__["loadOrders"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["mergeMap"])((action) => this.orderService.loadOrders().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])((orders) => _actions_order_actions__WEBPACK_IMPORTED_MODULE_3__["loadOrdersSuccess"]({ orders: orders })), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])((error) => Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["of"])(_actions_order_actions__WEBPACK_IMPORTED_MODULE_3__["loadOrdersFailure"]({ error: error }))))));
        };
        // send cartItems to server Success redirect to 'checkout page'
        this.sendCartToServerSuccess = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_actions_order_actions__WEBPACK_IMPORTED_MODULE_3__["sendCartToServerSuccess"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(() => this.router.navigate(['/orders/checkout'])));
    }
}
OrderEffects.ɵfac = function OrderEffects_Factory(t) { return new (t || OrderEffects)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Actions"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_services_order_service__WEBPACK_IMPORTED_MODULE_6__["OrderService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"])); };
OrderEffects.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: OrderEffects, factory: OrderEffects.ɵfac });
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Effect"])() // send cartItems to server
], OrderEffects.prototype, "sendCartToServer", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Effect"])() // Place An Order
], OrderEffects.prototype, "placeOrder", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Effect"])() // load all Orders
], OrderEffects.prototype, "loadOrders", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Effect"])({ dispatch: false })
], OrderEffects.prototype, "sendCartToServerSuccess", void 0);
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](OrderEffects, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"]
    }], function () { return [{ type: _ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Actions"] }, { type: _services_order_service__WEBPACK_IMPORTED_MODULE_6__["OrderService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"] }]; }, { sendCartToServer: [], placeOrder: [], loadOrders: [], sendCartToServerSuccess: [] }); })();


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _root_components_home_home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./root/components/home/home.component */ "vg3d");





const routes = [
    { path: '', component: _root_components_home_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"] },
    { path: 'products',
        loadChildren: () => __webpack_require__.e(/*! import() | products-products-module */ "products-products-module").then(__webpack_require__.bind(null, /*! ./products/products.module */ "WLUK")).then(m => m.ProductsModule) },
    { path: 'orders',
        loadChildren: () => __webpack_require__.e(/*! import() | orders-orders-module */ "orders-orders-module").then(__webpack_require__.bind(null, /*! ./orders/orders.module */ "h9W5")).then(m => m.OrdersModule) },
    { path: 'users',
        loadChildren: () => __webpack_require__.e(/*! import() | users-users-module */ "users-users-module").then(__webpack_require__.bind(null, /*! ./users/users.module */ "zrcO")).then(m => m.UsersModule) }
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "vg3d":
/*!********************************************************!*\
  !*** ./src/app/root/components/home/home.component.ts ***!
  \********************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _users_actions_user_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../users/actions/user.actions */ "38Tt");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/store */ "l7P3");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/auth.service */ "kkBn");





class HomeComponent {
    constructor(store, authService) {
        this.store = store;
        this.authService = authService;
    }
    ngOnInit() {
        this.store.dispatch(_users_actions_user_actions__WEBPACK_IMPORTED_MODULE_1__["loadUser"]());
    }
}
HomeComponent.ɵfac = function HomeComponent_Factory(t) { return new (t || HomeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"])); };
HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HomeComponent, selectors: [["app-home"]], decls: 9, vars: 0, consts: [[1, "landing-page"], [1, "wrapper"], [1, "d-flex", "flex-column", "text-center", "align-items-center", "justify-content-center", "h-100"], [1, "display-3", "animated", "zoomInDown"], [1, "lead", "px-4", "animated", "zoomIn"], [1, "btn", "btn-brains", "text-dark", "animated", "zoomIn"]], template: function HomeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h3", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Welcome to BrainsKart");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid cumque, laborum libero obcaecati odio odit optio sint tempora. Corporis culpa deleniti enim esse explicabo incidunt ipsam ipsum libero veniam, voluptatibus.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Shop Now");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Jvb3QvY29tcG9uZW50cy9ob21lL2hvbWUuY29tcG9uZW50LmNzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-home',
                templateUrl: './home.component.html',
                styleUrls: ['./home.component.css']
            }]
    }], function () { return [{ type: _ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"] }, { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] }]; }, null); })();


/***/ }),

/***/ "x2SL":
/*!************************************************!*\
  !*** ./src/app/users/reducers/user.reducer.ts ***!
  \************************************************/
/*! exports provided: userFeatureKey, initialState, reducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "userFeatureKey", function() { return userFeatureKey; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return initialState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reducer", function() { return reducer; });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ "l7P3");
/* harmony import */ var _actions_user_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../actions/user.actions */ "38Tt");


const userFeatureKey = 'user';
const initialState = {
    loading: false,
    token: null,
    errorMessage: null,
    user: null,
    isSubmitted: false,
    isAuthenticated: false,
};
const reducer = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createReducer"])(initialState, Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_actions_user_actions__WEBPACK_IMPORTED_MODULE_1__["registerUser"], (state, { user }) => {
    return Object.assign(Object.assign({}, state), { loading: true });
}), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_actions_user_actions__WEBPACK_IMPORTED_MODULE_1__["registerUserSuccess"], (state, { result }) => {
    return Object.assign(Object.assign({}, state), { loading: false, isSubmitted: true });
}), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_actions_user_actions__WEBPACK_IMPORTED_MODULE_1__["registerUserFailure"], (state, { error }) => {
    return Object.assign(Object.assign({}, state), { loading: false, errorMessage: error });
}), 
// Login a User
Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_actions_user_actions__WEBPACK_IMPORTED_MODULE_1__["loginUser"], (state, { user }) => {
    return Object.assign(Object.assign({}, state), { loading: true });
}), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_actions_user_actions__WEBPACK_IMPORTED_MODULE_1__["loginUserSuccess"], (state, { result, token }) => {
    localStorage.setItem('token', token);
    return Object.assign(Object.assign({}, state), { loading: false, isSubmitted: true, isAuthenticated: true, token: token });
}), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_actions_user_actions__WEBPACK_IMPORTED_MODULE_1__["loginUserFailure"], (state, { error }) => {
    localStorage.removeItem('token');
    return Object.assign(Object.assign({}, state), { loading: false, errorMessage: error });
}), 
// Logout User
Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_actions_user_actions__WEBPACK_IMPORTED_MODULE_1__["logOut"], (state) => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    return Object.assign(Object.assign({}, state), { isAuthenticated: false, token: null, user: null });
}), 
// get user information from server, after login
Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_actions_user_actions__WEBPACK_IMPORTED_MODULE_1__["loadUser"], (state) => {
    return Object.assign(Object.assign({}, state), { loading: true });
}), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_actions_user_actions__WEBPACK_IMPORTED_MODULE_1__["loadUserSuccess"], (state, { user }) => {
    localStorage.setItem('user', JSON.stringify(user));
    return Object.assign(Object.assign({}, state), { loading: false, user: user });
}), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_actions_user_actions__WEBPACK_IMPORTED_MODULE_1__["loadUserFailure"], (state, { error }) => {
    localStorage.removeItem('user');
    return Object.assign(Object.assign({}, state), { loading: false, user: null });
}), 
// Update Address
Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_actions_user_actions__WEBPACK_IMPORTED_MODULE_1__["updateAddress"], (state, { address }) => {
    return Object.assign(Object.assign({}, state), { loading: true });
}), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_actions_user_actions__WEBPACK_IMPORTED_MODULE_1__["updateAddressSuccess"], (state, { user }) => {
    localStorage.setItem('user', JSON.stringify(user));
    return Object.assign(Object.assign({}, state), { loading: false, user: user });
}), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_actions_user_actions__WEBPACK_IMPORTED_MODULE_1__["updateAddressFailure"], (state, { error }) => {
    return Object.assign(Object.assign({}, state), { loading: false });
}));


/***/ }),

/***/ "zLM3":
/*!************************************************!*\
  !*** ./src/app/users/services/user.service.ts ***!
  \************************************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../environments/environment */ "AytR");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "tk/3");






class UserService {
    constructor(httpClient) {
        this.httpClient = httpClient;
    }
    // registerUser
    registerUser(user) {
        let dataURL = `${_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiURL}/user/register`;
        return this.httpClient.post(dataURL, user).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["retry"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError));
    }
    // loginUser
    loginUser(user) {
        let dataURL = `${_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiURL}/user/login`;
        return this.httpClient.post(dataURL, user).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["retry"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError));
    }
    // loadUser
    loadUser() {
        let dataURL = `${_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiURL}/user/`;
        return this.httpClient.get(dataURL).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["retry"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError));
    }
    // update Address
    updateAddress(address) {
        let dataURL = `${_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiURL}/user/address`;
        return this.httpClient.post(dataURL, address).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["retry"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError));
    }
    handleError(error) {
        let errorMessage = "";
        if (error.error instanceof ErrorEvent) {
            // client side error
            errorMessage = error.error.message;
        }
        else {
            // server error
            errorMessage = `Status : ${error.status}  MESSAGE : ${error.message}`;
        }
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])(errorMessage);
    }
}
UserService.ɵfac = function UserService_Factory(t) { return new (t || UserService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"])); };
UserService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: UserService, factory: UserService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UserService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "AytR");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
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
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map