
import ExampleLineChart from './dashboard/LineChartDemo';
import ExamplePieChart from './dashboard/PieChartDemo';
import LeftMenuBar from './menubar/MenuBar';

export default function AdminDashboard() {
  return (
    
    
    
    
    <div>AdminDashboard
      
      
      <p> Distribution of Cuisine </p>

        <ExamplePieChart/>
      <p> Recipe Portfolio Performance </p>

        <ExampleLineChart/>

      <p> Menubar </p>
        <LeftMenuBar/>



    </div>







  )
}
