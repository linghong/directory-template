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
var item_1 = require('./item');
var ItemDetailComponent = (function () {
    function ItemDetailComponent() {
    }
    __decorate([
        core_1.Input(), 
        __metadata('design:type', item_1.Item)
    ], ItemDetailComponent.prototype, "item", void 0);
    ItemDetailComponent = __decorate([
        core_1.Component({
            selector: 'item-detail',
            template: "\n\t <div *ngIf=\"item\">\n\t  <h2>{{item.name}} details!</h2>\n\t  <div><label>id: </label>{{item.id}}</div>\n\t  <div>\n\t  <label>name: </label>\n\t  <input [(ngModel)]=\"item.name\" placeholder=\"name\">\n\t  </div>\n  </div>\n  "
        }), 
        __metadata('design:paramtypes', [])
    ], ItemDetailComponent);
    return ItemDetailComponent;
}());
exports.ItemDetailComponent = ItemDetailComponent;
//# sourceMappingURL=item-detail.component.js.map