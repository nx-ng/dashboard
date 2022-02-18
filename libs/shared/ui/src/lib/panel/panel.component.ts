import { Component, Input, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'nx-ng-dashboard-panel',
  template: `<div
    class="p-4 rounded drop-shadow-md"
    [ngClass]="{
      'bg-blue-nx-base text-slate-100': darkMode,
      'bg-slate-100 text-blue-nx-dark': !darkMode
    }"
  >
    <ng-content></ng-content>
  </div>`,
})
export class PanelComponent {
  @Input() darkMode = true;
}

@NgModule({
  imports: [CommonModule],
  declarations: [PanelComponent],
  exports: [PanelComponent],
})
export class PanelComponentModule {}
