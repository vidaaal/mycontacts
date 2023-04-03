import { useEffect, useRef, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import useSafeAsyncAction from '../../hooks/useSafeAsyncAction';
import ContactsService from '../../services/ContactsService';
import toast from '../../utils/toast';

export default function useEditContact() {
  const [isLoading, setIsLoading] = useState(true);
  const [contactName, setContactName] = useState('');

  const { id } = useParams();
  const history = useHistory();
  const safeAsyncAction = useSafeAsyncAction();

  const contactFormRef = useRef(null);

  useEffect(() => {
    async function loadContact() {
      try {
        const contactData = await ContactsService.getContactById(
          id,
        );

        safeAsyncAction(() => {
          contactFormRef.current.setFieldValues(contactData);

          setIsLoading(false);
          setContactName(contactData.name);
        });
      } catch {
        safeAsyncAction(() => {
          history.push('/');
          toast({
            type: 'danger',
            text: 'Contato não encontrado!',
          });
        });
      }
    }

    loadContact();
  }, [id, history, safeAsyncAction]);

  async function handleSubmit(contact) {
    try {
      const editedContact = await ContactsService.updateContact(id, contact);

      setContactName(editedContact.name);

      toast({
        type: 'success',
        text: 'Contato editado com sucesso!',
      });
    } catch {
      toast({
        type: 'danger',
        text: 'Ocorreu um erro ao editar o contato!',
      });
    }
  }

  return {
    isLoading,
    contactName,
    contactFormRef,
    handleSubmit,
  };
}
