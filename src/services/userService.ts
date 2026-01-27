import { cookies } from "next/headers";

export const userSerive = {
  geSession: async () => {
    try {
      const cookieStore = await cookies();
      // console.log(cookieStore.get("__next_hmr_refresh_hash__"));

      const res = await fetch(`http://localhost:5000/api/auth/get-session`, {
        headers: {
          Cookie: cookieStore.toString(),
        },
        cache: "no-store",
      });

      const session = await res.json();

      if (!session) {
        return {
          data: null,
          error: {
            message: "Session is missing.",
          },
        };
      }

      return {
        data: session,
        error: null,
      };
    } catch (error) {
      console.error(error);
      return {
        data: null,
        error: {
          message: "Somethnig went wrong!",
        },
      };
    }
  },
};
