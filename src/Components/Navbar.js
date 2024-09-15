import { useNavigate } from "react-router-dom";
import styles from "../css/Navbar.module.css";
import { useContext } from "react";
import apiContext from "./Context";

export default function Navbar(){
    const valueFromContext = useContext(apiContext);
    const navigate = useNavigate();
    return(
        <nav className={styles.navbar}>
            <div className={styles.logo}>
                <p>Logo</p>
            </div>
            {valueFromContext.jwt == "" && <button className={styles.signinButton} onClick={()=>navigate("/login")}>Sign In</button>}
            {valueFromContext.jwt != "" && <button className={styles.signinButton} onClick={()=>{
                valueFromContext.email = "";
                valueFromContext.username = "";
                valueFromContext.password = "";
                valueFromContext.jwt = "";
                navigate("/");
            }}>Sign Out</button>}
        </nav>
    )
}
