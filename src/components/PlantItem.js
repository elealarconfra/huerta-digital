import './PlantItem.css';

import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';


function PlantItem(props) {
  return (
    <li className="PlantItem">
         <Card sx={{
         maxWidth: '345px',
         maxHeight : '345px',
         background: 'whitesmoke',
         width : '343px',
         height : '343px',
         boxShadow : '10px 15px 25px rgba(0, 0, 0, 0.1)',
         borderRadius: '16px',
        }}>

        <CardMedia
          className="TopName"
          sx = {{
            width : 'auto',
            height : '60px',
            display: 'flex',
            justifyContent: 'start',
            alignItems: 'center',
            paddingLeft: '15px',
          }}
        >nombreplanta harcode</CardMedia>
        <CardContent sx ={{
        background: 'whitesmoke',
        width : '340px',
        height : '180px',
        }}>
ß
        </CardContent>

        <CardActions sx ={{
        background: 'white',
        width : '325px',
        height : '50px',
        }}>
          <Button size="small">Actualizar</Button>
        
        </CardActions>
      </Card>
    </li>
  );
}

export { PlantItem };

