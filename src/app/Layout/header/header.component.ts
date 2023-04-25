import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  @Output() onToggleSideNav: EventEmitter<any> = new EventEmitter();
  showMenu: boolean = true;

  toggleSideNav() {
    this.onToggleSideNav.emit();
    this.showMenu = !this.showMenu;

  }

}
