import React,{useState} from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { nestedData } from '../data/nestedData';
import Button from '@mui/material/Button';
import CardActions from '@mui/material/CardActions';

const NestedLectures = () => {
    const [section,setSection]=useState([[[{}]]]); 
    const [lecture, setLecture]=useState([[{}]]); 
    const [count, setCount]=useState(0);
    const [lecCount,setLecCount]=useState(0);
    const AddSection=()=>{
        setSection([...section,[{}]]);
        
    }

    const TrackSection = (i) => {
        setCount(i);
        AddLecture();
    }


    const AddLecture = () => {
        setLecCount(lecCount+1);
        setLecture([...lecture,[{}]]); 
        (section[count].push(lecture[lecCount]));
    }

    console.log('section',section);
    console.log('lecture',lecture);
    console.log('sectionPosition',count);
    console.log('numberOfClicks',lecCount);

    
  return (
    <div>
        <Button spacing={1} direction="row" variant="contained" onClick={()=>AddSection()}>Add Section</Button>
        {section.map((data,i)=>{
            return(
               <div>
                    <Card value={data} sx={{ maxWidth: 345 }} className="p-5 m-5">
                        <CardHeader
                            title=<div>Section {i}</div>
                        />
                        <CardMedia
                        component="img"
                        height="194"
                        image="https://mdbootstrap.com/img/new/standard/city/041.webp"
                        alt="..."
                        />
                        <CardActions>
                            <div> <Button value={data} size="small" direction="row" variant="outlined" onClick={() => {TrackSection(i)}}>Add Lecture</Button></div>
                        </CardActions>
                        <Typography variant="body2">
                            <div>{data.map((label,index) => {return(<div value={data}>Lecture { index}</div>)})}</div>
                        </Typography>
                    </Card>
                   
               </div>
            )
        })}
    
    </div>
  )
}

export default NestedLectures;



// <div>
//     {nestedData.map((sectionue, index) => {
//         return (
//             <Card sx={{ maxWidth: 345 }}>
//             <CardHeader
//                 title={sectionue.section}
//             />
//             <CardMedia
//                 component="img"
//                 height="194"
//                 image={sectionue.imgSrc}
//                 alt="Paella dish"
//             />
//             <CardContent>
//                 <Typography variant="body2" color="text.secondary">
//                 <Button spacing={1} direction="row" variant="contained" onClick={() => setBoolCheck(!boolCheck)}>Add lectures</Button>
//                 {(sectionue.lectures).forEach((drillLabel,index) => console.log([...drillLabel]))}
//                 </Typography>
//             </CardContent>
//         </Card>
//         );
//     })}
        
//     </div>