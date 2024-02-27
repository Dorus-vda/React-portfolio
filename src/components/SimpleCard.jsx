import {DialogCarousel} from "./DialogCarousel"
import {
    Card,
    CardBody,
    CardFooter,
    Typography,
    Button,
  } from "@material-tailwind/react";
   
  export function SimpleCard({image1, image2, image3}) {
    return (
      <Card className="rounded-lg pt-5 w-full h-full transition ease-in-out duration-500 opacity-0 absolute inset-0 backdrop-blur-sm bg-black bg-opacity-50 text-white group-hover:opacity-100">
        <CardBody>
          <Typography>
            A messaging application, developed with Android Studio using Kotlin and XML.
            This was my first experience developing a mobile application.
          </Typography>
        </CardBody>
        <CardFooter className="pt-0">
          <DialogCarousel imagelink1={image1} imagelink2={image2} imagelink3={image3}></DialogCarousel>
        </CardFooter>
      </Card>
    );
  }