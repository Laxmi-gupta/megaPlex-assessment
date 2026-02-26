import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Amenities from './components/Amenities'
import { Route, Routes, useLocation } from 'react-router-dom'
import FloorPlans from './components/FloorPlans'
import Developer from './components/Developer'
import AdminHeroEditor from './components/AdminHeroEditor'
import AdminAboutEditor from "./components/AdminAboutEditor"
import AdminLogin from './pages/AdminLogin'
import ProtectedRoute from './components/ProtectedRoute'
import AdminLayout from './pages/AdminLayout'
import AdminFloorplanEditor from './components/AdminFloorEditor'

function App() {
  const location = useLocation();
  const isAdminRoute = location.pathname.startsWith("/admin");
  return (
    <>
      {!isAdminRoute && <Navbar />}

      <Routes>
        <Route path='/' element={<Hero/>} />
        <Route path='/amenities' element={<Amenities/>} />
        <Route path='/floorplan' element={<FloorPlans/>} />
        <Route path='/developer' element={<Developer/>} />

        {/* admin routes */}
        <Route path="/admin/login" element={<AdminLogin />} />
        <Route
          path="/admin/hero"
          element={
            <ProtectedRoute>
              <AdminLayout>
              <AdminHeroEditor />
              </AdminLayout>
            </ProtectedRoute>

          }
        />
        <Route
          path="/admin/about"
          element={
            <ProtectedRoute>
                <AdminLayout>
                  <AdminAboutEditor />
                </AdminLayout>
            </ProtectedRoute>
          }
        />
        <Route path="/admin/floorplan" element={
          <ProtectedRoute>
            <AdminLayout>
              <AdminFloorplanEditor />
            </AdminLayout>
          </ProtectedRoute>
        } />
      </Routes>
    </>
  )
}

export default App
