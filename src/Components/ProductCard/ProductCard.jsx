import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { singleProduct } from "../../features/slices/productSlice";

export const ProductCard = ({ id, name, text, img, price, colors , type }) => {
  const dispatch = useDispatch();
  return (
    <Link to={"/filteredProducts/"+type+"/"+id} onClick={()=>dispatch(singleProduct(id))}>
    <Card className="w-94 bg-gray-100 ">
      <CardHeader color="blue-gray" className="relative h-96">
        <img src={img} alt="card-image" className="h-full w-full " />
      </CardHeader>
      <CardBody className="text-center">
        <Typography variant="h5" color="blue-gray" className="mb-2">
          {name}
        </Typography>
        <Typography>{text}</Typography>
      </CardBody>
      <CardFooter divider className="flex items-center justify-between py-3">
        <Typography variant="small">₹{price}</Typography>
        <Typography variant="small" color="gray" className="flex gap-1">
          {colors?.map((color, index) => {
            return(<i
              className="fas fa-map-marker-alt fa-5m mt-[3px] rounded-full p-2 m-1"
              key={index}
              style={{ backgroundColor: color }}
            ></i>);
          })}
        </Typography> 
      </CardFooter>
    </Card>
    </Link>
  );
};
