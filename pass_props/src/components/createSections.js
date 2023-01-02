import React from 'react'
import CreateLectures from './createLectures';

const CreateSections = ({store, data, setData}) => {
    
  return (
    <CreateLectures store={store} data={data} setData={setData}/>
  )
}

export default CreateSections;