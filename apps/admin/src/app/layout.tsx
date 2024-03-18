import "./globals.css";
import "@repo/ui/styles.css";
import type { Metadata } from "next";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import type { Database } from "../../database.types";
import { SidePanel } from "./components/SidePanel/side-panel";
import { Navbar } from "./components/Navbar/Navbar";
import { LoginForm } from "./components/Form/login-form";

export const metadata: Metadata = {
  title: "MercadoLocalPR - Admin",
  description: "Zona de administración de MercadoLocalPR.",
};


export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}): Promise<JSX.Element> {
  const supabase = createServerComponentClient<Database>({ cookies });

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    return (
      <main className="min-h-screen flex items-center justify-center">
        <LoginForm user={user}  />
      </main>
    );
  }

  return (
    <html lang="en">
      <body className="grid min-h-screen">
        <Navbar/>
        <div className="flex">
          <SidePanel/>
          <div className="bg-[#3C3C3C] border-[#344E41] rounded-tl-2xl border-2 w-[100%] lg:w-10/12">
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
