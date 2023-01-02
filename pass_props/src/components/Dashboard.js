import React,{useState} from 'react'
import CreateSections from './createSections';

const Dashboard = () => {
    var [data, setData] = useState([]);
    const store = (dataOutput) => {
        data = dataOutput;
        console.log('viewing from parent component', dataOutput);
    }
    console.log(data);
  return (
    <div>
        <CreateSections store={store} data={data} setData={setData}/>
        <h1>{data.name}</h1>
    </div>
   )
}

export default Dashboard