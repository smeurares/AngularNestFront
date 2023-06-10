import { Component } from '@angular/core';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss'],
})
export class AdminComponent {
   buttonsState: string = 'addOne'

   setButtonState(state: string) {
      this.buttonsState = state;
   }

}
