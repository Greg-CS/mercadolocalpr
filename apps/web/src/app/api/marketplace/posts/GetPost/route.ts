import { NextResponse } from 'next/server'
import { cookies } from "next/headers";
import { createRouteHandlerClient } from "@supabase/auth-helpers-nextjs";
import { Database } from "../../../../database.types";
export async function GET(request: Request) {
    const cookieStore = cookies()
    const supabase = createRouteHandlerClient<Database>({ cookies: () => cookieStore });
    const { data, error } = await supabase.from("posts").select("*");
    if(error){
        console.log("Error fetching posts");
    }
    return NextResponse.json(data)
}
