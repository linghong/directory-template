import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { AppComponent }  from './app.component';
import { ItemDetailComponent } from './item-detail.component';
import { ItemsComponent } from'./items.component';
import { ItemService } from './item.service';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule
  ],
  declarations: [
    AppComponent,
    ItemDetailComponent,
    ItemsComponent
  ],
  providers: [
  	ItemService
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }

