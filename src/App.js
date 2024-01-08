import { Routes, BrowserRouter, Route } from 'react-router-dom';
import './App.scss';
import Header from './components/header/Header';
import Main from './components/main/Main';
import Details from './components/content/details/Details';

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <div className="app">
          <Routes>
            <Route exact path="/" element={<Main />} />
            <Route exact path="/:id/:name/details" element={<Details />} />
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
