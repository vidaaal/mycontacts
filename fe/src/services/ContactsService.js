import delay from '../utils/delay';

class ContactsService {
  async listContacts(orderBy) {
    const res = await fetch(`http://localhost:3001/contacts?orderBy=${orderBy}`);
    await delay(1000);
    return res.json();
  }
}

export default new ContactsService();
