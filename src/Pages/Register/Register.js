import { Divider } from "@mui/material";
import { GoogleAuthProvider } from "firebase/auth";
import { Button, Label, Select, TextInput } from "flowbite-react";
import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import toast, { Toaster } from "react-hot-toast";
import { FaGoogle } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Contexts/AuthProvider/AuthProvider";

const Register = () => {
  const { createUser, updateUserProfile, logOut, providerLogin } =
    useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  const googleProvider = new GoogleAuthProvider();

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
        saveUser(data.name, data.email, data.role);
      })
      .catch((e) => {
        toast.error(
          e.message === "Firebase: Error (auth/email-already-in-use)."
            ? "Email already in Use"
            : e.message
        );
      });
  };
  const saveUser = (name, email, role) => {
    const user = {
      name: name,
      email: email,
      role: role,
    };
    fetch("http://localhost:5000/users", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        getToken(email);
      });
  };
  const handleGoogleLogin = () => {
    providerLogin(googleProvider)
      .then((res) => {
        const user = res.user;
        saveUser(user.displayName, user.email, "buyer");
        navigate(from, { replace: true });
      })
      .catch((err) => console.log(err));
  };

  const getToken = (email) => {
    fetch(`http://localhost:5000/jwt?email=${email}`)
      .then((res) => res.json())
      .then((data) => {
        if (data.accessToken) {
          toast.success("Succesfully Signed Up");
          localStorage.setItem("moto_token", data.accessToken);
          setTimeout(() => {
            navigate(from, { replace: true });
          }, 2000);
        }
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
          <div id="select">
            <div className="mb-2 block">
              <Label htmlFor="role" value="Want to:" />
            </div>
            <Select id="role" required={true} {...register("role")}>
              <option value={"buyer"}>Buy</option>
              <option value={"seller"}>Sell</option>
            </Select>
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
        <div className="py-12">
          <Divider>OR</Divider>
        </div>

        <Button onClick={handleGoogleLogin} className="mx-auto">
          <FaGoogle className="inline text mr-3"></FaGoogle> Google Login
        </Button>
        <Toaster />
      </div>
    </div>
  );
};

export default Register;
