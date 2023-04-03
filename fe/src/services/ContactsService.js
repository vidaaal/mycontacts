import ContactMapper from './mappers/ContactMapper';
import HttpClient from './utils/HttpClient';

class ContactsService {
  constructor() {
    this.httpClient = new HttpClient('http://localhost:3001');
  }

  async listContacts(orderBy = 'asc') {
    const contacts = await this.httpClient.get(`/contacts?orderBy=${orderBy}`);

    return contacts.map(ContactMapper.toDomain);
  }

  async getContactById(id) {
    const contact = await this.httpClient.get(`/contacts/${id}`);

    return ContactMapper.toDomain(contact);
  }

  createContact(contact) {
    const mappedContact = ContactMapper.toPersistence(contact);

    return this.httpClient.post('/contacts', {
      body: mappedContact,
    });
  }

  updateContact(id, contact) {
    const mappedContact = ContactMapper.toPersistence(contact);

    return this.httpClient.put(`/contacts/${id}`, {
      body: mappedContact,
    });
  }

  deleteContact(id) {
    return this.httpClient.delete(`/contacts/${id}`);
  }
}

export default new ContactsService();
