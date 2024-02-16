import { unstable_noStore as noStore } from "next/cache";

import { getServerAuthSession } from "@/server/auth";
import { redirect } from "next/navigation";
import AddTree from "@/components/AddTree";

export default async function Page() {
  noStore();
  const session = await getServerAuthSession();

  if (!session?.user.id) {
    redirect("/");
  }
  return <AddTree />;
}
