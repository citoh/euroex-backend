'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('roles', 
      [
        {
          id: 1,
          name: 'admin',
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: 2,
          name: 'moderator',
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: 3,
          name: 'user',
          created_at: new Date(),
          updated_at: new Date()
        },
      ],
    );
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('roles', null, {});
  }
};
