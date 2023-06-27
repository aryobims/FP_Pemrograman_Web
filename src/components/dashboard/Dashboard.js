import React from 'react'
import Navdashboard from './Navdashboard'
import Sidebar from './Sidebar'
import DashSection from './DashSection'

export default function Dashboard() {
  return (
    <div className='flex w-[100vw] h-[100vh]'>
        <Sidebar/>
        <div className='w-full h-full'>
            <Navdashboard/>
            <DashSection/>
        </div>
    </div>
  )
}