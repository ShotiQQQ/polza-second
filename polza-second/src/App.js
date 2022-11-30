import './App.scss';
import DroppingClothes from './Components/DroppingClothes/DroppingClothes';
import Header from './Components/Header/Header';
import Layout from './Components/Layout/Layout';
import Gallery from './Components/Main/Gallery/Gallery';
import Main from './Components/Main/Main';
import MapContent from './Components/Main/Map/MapContent';

function App() {
  return (
    <div className="App">
      <Layout>
        <DroppingClothes />
        <Header />
        <Main>
          <MapContent />
          <Gallery />
        </Main>
      </Layout>
    </div>
  );
}

export default App;
