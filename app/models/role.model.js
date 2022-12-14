const { Model } = require('sequelize')

module.exports = (sequelize, DataTypes) => {
  class Role extends Model {
    static associate(models) {
      this.belongsToMany(models.User, {
        through: "users_roles",
        foreignKey: "role_id",
        otherKey: "user_id"
      });
    }
  }
  Role.init({
    name: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'Role',
    tableName: 'roles',
  });
  return Role;
};