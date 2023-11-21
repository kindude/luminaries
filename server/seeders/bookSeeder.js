
const { Books } = require('../models'); 

const bookData = [
  {
    title: 'The Catcher in the Rye',
    author: 'J.D. Salinger',
    description: 'A novel about a teenager named Holden Caulfield and his experiences in New York City.',
    cover_url: 'https://upload.wikimedia.org/wikipedia/commons/8/89/The_Catcher_in_the_Rye_%281951%2C_first_edition_cover%29.jpg'
  },
  {
    title: 'To Kill a Mockingbird',
    author: 'Harper Lee',
    description: 'Set in the American South during the 1930s, it deals with racial injustice and moral growth.',
    cover_url: 'https://m.media-amazon.com/images/M/MV5BNmVmYzcwNzMtMWM1NS00MWIyLThlMDEtYzUwZDgzODE1NmE2XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_FMjpg_UX1000_.jpg'
  },
  {
    title: '1984',
    author: 'George Orwell',
    description: 'A dystopian novel portraying a totalitarian regime and its impact on individual freedom and thought.',
    cover_url: 'https://m.media-amazon.com/images/I/81StSOpmkjL._AC_UF894,1000_QL80_.jpg'
  },
];

const seedBooks = async () => {
  try {
    await Books.bulkCreate(bookData);
    console.log('Books seeded successfully!');
  } catch (error) {
    console.error('Error seeding books:', error);
  }
};

seedBooks();
