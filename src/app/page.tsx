"use client";

import { EccomerceContainer } from "../components/EcommerceContainer";
import "../css/global.css";

export default function Home() {
    return (
        <div className="w-full flex items-center pt-20 flex-col min-h-screen max-h-max bg-slate-400">
            <EccomerceContainer />
        </div>
    );
}
