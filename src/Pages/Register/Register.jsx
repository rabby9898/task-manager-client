import { FcGoogle } from "react-icons/fc";
import signupImg from "../../assets/signupbanner.svg";
import Container from "../../Components/Shared/Container/Container";
import axios from "axios";
import useAuth from "../../Hook/useAuth";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import { savedUser } from "../../Api/UserApi";
import { ImSpinner3 } from "react-icons/im";

const Register = () => {
  const { updateUserProfile, createUser, signInWithGoogle, loading } =
    useAuth();
  const navigate = useNavigate();
  const handleRegister = async (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const image = form.image.files[0];

    //   image upload
    const formData = new FormData();
    formData.append("image", image);
    const imageUrl = await axios.post(
      `https://api.imgbb.com/1/upload?key=${
        import.meta.env.VITE_IMAGEBB_SECRET_KEY
      }`,
      formData
    );
    console.log("Image url", imageUrl);
    console.log("Image url link", imageUrl?.data?.data?.display_url);

    try {
      const result = await createUser(email, password);
      await updateUserProfile(name, imageUrl?.data?.data?.display_url);
      console.log(result);
      const saveToDb = await savedUser(result?.user);
      console.log(saveToDb);
      //   await getToken(result?.user?.email);
      toast.success("Successfully Signed in");
      navigate("/");
    } catch (err) {
      console.log(err);
      toast.error(`Sign up failed: ${err.message}`);
    }
  };

  const handleGoogleSignIn = async () => {
    try {
      const result = await signInWithGoogle();
      const saveGoogleUserDb = await savedUser(result?.user);
      console.log(saveGoogleUserDb);
      //   await getToken(result?.user?.email);
      toast.success("Successfully Signed in");
      navigate("/");
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div>
      <Container>
        <section className="h-screen">
          <div className="container h-full px-6 py-24">
            <div className="gap-2 flex h-full flex-wrap items-center justify-center lg:justify-between">
              <div className="md:w-8/12 lg:ml-6 lg:w-5/12">
                <div className=" mb-20">
                  <h1 className="text-4xl text-[]">Register Our Website</h1>
                </div>
                <form onSubmit={handleRegister}>
                  <div className="relative mb-6" data-te-input-wrapper-init>
                    <label className="text-lg font-semibold">
                      Your Full Name
                    </label>
                    <input
                      type="text"
                      className="peer block min-h-[auto] w-full rounded  bg-purple-50 px-3 py-[0.32rem] leading-[2.15] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                      id="exampleFormControlInput3"
                      placeholder="Email address"
                      name="name"
                    />
                  </div>

                  <div className="relative mb-6" data-te-input-wrapper-init>
                    <label className="text-lg font-semibold">
                      Upload Your Photo
                    </label>
                    <input
                      type="file"
                      // className="file-input file-input-bordered file-input-[#7850ff] w-[17rem] mt-[3rem]"
                      name="image"
                      //   accept="image/*"
                    />
                  </div>

                  <div className="relative mb-6" data-te-input-wrapper-init>
                    <label className="text-lg font-semibold">
                      Email address
                    </label>
                    <input
                      type="text"
                      className="peer block min-h-[auto] w-full rounded bg-purple-50 px-3 py-[0.32rem] leading-[2.15] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                      id="exampleFormControlInput3"
                      placeholder="Email address"
                      name="email"
                    />
                  </div>

                  <div className="relative mb-6" data-te-input-wrapper-init>
                    <label className="text-lg font-semibold"> Password</label>
                    <input
                      type="password"
                      className="peer block min-h-[auto] w-full rounded bg-purple-50 px-3 py-[0.32rem] leading-[2.15] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                      id="exampleFormControlInput33"
                      placeholder="Password"
                      name="password"
                    />
                  </div>

                  <button
                    type="submit"
                    className="inline-block w-full rounded bg-[#7850ff] px-7 pb-2.5 pt-3 text-sm font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-[#7850ff] hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-[#7850ff] focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
                    data-te-ripple-init
                    data-te-ripple-color="light"
                  >
                    {loading ? (
                      <ImSpinner3 className="animate-spin mx-auto" />
                    ) : (
                      "Register"
                    )}
                  </button>

                  <div className="my-4 flex items-center before:mt-0.5 before:flex-1 before:border-t before:border-neutral-300 after:mt-0.5 after:flex-1 after:border-t after:border-neutral-300">
                    <p className="mx-4 mb-0 text-center font-semibold dark:text-neutral-200">
                      OR
                    </p>
                  </div>

                  <button
                    onClick={handleGoogleSignIn}
                    className="btn h-[0] uppercase text-sm mb-3 flex w-full gap-3 py-3 items-center justify-center rounded bg-transparent border-[.5px] border-gray-300"
                    data-te-ripple-init
                    data-te-ripple-color="light"
                  >
                    <FcGoogle className="text-xl" />
                    Continue with Google
                  </button>
                </form>
                <p className="px-6 text-sm text-center text-gray-400">
                  Already have an account?{" "}
                  <Link
                    to="/login"
                    className="hover:underline hover:text-[#7850ff] text-gray-600"
                  >
                    Login
                  </Link>
                  .
                </p>
              </div>

              <div className="mb-12 md:mb-0 md:w-8/12 lg:w-6/12">
                <img src={signupImg} className="w-full" alt="Phone image" />
              </div>
            </div>
          </div>
        </section>
      </Container>
    </div>
  );
};

export default Register;
