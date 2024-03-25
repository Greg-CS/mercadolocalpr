"use client";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { useEffect, useState } from "react";
// import { motion } from "framer-motion";
import type { Database } from "../../../../database.types";
import { EraseModal } from "../Modals/EraseModal";
import axios from "axios";
type ProfilesTable = Database["public"]["Tables"]["profiles"]["Row"];

export function UserProfile (): JSX.Element{

  const supabase = createClientComponentClient<Database>();
  const [profile, setProfile] = useState<ProfilesTable[] | null>(null);
  const [fetchError, setFetchError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = axios.get("/api/GetProfiles");
        console.log(response);
        setProfile((await response).data);
      } catch (error) {
        console.log(error);
      }
    }
    void fetchData();
  }, []);


  // useEffect(() => {
  //   const getData = async () => {
  //     const { data } = await supabase.from("profiles").select("*");
  //     setProfile(data);
  //     return data;
  //   };
  //   void getData();
  // }, []);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       axios.get("/api/GetProfile");
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   }
  //   void fetchData();
  // }, []);

  if(profile === null || fetchError != null){
    return (
      <div className="mx-auto pt-36 flex items-center justify-center">
        <h1 className="font-bold text-3xl">Error fetching Profiles!</h1>
      </div>
    )
  }

  return (
    <div className="overflow-x-auto p-10">
      <table className="table table-xs border-2 rounded-xl">
        <thead>
          <tr>
            <th></th> 
            <th>Username</th> 
            <th>Description</th> 
            <th>updated_at</th> 
            <th>town of origin</th> 
            <th>Last Login</th> 
            <th>Amount of Posts</th>
            <th>Delete</th>
          </tr>
        </thead> 
        <tbody>
          {profile?.map((user: ProfilesTable) => (
            <tr key={user.id}>
            <th></th> 
            <td>{user.username}</td> 
            <td>{user.description}</td> 
            <td>{user.updated_at}</td> 
            <td>Lajas</td> 
            <td>2024-02-14T02:40:59.907+00:00</td> 
            <td>2</td>
            <td className="flex items-center justify-start">
              <EraseModal/>
            </td>
          </tr>
          ))}
        </tbody> 
        <tfoot>
          <tr>
            <th></th> 
            <th>Username</th> 
            <th>Description</th> 
            <th>updated_at</th> 
            <th>town of origin</th> 
            <th>Last Login</th> 
            <th>Amount of Posts</th>
          </tr>
        </tfoot>
      </table>
    </div>
  )
}
