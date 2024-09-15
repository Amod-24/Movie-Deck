import { Outlet } from "react-router-dom";
import Navbar from "./Navbar.js";
import styles from "../css/Homepage.module.css";
import { useContext } from "react";
import apiContext from "./Context.js";
export default function Homepage(){
    const valueFromContext = useContext(apiContext);
    return(
        <div>
            <div className="navbar-container">
                <Navbar/>
            </div>
            <div className={styles.bodyContainer}>
                <Outlet/>          
            </div>
        </div>
    )
}