import { GlobalProvider } from './context/GlobalState';
import { useAuth0 } from '@auth0/auth0-react';

import NavBar from './components/NavBar'
import Header from './components/Header'
import LogList from './components/LogList'
import AddLog from './components/AddLog'
import Stats from './components/Stats'
import Footer from './components/Footer'
import Loading from './components/Loading'


function App() {
  const {
    isLoading,
    isAuthenticated,
    error,
    loginWithRedirect,
  } = useAuth0();

  if (isLoading) {
    return (
      <GlobalProvider>
        <Header />
        <Loading />
        <Footer />
      </GlobalProvider>
    );
  }
  if (error) {
    return <div>Oops... {error.message}</div>;
  }

  if (isAuthenticated) {
    return (
      <GlobalProvider>
          <NavBar />
          <Header />
          <LogList />
          <AddLog />
          <Stats />
          <Footer />
        </GlobalProvider>
    );
  } else {
    return <button onClick={loginWithRedirect}>Log in</button>;
  }
}

export default App;
