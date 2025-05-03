import { PATH_DB } from '../constants/contacts.js';
import fs from 'node:fs/promises';
import { readContacts } from '../utils/readContacts.js';

export const writeContacts = async (updatedContacts) => {
  const readedContacts = await readContacts();

  const arrayWithNewContacts = readedContacts.concat(updatedContacts);
  await fs.writeFile(
    PATH_DB,
    JSON.stringify(arrayWithNewContacts, undefined, 2),
    'utf-8',
  );
  return arrayWithNewContacts;
};
