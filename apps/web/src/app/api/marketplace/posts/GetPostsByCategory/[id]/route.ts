import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import { createRouteHandlerClient } from "@supabase/auth-helpers-nextjs";
import { Database } from "../../../../../../../database.types";

export async function GET(request: Request) {
    let id = parseInt(request.url.split("/").pop() || "");
    const cookieStore = cookies()
    const supabase = createRouteHandlerClient<Database>({ cookies: () => cookieStore });
      const { data, error } = await supabase
        .from("posts")
        .select("id, title, price, location, created_at, description, category, photo_url, user_id, categories (id, category_name)")
        .eq("category", id);
    if(error){
        console.log("Error fetching posts");
    }
    return NextResponse.json(data)
}
