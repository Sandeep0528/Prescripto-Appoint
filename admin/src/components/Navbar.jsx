import React, { useContext } from 'react'
import { assets } from '../assets/assets'
import { AdminContext } from '../context/AdminContext'
import { useNavigate } from 'react-router-dom'
import { DoctorContext } from '../context/DoctorContext'
const Navbar = () => {

    const { dToken, setDToken } = useContext(DoctorContext)
    const { aToken, setAToken } = useContext(AdminContext)

    const navigate = useNavigate()
    const logout = () => {
        navigate('/')
        dToken && setDToken('')
        dToken && localStorage.removeItem('dToken')
        aToken && setAToken('')
        aToken && localStorage.removeItem('aToken')
    }
    return (

        <div className='flex justify-between items-center px-4 sm:px-10 py-3 border-b bg-white'>
            <div className='flex items-center gap-2  text-xs'>
                <img className='w-36 sm:2-40 cursor-pointer' src={assets.admin_logo} alt="" />
                <p className='border px-2.5 py-0.5 rounded-full border-gray-500 text-gray-600'>{aToken ? 'Admin' : 'Doctor'}</p>
            </div>
            <button onClick={logout} className='bg text-white text-sm px-10 py-2 rounded-full'>Logout</button>
        </div>
    )
}

export default Navbar
