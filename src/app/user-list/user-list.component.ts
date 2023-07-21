import { Component, Input, ChangeDetectionStrategy, ChangeDetectorRef} from '@angular/core';
import { User } from '../type/User';


@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush //vse edno kazvame ti nqma da se renderira6 pove4e dokato ne ti kaja
})

/*change detection strategiqta se trigurva pri promqna na danni ili kolekciq ot danni, ako nqmame pribaven onPush,
ozna4ava 4e rabotim s defaultnata changeDetection strategy */
export class UserListComponent {
@Input() users: User[]= []

constructor(private cd: ChangeDetectorRef){//ozna4ava 4e go o4akvame kato instanziq changeDetectora da ni se podade

}
ngOnChanges(){
  console.log("Invocked from ngOnChanges!");
//tova se trigurva i hva6ta vsi4ki changiove,toest se trigurva kogato se trigurva i changeDetectionStrategy
}

refresh(){// tazi funkziq ni izvikva ot changeDetectora detectChanges
  this.cd.detectChanges
}
}
