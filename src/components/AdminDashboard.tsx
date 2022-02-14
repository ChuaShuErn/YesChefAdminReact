
import ExampleLineChart from './dashboard/LineChartDemo';
import ExamplePieChart from './dashboard/PieChartDemo';
import LeftMenuBar from './menubar/MenuBar';
import Dashboard from './dashboard/Dashboard';


export default function AdminDashboard() {
  return (
    
    
    
    
    <div> 
      <LeftMenuBar/>


        <div className="dashboard-indent">

          <h4> <strong>Admin Dashboard </strong>  </h4>

          <Dashboard/>
        </div>

    </div>







  )
}
