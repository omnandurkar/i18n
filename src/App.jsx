import './App.css';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import I18nComponent from './I18n/I18nComponent';


function App() {
  
  const router = createBrowserRouter([
    

    {
      path : "/",
      element : <I18nComponent/>
    }

  ])
  

  return (
    <>
      
      <RouterProvider router={router} />
    </>
  )
}

export default App
