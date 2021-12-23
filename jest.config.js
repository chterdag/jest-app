module.exports = async () => {
    return {
      verbose: true,
      "collectCoverageFrom": [
        "./*.{js,jsx}",
        "!**/node_modules/**"
      ],
      "testResultsProcessor": 'jest-sonar-reporter'
    };
  };
