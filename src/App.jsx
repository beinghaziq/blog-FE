import { BrowserRouter } from 'react-router-dom';
import 'App.css';
import { ApplicationRoutes } from 'routes/ApplicationRoutes';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <BrowserRouter>
      <ApplicationRoutes />
      <ToastContainer/>
    </BrowserRouter>
  );
}

export default App;
