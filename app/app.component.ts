import { Component, OnInit } from '@angular/core';
import { Item } from './item';
import { ItemService } from './item.service';

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
  styleUrls:['app/style.css'],
  providers: [ItemService] 
})

export class AppComponent implements OnInit { 
 
 title ='Tour of Heros';
 //items = ITEMS; 
 selectedItem: Item;
 items: Item[];

  constructor(private itemService: ItemService){

 }

 ngOnInit(): void {
 	this.getItems();
 }

 onSelect(item: Item): void{
 	this.selectedItem = item;
 }

 getItems(): void {
 	this.itemService.getItems().then(items =>this.items = items);
 }


}

