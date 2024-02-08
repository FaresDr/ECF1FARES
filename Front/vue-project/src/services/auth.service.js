import router from '@/router';
import axios from 'axios';

const API_URL = 'http://localhost:3000/api/user/';

class AuthService {
  login(username , password) {
    return axios.post(API_URL + 'login', {
        username: username,
        password: password
      })
      
      .then(response => {
        if (response.data.token) {
          localStorage.setItem('user', JSON.stringify(response.data)); 
          router.push("test")         
        }
        
        return response.data;
        
      });

  }

  logout() {
    localStorage.removeItem('user');
    router.push("/")
  }

  register(username , password) {
    return axios.post(API_URL + 'add-user', {
      username: username ,
      password: password
    });
  }
}

export default new AuthService();