import fs from 'fs/promises';
import { PATH_DB } from '../constants/contacts.js';

// Видалення контакту з файлу db.json із вірогідністю 50%
export const thanos = async () => {
  let randomArrayContacts;
  try {
    const curentContacts = await fs.readFile(PATH_DB, 'utf8');
    const arrayContacts = JSON.parse(curentContacts);

    // Рандомна умова 50/50
    randomArrayContacts = arrayContacts.filter(() => Math.random() > 0.5);

    const quantityContacts = arrayContacts.length - randomArrayContacts.length;
    console.log(`Видалено ${quantityContacts} контактів`);

    await fs.writeFile(PATH_DB, JSON.stringify(randomArrayContacts), 'utf8');
  } catch (err) {
    console.error('Помилка:', err);
  }
};

await thanos();

// Виклик npm run thanos
