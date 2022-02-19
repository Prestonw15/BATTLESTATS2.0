import decode from 'jwt-decode';

class AuthService {
    login(Token) {
        // Saves user token to localStorage
        localStorage.setItem('id_token', Token);
        window.location.assign("/Dashboard")
      }
    }
    export default new AuthService();