"use client";

import * as React from "react";
import Link from "next/link";

import { cn } from "@/lib/utils";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "../ui/button";
import { MenuIcon } from "lucide-react";
import type { Session } from "next-auth";

export function Navigation({ session }: { session: Session | null }) {
  return (
    <>
      <NavigationMenu className="hidden md:block">
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuTrigger>Getting started</NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                <li className="row-span-3">
                  <NavigationMenuLink asChild>
                    <a
                      className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                      href="/"
                    >
                      <div className="mb-2 mt-4 text-lg font-medium">
                        GPTrees
                      </div>
                      <p className="text-sm leading-tight text-muted-foreground">
                        upload your favourite tree, leave the rest to us.
                      </p>
                    </a>
                  </NavigationMenuLink>
                </li>
                <ListItem href="/" title="Introduction">
                  We make it easy to manage your trees.
                </ListItem>
                <ListItem href="/new" title="Add Tree">
                  Add a new tree in seconds.
                </ListItem>
                <ListItem href="/dashboard" title="Dashboard">
                  New dashboard to manage your trees.
                </ListItem>
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
          {session ? (
            <>
              <NavigationMenuItem>
                <Link href="/new" legacyBehavior passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    Add Tree
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="/dashboard" legacyBehavior passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    Dashboard
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            </>
          ) : (
            <Button variant={"default"} asChild>
              <Link href="/api/auth/signin">Sign in</Link>
            </Button>
          )}
        </NavigationMenuList>
      </NavigationMenu>
      <Sheet>
        <SheetTrigger className="block md:hidden" asChild>
          <Button variant="outline">
            <MenuIcon size={24} />
          </Button>
        </SheetTrigger>
        <SheetContent>
          <SheetHeader>
            <SheetTitle>GPTrees</SheetTitle>
            <SheetDescription>
              Upload your favourite tree, leave the rest to us.
            </SheetDescription>
          </SheetHeader>
          <div className="grid gap-4 py-4">
            {!session && (
              <>
                <div className="">
                  <Link href="/new" legacyBehavior passHref>
                    Add Tree
                  </Link>
                </div>
                <div className="">
                  <Link href="/new" legacyBehavior passHref>
                    Documentation
                  </Link>
                </div>
              </>
            )}
          </div>
          <SheetFooter>
            <SheetClose asChild>
              <Link
                href={session ? "/api/auth/signout" : "/api/auth/signin"}
                className="rounded-full bg-white/10 px-10 py-3 font-semibold no-underline transition hover:bg-white/20"
              >
                {session ? "Sign out" : "Sign in"}
              </Link>
            </SheetClose>
          </SheetFooter>
        </SheetContent>
      </Sheet>
    </>
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className,
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";
