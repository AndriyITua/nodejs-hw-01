import fs from 'node:fs/promises';
import { PATH_DB } from '../constants/contacts.js';
import { createFakeContact } from '../utils/createFakeContact.js';

// Додавання одного контакту у файл db.json
export const addOneContact = async () => {
  const currentContacts = await fs.readFile(PATH_DB);
  const arrayContacts = JSON.parse(currentContacts);
  arrayContacts.push(createFakeContact());
  try {
    await fs.writeFile(PATH_DB, JSON.stringify(arrayContacts), 'utf8');
    console.log('Контакт успішно додано.');
  } catch (err) {
    console.error('Помилка:', err);
  }
};

await addOneContact();

// Виклик npm run add-one
