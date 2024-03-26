"use client";
import { useEffect, useState } from "react";
import type { Database } from "../../../../database.types";
import Image from "next/image";
import axios from "axios";
type PostTable = Database["public"]["Tables"]["posts"]["Row"];

export const PostContent = ({ id }: { id: number }) => {
  const [postState, setPostState] = useState<PostTable[] | null>(null);
  useEffect(() => {
    const getData = async () => {
      const response = await axios.get(`/api/GetPost/${id}`);
      setPostState(response.data);
    };

    getData();
  }, []);

  return (
    <div className="grid xl:flex justify-between p-10">
      <div className="p-10">
        <Image
          src={(postState && postState[0]?.photo_url) || "/img/placeholder.jpg"}
          alt={(postState && postState[0]?.title) || "No Title"}
          width={500}
          height={500}
          className="rounded-md border-2"
        />
      </div>
      <div className="p-10">
        <div className="flex items-center justify-between gap-2 xl:gap-24">
          <h2 className="text-6xl font-bold">
            Titulo:
          </h2>
          <span className="text-6xl font-bold">
            {(postState && postState[0]?.title) || "No Title"}
          </span>
        </div>
        <div className="grid mt-12">
          <div className="flex items-center justify-between gap-2 xl:gap-24">
            <span className="text-2xl font-semibold">
              Precio: 
            </span>
            <span className="text-2xl font-semibold">
              {postState && postState[0]?.price}
            </span>
          </div>
          <div className="flex items-center justify-between gap-2 xl:gap-24">          
            <span className="text-2xl font-semibold">
              Localizacion:
            </span>
            <span className="text-2xl font-semibold">
              {postState && postState[0]?.location}
            </span>
          </div>
        </div>
        <div className="flex items-center justify-between gap-2 xl:gap-24">
          <h4 className="text-2xl font-semibold">Fecha:</h4>
          <span className="text-2xl font-semibold">
            {postState && postState[0]?.created_at}
          </span>
        </div>
        <div className="flex items-center justify-between gap-2 xl:gap-24">        
          <span className="text-2xl font-semibold">Descripcion:
          </span>
          <span className="text-2xl font-semibold">
            {postState && postState[0]?.description}
          </span>
        </div>
        <div className="flex items-center justify-between gap-2 xl:gap-24">        
          <span className="text-2xl font-semibold">
            Categoria:
          </span>
          <span className="text-2xl font-semibold">
            {postState && postState[0]?.category}
          </span>
        </div>
      </div>
    </div>
  );
};
