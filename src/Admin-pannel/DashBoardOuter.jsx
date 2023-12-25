import React from 'react'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import DashBoard from './DashBoard'
import AllUser from './AllUser'
import UserProfile from './UserProfile'
import Many from './Many'
import Page404 from './Page404'

function DashBoardOuter() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<Navigate to='Dashboard' />}></Route>
                    <Route path='/dashboard' element={<DashBoard />}></Route>
                    <Route path='/alluser' element={<AllUser />}></Route>
                    <Route path='/userprofile' element={<UserProfile />}></Route>
                    <Route path='/many' element={<Many />}></Route>
                    <Route path='*' element={<Page404 />}></Route>
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default DashBoardOuter
