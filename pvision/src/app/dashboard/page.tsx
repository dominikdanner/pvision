"use client";
import Image from "next/image";
import { Dispatch, FC, SetStateAction, useState } from "react";
import { Button } from "@/components/Button";

export default function Dashboard() {

  const state = useState<number>(0);

  return (
    <div className="flex flex-row min-h-screen items-stretch">
        <div className="w-1/3 bg-amber-300">
            
        </div>
        <div className="w-2/3 bg-red-200"></div>
    </div>
  );
}

