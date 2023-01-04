import React from 'react'
import CreateLectures from './createLectures';
import NestedLectures from './nestedLectures';

const CreateSections = ({data, setData}) => {
    
  return (
    // <CreateLectures  data={data} setData={setData}/>
    <NestedLectures/>
  )
}

export default CreateSections;