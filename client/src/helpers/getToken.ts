import { User } from '../types/user';

const getToken = () => {
  const admin = localStorage.getItem('user');

  if (!admin) {
    window.location.href = '/';
    return;
  }
  const adminObject: User = JSON.parse(admin);
  return adminObject.authToken;
};

export default getToken;
