// Run the test scenario
describe('Test Scenario', function() {
    // Import and execute the test cases from testCase1.js
    describe('Test Scenario 1', function() {
        require('./testCases/login/loginPostiveCase.test');
        require('./testCases/profile/profile.test')
    });
});