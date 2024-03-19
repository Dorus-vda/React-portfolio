import {DialogCarousel} from "./DialogCarousel"
import {
    Card,
    CardBody,
    CardFooter,
    Typography,
    Button,
  } from "@material-tailwind/react";
   
  export function SimpleCard({image1, image2, image3, description}) {
    return (
      <Card className="rounded-lg w-full h-full transition ease-in-out duration-500 opacity-0 absolute inset-0 backdrop-blur-sm bg-black bg-opacity-50 text-white group-hover:opacity-100">
        <CardBody>
          <Typography>
            {description}
          </Typography>
        </CardBody>
        <CardFooter className="pt-0">
          <DialogCarousel imagelink1={image1} imagelink2={image2} imagelink3={image3}></DialogCarousel>
        </CardFooter>
      </Card>
    );
  }