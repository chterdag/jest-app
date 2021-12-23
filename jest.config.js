module.exports = async () => {
    return {
      verbose: true,
      "collectCoverage":true,
      "coverageReporters": [
        "text",
        "lcov"
      ],
      "reporters": [
        "default"
      ],
      "collectCoverageFrom": [
        "./src/*.{js,jsx}",
        "!**/node_modules/**"
      ],
      "testResultsProcessor": "jest-sonar-reporter"
    };
  };
