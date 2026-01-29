import { redirect } from "next/navigation";

const UserDashboard = () => {
  return redirect("/user-dashboard/create-blog");
  // return <div>user dashbaord</div>;
};

export default UserDashboard;
