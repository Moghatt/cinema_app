import './App.scss';
import Header from './components/header/Header';
import Main from './components/main/Main';

function App() {
  return (
    <>
      <Header />
      <div className="app">
        <Main />
      </div>
    </>
  );
}

export default App;
