
const { Users } = require('../models');

const userData = [
  { email: 'john@example.com', password: 'password1', username: 'john_doe' },
  { email: 'jane@example.com', password: 'password2', username: 'jane_smith' }
];

const seedUsers = async () => {
  try {
    await Users.bulkCreate(userData);
    console.log('Users seeded successfully!');
  } catch (error) {
    console.error('Error seeding users:', error);
  }
};

seedUsers(); 
