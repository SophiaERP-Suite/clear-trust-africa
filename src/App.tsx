import "./App.css";
import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./routes/AppRoutes";
import { ToastContainer } from 'react-toastify';
import { AuthProvider } from "./utils/main/AuthProvider";

function App() {
  return (
      <BrowserRouter basename="/xt">
        <ToastContainer />
        <AuthProvider>
          <AppRoutes />
        </AuthProvider>
      </BrowserRouter>
  );
}

export default App;
