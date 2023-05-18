import { getToken } from "@/utils/token";
import {
  BaseQueryFn,
  FetchArgs,
  FetchBaseQueryError,
  createApi,
  fetchBaseQuery,
} from "@reduxjs/toolkit/query/react";

const BASE_URL = "http://localhost:5000";

const baseQuery = fetchBaseQuery({
  baseUrl: BASE_URL,
  prepareHeaders: (headers, api) => {
    if (getToken()) {
      headers.set("authorization", `Bearer ${getToken()}`);
    }
    return headers;
  },
});
const baseQueryWithReauth: BaseQueryFn<
  string | FetchArgs,
  unknown,
  FetchBaseQueryError
> = async (args, api, extraOptions) => {
  let result = await baseQuery(args, api, extraOptions);

  if (result.error && result.error.status === 401) {
    const refreshResult = await baseQuery(
      {
        url: "token/refresh/",
        method: "POST",
      },
      api,
      extraOptions
    );

    if (refreshResult.data) {
      // api.dispatch(tokenUpdated({ accessToken: refreshResult.data as string }));

      // retry the initial query
      result = await baseQuery(args, api, extraOptions);
    } else {
      // api.dispatch(logout());
    }
  }
  return result;
};

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: baseQueryWithReauth,
  endpoints: () => ({}),
});
