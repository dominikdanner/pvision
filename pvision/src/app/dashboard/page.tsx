"use client";
import Image from "next/image";
import { Dispatch, FC, SetStateAction, useState } from "react";
import { Button } from "@/components/Button";

export default function Dashboard() {

  const state = useState<number>(0);

  return (
    <div className="flex flex-row h-full">
        <div className="w-1/3 bg-secondary">adsfasf</div>
        <div className="w-2/3 bg-red-200"> gsgsgsgsg</div>
    </div>
  );
}

