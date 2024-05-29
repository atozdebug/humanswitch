import { Card, Grid, Popover } from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { useState } from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";

const data = [
  {
    name: "Basic Plan",
    editedAgo: "2 mins",
    users: "1-2 Users",
    endDate: "mm/dd/yyyy",
    price: "$99",
  },
  {
    name: "Professional Plan",
    editedAgo: "6 mins",
    users: "8-9 Users",
    endDate: "mm/dd/yyyy",
    price: "$26",
  },
  {
    name: "Premium Plan",
    editedAgo: "5 hrs",
    users: "100+ Users",
    endDate: "mm/dd/yyyy",
    price: "$129",
  },
];

const ManagePlans = () => {
  return (
    <div className="content-right-inner min-h-vhcalc92px overflow-y-auto max-h-vhcalc92px lg:px-8 px-4 md:py-7 py-4 bg-lightgray">
      <div className="grid md:grid-cols-2 grid-cols-1 gap-6 mb-6">
        <div className="grid-item">
          <div className="grid-item-inner p-5 rounded-[10px] bg-white shadow-s2">
            <ul className="flex flex-wrap list-unstyled">
              <li className="w-1/2 pr-3">
                <h3 className="text-main-heading text-lg font-medium plan-title">
                  Basic Plan
                </h3>
                <p className="text-gray-dark text-sm plan-edited">
                  Edited 1 min ago
                </p>
              </li>
              <li className="w-1/2 text-right">
                <span className="px-2 py-2px text-xs bg-lightgray text-gray-dark inline-block align-middle rounded-full mx-1">
                  Default
                </span>
                <span className="px-2 py-2px text-xs bg-lightgreen text-darkgreen inline-block align-middle rounded-full mx-1">
                  Active
                </span>
              </li>
            </ul>
            <ul className="flex flex-wrap list-unstyled pt-9">
              <li className="w-2/3 pr-3 flex gap-2">
                <div className="w-1/2">
                  <p className="text-gray-dark text-sm plan-edited">Users</p>
                  <p className="text-main-heading text-sm font-medium plan-title">
                    1-10 Users
                  </p>
                </div>
                <div className="w-1/2">
                  <p className="text-gray-dark text-sm plan-edited">End Date</p>
                  <p className="text-main-heading text-sm font-medium plan-title">
                    mm/dd/yyyy
                  </p>
                </div>
              </li>
              <li className="w-1/3 text-right text-xl text-mediumblue font-medium">
                £99
              </li>
            </ul>
          </div>
        </div>
        {/* ======================= */}
        <div className="grid-item">
          <div className="grid-item-inner p-5 rounded-[10px] bg-white shadow-s2">
            <ul className="flex flex-wrap list-unstyled">
              <li className="w-1/2 pr-3">
                <h3 className="text-main-heading text-lg font-medium plan-title">
                  Professional Plan
                </h3>
                <p className="text-gray-dark text-sm plan-edited">
                  Edited 1 min ago
                </p>
              </li>
              <li className="w-1/2 text-right">
                <span className="px-2 py-2px text-xs bg-lightgray text-gray-dark inline-block align-middle rounded-full mx-1">
                  Default
                </span>
                <span className="px-2 py-2px text-xs bg-lightred text-darkred inline-block align-middle rounded-full mx-1">
                  Inactive
                </span>
              </li>
            </ul>
            <ul className="flex flex-wrap list-unstyled pt-9">
              <li className="w-2/3 pr-3 flex gap-2">
                <div className="w-1/2">
                  <p className="text-gray-dark text-sm plan-edited">Users</p>
                  <p className="text-main-heading text-sm font-medium plan-title">
                    11-99 Users
                  </p>
                </div>
                <div className="w-1/2">
                  <p className="text-gray-dark text-sm plan-edited">End Date</p>
                  <p className="text-main-heading text-sm font-medium plan-title">
                    mm/dd/yyyy
                  </p>
                </div>
              </li>
              <li className="w-1/3 text-right text-xl text-mediumblue font-medium">
                £499
              </li>
            </ul>
          </div>
        </div>
        {/* ======================= */}
        <div className="grid-item">
          <div className="grid-item-inner p-5 rounded-[10px] bg-white shadow-s2">
            <ul className="flex flex-wrap list-unstyled">
              <li className="w-1/2 pr-3">
                <h3 className="text-main-heading text-lg font-medium plan-title">
                  Premium Plan
                </h3>
                <p className="text-gray-dark text-sm plan-edited">
                  Edited 1 min ago
                </p>
              </li>
              <li className="w-1/2 text-right">
                <span className="px-2 py-2px text-xs bg-lightgray text-gray-dark inline-block align-middle rounded-full mx-1">
                  Default
                </span>
                <span className="px-2 py-2px text-xs bg-lightgreen text-darkgreen inline-block align-middle rounded-full mx-1">
                  Active
                </span>
              </li>
            </ul>
            <ul className="flex flex-wrap list-unstyled pt-9">
              <li className="w-2/3 pr-3 flex gap-2">
                <div className="w-1/2">
                  <p className="text-gray-dark text-sm plan-edited">Users</p>
                  <p className="text-main-heading text-sm font-medium plan-title">
                    100+ Users
                  </p>
                </div>
                <div className="w-1/2">
                  <p className="text-gray-dark text-sm plan-edited">End Date</p>
                  <p className="text-main-heading text-sm font-medium plan-title">
                    mm/dd/yyyy
                  </p>
                </div>
              </li>
              <li className="w-1/3 text-right text-xl text-mediumblue font-medium">
                £1299
              </li>
            </ul>
          </div>
        </div>
        {/* ======================= */}
        <div className="grid-item">
          <div className="grid-item-inner p-5 rounded-[10px] bg-white shadow-s2">
            <ul className="flex flex-wrap list-unstyled">
              <li className="w-1/2 pr-3">
                <h3 className="text-main-heading text-lg font-medium plan-title">
                  Premium Plan
                </h3>
                <p className="text-gray-dark text-sm plan-edited">
                  Edited 1 min ago
                </p>
              </li>
              <li className="w-1/2 text-right">
                <span className="px-2 py-2px text-xs bg-lightblue text-darkblue inline-block align-middle rounded-full mx-1">
                  Custom
                </span>
                <span className="px-2 py-2px text-xs bg-lightgreen text-darkgreen inline-block align-middle rounded-full mx-1">
                  Active
                </span>
              </li>
            </ul>
            <ul className="flex flex-wrap list-unstyled pt-9">
              <li className="w-2/3 pr-3 flex gap-2">
                <div className="w-1/2">
                  <p className="text-gray-dark text-sm plan-edited">Users</p>
                  <p className="text-main-heading text-sm font-medium plan-title">
                    100+ Users
                  </p>
                </div>
                <div className="w-1/2">
                  <p className="text-gray-dark text-sm plan-edited">End Date</p>
                  <p className="text-main-heading text-sm font-medium plan-title">
                    mm/dd/yyyy
                  </p>
                </div>
              </li>
              <li className="w-1/3 text-right text-xl text-mediumblue font-medium">
                £1299
              </li>
            </ul>
          </div>
        </div>
        {/* ======================= */}
      </div>
    </div>
  );
};

export default ManagePlans;
