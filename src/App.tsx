import "./App.css";
import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./routes/AppRoutes";
import { ToastContainer } from 'react-toastify';

function App() {
  return (
      <BrowserRouter basename="/xt">
        <ToastContainer />
        <AppRoutes />
      </BrowserRouter>
  );
}

export default App;
