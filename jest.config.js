module.exports = async () => {
    return {
      verbose: true,
      testResultsProcessor: 'jest-junit',
    //   collectCoverage: true,
    //   coverageReporters: ["json", "html"],
    };
  };