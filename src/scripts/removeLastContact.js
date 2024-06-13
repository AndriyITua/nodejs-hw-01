import fs from 'node:fs/promises';
import { PATH_DB } from '../constants/contacts.js';

// Видалення останнього контакту з файлу db.json
export const removeLastContact = async () => {
  const currentContacts = await fs.readFile(PATH_DB, 'utf8');
  const arrayContacts = JSON.parse(currentContacts);
  if (arrayContacts.length === 0) {
    console.log('Контактів не знайдено');
    return;
  }
  arrayContacts.pop();
  await fs.writeFile(PATH_DB, JSON.stringify(arrayContacts), 'utf8');
};

removeLastContact();

// Виклик npm run remove-last
