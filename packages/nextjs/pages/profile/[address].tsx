import { useRouter } from "next/router";
import type { NextPage } from "next";

const Profile: NextPage = () => {
  const router = useRouter();
  const { address } = router.query;

  return (
    <div>
      <h1>User Profile</h1>
      <p>Address: {address}</p>
    </div>
  );
};

export default Profile;
