import React, { useState } from 'react';
const Register = (props) => {
    const [state, setState] = useState({
        email: "",
        password: "",
        confirmPassword: ""
    })
    const handleChange = (e) => {
        const { id, value } = e.target
        setState(prevState => ({
            ...prevState,
            [id]: value
        }))
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        if (state.password === state.confirmPassword) {
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
            console.log(payload);
            try {
                fetch('http://localhost:5000/api/register', {
                    // await fetch('/upload_image', {
                    method: 'POST',
                    body: JSON.stringify(payload),
                    // body: toString(imagetext),
                    // headers: { 'Content-type': 'application/json' }
                })
            } catch (error) {
                console.error(error);
            }
            // axios.post(API_BASE_URL+'/user/register', payload)
            //     .then(function (response) {
            //         if(response.status === 200){
            //             setState(prevState => ({
            //                 ...prevState,
            //                 'successMessage' : 'Registration successful. Redirecting to home page..'
            //             }))
            //             redirectToHome();
            //             props.showError(null)
            //         } else{
            //             props.showError("Some error ocurred");
            //         }
            //     })
            //     .catch(function (error) {
            //         console.log(error);
            //     }); 
            // alert("Registration successful")
        }
        else {
            // props.showError('Please enter valid username and password')
            alert("Registration Not successful")
        }

    }
    return (
        <div className="ml-2" >
            <div className="card col-12 col-lg-4 login-card mt-2 hv-center">
                <div className="pt-2">
                    <nav className="navbar navbar-dark bg-primary">
                        <div className="row col-12 d-flex justify-content-center text-white">
                            <span className="h3">Register</span>
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
                    <div className="form-group text-left">
                        <label htmlFor="confirmPassword">Confirm Password</label>
                        <input type="password"
                            className="form-control"
                            id="confirmPassword"
                            placeholder="Confirm Password"
                            value={state.confirmPassword}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="mb-2"><button type="submit" className="btn btn-primary pb-2">Register</button></div>
                </form>
            </div>
        </div>
    )
}
export default Register;