import { Navigation } from "@/components/Navigation";
import { TreePineIcon } from "lucide-react";
import type { Session } from "next-auth";
import { Button } from "../ui/button";
import Link from "next/link";
import { AccountDropdown } from "../AccountDropdown";

export const Header = ({ session }: { session: Session | null }) => {
  return (
    <header className="border-b bg-white py-4 text-zinc-900">
      <div className="mx-auto md:px-6">
        <nav className="flex items-center justify-between">
          <Button
            asChild
            variant={"ghost"}
            className="flex items-center justify-center p-0 text-2xl font-bold"
          >
            <Link href={"/"}>
              <TreePineIcon size={8} className="h-8 w-8" />
              GPTrees
            </Link>
          </Button>
          <div className="flex items-center gap-2">
            <Navigation session={session} />
            <AccountDropdown session={session} />
          </div>
        </nav>
      </div>
    </header>
  );
};
