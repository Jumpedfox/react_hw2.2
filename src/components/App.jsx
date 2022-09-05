import { useEffect } from 'react';
import Phonebook from './phonebook/phonebook';

export const App = () => {
  useEffect(() => {
    localStorage.getItem('contacts') === null &&
      localStorage.setItem('contacts', []);
  }, []);
  return (
    <div
      className="phonebook"
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
      }}
    >
      <Phonebook />
    </div>
  );
};
