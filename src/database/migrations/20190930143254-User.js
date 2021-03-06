module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable('users', {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false
    },
    username: {
      type: Sequelize.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isLowercase: true,
        notNull: {
          msg: 'can\'t be blank'
        }
      }
    },
    
    phone: {
      type: Sequelize.STRING,
      unique: false
    },
    gender: {
      type: Sequelize.STRING,
      allowNull: true
    },
    dob: {
      type: Sequelize.DATEONLY,
      allowNull: true
    },
    country: {
      type: Sequelize.STRING,
      allowNull: true
    },
    language:{
      type: Sequelize.STRING,
      allowNull: true
    },
    currency:{
      type: Sequelize.STRING,
      allowNull: true
    },
    company:{
      type: Sequelize.STRING,
      allowNull: true
    },
    department:{
      type: Sequelize.STRING,
      allowNull: true
    },
    lineManager:{
      type: Sequelize.INTEGER,
      allowNull: false,
      defaultValue: 8
    },
    email: {
      type: Sequelize.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isLowercase: true,
        notNull: {
          msg: 'can\'t be blank'
        },
        isEmail: {
          msg: 'invalid format'
        }
      }
    },
    createdAt: Sequelize.DATEONLY,
    updatedAt: Sequelize.DATEONLY,
  }),
  down: queryInterface => queryInterface.dropTable('users')
};
