import React, { useEffect, useState } from "react";
import Highordercomponets from "./Highordercomponets";

const UsersList = ({ data }) => {
  let renderUsers = data.map((user) => {
    return (
      <div key={user.id}>
        <p>
          <strong>{user.name}</strong>
        </p>
      </div>
    );
  });
  return (
    <div>
      <div>{renderUsers}</div>
    </div>
  );
};

const SearchUsers = Highordercomponets(UsersList, "users");

export default SearchUsers;