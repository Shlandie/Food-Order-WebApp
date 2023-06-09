import { Link, useNavigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";

function Navigation() {
    const history = useNavigate();
    const { auth, setAuth } = useAuth();

    return (

        <div className="navigation__main">

            <div className="navigation__order">
                <Link to="/order"><span>Order</span></Link>
            </div>
            <a href=""><img className="navigation__logo" alt="Nice Cozy Food" /></a>
            <div className="navigation__contacts">
                <a href=""><span>Contact us</span></a>
                {Object.keys(auth).length !== 0
                    ? <button onClick={(e) => {
                        setAuth({});
                        history("/login");
                    }}>Logout</button>
                    : <Link to="/login">LOGIN</Link>


                }
            </div>


        </div >


    );
}

export default Navigation;