import { Component, OnInit, NgModule, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PanelComponentModule } from '@nx-ng-dashboard/shared/ui';
import { BenchmarkService } from '@nx-ng-dashboard/dashboard/data-access/core';
import { map, Observable } from 'rxjs';
import { ToSecondsPipeModule } from '@nx-ng-dashboard/shared/util';

@Component({
  selector: 'nx-ng-dashboard-performance-comparison',
  templateUrl: './performance-comparison.component.html',
  styles: [],
})
export class PerformanceComparisonComponent implements OnInit {
  @Input() versionToCompare!:
    | 'currentVersion'
    | 'previousNxMinorVersion'
    | 'previousNgMajorVersion';
  @Input() comparisonTarget!:
    | 'currentVersion'
    | 'previousNxMinorVersion'
    | 'previousNgMajorVersion';

  comparisons$:
    | Observable<{
        buildAbsolute: number;
        buildPercentage: number;
        testAbsolute: number;
        testPercentage: number;
        lintAbsolute: number;
        lintPercentage: number;
      }>
    | undefined;

  displayPercentage = true;

  constructor(private benchmarkService: BenchmarkService) {}

  ngOnInit(): void {
    this.comparisons$ = this.benchmarkService.latestResults$?.pipe(
      map((latestResults) => {
        const dataForVersionToCompare = latestResults[this.versionToCompare];
        const dataForComparisonTarget = latestResults[this.comparisonTarget];

        // if differences are a negative value, we've improved
        const buildAbsolute =
          dataForVersionToCompare.buildCold.results[0].mean -
          dataForComparisonTarget.buildCold.results[0].mean;
        const buildPercentage =
          (buildAbsolute / dataForComparisonTarget.buildCold.results[0].mean) *
          100;

        const testAbsolute =
          dataForVersionToCompare.testCold.results[0].mean -
          dataForComparisonTarget.testCold.results[0].mean;
        const testPercentage =
          (testAbsolute / dataForComparisonTarget.testCold.results[0].mean) *
          100;

        const lintAbsolute =
          dataForVersionToCompare.lintCold.results[0].mean -
          dataForComparisonTarget.lintCold.results[0].mean;
        const lintPercentage =
          (lintAbsolute / dataForComparisonTarget.lintCold.results[0].mean) *
          100;

        return {
          buildAbsolute,
          buildPercentage,
          testAbsolute,
          testPercentage,
          lintAbsolute,
          lintPercentage,
        };
      })
    );
  }

  togglePercentage() {
    this.displayPercentage = !this.displayPercentage;
  }
}

@NgModule({
  imports: [CommonModule, PanelComponentModule, ToSecondsPipeModule],
  declarations: [PerformanceComparisonComponent],
  exports: [PerformanceComparisonComponent],
})
export class PerformanceComparisonComponentModule {}
