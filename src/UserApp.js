import axios from "axios";
import React, { useEffect, useState } from "react";

function UserApp() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  async function getData() {
    const usersData = await axios.get(
      `https://693c2224b762a4f15c3f90c3.mockapi.io/users/`
    );

    setUsers(usersData.data);
  }

  return (
    <div>
      <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">Age</th>
            <th scope="col">Email</th>
            <th scope="col">Mobile</th>
            <th scope="col">Password</th>
          </tr>
        </thead>
        <tbody>
            {
                users.map((item, index) => {
                    return (
                      <tr>
                        <th scope="row">{index + 1}</th>
                        <td>{item.name}</td>
                        <td>{item.age}</td>
                        <td>{item.email}</td>
                        <td>{item.mobile}</td>
                        <td>{item.password}</td>
                      </tr>
                    );
                })
            }
          
         
        </tbody>
      </table>
    </div>
  );
}

export default UserApp;

// Create    Read     Update    Delete
// POST      GET      PUT       DELETE
