import { writeContacts } from '../utils/writeContacts.js';
import { readContacts } from '../utils/readContacts.js';

export const removeAllContacts = async () => {
  const contacts = await readContacts();

  if (contacts.length === 0) {
    console.log('Contact list is already empty.');
    return;
  }
  await writeContacts([]);
  console.log('Contact list is empty now!');
};

removeAllContacts();
