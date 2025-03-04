import React from "react";
import { TopNav } from "./layout/TopNav";
import {Sidebar} from "./layout/Sidebar";
import {ComplaintsPage} from "./Pages/ComplaintsPage";
import {ReportPage} from "./Pages/ReportPage";
import { RestaurantProfile } from "./Pages/RestaurantProfile";

export function Manager(){
    const currentPage = "restaurantprofile";
    return (
        <div className="flex h-screen bg-gray-50">
            <Sidebar/>
            <div className="flex-1 flex flex-col">
                <TopNav/>
                {currentPage === "complaints" ?(
                    <ComplaintsPage/>
                ):currentPage === "reports" ?(
                    <ReportPage/>
                ):currentPage === "restaurantprofile" ?(
                    <RestaurantProfile/>
                ):(<div>Page not found</div>)}
            </div>
        </div>
    );
}