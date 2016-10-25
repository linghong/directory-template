import { Component } from '@angular/core';
import { Item } from './item';
import { ItemService } from './item.service';
import {ItemsComponent} from './items.component'

@Component({
  selector: 'my-app',
  template: `
  <h1>{{title}}</h1>
 <item-list><item-list>
  `
})

export class AppComponent { 
 
 title ='Tour of Heros';
 
}

