import { useState } from "react";

function SearchBar(props) {
  const [name, setName] = useState("");
  const [price, setPrice] = useState(0);
  const [type, setType] = useState("");
  const [brand, setBrand] = useState("");

  const serachButtonPressed = () => {
    props.updateSearchParams({
      name: name,
      price: price,
      brand: brand,
      type: type,
    });
  };
  return (
    <div className="container">
      <div className="row">
        <h2 className="red">Seach for an item</h2>
      </div>
      <div className="row">
        <div className="col">
          <label htmlFor="name-field">Name:</label>
          <input
            className="form-control"
            id="name-field"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="col">
          <label htmlFor="price-field">Price:</label>
          <input
            className="form-control"
            id="price-field"
            type="number"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
        </div>
        <div className="col">
          <label htmlFor="type-field">Type:</label>
          <input
            className="form-control"
            id="type-field"
            type="text"
            value={type}
            onChange={(e) => setType(e.target.value)}
          />
        </div>
        <div className="col">
          <label htmlFor="brand-field">Brand:</label>
          <input
            className="form-control"
            id="brand-field"
            type="text"
            value={brand}
            onChange={(e) => setBrand(e.target.value)}
          />
        </div>
      </div>
      <div className="row mt-3">
        <div className="col-4" />
        <button
          type="button"
          className="col-4 btn btn-dark"
          onClick={serachButtonPressed}
        >
          Search
        </button>
      </div>
    </div>
  );
}

export default SearchBar;
