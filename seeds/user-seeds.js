const { User } = require('../models');

const userData = [
  {
    name: 'Sal',
    email: 'sal@hotmail.com',
    password: 'password12345',
    cart_id: 1, // Assign a cart ID to this user
  },
  // Add more user data as needed
];

const seedUsers = () => User.bulkCreate(userData, { individualHooks: true });

module.exports = seedUsers;
