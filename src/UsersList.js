import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getUsers } from './features/usersSlice';
import UserData from './UserData'


function Users() {
  const { users, loading } = useSelector((state) => state.users)
  const dispatch = useDispatch()


  useEffect(() => {
    dispatch(getUsers())
  }, [])

  return <div className='users'>
    <div className='dropdown__users' style={{display: "flex", flexDirection: "column", marginTop: "30px"}}>
      {users.map((user) =>
          <UserData key={user.id} id={user.id} name={user.name} username={user.username} email={user.email}
            street={user.address.street} suite={user.address.suite} city={user.address.city} phone={user.phone} website={user.website} />)}
    </div>;
  </div>
}

export default Users;
