import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  menuOpen : boolean = false;

  HandleNavbar(){
    this.menuOpen = !this.menuOpen;
  }
}
