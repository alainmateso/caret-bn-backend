'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => Promise.all([
    queryInterface.bulkInsert('accommodations', [
      {
        name: 'Isimbi Hotel',
        description: 'Lorem Ipsum',
        locationId: 1,
        availableSpace: '25',
        cost: 100,
        currency: 'USD',
        highlights: 'Lorem Ipsum',
        amenities: 'Lorem Ipasum',
        owner: 4,
        images: '"http://res.cloudinary.com/codeal/image/upload/v15712/19161/itwk2ro51fa8luasp8j.png"',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'El Gorillaz',
        description: 'Kampolama',
        locationId: 4,
        availableSpace: '35',
        cost: 50,
        currency: 'USD',
        highlights: 'Kampolama',
        amenities: 'Kampolama',
        owner: 4,
        images: '"http://res.cloudinary.com/codeal/image/upload/v15712/19161/itwk2ro51fa8laspg8j.png"',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Moto Ni Moto Inn',
        description: 'BoneFire Camp',
        locationId: 3,
        availableSpace: '20',
        cost: 50,
        currency: 'USD',
        highlights: 'BoneFire Camp',
        amenities: 'BoneFire Camp',
        owner: 3,
        images: '"http://res.cloudinary.com/codeal/image/upload/v15712/19161/i2ro51fa8luaspg8j.png"',
        createdAt: new Date(),
        updatedAt: new Date()
      },
  ])
  ]),

  down: (queryInterface, Sequelize) => Promise.all([
    queryInterface.bulkDelete('accommodations', null, {})
  ])
};