import { Add, Remove } from '@mui/icons-material';
import { Box, Button, ButtonGroup, Card, CardContent, CardMedia, Typography } from '@mui/material';
import Drawer from '@mui/material/Drawer';
import { useDispatch, useSelector } from 'react-redux';
import { qtyDecrement, qtyIncrement } from './feature/productSlicer';

export default function Sidebar(){
  const dispatch = useDispatch();
  const addedItem = useSelector((state) => state.productStore.addedProduct)
  const qty = useSelector((state) => state.productStore.qty)

  const handleRemove = () => {
    dispatch(qtyDecrement())
  }
    return (
      <>
        <Drawer anchor="right" open={qty > 0}>
        <Card sx={{ display: "flex"}}>
          <CardMedia component="img" sx={{ width: {xs: 100, md: 125} }} image={addedItem[0]?.image} alt={addedItem[0]?.title} />
          <Box sx={{ display: "flex", flexDirection: "column", maxWidth: {xs: "300px", sm: "50%", md: "100%"}}}>
            <CardContent sx={{ flex: "1 0 auto" }}>
              <Typography component="h6" variant="h6" sx={{lineHeight: '1.25', marginBottom: '10px', fontSize: {xs: '16px'}}}>
                {addedItem[0]?.title}
              </Typography>
              <ButtonGroup variant="outlined" aria-label="outlined">
                <Button onClick={handleRemove}><Remove /></Button>
                <Button>{qty}</Button>
                <Button onClick={() => dispatch(qtyIncrement())}><Add /></Button>
              </ButtonGroup>
            </CardContent>
          </Box>
        </Card>
      </Drawer>
      </>
)}