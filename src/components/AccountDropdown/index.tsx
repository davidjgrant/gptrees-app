"use client";

import { Button } from "@/components/ui/button";
import {
  DropdownMenuTrigger,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuItem,
  DropdownMenuContent,
  DropdownMenu,
} from "@/components/ui/dropdown-menu";
import type { Session } from "next-auth";
import Image from "next/image";
import Link from "next/link";

export const AccountDropdown = ({ session }: { session: Session | null }) => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button className="rounded-full" size="icon" variant="ghost">
          <Image
            alt="Avatar"
            className="rounded-full"
            height="32"
            src={session?.user.image ?? ""}
            style={{
              aspectRatio: "32/32",
              objectFit: "cover",
            }}
            width="32"
          />
          <span className="sr-only">Toggle user menu</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuLabel>My Account</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem>Settings</DropdownMenuItem>
        <DropdownMenuItem>Support</DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          <Link href={"/api/auth/signout"}>Logout</Link>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
