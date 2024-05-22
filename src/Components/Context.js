import { createContext, useState } from "react";
const apiContext = createContext({
    projectId: "qcjfyfgmr5ux",
    username: "",
    email: "",
    password: "",
    jwt:""
});
// const [id, setId] = useState("qcjfyfgmr5ux");
function apiContextProvider({children}){
    return (
        <apiContext.Provider value={{
            projectId: "qcjfyfgmr5ux",
            username: "",
            email: "",
            password: "",
            jwt:""
        }}>
            {children}
        </apiContext.Provider>
    )
}
export default apiContext;
export { apiContextProvider };