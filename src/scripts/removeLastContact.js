import { writeContacts } from '../utils/writeContacts.js';
import { readContacts } from '../utils/readContacts.js';

export const removeLastContact = async () => {
  const contacts = await readContacts();
  const copiedContacts = [...contacts];
  if (copiedContacts.length === 0) {
    console.log('Nothing to delete:(');
    return;
  }

  //* " The pop method removes the last element from a given array ".
  //* зроблено на копії оригінального масиву аби уникнути мутації
  copiedContacts.pop();
  await writeContacts(copiedContacts);

  console.log('One contacted deleted');
};

removeLastContact();
