import fs from 'node:fs/promises';
import { PATH_DB } from '../constants/contacts.js';
import { createFakeContact } from '../utils/createFakeContact.js';

// Додавання визначеної кількості контактів у файл db.json
const generateContacts = async (number) => {
  try {
    const currentContact = await fs.readFile(PATH_DB, 'utf-8');
    const arrayContacts = JSON.parse(currentContact);
    for (let i = 0; i < number; i++) {
      arrayContacts.push(createFakeContact());
    }
    await fs.writeFile(PATH_DB, JSON.stringify(arrayContacts), 'utf-8');
    console.log(`${number} контактів успішно додано.`);
  } catch (err) {
    console.log('Помилка:', err);
  }
};

await generateContacts(5);

// Виклик npm run generate
