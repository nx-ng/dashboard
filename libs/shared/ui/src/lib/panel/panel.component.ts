import { Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'nx-ng-dashboard-panel',
  template: `<div
    class="p-4 rounded bg-blue-nx-base text-slate-100 drop-shadow-md"
  >
    <ng-content></ng-content>
  </div>`,
})
export class PanelComponent {}

@NgModule({
  imports: [CommonModule],
  declarations: [PanelComponent],
  exports: [PanelComponent],
})
export class PanelComponentModule {}
