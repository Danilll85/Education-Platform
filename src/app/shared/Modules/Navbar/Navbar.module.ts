import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SearchbarComponent } from './components/searchbar/searchbar.component';
import { AuthorizationComponent } from './components/authorization/authorization.component';

@NgModule({
  declarations: [NavbarComponent, SearchbarComponent, AuthorizationComponent],
  imports: [CommonModule],
  exports: [NavbarComponent],
})
export class NavbarModule {}
