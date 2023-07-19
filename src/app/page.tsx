"use client";

import { Product } from "@/components/Product";
import { Input } from "../components/Input";
import "../css/global.css";

export default function Home() {
    return (
        <div className="w-full flex items-center pt-20 flex-col min-h-screen max-h-max bg-slate-400">
            <Input />
            <br />
            <Product></Product>
        </div>
    );
}
