import { useEffect } from "react";

// import { getMeThunk } from "features/user/userSlice";

import { getToken } from "../utils/token";
import { useAppDispatch } from "../store";

export default function GetUser({ children }: { children: any }) {
  const dispatch = useAppDispatch();

  //   useEffect(() => {
  //     getToken() && dispatch(getMeThunk());
  //   }, [dispatch]);

  return children;
}
