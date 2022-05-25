import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-icons/font/bootstrap-icons.css";

import Navbar from "../components/navbar.jsx";

const Container = (props) => {
    return (
        <div>
            <Navbar/>

            <div>
                {props.children}
            </div>
        </div>
    )
}

export default Container;