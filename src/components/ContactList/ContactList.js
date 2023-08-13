import { useSelector } from 'react-redux';
import { getContactsFilter, getContactsList } from 'redux/selectors';
import { ContactsListItem } from '../ContactListItem/ContactList.Item';
import { ContactsList } from './ContactList.styled';


export const ContactList = () => {
  const contacts = useSelector(getContactsList);
    const filterContacts = useSelector(getContactsFilter);
  const visibleContacts = [
    ...contacts.filter(contact => contact.name.toLowerCase().includes(filterContacts)),
  ];

  return (
    <ContactsList>
      {visibleContacts.map(({ name, number, id }) => (
        <ContactsListItem key={id} id={id} name={name} number={number} />
      ))}
    </ContactsList>
  );
};

