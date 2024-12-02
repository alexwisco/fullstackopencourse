const Search = ({ handleChange, search }) =>
    <div>
        find countries {"  "}
        <input 
        placeholder=" "
        type="text"
        onChange={handleChange}
        value={search}
        />
    </div>
   
export default Search