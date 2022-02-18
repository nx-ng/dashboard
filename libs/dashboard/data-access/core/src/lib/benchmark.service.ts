import { Injectable } from '@angular/core';
import {
  collection,
  collectionData,
  CollectionReference,
  Firestore,
} from '@angular/fire/firestore';
import { combineLatest, map, Observable } from 'rxjs';

import { BENCHMARK_KEYS } from '@nx-ng-dashboard/shared/env';

import { Benchmark, BenchmarkGroup } from './models/benchmark';

@Injectable({
  providedIn: 'root',
})
export class BenchmkarkService {
  currentVersion$: Observable<BenchmarkGroup> | undefined;
  previousNxMinorVersion$: Observable<BenchmarkGroup> | undefined;
  previousNgMajorVersion$: Observable<BenchmarkGroup> | undefined;

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
          BENCHMARK_KEYS[benchmarkVersion].lint.warm
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
