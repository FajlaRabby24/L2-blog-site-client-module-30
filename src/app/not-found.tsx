import Link from "next/link";
import { Button } from "../components/ui/button";

const NotFound = () => {
  return (
    <div>
      <h1>Not Found!</h1>
      <h2>Could not find request resources</h2>
      <Link href={" /"}>
        <Button>Return Home</Button>
      </Link>
    </div>
  );
};

export default NotFound;
