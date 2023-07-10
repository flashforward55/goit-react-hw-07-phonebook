import { AppContainer, Phonebook, Title } from './App.styled';
import ContactForm from './ContactForm';
import ContactList from './ContactList';
import Filter from './Filter';

function App() {
  return (
    <AppContainer>
      <Phonebook>Phonebook</Phonebook>
      <ContactForm />
      <Title>Contacts</Title>
      <Filter />
      <ContactList />
    </AppContainer>
  );
}

export default App;
