'use client'
import React from 'react'
import { PieChart, Pie } from 'recharts'
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { useEffect, useState } from "react";
import type { Database } from "../../../../database.types";
type PostsTable = Database["public"]["Tables"]["posts"]["Row"];


export const Piechart = () => {
  const supabase = createClientComponentClient<Database>();
  const [posts, setPosts] = useState<PostsTable[] | null>(null);

  // esto es un mas o menos de como deberia ser la data

  const data01 = posts?.map((post) => ({
    category: post.category,
    value: post.id,
  })) || [];
  
  console.log(posts)
  
  useEffect(() => {
    const getData = async () => {
      const { data } = await supabase.from("posts").select("*");
      setPosts(data);
      return data;
    };
    void getData();
  }, []);

  return (
    <PieChart width={250} height={250}>
        <Pie data={data01} dataKey="category" nameKey="name" cx="50%" cy="50%" outerRadius={50} fill="#588157" label/>
    </PieChart>
  )
}
