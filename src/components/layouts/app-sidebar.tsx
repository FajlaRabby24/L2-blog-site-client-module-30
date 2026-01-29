import * as React from "react";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
} from "@/components/ui/sidebar";
import { Roles } from "@/constants/role";
import { IRoute } from "@/types";
import Link from "next/link";
import { adminRoutes } from "../../routes/adminRoutes";
import { userRoutes } from "../../routes/userRoutes";

export function AppSidebar({
  user,
  ...props
}: {
  user: { role: string } & React.ComponentProps<typeof Sidebar>;
}) {
  let routes: IRoute[] = [];

  switch (user.role) {
    case Roles.admin:
      routes = adminRoutes;
      break;
    case Roles.user:
      routes = userRoutes;
      break;
    default:
      routes = [];
      break;
  }

  return (
    <Sidebar {...props}>
      {/* <SidebarHeader>
        <VersionSwitcher
        versions={data.version}
        defaultVersion={data.versions[0]}
        />
        <SearchForm />
      </SidebarHeader> */}
      <SidebarContent>
        {/* We create a SidebarGroup for each parent. */}
        {routes.map((item) => (
          <SidebarGroup key={item.title}>
            <SidebarGroupLabel>{item.title}</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {item.items.map((item) => (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton asChild>
                      <Link href={item.url}>{item.title}</Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        ))}
      </SidebarContent>
      <SidebarRail />
    </Sidebar>
  );
}
