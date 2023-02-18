import React, {lazy, Suspense}from 'react'
import { Route, Navigate, Routes } from 'react-router-dom'


import Navbar from '../components/Navbar'
const CharacterScreen = lazy(() => import('../pages/CharacterScreen'))
const ManScreen = lazy(() => import('../pages/ManScreen'))
const SearchScreen = lazy(() => import('../pages/SearchScreen'))
const WomenScreen = lazy(() => import('../pages/WomenScreen'))


const AppRouter = () => {
  return (
    <>
    <Navbar />
    <Suspense fallback={<h1 className='text-center'>Loading...</h1>}>
    <Routes>
        <Route end path="/men" element={<ManScreen />}/>
        <Route end path="/women" element={<WomenScreen />}/>
        <Route end path="/search" element={<SearchScreen />}/>

        <Route end path="/character/:id" element={<CharacterScreen />}/>

        <Route path="*" element={<Navigate to="/men" />}/>
    </Routes>
    </Suspense>
    </>
  )
}

export default AppRouter