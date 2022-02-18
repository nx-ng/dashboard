import { Component, OnInit, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  BenchmarkService,
  LatestResults,
} from '@nx-ng-dashboard/dashboard/data-access/core';
import { PanelComponentModule } from '@nx-ng-dashboard/shared/ui';
import { Observable } from 'rxjs';
import { ToSecondsPipeModule } from '@nx-ng-dashboard/shared/util';
import { ResultRowComponentModule } from '../result-row/result-row.component';

@Component({
  selector: 'nx-ng-dashboard-latest-results',
  templateUrl: './latest-results.component.html',
})
export class LatestResultsComponent implements OnInit {
  latestResults$: Observable<LatestResults> | undefined;
  constructor(private benchmarkService: BenchmarkService) {}

  ngOnInit(): void {
    this.latestResults$ = this.benchmarkService.latestResults$;
  }
}

@NgModule({
  imports: [
    CommonModule,
    PanelComponentModule,
    ToSecondsPipeModule,
    ResultRowComponentModule,
  ],
  declarations: [LatestResultsComponent],
  exports: [LatestResultsComponent],
})
export class LatestResultsComponentModule {}
