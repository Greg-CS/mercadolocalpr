"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import type { Database } from "../../../../database.types";
import { Spinner } from "../Spinner/spinner";
import axios from "axios";

type PostTable = Database["public"]["Tables"]["posts"]["Row"];
// type CategoryTable = Database["public"]["Tables"]["categories"]["Row"];

export function UserPosts ({ catID }: { catID: number }) {
  const [posts, setPosts] = useState<PostTable[] | null>(null);
  const [fetchError, setFetchError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = axios.get("/api/GetPost");
        console.log(response);
        setPosts((await response).data);
      } catch (error) {
        setFetchError("Error fetching posts");
        console.log(error);
      }
    }
    void fetchData();
  }, []);

  if(fetchError != null){
    return (
      <div className="mx-auto pt-36 flex items-center justify-center">
        <h1 className="font-bold text-3xl">Error fetching posts</h1>
      </div>
    )
  }

  if (!posts) return (
  <div className="mx-auto pt-24 flex items-center justify-center">
    <Spinner />
  </div>
  );

  return (
    <div className="overflow-x-auto p-10">
      <table className="table table-xs border-2 rounded-xl">
        <thead>
          <tr>
            <th></th> 
            <th>id</th>
            <th>Image</th> 
            <th>Title</th> 
            <th>Price</th> 
            <th>Location</th> 
            <th>created_at</th> 
            <th>Description</th>
            <th>Category</th>
            <th>View</th>
          </tr>
        </thead> 
        <tbody> 
          {posts?.filter((post) => post.category === catID).map((post: PostTable) => (
            <tr key={post.id}>
              <th></th>
              <th>{post.id}</th>
              <td>
                <Image
                  className="object-cover w-full border-2 rounded-md border-[#A1B5D8] hover:border-[#3A4F41] transition-all"
                  src={post.photo_url || "/img/placeholder.jpg"}
                  alt={post.title || "No Title"}
                  width={500}
                  height={300}
                />
              </td>
              <td>{post.title || "No Title"}</td>
              <td>{post.price || "No Price"}</td>
              <td>{post.location || "No Location"}</td>
              <td>{post.created_at}</td>
              <td>{post.description}</td>
              <td>{post.category}</td>
              <td>
                <Link href={`/UserPost/${post.id}`}>
                  View
                </Link>
              </td>
            </tr>
          ))}
        </tbody> 
        <tfoot>
          <tr>
            <th></th> 
            <th>id</th>
            <th>Image</th> 
            <th>Title</th> 
            <th>Price</th> 
            <th>Location</th> 
            <th>created_at</th> 
            <th>Description</th>
            <th>Category</th>
            <th>View</th>
          </tr>
        </tfoot>
      </table>
    </div>
  );
};
