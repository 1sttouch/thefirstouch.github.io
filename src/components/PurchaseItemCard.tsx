import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import AddToCartButton from './purchase/AddToCartButton';
import { durationInHoursMins, getDayMonthTime, showMessage } from '../common/Utils';
import { HashLink as Link } from 'react-router-hash-link';
import { useNavigate } from 'react-router-dom';

interface Props {
  purchaseItem?:any
  itemLink?: string
  showAddToCart?:boolean
  showRatting?:boolean
  showActionBar?:boolean
  maxWidth?:number
}


function PurchaseItemCard({purchaseItem, showAddToCart, showRatting, showActionBar, maxWidth=500, itemLink} :Props) {
  const navigate = useNavigate();

  const onItemClick = (event) => {
    event.preventDefault();
    if(itemLink){
      navigate(itemLink);
    }
  }

  return (
    <Card sx={{ maxWidth: {maxWidth}, margin: 1 }}>
      
      <CardMedia
        sx={{ height: 140 }}
        image={purchaseItem?.image}
        title={purchaseItem?.title}
      />
      <CardContent onClick={onItemClick} style={{ cursor: "pointer"}}>
        <Typography variant="h5" component="div">
          <span className="course-price">₹{purchaseItem?.amount}</span>
          {  showRatting 
            ? <span className="course-rating">
                        { purchaseItem?.ratting > 0 ? (<i className="fa fa-star"></i>) : ( <i className="fa-regular fa-star"></i>)}
                        { purchaseItem?.ratting > 1 ? (<i className="fa fa-star"></i>) : ( <i className="fa-regular fa-star"></i>)}
                        { purchaseItem?.ratting > 2 ? (<i className="fa fa-star"></i>) : ( <i className="fa-regular fa-star"></i>)}
                        { purchaseItem?.ratting > 3 ? (<i className="fa fa-star"></i>) : ( <i className="fa-regular fa-star"></i>)}
                        { purchaseItem?.ratting > 4 ? (<i className="fa fa-star"></i>) : ( <i className="fa-regular fa-star"></i>)}
              </span> 
            : <></>}
        </Typography>
        <Typography gutterBottom variant='h5' component="div">
          {purchaseItem?.title}
        </Typography>
        <Typography variant="body1" color="text.secondary">
          {purchaseItem?.description}
        </Typography>
        { purchaseItem?.type === 'EVENT' && purchaseItem?.location ? 
          <Typography marginTop={1} component="div">
            <span className="fa-solid fa-location-pin" style={{ color: "#f1c40f", marginRight:"6px"}}/>
            <span>{purchaseItem?.location}</span>
          </Typography> 
          : <></>
        }
        { purchaseItem?.type === 'EVENT' && purchaseItem?.startTime && purchaseItem?.endTime ? 
            <Typography marginTop={1} component="div">
                <span className="fa-regular fa-clock"  style={{ color: "#f1c40f", marginRight:"6px"}}/>
                <span>{getDayMonthTime(purchaseItem?.startTime)} - {getDayMonthTime(purchaseItem?.endTime)}</span>
            </Typography> 
          : <></> 
        }
      </CardContent>
     { showActionBar ? <CardActions className='course-info' >
        {/* <Button size="small">Share</Button> */}
        { showAddToCart ? <AddToCartButton itemId={purchaseItem?.id} itemType={purchaseItem?.type}/> : <></> }
        
      </CardActions> : <></>}
    </Card>
  );
}

export default PurchaseItemCard;
