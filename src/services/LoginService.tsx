import axios from 'axios';


const LOGIN_API_BASE_URL = 'http://localhost:8090/api/v1/'

class LoginService{

    postCheckLogin(userEmail:string, userPassword:string){
        return axios.post('http://localhost:8090/api/v1/logincheck/' + userEmail +"/" + userPassword);

    }

}
export default new LoginService;