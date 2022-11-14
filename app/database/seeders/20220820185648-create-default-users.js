var bcrypt = require("bcryptjs")
'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('users', 
      [
        {
          id: 1,
          name: 'Admin',
          email: 'admin@citoh.com.br',
          password: bcrypt.hashSync('Citoh123!', 8),
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: 2,
          name: 'Moderator',
          email: 'moderator@citoh.com.br',
          password: bcrypt.hashSync('Citoh123!', 8),
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: 3,
          name: 'User',
          email: 'user@citoh.com.br',
          password: bcrypt.hashSync('Citoh123!', 8),
          created_at: new Date(),
          updated_at: new Date()
        }
      ]
    ) 
    await queryInterface.bulkInsert('users_roles', 
      [
        {
          user_id: 1,
          role_id: 1,
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          user_id: 1,
          role_id: 2,
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          user_id: 1,
          role_id: 3,
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          user_id: 2,
          role_id: 2,
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          user_id: 2,
          role_id: 3,
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          user_id: 3,
          role_id: 3,
          created_at: new Date(),
          updated_at: new Date()
        },
      ]
    )
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('users_roles', null, { });
    await queryInterface.bulkDelete('users', null, { });
  }
};
