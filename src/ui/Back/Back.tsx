import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import { default as p } from "../../constants/ROUT_PATH";

export const Back = () => {
  return (
    <Link to={p.PROFILE}>
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
