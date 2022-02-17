export const BENCHMARK_KEYS = {
  currentVersion: {
    build: {
      warm: 'build-current-version-warm',
      cold: 'build-current-version-cold',
    },
    test: {
      warm: 'test-current-version-warm',
      cold: 'test-current-version-cold',
    },
    lint: {
      warm: 'lint-current-version-warm',
      cold: 'lint-current-version-cold',
    },
  },
  previousNgMajorVersion: {
    build: {
      warm: 'build-previous-ng-major-version-warm',
      cold: 'build-previous-ng-major-version-cold',
    },
    test: {
      warm: 'test-previous-ng-major-version-warm',
      cold: 'test-previous-ng-major-version-cold',
    },
    lint: {
      warm: 'lint-previous-ng-major-version-warm',
      cold: 'lint-previous-ng-major-version-cold',
    },
  },
  previousNxMinorVersion: {
    build: {
      warm: 'build-previous-nx-minor-version-warm',
      cold: 'build-previous-nx-minor-version-cold',
    },
    test: {
      warm: 'test-previous-nx-minor-version-warm',
      cold: 'test-previous-nx-minor-version-cold',
    },
    lint: {
      warm: 'lint-previous-nx-minor-version-warm',
      cold: 'lint-previous-nx-minor-version-cold',
    },
  },
};
