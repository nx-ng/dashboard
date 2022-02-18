import {
  Component,
  NgModule,
  Input,
  ChangeDetectionStrategy,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  SortByPipeModule,
  ToSecondsPipeModule,
} from '@nx-ng-dashboard/shared/util';
import { Benchmark } from '@nx-ng-dashboard/dashboard/data-access/core';

@Component({
  selector: 'nx-ng-dashboard-benchmark-results',
  templateUrl: './benchmark-results.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BenchmarkResultsComponent {
  @Input() benchmarks!: Benchmark[];
}

@NgModule({
  imports: [CommonModule, ToSecondsPipeModule, SortByPipeModule],
  declarations: [BenchmarkResultsComponent],
  exports: [BenchmarkResultsComponent],
})
export class BenchmarkResultsComponentModule {}
