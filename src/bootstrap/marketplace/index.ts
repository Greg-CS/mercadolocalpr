import PostModuleFactory from "@/core/marketplace/";

// Configuration object with Supabase connection details.
const config = {
    db: {
        supabaseUrl: process.env.NEXT_PUBLIC_SUPABASE_URL!,
        supabaseKey: process.env.NEXT_SUPABASE_KEY!,
    }
}

// Create and export an instance of the PostModule using the factory function.
export default PostModuleFactory(config);
