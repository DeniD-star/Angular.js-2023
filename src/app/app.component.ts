import { Component } from '@angular/core';
import { UserService } from './user.service';
import { Observable, map } from 'rxjs';

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


//promises
//promises are GOOD, BECAUSE they solve the problem with callback-hell in javaScript(using "then", this simplifies the work
//and this way we avoid wrapping from one function to the next one ecc ecc, so we avoid nestnato durvo, with then becomes easy to read the code)
//this is async analogy
const p = new Promise((resolve, reject)=>{
  setTimeout(()=>{
      resolve(1200)
  }, 3000)
})

// p.then((data)=>console.log('promise', data))
//async analogy
Promise.resolve(100)
.then((d)=> d * 13)
.then((x)=>console.log(x))

//sync analogy promises--ideata e 4e vzima edin element na masiv, i posle go manipulira, izvur6va razli4ni operacii po nego
// [1].map((x)=> x * 2).map((x)=>x * 10)

//sync analogy observable- tul se manipulirat mnojestvo elementi po edno i su6to vreme
// [1, 2, 3, 4, 5].map((x)=> x * 2).map((x)=>x * 10)


//async analogy observable
function interval(intervalValue: number){
return new Observable<number>((observer)=>{
  // observer.next(1000)
  // observer.next(2000)
  // observer.next(3000)
  // observer.next(4000)
  // observer.next(5000)
let counter = 0
 const timer = setInterval(()=>{
      observer.next(counter++)
  }, intervalValue)

  //this is invoked on destroy, pravi se kogato se za4istva componenta(kogato toi umira, toest imame ondestroy), naprimer pri rutirane, tui kato po default observarite sa async operazii, timera 6te produlji da broi,
  //zatova ima nujda da go za4istim 4rez tazi operaziq
  return ()=>{
    clearInterval(timer)
  }
})
}

// const stream$ = interval(1000).subscribe((data)=>{
//   console.log('data from observer', data);

// })

//pipe e edna funkciq, v koqto moga da naredq razli4ni rxjs helperi, kato map, reduce
const stream$ = interval(1000).pipe(map((x)=> x * 2));

setTimeout(()=>{
  stream$.subscribe({
    next: (x) => console.log('data', x),
    error: (err)=> console.error(`Error occured!: ${err}`),
    complete: ()=> console.log('Stream has been completed!')
  })
}, 3000)

//hot observabali -> 2- ma 4oveka po razli4no vreme da si pusnat film i da si go gledat ot na4alo do krai, moje da si gleda vsi4ko
//cold observali-> 2-ma 4oveka 6te gledat film na kino, no ediniq pristiga sus zakusnenie, i trqbva da se vklu4i ottam
//ot kudeto e do6ul, nikoi nqma da mu vurne filma nazad

