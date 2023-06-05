import { Link } from "react-router-dom";

function Navigation() {
    return (

        <div className="navigation__main">

            <div className="navigation__order">
                <Link to="/order"><span>Order</span></Link>
            </div>
            <a href=""><img className="navigation__logo" alt="Nice Cozy Food" /></a>
            <div className="navigation__contacts">
                <a href=""><span>Contact us</span></a>
            </div>
        </div>


    );
}

export default Navigation;