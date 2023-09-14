import { Router, Route } from 'react-router-dom';

import Home from './home';


function App() {
  return (
    <div className="App">
      <Router>
          <Route path='/home' element={<Home />} />
      </Router>
    </div>

  );
}

export default App;
