import styles from "./SearchBox.module.css";

const SearchBox = ({ value, onChange }) => {
  return (
    <div className={styles.wrapper}>
      <label htmlFor="search">Find contacts by name</label>
      <input
        id="search"
        type="text"
        name="search"
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

export default SearchBox;
