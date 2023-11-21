const { Reviews, Books, Users} = require('../models');

const seedReviews = async () => {
  try {
    const book1 = await Books.findByPk(1);
    const book2 = await Books.findByPk(2);
    const book3 = await Books.findByPk(3);

    const user1 = await Users.findByPk(1);
    const user2 = await Users.findByPk(2);
    
    await Reviews.bulkCreate([
      {
        description: 'This book was an amazing read! Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ultricies vestibulum tellus, quis feugiat purus hendrerit a. Cras non ultrices turpis. Vivamus convallis enim a nisi elementum consequat.',
        bookId: book1.id,
        userId: user1.id

      },
      {
        description: 'Highly recommended for everyone! Duis eget ex vitae eros aliquam condimentum. Phasellus vehicula, ipsum sed fermentum ullamcorper, ipsum sapien lacinia magna, ut faucibus urna dolor vitae felis.',
        bookId: book2.id,
        userId: user2.id
      },
      {
        description: 'Incredible storyline and characters! Ut convallis orci nec ipsum ullamcorper ultricies. Sed fermentum varius sem, ut aliquet dolor tincidunt in. Donec eu consequat neque.',
        bookId: book3.id,
        userId: user2.id

      },
    ]);

    console.log('Reviews seeded successfully.');
  } catch (error) {
    console.error('Error seeding reviews:', error);
  }
};

seedReviews();
