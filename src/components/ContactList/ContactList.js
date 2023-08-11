import { useSelector } from 'react-redux';
import { getContactsFilter, getContactsList } from 'redux/selectors';
import { ContactsListItem } from '../ContactListItem/ContactList.Item';
import { ContactsList } from './ContactList.styled';
import PropTypes from 'prop-types';

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

ContactsList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
    }).isRequired
  ),
};