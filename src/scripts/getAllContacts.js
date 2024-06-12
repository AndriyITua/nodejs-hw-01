import fs from 'node:fs/promises';
import { PATH_DB } from '../constants/contacts.js';

//Отримання масиву контактів з файлу db.json
export const getAllContacts = async () => {
  try {
    const currentContacts = await fs.readFile(PATH_DB, 'utf8');
    return JSON.parse(currentContacts);
  } catch (err) {
    console.log('Помилка:', err);
  }
};

console.log(await getAllContacts());

// Виклик npm run get-all
