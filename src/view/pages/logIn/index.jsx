import axios from "axios";
import "./scss/index.scss";
import Config from "../../../config/config";

const LogIn = () => {

    const onSubmitLogIn = (event) => {  
        event.preventDefault();
        const email = event.target.email.value;
        const password = event.target.password.value;

        const payload = { email: email, password: password };

        axios.post(`${Config.api.baseUrl}auth/signin`, payload).then((res)=>{
            console.log(res);
        });
    }

    return(
        <div className="container-fluid d-flex justify-content-center my-5">
            <form onSubmit={onSubmitLogIn}>
            <p className="mb-1">Email:</p>
            <input type="text" name="email" className="input-field mb-3"/>
            <p className="mb-1">Password:</p>
            <input type="password" name="password" className="input-field mb-3"/>
            <button type="submit" className="submit-button d-block text-center">
                Log in
            </button>
            </form>
        </div>
    );
};

export default LogIn;