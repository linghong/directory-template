import {Component, Input} from '@angular/core';

import {Item} from './item';

@Component({
	selector: 'item-detail',
	template: `
	 <div *ngIf="item">
	  <h2>{{item.name}} details!</h2>
	  <div><label>id: </label>{{item.id}}</div>
	  <div>
	  <label>name: </label>
	  <input [(ngModel)]="item.name" placeholder="name">
	  </div>
  </div>
  `
})

export class ItemDetailComponent {
	@Input()
	item: Item;
}