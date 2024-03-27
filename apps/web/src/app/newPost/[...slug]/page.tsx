import React from "react";
import { ProductForm } from "../../components/Forms/ProductForm";

export default async function newPost({ params }: { params: { slug: string } }) {
  return (
    <div className="space-y-8 p-10 bg-[#A1B5D8]">
      <div className="space-y-2 text-center">
        <h2 className="text-4xl font-bold text-white">Create a New Post</h2>
        <p className="text-white">
          Fill out the form below to list your item for sale.
        </p>
      </div>
      <ProductForm user={params.slug} />
    </div>
  );
}
