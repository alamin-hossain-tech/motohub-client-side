import { Button, Label, TextInput } from "flowbite-react";
import React, { useContext } from "react";

import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Contexts/AuthProvider/AuthProvider";

const Login = () => {
  const { signIn, setLoading, providerLogin } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  console.log(errors);

  const onSubmit = (data) => {
    console.log(data);
    signIn(data.email, data.password)
      .then((res) => {
        setLoading(false);
        reset();
      })
      .catch((error) => {
        console.error(error);
        // toast.error(
        //   error.message === "Firebase: Error (auth/wrong-password)."
        //     ? "Wrong Password"
        //     : "User Not Fount"
        // );
      });
  };
  return (
    <div className="container mx-auto">
      <div className="w-1/2 mx-auto">
        <form onSubmit={handleSubmit(onSubmit)}>
          {/* register your input into the hook by invoking the "register" function */}
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
              New to thi site ? Please{" "}
              <Link to="/register" className="text-blue-700">
                Register
              </Link>
            </Label>
          </div>

          <Button type="submit">Login</Button>
        </form>
      </div>
    </div>
  );
};

export default Login;
