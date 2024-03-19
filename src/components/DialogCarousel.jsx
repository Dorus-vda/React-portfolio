import React from "react";
import { Carousel } from "@material-tailwind/react";
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
} from "@material-tailwind/react";
 
export function DialogCarousel({imagelink1, imagelink2, imagelink3, }) {
  const [open, setOpen] = React.useState(false);
 
  const handleOpen = () => setOpen(!open);
 
  return (
    <>
      <Button className="hidden lg:flex" onClick={handleOpen} variant="gradient">
        Open Dialog
      </Button>
      <Dialog open={open} handler={handleOpen} className="bg-primary">
        <DialogHeader className="text-white">Extra pictures</DialogHeader>
        <DialogBody>
          <Carousel className="h-50vh rounded-xl bg-primary">
            <img
              src={imagelink1}
              alt="image 1"
              className="w-1/2"
            />
            <img
              src={imagelink2}
              alt="image 2"
              className="object-fill"
            />
            <img
              src={imagelink3}
              alt="image 3"
              className="object-fill"
            />
          </Carousel>
        </DialogBody>
        <DialogFooter>
          <Button
            variant="text"
            color="red"
            onClick={handleOpen}
            className="mr-1"
          >
            <span>Close</span>
          </Button>
        </DialogFooter>
      </Dialog>
    </>
  );
}