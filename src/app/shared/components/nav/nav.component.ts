import { Component, OnChanges, OnInit } from '@angular/core';
import { NavigationEnd, NavigationError, NavigationStart, Router } from '@angular/router';
import { UserService } from 'src/app/users/user.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent {
  loginRoute = false;

  constructor(public userService: UserService, private router: Router) { 
    router.events.subscribe((event: any) => {
      if (event instanceof NavigationStart) {
          this.loginRoute = event.url.includes('login');
      }
    });
  }
}
