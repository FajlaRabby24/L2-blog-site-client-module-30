import { IRoute } from "@/types";

export const userRoutes: IRoute[] = [
  {
    title: "Blog management",
    items: [
      {
        title: "User dashboard",
        url: "/user-dashboard",
      },
      {
        title: "Create Blog",
        url: "/user-dashboard/create-blog",
      },
    ],
  },
];
