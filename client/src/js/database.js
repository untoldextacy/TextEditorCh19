import { openDB } from 'idb';

// Initialize the IndexedDB database
const initdb = async () =>
  openDB('jate', 1, {
    upgrade(db) {
      // If the 'jate' object store already exists, skip creation
      if (db.objectStoreNames.contains('jate')) {
        console.log('jate database already exists');
        return;
      }
      // Create a new object store with 'id' as the keyPath and auto-increment
      db.createObjectStore('jate', { keyPath: 'id', autoIncrement: true });
      console.log('jate database created');
    },
  });

// Method to add content to the 'jate' database
export const putDb = async (content) => {
  console.log('Putting content into the database...');
  const db = await openDB('jate', 1); // Open the database
  const tx = db.transaction('jate', 'readwrite'); // Start a readwrite transaction
  const store = tx.objectStore('jate'); // Access the object store
  const request = store.add({ content }); // Add a new entry with the content

  // Wait for the transaction to complete
  await tx.done;
  console.log('Content saved to the database');
};

// Method to get all content from the 'jate' database
export const getDb = async () => {
  console.log('Getting content from the database...');
  const db = await openDB('jate', 1); // Open the database
  const tx = db.transaction('jate', 'readonly'); // Start a readonly transaction
  const store = tx.objectStore('jate'); // Access the object store
  const request = store.getAll(); // Get all records from the object store

  // Wait for the transaction to complete and return the results
  const result = await request;
  console.log('Content retrieved from the database', result);
  return result;
};

// Initialize the database when the app starts
initdb();
