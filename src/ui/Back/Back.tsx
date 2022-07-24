import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import { ROUT_PATH as p } from "../../constants";

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
