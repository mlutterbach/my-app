import './Search.scss'

const Search = ({ onSearch }) => {
  const handleChange = (event) => {
    onSearch(event.target.value);
  };

  return <input className='search' type="text" placeholder="Search flats" onChange={handleChange}/>
};

export default Search;
