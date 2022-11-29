import { useEffect, useState } from "react";

const useVerify = (email) => {
  const [isVerify, setIsVerify] = useState(false);
  const [isVerifyLoading, setIsVerifyLoading] = useState(true);
  useEffect(() => {
    if (email) {
      fetch(
        `https://doctors-portal-server-rust.vercel.app/users/admin/${email}`
      )
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          setIsVerify(data.isAdmin);
          setIsVerifyLoading(false);
        });
    }
  }, [email]);
  return [isVerify, isVerifyLoading];
};

export default useVerify;
