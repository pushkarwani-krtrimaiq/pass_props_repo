import React,{useState} from 'react'
import CreateSections from './createSections';

const Dashboard = () => {
    var [data, setData] = useState([]);
    console.log(data);
  return (
    <div>
        <CreateSections  data={data} setData={setData}/>
    </div>
   )
}

export default Dashboard