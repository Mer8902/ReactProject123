import React, { useState } from 'react';
import './App.css';


function App() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [contacts, setContacts] = useState([]);

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleAddContact = () => {
    // Add the new contact to the list
    setContacts([...contacts, { id: contacts.length + 1, name, email }]);
    // Reset the input fields
    setName('');
    setEmail('');
  };

  const handleDeleteContact = (id) => {
    // Remove the contact with the given id from the list
    setContacts(contacts.filter(contact => contact.id !== id));
  };

  return (
    <div className="App">
      <div className="container">
        <h1 className="text-center mb-4">Contact Manager</h1>
        <div className="mb-3">
          <h2>Add Contact</h2>
          <div className="mb-3 form-group">
            <label htmlFor="name" className="form-label">Name:</label>
            <input 
              type="text" 
              className="form-control" 
              id="name" 
              placeholder="Enter name" 
              value={name} 
              onChange={handleNameChange} 
            />
          </div>
          <div className="mb-3 form-group">
            <label htmlFor="email" className="form-label">Email:</label>
            <input 
              type="email" 
              className="form-control" 
              id="email" 
              placeholder="Enter email" 
              value={email} 
              onChange={handleEmailChange} 
            />
          </div>
          <button 
            type="button" 
            className="btn btn-primary" 
            onClick={handleAddContact}
          >
            Add
          </button>
        </div>
        <div>
          <h2>Contact List</h2>
          <ul className="list-group">
            {contacts.map(contact => (
              <li key={contact.id} className="list-group-item">
                {contact.name} - {contact.email}
                <button 
                  className="btn btn-danger btn-sm float-end" 
                  onClick={() => handleDeleteContact(contact.id)}
                >
                  Delete
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default App;
