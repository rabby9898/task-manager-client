import axiosSecure from "./AxiosSecure";

export const savedUser = async (user) => {
  const currentUser = {
    email: user.email,
    status: "Verified",
  };
  const { data } = await axiosSecure.put(`/users/${user?.email}`, currentUser);
  return data;
};
