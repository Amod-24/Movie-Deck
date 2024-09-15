import { useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import apiContext from "./Context";
export default function Watch(){
    const navigate = useNavigate();
    const {video} = useParams();
    const valueFromContext = useContext(apiContext);
    if(valueFromContext.jwt != ""){
        return(
            <video>
                <source src={video}></source>
            </video>
        )
    }
    else{
        navigate("/login");
    }
}