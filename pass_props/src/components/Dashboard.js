import React,{useState} from 'react'
import CreateSections from './createSections';

const Dashboard = () => {
    const [data, setData] = useState([])
    const store = (data) => {
        console.log('viewing from parent component', data);
    }
  return (
    <CreateSections store={store} data={data} setData={setData}/>
   )
}

export default Dashboard