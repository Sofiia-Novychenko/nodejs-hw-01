import { createFakeContact } from '../utils/createFakeContact.js';
import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';

const generateContacts = async (number) => {
  const randomGeneratedContacts = [];

  for (let i = 0; i < number; i++) {
    const newContacts = createFakeContact();
    randomGeneratedContacts.push(newContacts);
  }

  const readedContacts = await readContacts();
  const updatedContacts = readedContacts.concat(randomGeneratedContacts);

  await writeContacts(updatedContacts);
  console.log(`${number} contacts are generated!`);
};

generateContacts(5);
