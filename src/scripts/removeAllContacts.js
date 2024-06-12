import fs from 'node:fs/promises';
import { PATH_DB } from '../constants/contacts.js';

// Видалення всіх контактів з файлу db.json
export const removeAllContacts = async () => {
  try {
    const emptyArray = ['[]'];
    await fs.writeFile(PATH_DB, emptyArray, 'utf8');
    console.log('Контакти успішно видалено');
  } catch (err) {
    console.error('Помилка:', err);
  }
};

await removeAllContacts();

// Виклик npm run remove-all
