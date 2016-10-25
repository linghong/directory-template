"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var item_service_1 = require('./item.service');
var AppComponent = (function () {
    function AppComponent(itemService) {
        this.itemService = itemService;
        this.title = 'Tour of Heros';
    }
    AppComponent.prototype.ngOnInit = function () {
        this.getItems();
    };
    AppComponent.prototype.onSelect = function (item) {
        this.selectedItem = item;
    };
    AppComponent.prototype.getItems = function () {
        var _this = this;
        this.itemService.getItems().then(function (items) { return _this.items = items; });
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            template: "\n  <h1>{{title}}</h1>\n \n  <h2> My Heros</h2>\n  <ul class=\"items\">\n\t  <li *ngFor=\"let item of items\" (click)=\"onSelect(item)\" [class.selected]=\"item === selectedItem\">\n\t  \t<span class=\"badge\">{{item.id}}</span>{{item.name}}\n\t  </li>\n  </ul>\n  <item-detail [item]=\"selectedItem\"></item-detail>\n  ",
            styleUrls: ['app/style.css'],
            providers: [item_service_1.ItemService]
        }), 
        __metadata('design:paramtypes', [item_service_1.ItemService])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map