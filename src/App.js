import {
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  } from "react-router-dom";
import Home from './routes/Home';
import Detail from './components/Detail';

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route path="/" element={ <Home />} />
        <Route path="/movie" element={ <Detail />} /> {/* element 안의 jsx를 렌더해서 보여줌 */}
        {/* <Route path="/hi" element={ <h1>hi</h1>} /> http://localhost:3001/hi => 들어가면 hi를 렌더한다 */} 
      </Route>
    )
  );
  
  function App() {
    return <RouterProvider router={router} />;
  }


export default App;