"use client";

import { Input } from "../components/Input";
import "../css/global.css";

export default function Home() {
    return (
        <div className="w-full flex items-center justify-center flex-col min-h-screen max-h-max bg-slate-400">
            <Input />
        </div>
    );
}
