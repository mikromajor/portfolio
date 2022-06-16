import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";

export const Back = () => {
  return (
    <Link to='/portfolio'>
      <Button
        variant={"secondary"}
        style={{
          boxShadow: "10px 10px 10px rgb(100, 100, 100)",
        }}
      >
        Back
      </Button>
    </Link>
  );
};
