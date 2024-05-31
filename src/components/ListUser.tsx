import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function ListUser() {
  const [users] = useState([
    { id: 1, name: 'Nguyen Van A', email: 'nva@gmail.com', address: 'Ha Noi' },
    { id: 2, name: 'Nguyen Van B', email: 'nvb@gmail.com', address: 'Ha Nam' },
    { id: 3, name: 'Nguyen Van C', email: 'nvc@gmail.com', address: 'Ninh Binh' },
  ]);

  const navigate = useNavigate();

  const handleViewDetails = (user) => {
    navigate(`/userdetail`, { state: user });
  };

  return (
    <>
      {users.map((user) => (
        <div key={user.id}>
          <p>Id: {user.id}</p>
          <p>UserName: {user.name}</p>
          <p>Email: {user.email}</p>
          <p>Address: {user.address}</p>
          <button onClick={() => handleViewDetails(user)}>Xem chi tiết</button>
        </div>
      ))}
    </>
  );
}
