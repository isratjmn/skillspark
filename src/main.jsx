/* eslint-disable */
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import AuthProvider from "./providers/AuthProvider.jsx";
import ThemeProvider from "./providers/ThemeProvider.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<BrowserRouter>
			<ThemeProvider>
				<AuthProvider>
					<App />
					<ToastContainer
						position="top-center"
						autoClose={5000}
						newestOnTop={false}
						closeOnClick
						pauseOnFocusLoss={false}
						draggable
						pauseOnHover
						theme="dark"
					/>
				</AuthProvider>
			</ThemeProvider>
		</BrowserRouter>
	</React.StrictMode>
);
