import Loader from '../../components/Loader';

import {
  Container,
} from './styles';

import useHome from './useHome';
import InputSearch from './components/InputSearch';
import Header from './components/Header';
import ErrorStatus from './components/ErrorStatus';
import EmptyList from './components/EmptyList';
import SearchNotFound from './components/SearchNotFound';
import ContactsList from './components/ContactsList';
import Modal from '../../components/Modal';

export default function Home() {
  const {
    isLoading,
    isLoadingDelete,
    isDeleteModalVisible,
    contactBeingDeleted,
    handleCloseDeleteModal,
    handleConfirmDeleteContact,
    contacts,
    searchTerm,
    handleChangeSearchTerm,
    hasError,
    handleTryAgain,
    filteredContacts,
    orderBy,
    handleToggleOrderBy,
    handleDeleteContact,
  } = useHome();

  const hasContacts = contacts.length > 0;
  const isListEmpty = !hasError && (!hasContacts && !isLoading);
  const isSearchEmpty = !hasError && (hasContacts && filteredContacts.length < 1);

  return (
    <Container>
      <Loader isLoading={isLoading} />

      {hasContacts && (
        <InputSearch
          value={searchTerm}
          onChange={handleChangeSearchTerm}
        />
      )}

      <Header
        hasError={hasError}
        qtyOfContacts={contacts.length}
        qtyOfFilteredContacts={filteredContacts.length}
      />

      {hasError && <ErrorStatus onTryAgain={handleTryAgain} />}
      {isListEmpty && <EmptyList />}
      {isSearchEmpty && <SearchNotFound searchTerm={searchTerm} />}

      {!hasError && (
        <>

          <ContactsList
            filteredContacts={filteredContacts}
            orderBy={orderBy}
            onToggleOrderBy={handleToggleOrderBy}
            onDeleteContact={handleDeleteContact}
          />

          <Modal
            danger
            visible={isDeleteModalVisible}
            title={`Tem certeza que deseja remove o contato ${contactBeingDeleted?.name}?`}
            confirmLabel="Deletar"
            isLoading={isLoadingDelete}
            onCancel={handleCloseDeleteModal}
            onConfirm={handleConfirmDeleteContact}
          >
            <p>Está ação não poderá ser desfeita!</p>
          </Modal>
        </>

      )}
    </Container>
  );
}
