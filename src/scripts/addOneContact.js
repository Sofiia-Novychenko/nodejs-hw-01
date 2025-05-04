import { createFakeContact } from '../utils/createFakeContact.js';
import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';

export const addOneContact = async () => {
  const newContact = createFakeContact();

  const readedContacts = await readContacts();
  const updatedContacts = readedContacts.concat(newContact);

  await writeContacts(updatedContacts);
  console.log('1 contact is generated!');
};

addOneContact();
