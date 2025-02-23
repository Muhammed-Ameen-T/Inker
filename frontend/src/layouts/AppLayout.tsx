import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/user/common/AppSidebar";
import { Outlet } from "react-router-dom";
import Navbar from "@/components/user/common/Navbar";
import { ThemeProvider } from "@/components/user/common/theme-provider";

export default function AppLayout() {
  return (
    <>
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <SidebarProvider>
        <AppSidebar />
        <SidebarInset >
          <Navbar />
          <main className="w-full flex flex-col h-full">
            <Outlet />
          </main>
        </SidebarInset>
      </SidebarProvider>
      </ThemeProvider>
    </>
  );
}
