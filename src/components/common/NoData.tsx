import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { HashLink as Link } from 'react-router-hash-link';
import { useNavigate } from 'react-router-dom';
import CloudOffIcon from '@mui/icons-material/CloudOff';


function NoData() {
  const navigate = useNavigate();
  return (
        <Card sx={{ margin: 1, display: 'flex', justifyContent:'center', backgroundColor:'#f2f2f2' }}>
            <CardContent>
                <CloudOffIcon style={{fontSize:100}}  />
                <Typography style={{fontSize:22, fontWeight:'bold', textAlign:'center'}}>No Data</Typography> 
            </CardContent>
        </Card> 
  );
}

export default NoData;
