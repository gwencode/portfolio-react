import { User } from '../types/user';

type LoginData = {
  email: string;
  password: string;
};

const fetchUser = (loginData: LoginData, login: (user: User) => void) => {
  fetch(`${import.meta.env.VITE_API_URL}/users/signin`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(loginData)
  })
    .then((res) => {
      if (res.status === 200) {
        res
          .json()
          .then((json) => {
            login({
              id: json.id,
              email: json.email,
              authToken: json.token
            });
          })
          .then(() => {
            window.location.href = '/admin/projects';
            // navigate('/admin/projects');
          });
      } else {
        alert('Login failed.');
      }
    })
    .catch((err) => {
      console.log(err);
    });
};

export default fetchUser;
