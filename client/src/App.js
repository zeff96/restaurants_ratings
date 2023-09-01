import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/Homepage';
import DetailsPage from './pages/DetailsPage';
import UpdatePage from './pages/UpdatePage';
import { RestaurantsContextProvider } from './context/RestaurantsContext';

const App = () => {
  return (
    <RestaurantsContextProvider>
      <div className='container'>
        <Router>
          <Routes>
            <Route exact path='/' element={<HomePage />} />
            <Route exact path='/restaurants/:id' element={<DetailsPage />} />
            <Route
              exact
              path='/restaurants/:id/update'
              element={<UpdatePage />}
            />
          </Routes>
        </Router>
      </div>
    </RestaurantsContextProvider>
  );
};

export default App;
