import { Component } from '@angular/core';
import { Item } from './item';

const ITEMS: Item[] = [
  { id: 11, name: 'Mr. Nice' },
  { id: 12, name: 'Narco' },
  { id: 13, name: 'Bombasto' },
  { id: 14, name: 'Celeritas' },
  { id: 15, name: 'Magneta' },
  { id: 16, name: 'RubberMan' },
  { id: 17, name: 'Dynama' },
  { id: 18, name: 'Dr IQ' },
  { id: 19, name: 'Magma' },
  { id: 20, name: 'Tornado' }
];

@Component({
  selector: 'my-app',
  template: `
  <h1>{{title}}</h1>
 
  <h2> My Heros</h2>
  <ul class="items">
	  <li *ngFor="let item of items" (click)="onSelect(item)" [class.selected]="item === selectedItem">
	  	<span class="badge">{{item.id}}</span>{{item.name}}
	  </li>
  </ul>
  <item-detail [item]="selectedItem"></item-detail>
  `,
  styleUrls:['app/style.css'] 
})

export class AppComponent { 
 title ='Tour of Heros';
 items = ITEMS; 
 selectedItem:Item;

 onSelect(item: Item):void{
 	this.selectedItem = item;
 	console.log(this.selectedItem);
 }
}

