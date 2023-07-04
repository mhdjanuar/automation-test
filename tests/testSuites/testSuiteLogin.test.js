describe('Test Suite', function() {
    // Import and execute the test cases from testCase1.js
    it('Test Suite Login', function() {
        require("../testCases/login/loginNegativeCase.test")
        require("../testCases/login/loginPostiveCase.test")
    });
});