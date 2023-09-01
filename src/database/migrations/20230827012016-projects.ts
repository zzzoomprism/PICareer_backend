import { QueryInterface } from 'sequelize';
import { SequelizeStaticInterface } from './../sequelizeStatic';

module.exports = {
  up: async (
    queryInterface: QueryInterface,
    Sequelize: SequelizeStaticInterface
  ): Promise<void> => {
    return queryInterface.createTable('Projects', {
      id: {
        type: Sequelize.DataTypes.UUID,
        primaryKey: true,
        defaultValue: Sequelize.DataTypes.UUIDV4
      },

      name: {
        type: Sequelize.DataTypes.STRING,
        allowNull: false
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
    return queryInterface.dropTable('Projects');
  }
};
