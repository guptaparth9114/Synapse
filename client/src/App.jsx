import Navbar from "./components/Navbar";

import Login from "./pages/login";
import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
  Navigate,
} from "react-router-dom";
import Register from "./pages/register";
import Home from "./pages/Home";

// import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
// import { useContext } from "react";
// import { AuthContext } from "./context/authContext";


function App() {
  // const {currentUser}=useContext(AuthContext);
  // const queryClient=new QueryClient();
  const Layout=()=>{
    return (
      // <QueryClientProvider client={queryClient}>
       <div className="bg-[#86B6F6]">
      <Navbar/>
        <Outlet/>
        </div>
      //  </QueryClientProvider>
    );

  };

  const router = createBrowserRouter([
    {
      path:"/",
      element:
      <Layout/>,
      children:[
        {
          path:"/",
          element:<Home/>
        },
       
      ]
    },
    {
      path: "/login",
      element: <Login/>,
    },
    {
      path: "/register",
      element: <Register/>,
    },
   
  ]);
 
    return <div >
       <RouterProvider router={router} />
    </div>;
  } 

export default App;
