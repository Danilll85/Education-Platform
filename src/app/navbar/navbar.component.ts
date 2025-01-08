import { Component, Output } from '@angular/core';
import { SearchbarComponent } from '../searchbar/searchbar.component';
import { AuthorizationComponent } from '../authorization/authorization.component';
import { FormsModule, NgModel } from '@angular/forms';
import { NgFor } from '@angular/common';
import { SelectDropDownModule } from 'ngx-select-dropdown';
import { BrowserModule } from '@angular/platform-browser';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [
    SearchbarComponent,
    AuthorizationComponent,
    FormsModule,
    NgFor,
    SelectDropDownModule,
    BrowserModule,
  ],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
})
export class NavbarComponent {
  items = [
    { id: 1, name: 'osdfji' },
    { id: 2, name: 'osdfji' },
    { id: 3, name: 'osdfji' },
    { id: 4, name: 'osdfji' },
  ];
  selectedItems: any[] = []; // Массив для хранения выбранных элементов

  // Метод для обработки изменений выбора
  onSelectionChange(event: any) {
    console.log('Выбранные элементы:', event);
  }
}
