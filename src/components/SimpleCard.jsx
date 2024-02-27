import {
    Card,
    CardBody,
    CardFooter,
    Typography,
    Button,
  } from "@material-tailwind/react";
   
  export function SimpleCard({title, description}) {
    return (
      <Card className="rounded-lg pt-5 w-full h-full transition ease-in-out duration-500 opacity-0 absolute inset-0 backdrop-blur-sm bg-black bg-opacity-50 text-white group-hover:opacity-100">
        <CardBody>
          <Typography variant="h5" color="blue-gray">
            {title}
          </Typography>
          <Typography>
            A messaging application, developed with Android Studio using Kotlin and XML.
            This was my first experience developing a mobile application.
          </Typography>
        </CardBody>
        <CardFooter className="pt-0">
          <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"><Button>
            See more</Button></a>
        </CardFooter>
      </Card>
    );
  }