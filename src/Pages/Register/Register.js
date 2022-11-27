import { Button, Label, TextInput } from "flowbite-react";
import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Contexts/AuthProvider/AuthProvider";

const Register = () => {
  const { createUser, updateUserProfile, logOut, providerLogin } =
    useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const {
    register,
    handleSubmit,
    formState: { errors },
    resetField,
  } = useForm();

  const handleUpdateUserProfile = (name, photoURL) => {
    const profile = {
      displayName: name,
      photoURL: photoURL,
    };

    updateUserProfile(profile)
      .then(() => {})
      .catch((error) => console.error(error));
  };

  const onSubmit = (data) => {
    createUser(data.email, data.password)
      .then((result) => {
        handleUpdateUserProfile(data.name, data.photoURL);
      })
      .catch((e) => {
        console.error(e);
        // toast.error(
        //   e.message === "Firebase: Error (auth/email-already-in-use)."
        //     ? "Email already in Use"
        //     : e.message
        // );
      });
  };
  return (
    <div className="container mx-auto">
      <div className="w-1/2 mx-auto">
        <form onSubmit={handleSubmit(onSubmit)}>
          {/* register your input into the hook by invoking the "register" function */}
          <div>
            <div className="mb-2 block">
              <Label htmlFor="name" value="Your Name" />
            </div>
            <TextInput
              id="name"
              type="text"
              placeholder="John Doe"
              required={true}
              {...register("name")}
            />
          </div>
          <div>
            <div className="mb-2 block">
              <Label htmlFor="photoURL" value="Your Profile Image Link" />
            </div>
            <TextInput
              id="photoURL"
              type="text"
              placeholder="Link"
              required={true}
              {...register("photoURL")}
            />
          </div>
          <div>
            <div className="mb-2 block">
              <Label htmlFor="email1" value="Your email" />
            </div>
            <TextInput
              id="email1"
              type="email"
              placeholder="name@flowbite.com"
              required={true}
              {...register("email")}
            />
          </div>
          <div>
            <div className="mb-2 block">
              <Label htmlFor="password1" value="Your password" />
            </div>
            <TextInput
              id="password1"
              type="password"
              required={true}
              {...register("password")}
            />
          </div>

          {/* {errors.exampleRequired && <span>This field is required</span>} */}
          <div className="flex items-center gap-2 py-4">
            <Label htmlFor="agree">
              Already Have an Account ? Please{" "}
              <Link to="/login" className="text-blue-700">
                Login
              </Link>
            </Label>
          </div>

          <Button type="submit">Register</Button>
        </form>
      </div>
    </div>
  );
};

export default Register;
