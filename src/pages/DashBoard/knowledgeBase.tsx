import React from "react";
import { Table } from "flowbite-react";

import Category from "../../components/KnowledgeBase/Category";
import RecentUpload from "../../components/KnowledgeBase/RecentUpload";
import ContentOutline from "../../components/KnowledgeBase/ContentOutline";
import SideBar from "../../Layout/sidebar";
import SideGraphAnalytics from "../../components/KnowledgeBase/SideGraphAnalytics";

const KnowledgeBase = () => {
  return (
    <>
      {/* max-h-vhcalc92px */}
      <div className="content-right-inner min-h-vhcalc92px overflow-y-auto  lg:px-8 px-4 md:py-7 py-4 bg-lightgray">
        <div className="knowledge-inner bg-white rounded-[20px] lg:p-6 p-4">
          <ul className="grid xl:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-5">
            <li className="grid-item xl:col-span-3 md:col-span-2">
              <div className="xl:max-w-p90 max-w-808">
                <Category />
                <RecentUpload />
                <ContentOutline />
              </div>
            </li>
            <li className="grid-item xl:col-span-1 md:col-span-2">
              <SideGraphAnalytics />
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default KnowledgeBase;
