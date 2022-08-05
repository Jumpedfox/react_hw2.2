const SectionHeader = ({ addContact }) => {
  return (
    <>
      <input
        className="section-header__input"
        id="input-name"
        type="text"
        name="name"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
        placeholder="Name..."
      />
      <input
        className="section-header__input"
        id="input-num"
        type="tel"
        name="number"
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        required
        placeholder="Number..."
      />
      <button className="add-contact__button" onClick={addContact}>
        ADD
      </button>
    </>
  );
};

export default SectionHeader;
