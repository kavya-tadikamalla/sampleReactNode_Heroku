import React, { useState } from 'react';
import Axios from 'axios';
const Login = (props) => {
    const [state, setState] = useState({
        email: "",
        password: ""
    });
    const handleChange = (e) => {
        const { id, value } = e.target
        setState(prevState => ({
            ...prevState,
            [id]: value
        }))
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        if (state.password !== "" || state.email !== "") {
            sendDetailsToServer()
        } else {
            // props.showError('Passwords do not match');
            alert("Passwords do not match")
        }
    }
    const sendDetailsToServer = () => {
        if (state.email.length && state.password.length) {
            const payload = {
                "email": state.email,
                "password": state.password,
            }
            console.log("---------------") ;
            console.log(payload);
            console.log("---------------") ;
            
            try {
                /* fetch('https://jsonblob.com/api/fb31c392-766c-11eb-b94a-33dac042b7f8')
                    .then(response => response.json())
                    .then((data) =>{
                        for(let i=0;i<data.length;i++){
                            if(state.email === data[i].email){
                                if(state.password === data[i].password){
                                    alert("Login Successful");
                                }
                            }
                            else{
                                alert("Invalid UserName or Password");
                            }
                        }
                    });                    */
                    console.log("Inside Try")
                    Axios.post('api/login',payload)
                    .then((response)=>{
                        if(response.data.message==="Login Successful"){
                            localStorage.setItem("userToken",response.data.token);
                            localStorage.setItem("email",payload.email);
                            props.history.push('/');

                        }
                    })    
                    
                
            } catch (error) {
                console.error(error);
            }
            

        }
        else {

            alert("Login Not successful")
        }

    }
    return (
        <div className="ml-2 mr-2" >
            <div className="card col-12 col-lg-4 login-card mt-2 hv-center">
                <div className="pt-2">
                    <nav className="navbar navbar-dark bg-primary">
                        <div className="row col-12 d-flex justify-content-center text-white">
                            <span className="h3">Login</span>
                        </div>
                    </nav>
                </div>
                <form onSubmit={handleSubmit}>
                    <div className="form-group text-left">
                        <label htmlFor="email">Email address</label>
                        <input type="email"
                            className="form-control"
                            id="email"
                            placeholder="Enter email"
                            value={state.email}
                            onChange={handleChange}
                        />
                        <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                    </div>
                    <div className="form-group text-left">
                        <label htmlFor="password">Password</label>
                        <input type="password"
                            className="form-control"
                            id="password"
                            placeholder="Password"
                            value={state.password}
                            onChange={handleChange}
                        />
                    </div>

                    <div className="mb-2"><button type="submit" className="btn btn-primary pb-2">Login</button></div>
                </form>
            </div>
        </div>
    )
}
export default Login;