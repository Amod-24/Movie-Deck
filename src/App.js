import { RouterProvider, createBrowserRouter } from "react-router-dom";
import apiContextProvider from "./Components/Context.js";
import SignUp from "./Components/SignUp";
import Login from "./Components/Login";
import Homepage from "./Components/Homepage";
import Error from "./Components/Error";
import AllShows from "./Components/AllShows.js";
import Description from "./Components/DescriptionPage.js";
import Watch from "./Components/Watch.js";
function App() {
  const router = createBrowserRouter([

    {path:"/",element:<Homepage/>,children:[
      {index:true, element:<AllShows/>}
    ]},
    {path:"/signup",element:<SignUp/>},
    {path:"/login",element:<Login/>},
    {path:"/error",element:<Error/>},
    {path:"*",element:<SignUp/>},
    {path:"/show/:id",element:<Description/>},
    // {path:"/watch/:video",element:<Watch/>},
    ]);
  return(
    <apiContextProvider>
      <RouterProvider router={router} />;
    </apiContextProvider>
  ) 
}

export default App;
