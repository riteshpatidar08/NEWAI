import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate, Outlet } from 'react-router-dom'
function PreferenceProtectRoute() {
    const {preferences} = useSelector((state)=>state.auth)

    if(preferences.length > 0){
        return <Navigate to='/home' />
    }
    return <Outlet/>
}

export default PreferenceProtectRoute
