import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { disableDebugTools } from '@angular/platform-browser';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit{
  /*Here i declare i am going to receive an input , to which i assign new valor, v skobite bivat proceteni kato activeUsers ot Input, i se storvat ,suhranqvat v promenlivata activeUsers, koqto e bez skobi */
  @Input('title') titleFromApp: string = '';

  @Input('activeUsers') activeUsers: {name: string, age: number}[] = [];
  @Output() onChildOutput = new EventEmitter<boolean>();
 inputValue= 'Hello'

 ngOnInit(){

  console.log('Navigation --> init');

 }
 ngAfterViewInit(){

  console.log('Navigation --> after --> init');

 }
  isActive = false;


  handleClick(event: Event): void{

    this.isActive = !this.isActive
    this.onChildOutput.emit(this.isActive)
  }
}
