import { Component } from '@angular/core';
import { UserService } from './user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
  //providers: [UserService]// ako providnem tukozna4ava 4e pri ubivaneto na komponenta, nqma da moje da polzvame ve4e userServisa nito pri tozi module, nito pri childrenite mu
})
export class AppComponent {
  title = 'Title from AppComponent';

  constructor(public userService: UserService){

  }

  //praveiki go po tozi na4in, mojem v templeita direktno da napi6em setServis Haldler, vmesto userservice.addUser
  setService(inputName: HTMLInputElement, inputAge: HTMLInputElement){
    this.userService.addUser(inputName, inputAge);
  }
}
