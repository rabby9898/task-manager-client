import axiosSecure from "./AxiosSecure";

export const savedUser = async (user) => {
  const currentUser = {
    email: user.email,
    status: "Verified",
  };
  const { data } = await axiosSecure.put(`/users/${user?.email}`, currentUser);
  return data;
};
export const getUSersData = async (user) => {
  const { data } = await axiosSecure.get(`/users/${user?.email}`);
  console.log("from data:", data);
  return data;
};
