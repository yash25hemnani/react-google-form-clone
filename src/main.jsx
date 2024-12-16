import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Form from './components/Form.jsx'
import FormList from './components/FormList/FormList.jsx'
import { Provider } from 'react-redux'
import { store } from './redux/store.js'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/'>
      <Route path='' element={<Form />} />
      <Route path='/formlist' element={<FormList />} />
      <Route path='/api/form' element={<FormList />} />
    </Route>
  )
)

createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
)
