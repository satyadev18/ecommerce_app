import { Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Typography } from '@mui/material'
import React from 'react'
import { ProductComponentProps } from '../../types'

const ProductComponent: React.FC<ProductComponentProps> = ({ title, desc, price, rating, productImage }) => {
  return (
    <Card sx={{ maxWidth: 350 }} >
      <CardActionArea>
        <CardMedia component='img' image={productImage} height="140" alt="Product Image" />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
{desc}          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          See Details
        </Button>
      </CardActions>
    </Card>
  )
}

export default ProductComponent