import { BsSearch } from "react-icons/bs";
import './SearchBar.css';

export default function SearchBar({ onSearch }) {
  const handleChange = (e) => {
     onSearch(e.target.value);
  };

  return (
      <div className="search-bar">
        <span className="search-icon"><BsSearch /></span>
        <input
          type="text"
          placeholder="Pesquisar por títulos"
          onChange={handleChange}
        />
      </div>
  );
}
