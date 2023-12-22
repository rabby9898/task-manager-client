import { getUSersData } from "../../../Api/UserApi";
import useAuth from "../../../Hook/useAuth";

const Profile = () => {
  const { user } = useAuth();
  console.log("profile:", getUSersData(user));

  return (
    <div>
      <div className="w-full  bg-white  shadow dark:bg-gray-800 dark:border-gray-700">
        <div className="flex flex-col items-center pb-10">
          <img
            className="w-80 h-80 mb-10 rounded-full shadow-lg"
            src={user?.photoURL}
            alt="Bonnie image"
          />
          <h5 className="mb-1 text-3xl font-medium text-gray-900 dark:text-white">
            {user?.displayName}
          </h5>
          <span className="text-sm text-gray-500 dark:text-gray-400">
            Visual Designer
          </span>
        </div>
      </div>
    </div>
  );
};

export default Profile;
