// we would want a password confirm field here
// add an additional field to fulfill this
import Form from "./form";
import { redirect } from "next/navigation";
import { getServerSession } from "next-auth";

export default async function RegisterPage() {
  const session = await getServerSession();
  if (session) {
    redirect("/");
  }
  return <Form />;
}
