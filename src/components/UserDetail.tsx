import { useLocation } from 'react-router-dom';

export default function UserDetail() {
    const location = useLocation();
  return (
    <>
     <h2>Thông tin chi tiết</h2>
      {location && (
        <div>
          <p>Id: {location.state.id}</p>
          <p>UserName: {location.state.name}</p>
          <p>Email: {location.state.email}</p>
          <p>Address: {location.state.address}</p>
        </div>
      )}
    </>
  )
}
