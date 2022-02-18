import { Component, OnInit, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PanelComponentModule } from '@nx-ng-dashboard/shared/ui';

@Component({
  selector: 'nx-ng-dashboard-shell',
  templateUrl: './shell.component.html',
})
export class ShellComponent {}

@NgModule({
  imports: [CommonModule, PanelComponentModule],
  declarations: [ShellComponent],
  exports: [ShellComponent],
})
export class ShellComponentModule {}
