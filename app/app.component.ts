import { Component } from '@angular/core';
@Component({
  selector: 'my-app',
  template: `
  <h1>{{title}}</h1>
  <h2>{{hero.name}} details!</h2>
  <div><label>id: </label>{{hero.id}}</div>
  <div>
  <label>name: </label>
  <input value="{{hero.name}}" placeholder="name">
  </div>
  `
})

export class AppComponent { 
 title ='Tour of Heros';
 hero: Hero = {
 		id:1,
	 	name:'windstorm'
	};
}

export class Hero{
	id: number;
	name: string;
}