import { Link, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { Bell, CircleUser, Menu, Package2 } from "lucide-react";
import { Button } from "@/components/ui/button";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";


import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { DesktopNavBar, MobileNavBar } from "@/components/navBar/NavItems";
import { AlertLogoutDialog } from "@/components/auth/LogoutDialog";
import { ModeToggle } from "../theme/modeToggle";
import { FirebaseAuth as auth } from "@/firebase/config";

import { ReactNode } from "react";
export const description =
  "A products dashboard with a sidebar navigation and a main content area. The dashboard has a header with a search input and a user menu. The sidebar has a logo, navigation links, and a card with a call to action. The main content area shows an empty state with a call to action.";

export function DashboardLayout({
  header,
  children,
}: {
  children: ReactNode;
  header?: ReactNode;
}) {
  const navigate = useNavigate();
  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (!user) navigate("/auth/login");
    });
  }, [navigate]);

  return (
    <div className="grid min-h-screen w-full md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr]">
      <div className="hidden border-r bg-muted/40 md:block">
        <div className="flex h-full max-h-screen flex-col gap-2">
          <div className="flex h-14 items-center border-b px-4 lg:h-[60px] lg:px-6">
            <Link to="/" className="flex items-center gap-2 font-semibold">
              <Package2 className="h-6 w-6" />
              <span className="">App</span>
            </Link>
            <Button size="icon" className="ml-auto h-8 w-8">
              <Bell className="h-4 w-4" />
              <span className="sr-only">Toggle notifications</span>
            </Button>
          </div>
          <DesktopNavBar />
        </div>
      </div>
      <div className="flex flex-col">
        {header ? (
          header
        ) : (
          <header className="flex h-14 items-center gap-4 border-b bg-muted/40 px-4 lg:h-[60px] lg:px-6">
            <Sheet>
              <SheetTrigger asChild>
                <Button
                  variant="outline"
                  size="icon"
                  className="shrink-0 md:hidden"
                >
                  <Menu className="h-5 w-5" />
                  <span className="sr-only">Toggle navigation menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="left" className="flex flex-col">
                <MobileNavBar />
              </SheetContent>
            </Sheet>
            <div className="w-full flex-1">
              <h1 className="text-lg font-bold md:text-2xl">App</h1>
            </div>
            <div className="flex items-center justify-center gap-3">
              <ModeToggle />
             
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button
                    variant="secondary"
                    size="icon"
                    className="rounded-full"
                  >
                    <CircleUser className="h-5 w-5" />
                    <span className="sr-only">Toggle user menu</span>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuLabel>My Account</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem asChild>
                    <Link to="/settings" className="flex items-center">
                      Settings
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <AlertLogoutDialog>
                    <DropdownMenuLabel className="cursor-pointer font-[500] hover:bg-neutral-100 dark:hover:bg-neutral-800 rounded-sm">
                      Logout
                    </DropdownMenuLabel>
                  </AlertLogoutDialog>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </header>
        )}

        <main className="p-4 lg:p-6">{children}</main>
      </div>
    </div>
  );
}
