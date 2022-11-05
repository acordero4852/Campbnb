import Landing from './pages/Landing'
import { Routes, Route } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" exact element={<Landing/>}/>
      </Routes>
    </div>
  );
}

export default App;
