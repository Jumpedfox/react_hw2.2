const SectionBody = ({ getName }) => {
  return (
    <>
      <input
        className="section-body__input "
        id="input-filter"
        type="text"
        name="name"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
        placeholder="Find contact..."
        onChange={getName}
      />
    </>
  );
};

export default SectionBody;
