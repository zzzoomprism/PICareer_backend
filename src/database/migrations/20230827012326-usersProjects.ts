import { QueryInterface } from 'sequelize';
import { SequelizeStaticInterface } from './../sequelizeStatic';

module.exports = {
  up: async (
    queryInterface: QueryInterface,
    Sequelize: SequelizeStaticInterface
  ): Promise<void> => {
    return queryInterface.createTable('UsersProjects', {
      id: {
        type: Sequelize.DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },

      userId: {
        type: Sequelize.DataTypes.UUID,
        references: {
          model: 'Users',
          key: 'id'
        },
        allowNull: false
      },

      projectId: {
        type: Sequelize.DataTypes.UUID,
        references: {
          model: 'Projects',
          key: 'id'
        },
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
    return queryInterface.dropTable('UsersProjects');
  }
};
