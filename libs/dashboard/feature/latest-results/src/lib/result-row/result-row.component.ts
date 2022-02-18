import { Component, NgModule, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SingleBenchmarkGroup } from '@nx-ng-dashboard/dashboard/data-access/core';
import { ToSecondsPipeModule } from '@nx-ng-dashboard/shared/util';

@Component({
  selector: 'nx-ng-dashboard-result-row',
  templateUrl: './result-row.component.html',
})
export class ResultRowComponent {
  @Input() benchmark!: SingleBenchmarkGroup;
}

@NgModule({
  imports: [CommonModule, ToSecondsPipeModule],
  declarations: [ResultRowComponent],
  exports: [ResultRowComponent],
})
export class ResultRowComponentModule {}
