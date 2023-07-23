import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import Spinner from "../../components/Spinnner/Spinner";


const PrivateRoute = ({ children }) => {
	const { user, loading } = useContext(AuthContext);
	const location = useLocation();
	if (loading) return <Spinner />;
	if (!user) return <Navigate to="/login" replace={true} state={location} />
	return children;
};

export default PrivateRoute;
