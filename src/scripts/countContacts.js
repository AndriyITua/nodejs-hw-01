import fs from 'node:fs/promises';
import { PATH_DB } from '../constants/contacts.js';

// Отримання значення кількості контактів записаних у файлі db.json
export const countContacts = async () => {
  try {
    const currentContacts = await fs.readFile(PATH_DB, 'utf8');
    const arrayContacts = JSON.parse(currentContacts);
    return `Кількість контактів у файлі db.json: ${arrayContacts.length}`;
  } catch (err) {
    console.log('Помилка:', err);
  }
};

console.log(await countContacts());

// Виклик npm run count
