// Profile.tsx
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../app/store';
import { clearUser } from '../../features/user/model/userSlice';


const Profile: React.FC = () => {
  const dispatch = useDispatch();
  const email = useSelector((state: RootState) => state.user.email);
  const password = useSelector((state: RootState) => state.user.password);

  const handleLogout = () => {
    dispatch(clearUser());
  };

  return (
    <div>
      <h2>Профиль пользователя</h2>
      <p>Email: {email}</p>
      <p>Password: {password}</p>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default Profile;
