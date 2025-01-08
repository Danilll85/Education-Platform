import { Component, Output } from '@angular/core';
import { SearchbarComponent } from '../searchbar/searchbar.component';
import { AuthorizationComponent } from '../authorization/authorization.component';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [
    SearchbarComponent,
    AuthorizationComponent,
  ],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
})
export class NavbarComponent {
}
