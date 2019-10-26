module.exports = (sequelize, DataTypes) => {
  const accommodations = sequelize.define('accommodations', {
    name: DataTypes.STRING,
    description: DataTypes.STRING,
    locationId: DataTypes.INTEGER,
    availableSpace: DataTypes.STRING,
    cost: DataTypes.INTEGER,
    currency: DataTypes.STRING,
    highlights: DataTypes.STRING,
    amenities: DataTypes.STRING,
    owner: DataTypes.INTEGER,
    images: DataTypes.JSONB
  }, { tableName: 'accommodations' });
  accommodations.associate = models => {
    // associations can be defined here
    accommodations.belongsTo(models.users, {
      as: 'ownerUser',
      foreignKey: 'owner',
      targetKey: 'id',
    });
    accommodations.belongsTo(models.locations, {
      as: 'accommodationLocation',
      foreignKey: 'locationId',
      targetKey: 'id',
    });
  };
  return accommodations;
};