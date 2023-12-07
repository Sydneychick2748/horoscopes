
import './App.css';
import horoscopeData from "../src/Data/Data";
import Home from "../src/Pages/Home"

import 'bootstrap/dist/css/bootstrap.min.css';





function App() {
  return (
    <div className="App">
<Home dataProps={horoscopeData}  />

    
    </div>
  );
}

export default App;
