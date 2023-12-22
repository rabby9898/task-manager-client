import axiosSecure from "./AxiosSecure";

export const savedUser = async (user) => {
  const currentUser = {
    email: user.email,
    status: "Verified",
  };
  const { data } = await axiosSecure.put(`/users/${user?.email}`, currentUser);
  return data;
};
export const getUSersData = async (email) => {
  const { data } = await axiosSecure.get(`/users/${email}`);
  console.log("from data:", data);
  return data;
};

export const getAllUsers = async () => {
  const { data } = await axiosSecure.get(`/users`);

  return data;
};
