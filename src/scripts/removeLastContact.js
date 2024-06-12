import fs from 'node:fs/promises';
import { PATH_DB } from '../constants/contacts.js';

// Видалення останнього контакту з файлу db.json
export const removeLastContact = async () => {
  const currentContacts = await fs.readFile(PATH_DB, 'utf8');
  const arrayContacts = JSON.parse(currentContacts);

  arrayContacts.pop();
  await fs.writeFile(PATH_DB, JSON.stringify(arrayContacts), 'utf8');
};

removeLastContact();

// Виклик npm run remove-last
