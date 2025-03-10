import { useState, useEffect } from "react";
import { nanoid } from "nanoid";

import ContactForm from "../ContactForm/ContactForm";
import SearchBox from "../SearchBox/SearchBox";
import ContactList from "../ContactList/ContactList";

import styles from "./App.module.css";

const App = () => {
  const [contacts, setContacts] = useState([
    { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
    { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
    { id: "id-3", name: "Eden Clements", number: "645-17-79" },
    { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
  ]);
  const [filter, setFilter] = useState("");

  useEffect(() => {
    const storedContacts = JSON.parse(localStorage.getItem("contacts"));
    if (storedContacts) {
      setContacts(storedContacts);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("contacts", JSON.stringify(contacts));
  }, [contacts]);

  const handleAddContact = (name, number) => {
    const existingContact = contacts.find(
      (contact) => contact.name.toLowerCase() === name.toLowerCase()
    );
    if (existingContact) {
      alert(`${name} is already in contacts.`);
      return;
    }
    setContacts((prev) => [...prev, { id: nanoid(), name, number }]);
  };

  const handleDeleteContact = (contactId) => {
    setContacts((prev) => prev.filter((contact) => contact.id !== contactId));
  };

  const handleFilterChange = (e) => {
    setFilter(e.target.value);
  };

  const getFilteredContacts = () => {
    const normalized = filter.toLowerCase();
    return contacts.filter((contact) =>
      contact.name.toLowerCase().includes(normalized)
    );
  };
  const filteredContacts = getFilteredContacts();

  return (
    <div className={styles.appWrapper}>
      {/* Video */}
      <video className={styles.videoBackground} autoPlay muted loop>
        <source src="/Phonebook.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div className={styles.content}>
        <h1>Phonebook</h1>
        <p>by Alexander Andersen</p>
        <ContactForm onAddContact={handleAddContact} />
        <SearchBox value={filter} onChange={handleFilterChange} />
        <ContactList
          contacts={filteredContacts}
          onDeleteContact={handleDeleteContact}
        />
      </div>
    </div>
  );
};

export default App;
