import { Component, OnInit, NgModule, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  BenchmarkGroup,
  BenchmarkService,
} from '@nx-ng-dashboard/dashboard/data-access/core';
import { Observable } from 'rxjs';
import { ToSecondsPipeModule } from '@nx-ng-dashboard/shared/util';
import {
  AccordionComponentModule,
  PanelComponentModule,
} from '@nx-ng-dashboard/shared/ui';
import { BenchmarkResultsComponentModule } from '../benchmark-results/benchmark-results.component';

@Component({
  selector: 'nx-ng-dashboard-benchmark-group',
  templateUrl: './benchmark-group.component.html',
})
export class BenchmarkGroupComponent implements OnInit {
  @Input() version:
    | 'currentVersion'
    | 'previousNxMinorVersion'
    | 'previousNgMajorVersion' = 'currentVersion';

  benchmarkGroup$: Observable<BenchmarkGroup> | undefined;

  constructor(private benchmarkService: BenchmarkService) {}

  ngOnInit(): void {
    this.benchmarkGroup$ = this.benchmarkService[`${this.version}$`];
  }
}

@NgModule({
  imports: [
    CommonModule,
    ToSecondsPipeModule,
    PanelComponentModule,
    BenchmarkResultsComponentModule,
    AccordionComponentModule,
  ],
  declarations: [BenchmarkGroupComponent],
  exports: [BenchmarkGroupComponent],
})
export class BenchmarkGroupComponentModule {}
