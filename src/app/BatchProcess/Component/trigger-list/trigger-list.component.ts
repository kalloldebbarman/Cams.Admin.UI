import { Component } from '@angular/core';

@Component({
  selector: 'app-trigger-list',
  templateUrl: './trigger-list.component.html',
  styleUrls: ['./trigger-list.component.scss'],
})
export class TriggerListComponent {
  isAddtrigger: Boolean = false;
  Addtrigger() {
    this.isAddtrigger = true;
  }
}
