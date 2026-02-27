// import { Routes, Route } from 'react-router-dom';
// import SignupForm from '../SignUp/SignUp';
// import LoginForm from '../login/login';
// import Home from '../Home/Home';
// import React from 'react'
// import ProductDashboard from '../Dashboard/dashboard';

// function Router() {
//   return (
//     <div>
//         <Routes>
//             <Route  path="/" element={<Home />}/>
//             <Route  path="/signup" element={<SignupForm />}/>
//             <Route  path="/login" element={<LoginForm />}/>
//             <Route  path="/dashboard" element={<ProductDashboard />}/>
//         </Routes>
      
//     </div>
//   )
// }

// export default Router

import { Routes, Route, Navigate } from 'react-router-dom';
import SignupForm from '../SignUp/SignUp';
import LoginForm from '../login/login';
import Home from '../Home/Home';
import ProductDashboard from '../Dashboard/dashboard';
import ProtectedRoute from './ProtectedRoute'; // Adjust path

function Router() {
  const userRole = localStorage.getItem('userRole');

  return (
    <div>
      <Routes>
        <Route path="/" element={
          userRole === 'admin' ? <Navigate to="/dashboard" /> : <Home />
        }/>
        <Route path="/signup" element={<SignupForm />} />
        <Route path="/login" element={
          userRole ? <Navigate to={userRole === 'admin' ? '/dashboard' : '/'} /> : <LoginForm />
        } />
        <Route path="/dashboard" element={
          <ProtectedRoute allowedRole="admin">
            <ProductDashboard />
          </ProtectedRoute>
        } />
      </Routes>
    </div>
  );
}

export default Router;

