import { getServerSession } from "next-auth";
import Form from "./form";
import { redirect } from "next/navigation";

export default async function LoginPage() {
  // this protects the log in, we dont want to see this if we dont need to .
  const session = await getServerSession();
  if (session) {
    redirect("/");
  }
  return <Form />;
}
