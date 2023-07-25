"use client";

import { EccomerceContainer } from "../components/EcommerceContainer";
import "../css/global.css";

export default function Home() {
    return (
        <div className="w-full pt-20 flex-col min-h-screen max-h-max bg-slate-400">
            <EccomerceContainer />
        </div>
    );
}
