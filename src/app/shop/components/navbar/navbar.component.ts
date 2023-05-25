import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  constructor(private authService: AuthService) {}

  logout() {
    this.authService.logout();
  }

  isAdmin: boolean = false;
  ngOnInit(): void {
      this.checkAdmin();
  }
  checkAdmin(){
    if(this.authService.getRole() === 'admin'){
      this.isAdmin = true;
    }
  }
}
