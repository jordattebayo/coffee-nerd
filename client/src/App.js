import { GlobalProvider } from './context/GlobalState';

import Header from './components/Header'
import LogList from './components/LogList'
import AddLog from './components/AddLog'
import Stats from './components/Stats'
import Footer from './components/Footer'


function App() {
  return (
    <GlobalProvider>
      <Header />
      <LogList />
      <AddLog />
      <Stats />
      <Footer />
    </GlobalProvider>
  );
}

export default App;
