import { Component } from '@angular/core';
import { UserInterface } from 'src/app/core/interfaces/user.interface';
import { NzMessageService } from 'ng-zorro-antd/message';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent {
  user!: UserInterface;

  constructor(private message: NzMessageService) {}

  ngOnInit() {
    this.getUserFromLocalStorage();
  }

  getUserFromLocalStorage() {
    const userString = localStorage.getItem('user');
    if (userString !== null) {
      this.user = JSON.parse(userString);
    } else {
      this.message.error('User not found!');
    }
  }
}
