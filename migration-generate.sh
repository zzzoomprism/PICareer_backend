cat > ./src/database/migrations/$(date +"%Y%m%d%H%M%S")-$1.ts << EOF
import { QueryInterface } from 'sequelize';
import { SequelizeStaticInterface } from './../sequelizeStatic';

module.exports = {
  up: async (queryInterface: QueryInterface, Sequelize: SequelizeStaticInterface) => {
  // Write migration code here.
  },
  down: async (queryInterface: QueryInterface, Sequelize: SequelizeStatic) => {
  // If migration fails, this will be called. Rollback your migration changes.
  },
};
EOF