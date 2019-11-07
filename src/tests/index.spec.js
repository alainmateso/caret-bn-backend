import authTests from './socialAuthTests.spec';
import defaultTests from './defaultTests.spec';
import signupTests from './signupTest.spec';
import profileTests from './profile.spec';
import loginTest from './loginTest.spec';
import requestTest from './requestTests/index.spec'
import requestTests from './requestTests.spec';
import accommodationTest from './accommodationTest.spec';
import editRequest from './editRequest.spec';
import editDeleteAccommodationsTests from './editDeleteAccommodationsTests.spec';
import adminTest from './adminTest.spec';
import searchRequestsTests from './searchRequestsTests.spec';
import notificationsTests from './notificationsTests.spec';
import ratingsTest from './ratingsTests.spec';
import commentsTests from './comment.spec';
import destinationTests from './destinationTests.spec';

describe('Default Tests', defaultTests);
describe('Edit Request Tests', editRequest);
describe('Social Authentication Tests', authTests);
describe('Signup Tests', signupTests);
describe('Login Tests', loginTest);
describe('Request Test', requestTest);
describe('Requests-Tests', requestTests);
describe('Accommodation Tests', accommodationTest);
describe('Setting Profile Test', profileTests);
describe('Social Authentication Tests', loginTest);
describe('Request Test', requestTest);
describe('Requests-Tests', requestTests);
describe('Edit-Delete Accommodations Tests', editDeleteAccommodationsTests);
describe('Social Authentication Tests', loginTest);
describe('Admin routes test', adminTest);
describe('Search Requests Tests', searchRequestsTests);
describe('Notifications Tests', notificationsTests);
describe('Ratings Tests', ratingsTest);
describe('Comments Tests', commentsTests);
describe('Destination Tests', destinationTests);

