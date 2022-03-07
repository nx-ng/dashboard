export interface LatestResults {
  currentVersion: SingleBenchmarkGroup;
  previousNxMinorVersion: SingleBenchmarkGroup;
  previousNgMajorVersion: SingleBenchmarkGroup;
}

export interface BenchmarkResults {
  command: string;
  max: number;
  mean: number;
  median: number;
  min: number;
}

export interface Benchmark {
  timeCreated: number;
  angularVersion: string;
  nxVersion: string;
  nxCommit?: string;
  nxBranch?: string;
  nxPR?: string;
  results: BenchmarkResults[];
}

export interface BenchmarkGroup {
  buildCold: Benchmark[];
  buildCache: Benchmark[];
  testCold: Benchmark[];
  lintCold: Benchmark[];
}
export interface SingleBenchmarkGroup {
  buildCold: Benchmark;
  buildCache: Benchmark;
  testCold: Benchmark;
  lintCold: Benchmark;
}
