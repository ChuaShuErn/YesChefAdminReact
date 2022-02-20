import axios from 'axios';

class LoginService{

    postCheckLogin(userEmail:string, userPassword:string){
        return axios.post('http://localhost:8090/api/v1/logincheck/' + userEmail +"/" + userPassword);

    }

}
export default new LoginService();