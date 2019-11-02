const testdata = {
  validSignup: {
    username: 'caretdevs',
    email: 'teamcaret@gmail.com',
    password: 'Pa$5W0rd',
    confirmPassword: 'Pa$5W0rd',
  },
  verifyUser: { id: 3, isVerified: false },
  validuser: {
    id: '3',
    username: 'caretdevs',
    email: 'teamcaret@gmail.com',
    password: 'Pa$5W0rd',
    confirmPassword: 'Pa$5W0rd',
  },
  invaliduser: {
    id: '11',
    username: 'caretdevs',
    email: 'team11@gmail.com',
    password: 'Pa$5W0rd',
    confirmPassword: 'Pa$5W0rd',
  },
  userProfile: {
    id: '11',
    username: 'caretdevs',
    email: 'team11@gmail.com',
    password: 'Pa$5W0rd',
    confirmPassword: 'Pa$5W0rd',
    language: 'lingala',
    isVerified: true,
  },

  user: {
    id:1,
    username: 'admin',
    role: '1',
    phone: '078567554',
    gender: 'male',
    dob: '2014-01-01 00:00:00+02',
    country: 'Rwanda',
    language: 'English',
    currency: 'USD',
    company: 'Andela',
    department: 'IT',
    lineManager: 'TTL',
    email: 'admin@gmail.com',
    createdAt: new Date(),
    updatedAt: new Date(),
    password: '$2b$10$vQp2ahUwAnRS.HHxNLK0pOQ/E41TRnxtlDJL.5vVRHsvL7DC9svNm',
    isVerified: true,
    googleId: '66777888888999',
    facebookId: '88877777', 
  },
  user2: {
    id:2,
    username: 'admin',
    role: '6',
    phone: '078567554',
    gender: 'male',
    dob: '2014-01-01 00:00:00+02',
    country: 'Rwanda',
    language: 'English',
    currency: 'USD',
    company: 'Andela',
    department: 'IT',
    lineManager: 'TTL',
    email: 'admin@gmail.com',
    createdAt: new Date(),
    updatedAt: new Date(),
    password: '$2b$10$vQp2ahUwAnRS.HHxNLK0pOQ/E41TRnxtlDJL.5vVRHsvL7DC9svNm',
    isVerified: false,
    googleId: '66777888888999',
    facebookId: '88877777', 
  },
  role:{
    Role: 'Travel Administrator',
  },
  role2:{
    Role: 'industrial manager',
  },
  missingEmail: {
    username: 'caretdevs1',
    password: 'Pa$5W0rd',
    confirmPassword: 'Pa$5W0rd',
  },
  emailExisting: {
    username: 'caretdevs2',
    email: 'teamcaret@gmail.com',
    password: 'Pa$5W0rd',
    confirmPassword: 'Pa$5W0rd',
  },
  usernameExisting: {
    username: 'caretdevs',
    email: 'teamcaret3@gmail.com',
    password: 'Pa$5W0rd',
    confirmPassword: 'Pa$5W0rd',
  },
  passwordNotMatch: {
    username: 'caretdevs4',
    email: 'teamcaret4@gmail.com',
    password: 'Pa$5W0rd',
    confirmPassword: 'Pa$5W0rDD',
  },
  passwordData: {
    email: 'teamcaret@gmail.com',
  },
  MissingEmailData: {
    email: '',
  },
  InvalidEmailData: {
    email: 'teamcaret@gmail',
  },
  passwordData3: {
    email: 'teamcaret41@gmail.com',
  },
  passwordData2: {
    newPassword: 'Pa$6W0rd',
    confirmPassword: 'Pa$6W0rd',
  },
  Missingpassword: {
    newPassword: '',
    confirmPassword: 'Pa$6W0rd',
  },
  Invalidpassword: {
    newPassword: 'Pa$6W0re',
    confirmPassword: 'Pa$6W0rd',
  },
  invaliduser2: {
    newPassword: 'Pa$5W0re',
    confirmPassword: 'Pa$6W0rd',
  },
  wrongEmail: {
    newPassword: 'Pa$5W0re',
    confirmPassword: 'Pa$6W0rd',
  },

};

export default testdata;
