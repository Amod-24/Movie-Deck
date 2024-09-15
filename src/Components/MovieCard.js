import styles from "../css/MovieCard.module.css";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import apiContext from "./Context";
export default function MovieCard({movie}){
    const navigate = useNavigate();
    const valueFromContext = useContext(apiContext);
    const movieCardClicked = ()=>{
        if(valueFromContext.jwt != ""){
            navigate(`/show/${movie._id}`);
        }
        else{
            navigate("/login");
            alert("You are not logged in");
        }
    }
    return (
        <div onClick={movieCardClicked}>

            <div className={styles.card} >
                <img src={movie.thumbnail}/>
            </div>
        </div>
        
    )
}