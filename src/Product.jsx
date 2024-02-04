import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Container, Stack } from '@mui/material';
import { useDispatch } from 'react-redux';
import { addProduct, mainData, qtyIncrement } from './feature/productSlicer';
import Data from "./myData.json";
import CardSkeleton from './CardSkeleton';

export default function Product(){
  const [loading, setLoading] = React.useState(true);
  const [items, setItems] = React.useState([]);
  const dispatch = useDispatch();

  const products = Data;
  React.useEffect(() => {
    const fetchData = async () => {
      setItems(products);
      dispatch(mainData(products));
      setLoading(false)
    }
    fetchData();
  }, []);

  const handleAdd = (id) => {    
    dispatch(qtyIncrement())
    dispatch(addProduct(id))
  }

  const CardItem = items.map((el) => (
    <Card sx={{ maxWidth: {xs: '80%', sm: '250px', md: '300px'} }} key={el.id}>
      <CardMedia component="img" alt={el.image} height="200" image={el.image} />
      <CardContent>
        <Typography gutterBottom variant="h6" component="h6" sx={{lineHeight: {xs: 1.25}, fontSize: {xs: '18px', sm: '20px'}}}>
          {el.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum, a.
        </Typography>
      </CardContent>
      <CardActions>
        <Button variant="contained" onClick={() => handleAdd(el.id)}>Add</Button>
      </CardActions>
    </Card>
  ));

    return (
      <>
        <Stack direction="row" sx={{ flexWrap: "wrap", justifyContent: "center", gap: "50px" }}>
          {loading ? (<CardSkeleton qty={6} />) : CardItem}
        </Stack>
      </>
    )
}