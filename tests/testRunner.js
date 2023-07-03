const setupTest = require('./setup/setup.test');
const loginTest = require('./login/login.test');

// Run the test suites
describe('Test Suite', function () {

    // Execute the login test suite
    describe('Setup Tests', function () {
        setupTest;
    });
    
    // Execute the login test suite
    describe('Login Tests', function () {
        loginTest;
    });
});