import './App.scss';
import Header from './Components/Header/Header';
import Layout from './Components/Layout/Layout';
import Main from './Components/Main/Main';
import Map from './Components/Main/Map/Map';

function App() {
  return (
    <div className="App">
      <Layout>
        <Header />
        <Main>
          <Map />
        </Main>
      </Layout>
    </div>
  );
}

export default App;
