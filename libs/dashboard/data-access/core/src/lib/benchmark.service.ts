import { Injectable } from '@angular/core';
import {
  collection,
  collectionData,
  CollectionReference,
  Firestore,
} from '@angular/fire/firestore';
import { combineLatest, map, Observable } from 'rxjs';

import { BENCHMARK_KEYS } from '@nx-ng-dashboard/shared/env';

import { Benchmark, BenchmarkGroup, LatestResults } from './models/benchmark';

@Injectable({
  providedIn: 'root',
})
export class BenchmarkService {
  currentVersion$: Observable<BenchmarkGroup> | undefined;
  previousNxMinorVersion$: Observable<BenchmarkGroup> | undefined;
  previousNgMajorVersion$: Observable<BenchmarkGroup> | undefined;

  latestResults$: Observable<LatestResults> | undefined;

  constructor(private firestore: Firestore) {}

  initialize() {
    this.currentVersion$ =
      this.initializeVersionBenchmarkGroup('currentVersion');
    this.previousNxMinorVersion$ = this.initializeVersionBenchmarkGroup(
      'previousNxMinorVersion'
    );
    this.previousNgMajorVersion$ = this.initializeVersionBenchmarkGroup(
      'previousNgMajorVersion'
    );

    this.latestResults$ = this.getLatestResults();
  }

  private getLatestResults() {
    return combineLatest([
      this.currentVersion$ as Observable<BenchmarkGroup>,
      this.previousNxMinorVersion$ as Observable<BenchmarkGroup>,
      this.previousNgMajorVersion$ as Observable<BenchmarkGroup>,
    ]).pipe(
      map(
        ([currentVersion, previousNxMinorVersion, previousNgMajorVersion]) => {
          return {
            currentVersion: {
              buildCold: currentVersion.buildCold.reverse()[0],
              buildWarm: currentVersion.buildWarm.reverse()[0],
              testCold: currentVersion.testCold.reverse()[0],
              testWarm: currentVersion.testWarm.reverse()[0],
              lintCold: currentVersion.lintCold.reverse()[0],
              lintWarm: currentVersion.lintWarm.reverse()[0],
            },
            previousNxMinorVersion: {
              buildCold: previousNxMinorVersion.buildCold.reverse()[0],
              buildWarm: previousNxMinorVersion.buildWarm.reverse()[0],
              testCold: previousNxMinorVersion.testCold.reverse()[0],
              testWarm: previousNxMinorVersion.testWarm.reverse()[0],
              lintCold: previousNxMinorVersion.lintCold.reverse()[0],
              lintWarm: previousNxMinorVersion.lintWarm.reverse()[0],
            },
            previousNgMajorVersion: {
              buildCold: previousNgMajorVersion.buildCold.reverse()[0],
              buildWarm: previousNgMajorVersion.buildWarm.reverse()[0],
              testCold: previousNgMajorVersion.testCold.reverse()[0],
              testWarm: previousNgMajorVersion.testWarm.reverse()[0],
              lintCold: previousNgMajorVersion.lintCold.reverse()[0],
              lintWarm: previousNgMajorVersion.lintWarm.reverse()[0],
            },
          };
        }
      )
    );
  }

  private initializeVersionBenchmarkGroup(
    benchmarkVersion: keyof typeof BENCHMARK_KEYS
  ) {
    return combineLatest([
      collectionData(
        collection(
          this.firestore,
          BENCHMARK_KEYS[benchmarkVersion].build.cold
        ) as CollectionReference<Benchmark>,
        { idField: 'timeCreated' }
      ),
      collectionData(
        collection(
          this.firestore,
          BENCHMARK_KEYS[benchmarkVersion].build.warm
        ) as CollectionReference<Benchmark>,
        { idField: 'timeCreated' }
      ),
      collectionData(
        collection(
          this.firestore,
          BENCHMARK_KEYS[benchmarkVersion].test.cold
        ) as CollectionReference<Benchmark>,
        { idField: 'timeCreated' }
      ),
      collectionData(
        collection(
          this.firestore,
          BENCHMARK_KEYS[benchmarkVersion].test.warm
        ) as CollectionReference<Benchmark>,
        { idField: 'timeCreated' }
      ),
      collectionData(
        collection(
          this.firestore,
          BENCHMARK_KEYS[benchmarkVersion].lint.cold
        ) as CollectionReference<Benchmark>,
        { idField: 'timeCreated' }
      ),
      collectionData(
        collection(
          this.firestore,
          BENCHMARK_KEYS[benchmarkVersion].lint.warm
        ) as CollectionReference<Benchmark>,
        { idField: 'timeCreated' }
      ),
    ]).pipe(
      map(([buildCold, buildWarm, testCold, testWarm, lintCold, lintWarm]) => {
        return {
          buildCold,
          buildWarm,
          testCold,
          testWarm,
          lintCold,
          lintWarm,
        };
      })
    );
  }
}
