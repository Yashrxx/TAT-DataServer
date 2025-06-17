import { BrowserRouter , Routes , Route } from 'react-router-dom';
import Content from './pages/Content'
import './App.css'

function App() {

  return (
    <BrowserRouter basename='/Yashrxx/TAT-DataServer'>
    <Routes>
      <Route path='/' element={<Content/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;