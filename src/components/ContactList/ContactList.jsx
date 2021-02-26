import styles from './ContactList.module.css';

const ContactList = ({ onDeleteContact, visibleContacts }) => {
  return (
    <ul>
      {visibleContacts.map(({ id, name, number }) => (
        <li className={styles.item} key={id}>
          {name}: {number}
          <button
            className={styles.btn}
            type="button"
            name={id}
            onClick={() => onDeleteContact(id)}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};

export default ContactList;
