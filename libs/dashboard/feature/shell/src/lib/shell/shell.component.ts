import { Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccordionComponentModule } from '@nx-ng-dashboard/shared/ui';
import { BenchmarkGroupComponentModule } from '@nx-ng-dashboard/dashboard/feature/benchmark-results';
import { BenchmarkService } from '@nx-ng-dashboard/dashboard/data-access/core';

@Component({
  selector: 'nx-ng-dashboard-shell',
  templateUrl: './shell.component.html',
})
export class ShellComponent {
  constructor(private benchmarkService: BenchmarkService) {
    benchmarkService.initialize();
  }
}

@NgModule({
  imports: [
    CommonModule,
    BenchmarkGroupComponentModule,
    AccordionComponentModule,
  ],
  declarations: [ShellComponent],
  exports: [ShellComponent],
})
export class ShellComponentModule {}
