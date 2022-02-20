import { openDB } from 'idb';

const initdb = async () =>
  openDB('jate', 1, {
    upgrade(db) {
      if (db.objectStoreNames.contains('jate')) {
        console.log('jate database already exists');
        return;
      }
      db.createObjectStore('jate', { keyPath: 'id', autoIncrement: true });
      console.log('jate database created');
    },
  });

// TODO: Add logic to a method that accepts some content and adds it to the database
export const putDb = async (content) => {
  const db = await openDB('jate', 1)
  const text = db.transaction('jate', 'readAndWrite')
  const storage = text.objectStore('jate')
  const req = storage.put({
    id: 1, value: content
  })
  const res = await req
  console.log('success', res.value)

};

// TODO: Add logic for a method that gets all the content from the database
export const getDb = async () => {
  const db = await openDB('jate', 1)
  const text = db.transaction('jate', 'read')
  const storage = text.objectStore('jate')
  const req = storage.get(1)
  const res = await req
  //conditional ? acts as first if, : acts as else
  res 
    ? console.log('Success', res.value)
    : console.log('Not Found')
  return res?.value
};

initdb();
