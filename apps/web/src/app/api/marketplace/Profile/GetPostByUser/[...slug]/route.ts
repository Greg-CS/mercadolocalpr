import { NextResponse } from 'next/server'
import { cookies } from "next/headers";
import { createRouteHandlerClient } from "@supabase/auth-helpers-nextjs";
import { Database } from "../../../../../../../database.types";

export async function GET(request: Request) {
    let id = request.url.split("/").pop() ?? "";
    const cookieStore = cookies()
    const supabase = createRouteHandlerClient<Database>({ cookies: () => cookieStore });
    const { data, error } = await supabase.from("posts").select("*").eq("user_id", id ?? "");
        console.log("Data: ", data)
    if(error){
        console.log("Error fetching profile information: ", error);
    }
    return NextResponse.json(data)
}
