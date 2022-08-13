import { useState } from "react";
import { Turn as Hamburger } from "hamburger-react";

export default function Menu() {
  const [isOpen, setOpen] = useState(false);

  return (
    <>
      <Hamburger toggled={isOpen} toggle={setOpen} />
    </>
  );
}
