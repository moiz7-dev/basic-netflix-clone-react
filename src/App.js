import './App.css';
import Banner from './components/Banner';
import Navbar from './components/Navbar';
import Row from './components/Row';
import requests from './utils/requests';

function App() {

  return (
    <div className="app">
      <Navbar />
      <Banner />
      {requests.map(movie => <Row key={movie.title} title={movie.title} fetchUrl={movie.fetchUrl} isLargeRow={movie.isLargeRow} />)}
    </div>
  );
}

export default App;
