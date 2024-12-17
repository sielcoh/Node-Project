import './App.css';
import { BrowserRouter } from 'react-router-dom';
import { UserContextProvider } from './UserContexts';
import Main from './Main';

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
