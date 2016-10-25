import { Component, OnInit } from '@angular/core';
import { Item } from './item';
import { ItemService } from './item.service';

@Component({
  selector: 'item-list',
  template: `
  <h2> My Heros</h2>
  <ul class="items">
	  <li *ngFor="let item of items" (click)="onSelect(item)" [class.selected]="item === selectedItem">
	  	<span class="badge">{{item.id}}</span>{{item.name}}
	  </li>
  </ul>
  <item-detail [item]="selectedItem"></item-detail>
  `,
  styleUrls:['app/style.css'],

})

export class ItemsComponent implements OnInit { 
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

