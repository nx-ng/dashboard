export const BENCHMARK_KEYS = {
  currentVersion: {
    build: {
      cache: 'build-current-version-cache',
      cold: 'build-current-version-cold',
    },
    test: {
      cold: 'test-current-version-cold',
    },
    lint: {
      cold: 'lint-current-version-cold',
    },
  },
  previousNgMajorVersion: {
    build: {
      cache: 'build-previous-ng-major-version-cache',
      cold: 'build-previous-ng-major-version-cold',
    },
    test: {
      cold: 'test-previous-ng-major-version-cold',
    },
    lint: {
      cold: 'lint-previous-ng-major-version-cold',
    },
  },
  previousNxMinorVersion: {
    build: {
      cache: 'build-previous-nx-minor-version-cache',
      cold: 'build-previous-nx-minor-version-cold',
    },
    test: {
      cold: 'test-previous-nx-minor-version-cold',
    },
    lint: {
      cold: 'lint-previous-nx-minor-version-cold',
    },
  },
};
