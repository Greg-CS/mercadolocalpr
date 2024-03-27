import { NextResponse } from 'next/server'
import { cookies } from "next/headers";
import { createRouteHandlerClient } from "@supabase/auth-helpers-nextjs";
import { Database } from "../../../../../../../database.types";


export async function PUT(req: Request, res: Response) {
    const cookieStore = cookies()
    const supabase = createRouteHandlerClient<Database>({ cookies: () => cookieStore });
  
    const { error } = await supabase.from("profiles").upsert({
        id: user?.id as string,
        username,
        description,
        profile_image_url,
        banner_image_url,
        updated_at: new Date().toISOString(),
    });
    if (error) throw error;
    alert("Profile updated!");

    return NextResponse.redirect("/profile");
}