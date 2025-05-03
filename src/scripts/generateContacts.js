import { createFakeContact } from '../utils/createFakeContact.js';
import { writeContacts } from '../utils/writeContacts.js';

const generateContacts = async (number) => {
  const randomGeneratedContacts = [];

  for (let i = 0; i <= number; i++) {
    const newContacts = createFakeContact();
    randomGeneratedContacts.push(newContacts);
  }
  await writeContacts(randomGeneratedContacts);
  console.log(`${number} contacts are generated!`);
};

generateContacts(5);
