import React from 'react'
import Signup from './Screens/SignUp'
import { ToastContainer } from 'react-toastify'
import "./App.css"
import { Route, Routes } from 'react-router-dom'
import ProtectedRoute from './Routes/ProtectedRoute'
import Login from './Screens/Login'
import Dashboard from './Screens/Dashboard'
import AuthRoute from './Routes/AuthRoute'

const App = () => {
  return (
    <>
      <Routes>
        {/* Auth Routes → only for non-authenticated users */}
        <Route element={<AuthRoute />}>
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
        </Route>

        {/* Protected Routes → only for logged-in users */}
        <Route element={<ProtectedRoute />}>
          <Route path="/" element={<Dashboard />} />
        </Route>
      </Routes>

      <ToastContainer
        position="bottom-center"   // ✅ ab bilkul neeche center
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </>
  )
}

export default App
