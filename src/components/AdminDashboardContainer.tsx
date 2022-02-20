
import React from 'react';
import AdminDashboard from '../components/AdminDashboard';
import MenuBar from '../components/menubar/MenuBar';


export default function AdminDashboardContainer() {


return (
    <div className='mainblock'>
        <MenuBar/>
         <AdminDashboard />
    </div>
   
    );


}