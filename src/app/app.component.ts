import { Component } from '@angular/core';
import { User } from './type/User';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Title from AppComponent';
/*  Here i have list of users, that i am going in app.component.html to transfer to the child component navigation*/
users: User[]= [
  {name: "Maria", age: 23},
  {name: "George", age: 24},
  {name: "Maria Elena", age: 25},
  {name: "Giuseppe", age: 21},
]

  /*AppComponent has a function callBack which is onOutputFromChild, which we give to the event onChildOutput and then we emit*/
  outputChildHandler(){
    console.log('Event');

  }
}
