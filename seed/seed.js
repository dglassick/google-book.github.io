const mongoose = require('mongoose');
const db = require('../models');

//Empties books and insterts seed

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/googlebooks');

const seed = {
  author: ['Steven Erikson'],
  description:
    "The Malazan Empire simmers with discontent, bled dry by interminable warfare, bitter infighting and bloody confrontations with the formidable Anomander Rake and his Tiste Andii, ancient and implacable sorcerers. Even the imperial legions, long inured to the bloodshed, yearn for some respite. Yet Empress Laseen's rule remains absolute, enforced by her dread Claw assassins. For Sergeant Whiskeyjack and his squad of Bridgeburners, and for Tattersail, surviving cadre mage of the Second Legion, the aftermath of the siege of Pale should have been a time to mourn the many dead. But Darujhistan, last of the Free Cities of Genabackis, yet holds out. It is to this ancient citadel that Laseen turns her predatory gaze. However, it would appear that the Empire is not alone in this great game. Sinister, shadowbound forces are gathering as the gods themselves prepare to play their hand... Conceived and written on a panoramic scale, Gardens of the Moon is epic fantasy of the highest order--an enthralling adventure by an outstanding new voice.",
  image:
    'https://books.google.com/books/content?id=Jgth_BYe7V8C&printsec=frontcover&img=1&zoom=1&edge=curl&imgtk=AFLRE71ISHgPowsAZCG6OUO7e6h7C_YR-LEGPLweFv9nBy-SpMWQ9mqTXEWDijFk9x2_rJKx7LqnigyZsh2CxWdLYQ6scF8cqJoHtE25Pat6uQ2CPlQI9MNNBO0qKVfEbZYTM4V6LfwA',
  link:
    'https://books.google.com/books/about/Gardens_of_the_Moon.html?id=Jgth_BYe7V8C',
  title: 'Gardens of the Moon'
};

db.Book.remove({})
  .then(() => db.Book.collection.insertMany(seed))
  .then(data => {
    console.log(data.result.n + ' books saved.');
    process.exit(0);
  })
  .catch(err => {
    console.log(err);
    process.exit(1);
  });
