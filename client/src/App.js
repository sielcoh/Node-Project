import './App.css';
import { BrowserRouter } from 'react-router-dom';
import { UserContextProvider } from './UserContexts';
import Main from './Main';

// axios.defaults.baseURL = 'http://localhost:4000';
// axios.defaults.withCredentials = true;

function App() {

  return (
    <UserContextProvider>
      <BrowserRouter>
        <Main />
      </BrowserRouter>
    </UserContextProvider>

  )
}

export default App
