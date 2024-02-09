"use client";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { useEffect, useState } from "react";
import type { Database } from "../../../../database.types";
import Image from "next/image";
import Link from "next/link";

type PostTable = Database["public"]["Tables"]["posts"]["Row"];

export const CatPosts = () => {
  const supabase = createClientComponentClient<Database>();
  const [posts, setPosts] = useState<PostTable[] | null>(null);
  useEffect(() => {
    const getData = async () => {
      const { data } = await supabase.from("posts").select("*");
      setPosts(data);
    };
    getData();
  }, []);
  return (
    <>
      {posts?.map((post) => (
        <div
          key={post.id}
          className="relative border  border-[#FFF8EB] rounded group hover:border-[#A36700]"
        >
          <div className="w-full overflow-hidden bg-gray-200rounded-md aspect-h-1 aspect-w-1 lg:aspect-none group-hover:opacity-75 lg:h-80">
            <Image
              src={post.photo_url || "/img/placeholder.jpg"}
              alt={post.title || "No Title"}
              className="object-cover object-center w-full h-full lg:h-full lg:w-full"
              width={500}
              height={300}
            />
          </div>
          <div className="flex justify-between px-2 mt-4">
            <div>
              <div className="mb-2 font-sans font-bold text-neutral-600 dark:text-neutral-200">
                <Link href={`/post/${post.id}`}>
                  <span aria-hidden="true" className="absolute inset-0 " />
                  {post.title || "No Title"}
                </Link>
              </div>
              <p className="mt-1 text-sm text-gray-500">
                {post.category || "House"}
              </p>

              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
              <p>Posted: {post.created_at}</p>
            </div>
            <p className="text-sm font-medium text-gray-900">
              ${post.price}.00
            </p>
          </div>
        </div>
      ))}
    </>
  );
};
