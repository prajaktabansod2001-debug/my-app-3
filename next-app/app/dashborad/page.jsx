
import { auth } from "@/auth";
import { redirect } from "next/navigation";

export default async function DashboardPage() {
  const session = await auth();

  if (!session) {
    redirect("/signin");
  }

  return (
    <div>
      <h1>Dashboard</h1>

      <p>Welcome, {session.user?.name}</p>

      <p>Your email: {session.user?.email}</p>

      {session.user?.image && (
  <img
    src={session.user.image}
    alt="User Image"
    width={100}
    height={100}
  />
)}
    </div>
  );
}

