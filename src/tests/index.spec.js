import authTests from './socialAuthTests.spec'
import defaultTests from './defaultTests.spec'
import signupTests from './signupTest.spec'
import loginTest from './loginTest.spec';
import requestTest from './requestTests.spec'
import accommodationTest from './accommodationTest.spec';

describe('Default Tests', defaultTests);
describe('Social Authentication Tests', authTests);
describe('Signup Tests', signupTests);
describe('Login Tests', loginTest);
describe('Request Test', requestTest);
describe('Accommodation Tests', accommodationTest);
