import { authClient } from "../../lib/auth-client";

export default async function Home() {
  const { data: session } = await authClient.getSession();
  console.log(session);

  return <div></div>;
}
