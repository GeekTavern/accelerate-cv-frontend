import { CvForm } from "../components/cvForm/CvForm";
import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";
import { getServerSession } from "next-auth";

export default async function DashboardPage() {
  const session = await getServerSession();

  if (!session) {
    redirect("/");
  }

  return (
    <div>
      <CvForm />
    </div>
  );
}
