"use client";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import type { Database } from "../../../../database.types";
import { Spinner } from "../Spinner/Spinner";
import { motion } from "framer-motion";
import axios from "axios";

type PostTable = Database["public"]["Tables"]["posts"]["Row"];

export const CatPosts = ({ catID }: any) => {
  const supabase = createClientComponentClient<Database>();
  const [categoryPost, setCategoryPost] = useState<PostTable[] | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get('/api/marketplace/posts/GetPostsByCategory');
      setCategoryPost(response.data);
    }
    fetchData();
  }, []);

  if (!categoryPost) return <Spinner />;

  return (
    <>
      {categoryPost
        ?.filter((post) => post.category === catID)
        .map((post) => (
          <Link href={`/post/${post.id}`} key={post.id}>
            <motion.div
              className="w-[38w] md:w-[25vw] lg:w-[15vw] h-[50vh] p-2 bg-white card"
              initial={{ opacity: 0, scale: 0.5 }} // initial state
              animate={{ opacity: 1, scale: 1 }} // animate to this state
              transition={{ duration: 0.5 }} // transition duration
            >
              <Image
                className="object-cover w-full border-2 rounded-md border-[#A1B5D8] hover:border-[#3A4F41] transition-all"
                src={post.photo_url || "/img/placeholder.jpg"}
                alt={post.title || "No Title"}
                width={500}
                height={300}
              />
              <div className="grid p-2 card-details">
                <h2>Titulo: {post.title || "No Title"}</h2>
                <span>Precio: {post.price}</span>
                <span>Localizacion: {post.location}</span>
                <h4>fecha: {post.created_at}</h4>
                <p>Descripcion: {post.description}</p>
                <span>Categoria: {post.category}</span>
              </div>
              <button className="card-button">More info</button>
            </motion.div>
          </Link>
        ))}
    </>
  );
};
