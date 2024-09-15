import { Outlet } from "react-router-dom";
import Navbar from "./Navbar.js";
import styles from "../css/Homepage.module.css";
export default function Homepage(){
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