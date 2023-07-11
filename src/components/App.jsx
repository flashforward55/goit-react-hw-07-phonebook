import { AppContainer, Phonebook, Title } from './App.styled';
import ContactForm from './ContactForm';
import ContactList from './ContactList';
import Filter from './Filter';
import Loading from './Loading';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectContacts, selectIsLoading, selectError } from 'redux/selector';
import { fetchContacts } from 'redux/operations';

function App() {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  const loading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <AppContainer>
      <Phonebook>Phonebook</Phonebook>
      <ContactForm />
      <Title>Contacts</Title>
      {contacts.length ? (
        <>
          <Filter />
          {loading && !error && <Loading />}
          <ContactList />
        </>
      ) : loading ? (
        <Loading />
      ) : (
        <p>Please add new contact</p>
      )}
    </AppContainer>
  );
}

export default App;
