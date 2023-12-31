import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Readdata = () => {
  const [data, setData] = useState([]);
  function getData() {
    axios
      .get("https://64a6a3c8096b3f0fcc803137.mockapi.io/crud-axios")
      .then((res) => {
        setData(res.data);
      });
  }

  function handleDelete(id) {
    axios
      .delete(`https://64a6a3c8096b3f0fcc803137.mockapi.io/crud-axios/${id}`)
      .then(() => {
        getData();
      });
  }

  const setToLocalStorage = (id, name,price,qty) => {
    localStorage.setItem("id", id);
    localStorage.setItem("name", name);
    localStorage.setItem("price", price);
    localStorage.setItem("qty", qty);
  };

  let total = data.reduce(function(pre,value){
    return pre + value.price * value.qty;
  },0);
  console.log(total);

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <div className="form-check form-switch">
      </div>
      <div className="d-flex justify-content-between m-2">
        <h2>Read Operation</h2>
        <Link to="/">
          <button className="btn btn-primary">Create</button>
        </Link>
      </div>
      <table className= 'table'>
        <thead>
          <tr>
            <th scope="col">id</th>
            <th scope="col"> coin Name</th>
            <th scope="col"> Price</th>
            <th scope="col">Qty</th>
            <th scope="col">Total</th>
            <th scope="col"></th>
            <th scope="col"></th>
          </tr>
        </thead>
        {data.map((eachData) => {
          return (
            <>
              <tbody>
                <tr>
                  <th scope="row">{eachData.id}</th>
                  <td>{eachData.name}</td>
                  <td>{eachData.price}</td>
                  <td>{eachData.qty}</td>
                  <td>{eachData.qty * eachData.price}</td>
                  <td>
                    <Link to="/update">
                      <button
                        className="btn btn-primary"
                        onClick={() =>
                          setToLocalStorage(
                            eachData.id,
                            eachData.name,
                            eachData.price,
                            eachData.qty
                          )
                        }
                      >
                        Edit
                      </button>
                    </Link>
                  </td>
                  <td>
                    <button
                      className="btn btn-primary"
                      onClick={() => handleDelete(eachData.id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              </tbody>
            </>
          );
        })}
      </table>
    </>
  );
};

export default Readdata;