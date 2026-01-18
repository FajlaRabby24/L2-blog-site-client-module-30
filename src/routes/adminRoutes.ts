import { IRoute } from "@/types";

export const adminRoutes: IRoute[] = [
  {
    title: "User management",
    items: [
      {
        title: "Admin Dashbaord",
        url: "/admin-dashboard",
      },
      {
        title: "Analytics",
        url: "/analytics",
      },
    ],
  },
];
