import { getAllContacts } from '../scripts/getAllContacts.js';

export const countContacts = async () => {
  const allContacts = await getAllContacts();

  return `You have ${allContacts.length} ${
    allContacts.length === 1 ? 'contact' : 'contacts'
  }`;
};

console.log(await countContacts());
