import Ajmal from './pages/Ajmal';
import Noushad from './pages/Noushad';
import Home from './pages/Home';
import Muneeb from './pages/Muneeb';
import './App.css'

function App() {
  const host = window.location.hostname;

  // Temporary: Force Ajmal page for localhost and local network development
  // if (host === 'localhost' || host === '127.0.0.1' || host === '192.168.1.86') {
  //   return <Noushad />;
  // }

  if (host.includes("ajmal.aurify.global")) {
    return <Ajmal />;
  }
  else if (host.includes("noushad.aurify.global")) {
    return <Noushad />;
  }
  else if (host.includes("muneeb.aurify.global")) {
    return <Muneeb />;
  }
  else {
    return <Home />;
  }

}

export default App
