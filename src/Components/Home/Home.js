import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
// import Axios from 'axios';
// import './Home.css'
function Home(props) {
    const [state, setState] = useState();
    const user = localStorage.getItem("userToken");
    useEffect(() => {
        if (user !== null) {
            // Axios.get(`/api/user/${user}`)
            //     .then((response) => {
            //         console.log("yyy:" + response.data.message)
            //         if (response.data.message === true) {
            //             setState({ details: response.data })
            //         }
            //     });
            setState(localStorage.getItem("email"));
        }
        else {
            setState('')
        }
    }, [user]);
    // console.log(state.details)
    const handleLogout = () => {
        localStorage.removeItem("userToken");
        localStorage.removeItem("email");
        console.log(state)
        props.history.push('/');
    }
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-light border-bottom">

                <button className="navbar-toggler ml-auto" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    {user === null ?
                        <ul className="navbar-nav ml-auto ">

                            <li className="nav-item pt-2">
                                <Link to="/login" className="btn btn-success btn-sm ml-1">Login</Link>
                            </li>
                        </ul>
                        :
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item pt-2">
                                <button className="btn btn-success btn-sm ml-1" onClick={handleLogout}>Logout</button>
                            </li>
                        </ul>
                    }

                </div>
            </nav>
            {user !== null ?
                <h3>Welcome Home <h2>{state}</h2> <small style={{wordBreak:'break-word'}}>{user}</small> </h3> :
                <h1>Hi</h1>
            }
        </>

    );
}

export default Home;