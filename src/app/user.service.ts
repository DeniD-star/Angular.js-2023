import { Injectable } from '@angular/core';
import { User } from './type/User';

@Injectable({// trqbva da se izbqgva da se pravi po tozi na4in, po dobre e v app.module.ts--> v providers
  providedIn: 'root'
})
export class UserService {


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

    constructor(){
      //po tozi na4in, prosto s pushvane , ne se trigurva changeDetectora
      setInterval(()=>{
        this.users.push({
          name: 'DemoName',
          age: 0
        })
  //ako e po tozi na4in 4rez pushvane, i ne 4rez smqna na referenciqta, prosto trqbva
  // da izvikam funkziqta refresh, za da mi vidi promenite.
        console.log('User has been added!');

      }, 3000)
    }

    addUser(inputName: HTMLInputElement, inputAge: HTMLInputElement){
      const user = {
          name: inputName.value,
          age: Number(inputAge.value)
      }
      this.users.push(user)
      /*kak moje naro4no da trigurnem changeDetectora? , mojem vmesto da pushnem usera, da promenim referenziqta i da
      napravim nova 4rez assign-vane , taka change detectora se aktivira, poneje otnovo imame promqna na kolekciq
      this.users = [...this.users, user]*/

      inputName.value = "";
      inputAge.value = "";
    }
  }

  class Wallet{

    balance  = 2000;

    constructor(balance: number){
      this.balance = balance;
    }
  }
  class Person{

    name  = 'Ivan';

    constructor(name: string){
      this.name = name;
    }
  }

  class Car{
    carModel = 'BMW';

    constructor(carModel: string){
      this.carModel = carModel;


    }
  }

  class BetterPersonWithNameBalanceAndCar{
    person: Person;
    car: Car;
    wallet: Wallet;

    constructor(person: Person, car:Car, wallet: Wallet){
      this.person = person;
      this.car = car;
      this.wallet = wallet;

    }
  }

  const personOne = new Person('Stefan');
  const carOne = new Car('Audi');
  const walletOne = new Wallet(2500)

  const betterPerson1 = new BetterPersonWithNameBalanceAndCar(personOne, carOne, walletOne);//that's called dependency injection,
  //when we works with abstractions(podavame si celi abstrakcii(classove, ne prosto properties))



