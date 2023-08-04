import { CircularProgress } from "@mui/material";
import { Navigate } from "react-router";
import UseFirebase from "../hooks/UseFirebase";

function AdminRoute({ children }) {
     const {user,isLoading} = UseFirebase();
     if(isLoading){return <CircularProgress/>}

        return user.email ? children : <Navigate to="/login"/>;
      }

      export default AdminRoute;