import { createContext, useState } from "react";
const apiContext = createContext();
// const [id, setId] = useState("qcjfyfgmr5ux");
function ApiContextProvider({children}){
    const [jwt,setJwt] = useState("");
    const [username, setUsername] = useState("");
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const projectID = "qcjfyfgmr5ux";
    return (
        <apiContext.Provider value={{
            jwt,setJwt,
            username,setUsername,
            email,setEmail,
            password,setPassword,
            projectID
        }}>
            {children}
        </apiContext.Provider>
    )
}
export default apiContext;
export { ApiContextProvider };