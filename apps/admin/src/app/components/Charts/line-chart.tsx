"use client";
import React from 'react';
import { AreaChart, Area, Tooltip, ResponsiveContainer } from 'recharts';
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { useEffect, useState } from "react";
import type { Database } from "../../../../database.types";
type ProfilesTable = Database["public"]["Tables"]["profiles"]["Row"];

const data = [
  {
    id: 1,
  },
  {
    id: 2,
  },
  {
    id: 3,
  }
];

export const LineCharts = () => {
  const supabase = createClientComponentClient<Database>();
  const [profile, setProfile] = useState<ProfilesTable[] | null>(null);

  useEffect(() => {
    const getData = async () => {
      const { data } = await supabase.from("profiles").select("*");
      setProfile(data);
      return data;
    };
    void getData();
  }, []);

  return (
      // <ResponsiveContainer>
        <AreaChart
          width={200}
          height={100}
          data={profile?.id}
          margin={{
            top: 10,
            right: 30,
            left: 0,
            bottom: 0,
          }}
        >
          <Tooltip />
          <Area type="monotone" dataKey={profile?.id} stroke="#8884d8" fill="#8884d8" />
        </AreaChart>
      // </ResponsiveContainer>
  );
}