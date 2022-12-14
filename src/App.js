import {
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  } from "react-router-dom";
import Home from './routes/Home';
import Detail from './routes/Detail';

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route  path={process.env.PUBLIC_URL + "/"} element={ <Home />} />
        <Route  path={process.env.PUBLIC_URL + "/movie/:id"} element={ <Detail />} /> {/* element 안의 jsx를 렌더해서 보여줌 */}
        {/* <Route path="/hi" element={ <h1>hi</h1>} /> http://localhost:3001/hi => 들어가면 hi를 렌더한다 */} 
      </Route>
    )
  );
  
  function App() {
    return <RouterProvider router={router} />;
  }


export default App;