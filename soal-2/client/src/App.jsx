
import { RouterProvider } from 'react-router-dom'
import router from './router/router'
import { Slide, ToastContainer } from 'react-toastify'


function App() {
  
  
  return (
    
    <>
      <RouterProvider router={router}/>
      <ToastContainer
        position="top-center"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        transition={Slide}
        />
    </>
  )
}

export default App
