import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Title from AppComponent';
/*  Here i have list of users, that i am going in app.component.html to transfer to the child component navigation*/
 users = [
    {name: 'Deni', age: 16},
    {name: 'Vania', age: 18},
    {name: "Giuseppe", age: 19},
    {name: "Nely", age: 20}
  ]

  /*AppComponent has a function callBack which is onOutputFromChild, which we give to the event onChildOutput and then we emit*/
  outputChildHandler(){
    console.log('Event');

  }
}
