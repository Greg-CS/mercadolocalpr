"use client";
import React, { useState } from 'react'
import { UserPosts } from "./users-posts";
export const UserPostBox = () => {
    const [catID, setCatID] = useState(0);
    const handleFilter = (catID: number) => {
        setCatID(catID);
    }

    return (
        <div className="p-10 grid gap-4">
        <div className="grid">
            <span className="font-bold">Filter by category</span>
            <div className="flex justify-around gap-4 p-4  mt-5 bg-[#A3B18A] rounded-2xl text-white h-[10vh]">
            <button onClick={() => handleFilter(1)} className="font-bold hover:bg-[#588157] hover:p-2 hover:text-white hover:rounded-md hover:font-bold transition-all" type="button">Vehiculos</button>
            <button onClick={() => handleFilter(2)} className="font-bold hover:bg-[#588157] hover:p-2 hover:text-white hover:rounded-md hover:font-bold transition-all" type="button">Mascotas</button>
            <button onClick={() => handleFilter(3)} className="font-bold hover:bg-[#588157] hover:p-2 hover:text-white hover:rounded-md hover:font-bold transition-all" type="button">Articulos</button>
            <button onClick={() => handleFilter(4)} className="font-bold hover:bg-[#588157] hover:p-2 hover:text-white hover:rounded-md hover:font-bold transition-all" type="button">Empleos</button>
            <button onClick={() => handleFilter(5)} className="font-bold hover:bg-[#588157] hover:p-2 hover:text-white hover:rounded-md hover:font-bold transition-all" type="button">Servicios</button>
            <button onClick={() => handleFilter(6)} className="font-bold hover:bg-[#588157] hover:p-2 hover:text-white hover:rounded-md hover:font-bold transition-all" type="button">Otros</button>
            <button onClick={() => handleFilter(7)} className="font-bold hover:bg-[#588157] hover:p-2 hover:text-white hover:rounded-md hover:font-bold transition-all" type="button">Bienes-Raices</button>
            </div>
        </div>
        <div className="flex flex-wrap gap-4">
            <UserPosts catID={catID}/>
        </div>
        </div>
    )
}
