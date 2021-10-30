import { Route } from 'react-router-dom';
import Header from './components/Header.js';
import Main from './components/Main.js';
import Nav from './components/Nav.js';

function App() {
  return (
    <div className="App">
      <Header />
      <Route path='/blog'>
        <Nav />
      </Route>
      <Main />
    </div>
  );
}

export default App;
