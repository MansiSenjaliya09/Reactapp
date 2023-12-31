import axios from "axios";
import React, { useEffect, useState } from "react";

import { Link, useNavigate } from "react-router-dom";

const Updatedata = () => {
  const [id, setId] = useState(0);
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [qty, setqty] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    setId(localStorage.getItem("id"));
    setName(localStorage.getItem("name"));
    setPrice(localStorage.getItem("price"));
    setqty(localStorage.getItem("qty"));
  }, []);

  const handleUpdate = (e) => {
    e.preventDefault();
    console.log("Id...", id);
    axios
      .put(`https://64a6a3c8096b3f0fcc803137.mockapi.io/crud-axios/${id}`, {
        name: name,
        price:price,
        qty:qty,
      })
      .then(() => {
        navigate("/read");
      });
  };

  return (
    <>
      <h2>Update</h2>
      <form>
        <div className="mb-3">
          <label className="form-label">Coin Name</label>
          <input
            type="text"
            className="form-control"
            value={name}
          />
        </div>

        <div className="mb-3">
          <label className="form-label"> Price</label>
          <input
            type="text"
            className="form-control"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Qty</label>
          <input
            type="text"
            className="form-control"
            value={qty}
            onChange={(e) => setqty(e.target.value)}
          />
        </div>

        <button
          type="submit"
          className="btn btn-primary mx-2"
          onClick={handleUpdate}
        >
          Update
        </button>
        <Link to="/read">
          <button className="btn btn-secondary mx-2"> Back </button>
        </Link>
      </form>
    </>
  );
};

export default Updatedata;