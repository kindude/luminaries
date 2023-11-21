const { Events } = require('../models'); 
const { Users } = require('../models');

const seedEvents = async () => {
    try {

      const user1 = await Users.findByPk(1);
      const user2 = await Users.findByPk(2);
  
      await Events.bulkCreate([
        {
          name: 'Book Club Meeting',
          description: 'Join us for our monthly book club meeting.',
          date: new Date('2023-12-01'),
          venue: 'Virtual',
          userId: user1.id,
        },
        {
          name: 'Author Q&A Session',
          description: 'An exclusive Q&A session with a renowned author.',
          date: new Date('2023-12-15'),
          venue: 'Online Event',
          userId: user2.id,
        },
      ]);
  
      console.log('Events seeded successfully.');
    } catch (error) {
      console.error('Error seeding events:', error);
    }
  };
  
  seedEvents();