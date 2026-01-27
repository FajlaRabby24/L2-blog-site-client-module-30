import { userSerive } from "@/services/userService";
import { Button } from "../../components/ui/button";

export default async function Home() {
  const { data, error } = await userSerive.geSession();
  console.log(data);

  return (
    <div>
      <Button variant={"default"}>Click Here!</Button>
    </div>
  );
}
