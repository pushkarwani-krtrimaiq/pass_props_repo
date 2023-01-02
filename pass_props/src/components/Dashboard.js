import React from 'react'
import CreateSections from './createSections';

const Dashboard = () => {
    const store = (data) => {
        console.log('viewing from parent component', data);
    }
  return (
    <CreateSections store={store}/>
   )
}

export default Dashboard