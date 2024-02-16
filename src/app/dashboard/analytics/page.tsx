import { unstable_noStore as noStore } from "next/cache";

import { getServerAuthSession } from "@/server/auth";
import { redirect } from "next/navigation";
import { Analytics } from "@/components/Dashboard/Analytics";

export default async function Page() {
  noStore();
  const session = await getServerAuthSession();

  if (!session?.user.id) {
    redirect("/");
  }
  return <Analytics />;
}
