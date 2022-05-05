import { ArrowLeft, Clipboard, Edit2, Maximize2, X } from "react-feather";
import Button, { IconButton } from "./Button";

export const Buttons = () => {
  return (
    <div className="flex-col">
      <Button variant="primary">Button</Button>
      <Button variant="secondary">Button</Button>
      <Button variant="success">Button</Button>
      <Button variant="error">Button</Button>

      <Button variant="outline">Button</Button>

      <Button variant="primary" loading />

      <h2>Icons </h2>

      <div className="flex">
        <IconButton>
          <Edit2 />
        </IconButton>
        <IconButton>
          <X />
        </IconButton>
        <IconButton>
          <ArrowLeft />
        </IconButton>
        <IconButton>
          <Maximize2 />
        </IconButton>
        <IconButton>
          <Clipboard />
        </IconButton>

        {/* 
        {[<Edit2 />, <X />].map((item, i) => (
          <IconButton key={i}>{item}</IconButton>
        ))}
         */}
      </div>
    </div>
  );
};
