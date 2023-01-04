import React from 'react';
import {
    MDBCard,
    MDBCardImage,
    MDBCardBody,
    MDBCardText,
    MDBCardTitle,
    MDBCol
} from "@krtrimaiq-cognitive-solutions/mdb-react-ui-kit";
import {dataValues} from '../data/dataValues';

const CreateLectures = ({data,setData}) => {
    

  return (
    <div className={"d-flex flex-column w-100 h-100 mx-5 mb-5"}>
        <div className="d-flex justify-content-around">
            <MDBCol size={12} md={3}>
            {dataValues.map((value, index) => {
                return(
                <MDBCard  value={data} onClick={() => setData([...data,value])} style={{cursor:"pointer"}}>
                    <div className='d-flex flex-wrap flex-column p-5'>
                        <MDBCardImage src={value.imgSrc} alt='...' position='top'/>
                        <MDBCardBody>
                            <MDBCardTitle>
                                {value.name}
                            </MDBCardTitle>
                            <MDBCardText>
                                {value.position}
                            </MDBCardText>
                        </MDBCardBody>
                    </div>
                </MDBCard>
                );
            }
            )}
            </MDBCol>
        </div>
    </div>
  )
}

export default CreateLectures;