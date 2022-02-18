import { Component, NgModule, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faCircleChevronDown } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'nx-ng-dashboard-accordion',
  templateUrl: './accordion.component.html',
})
export class AccordionComponent {
  @Input() expanded = false;
  faCircleChevronDown = faCircleChevronDown;

  toggle() {
    this.expanded = !this.expanded;
  }
}

@NgModule({
  imports: [CommonModule, FontAwesomeModule],
  declarations: [AccordionComponent],
  exports: [AccordionComponent],
})
export class AccordionComponentModule {}
