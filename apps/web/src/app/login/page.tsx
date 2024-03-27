import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { Database } from "../../../database.types";
import { createClient } from "@/../utils/server";
import { headers, cookies } from "next/headers";
import { LoginForm } from "../components/Forms/LoginForm";
import { redirect } from "next/navigation";

export default async function Login() {
  const supabase = createServerComponentClient<Database>({ cookies });

  const {
    data: { user },
  } = await supabase.auth.getUser();

  return (
    <div className="grid gap-10 xl:gap-0 xl:flex justify-center p-10 m-10 bg-[#E4F0D0] rounded-md">
      <div className="flex flex-col justify-center flex-1 w-full gap-2 px-8 sm:max-w-md">
        <LoginForm user={user} />
      </div>
    </div>
  );
}
