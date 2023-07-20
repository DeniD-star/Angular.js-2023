import { Component, Input } from '@angular/core';
import { User } from '../type/User';

@Component({
  selector: 'app-user-list-item',
  templateUrl: './user-list-item.component.html',
  styleUrls: ['./user-list-item.component.scss']
})
export class UserListItemComponent {
/*hubavo e da si slagame default-na stoinost za vsi4ki spisuci i ne6ta, dali 6te bude undefine ili 0, ili ne6to drugo,
v tozi slu4ai kazvame tozi user ima vuzmojnost da go nqma ili puk da ima nqkakva to4na stoinost */
@Input() user: User | undefined = undefined
}
