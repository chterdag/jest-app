module.exports = async () => {
    return {
      verbose: true,
      collectCoverageFrom: [
        "./src/services/*.{js,jsx}",
        "!**/node_modules/**"
      ],
      testResultsProcessor: 'jest-sonar-reporter'
    };
  };
