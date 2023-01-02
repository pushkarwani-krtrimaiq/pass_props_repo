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

const CreateLectures = ({store,data,setData}) => {
    store(data);
    

  return (
    <div className={"d-flex flex-column w-100 h-100 mx-5 mb-5"}>
        <div className="d-flex justify-content-around w-100 h-100">
            <MDBCol>
            {dataValues.map((value, index) => {
                return(
                <MDBCard  value={data} onClick={() => setData([...data,value])} style={{cursor:"pointer"}}>
                    <div className='d-flex flex-wrap flex-column'>
                        <MDBCardImage src={value.imgSrc} alt='...' position='top' width={200} height={200}/>
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