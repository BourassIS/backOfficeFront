import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';


@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  
  constructor(private router: Router,  private cookieService: CookieService    ) {}

 

  logout(){
    // Clear the authentication token from cookies or wherever it is stored
  document.cookie = 'Authorization=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';

  // Redirect the user to the login page or any other desired page
  this.router.navigate(['/login']);

  setTimeout(() => {
    window.location.reload();
  }, 0);




  
  }


}
