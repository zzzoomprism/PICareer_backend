import { QueryInterface } from 'sequelize';
import { SequelizeStaticInterface } from './../sequelizeStatic';

module.exports = {
  up: async (
    queryInterface: QueryInterface,
    Sequelize: SequelizeStaticInterface
  ): Promise<void> => {
    return queryInterface.createTable('Users', {
      id: {
        type: Sequelize.DataTypes.UUID,
        primaryKey: true,
        allowNull: false,
        defaultValue: Sequelize.DataTypes.UUIDV4
      },
      firstName: Sequelize.DataTypes.STRING,
      lastName: Sequelize.DataTypes.STRING,
      email: {
        type: Sequelize.DataTypes.STRING,
        unique: true,
        allowNull: false
      },
      isActive: {
        type: Sequelize.DataTypes.BOOLEAN,
        defaultValue: true
      },
      createdAt: {
        type: Sequelize.DataTypes.DATE
      },
      updatedAt: {
        type: Sequelize.DataTypes.DATE
      }
    });
  },
  down: async (queryInterface: QueryInterface): Promise<void> => {
    return queryInterface.dropTable('Users');
  }
};
