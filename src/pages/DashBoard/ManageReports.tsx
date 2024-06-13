import { useEffect, useState } from "react";
import CreateReportModal from "../../components/Reports/CreateReportModal";
import ReportDetails from "../../components/Reports/ReportDetails";
import ReportsList from "../../components/Reports/ReportsList";
import AfterReports from "../../components/Reports/AfterNewReport";
import { useSelector } from "react-redux";

const MyReports = () => {
    const finalreport = useSelector((state: any) => state.activity?.finalreport);

    useEffect(() => { finalreport && setScreen(finalreport) }, [finalreport])

    const [screen, setScreen] = useState("list"); // "list", "create", "details"
    const [selectedReport, setSelectedReport] = useState(null);

    const handleCreateReport = () => {
        setScreen("create");
    };

    const handleSaveReport = () => {
        setScreen("details");
    };

    const handleFinalReportPage = () => {
        setScreen("final");
    }

    return (
        <div className="content-right-inner min-h-vhcalc92px overflow-y-auto max-h-vhcalc92px lg:px-8 px-4 md:py-6 py-4 bg-lightgray">
            {screen === "list" && <ReportsList onCreateReport={handleCreateReport} />}
            {screen === "create" && <CreateReportModal onSave={handleSaveReport} />}
            {screen === "details" && <ReportDetails report={selectedReport} />}
            {screen === "final" && <AfterReports onSave={handleFinalReportPage} />}
        </div>
    );
};

export default MyReports;




// import { useEffect, useState, useRef } from "react";
// import { useDispatch } from "react-redux";
// import { getQuestions } from "../../services/slices/dashboard/dashboard";
// import MoreVertIcon from '@mui/icons-material/MoreVert';
// import ChevronRightIcon from '@mui/icons-material/ChevronRight';
// import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
// import BorderColorIcon from '@mui/icons-material/BorderColor';
// import TitleIcon from '@mui/icons-material/Title';
// import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';

// const MyReports = () => {
//     const dispatch = useDispatch();
//     const [dropdownVisible, setDropdownVisible] = useState(null);
//     const dropdownRefs = useRef([]);

//     useEffect(() => {
//         dispatch(getQuestions())
//             .unwrap()
//             .then(() => { });
//     }, [dispatch]);

//     useEffect(() => {
//         const handleClickOutside = (event) => {
//             if (
//                 dropdownVisible !== null &&
//                 dropdownRefs.current[dropdownVisible] &&
//                 !dropdownRefs.current[dropdownVisible].contains(event.target)
//             ) {
//                 setDropdownVisible(null);
//             }
//         };

//         document.addEventListener("mousedown", handleClickOutside);
//         return () => {
//             document.removeEventListener("mousedown", handleClickOutside);
//         };
//     }, [dropdownVisible]);

//     const toggleDropdown = (index) => {
//         setDropdownVisible(dropdownVisible === index ? null : index);
//     };

//     const reportItems = [
//         {
//             title: "Basic AI readiness Report",
//             imgSrc: "public/assets/images/Gauge-bar.png"
//         },
//         {
//             title: "AI Readiness Goal Report",
//             imgSrc: "public/assets/images/group.png"
//         },
//         {
//             title: "Advanced AI Readiness Report",
//             imgSrc: "public/assets/images/Gauge-bar.png"
//         },
//         {
//             title: "Custom Report Title",
//             imgSrc: "public/assets/images/group.png"
//         },
//         {
//             title: "Custom Report Title",
//             imgSrc: "public/assets/images/group.png"
//         },
//         {
//             title: "Custom Report Title",
//             imgSrc: "public/assets/images/Gauge-bar.png"
//         }
//     ];

//     return (
//         <div className="content-right-inner min-h-vhcalc92px overflow-y-auto max-h-vhcalc92px lg:px-8 px-4 md:py-6 py-4 bg-lightgray ">
//             <div className="grid xl:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-4 mb-4 ">
//                 {reportItems.map((item, index) => (
//                     <div key={index} className="grid-item relative">
//                         <div className="grid-item-inner rounded-[10px] bg-white shadow flex flex-wrap flex-col justify-between min-h-165px ">
//                             <img className="m-auto my-1 p-4" src={item.imgSrc} alt={item.title} />
//                             <div className="flex gap-2 items-end justify-between pt-4">
//                                 <p className="text-gray-500 mb-0">{item.title}</p>
//                                 <button
//                                     className="text-gray-500 mb-0 flex items-center gap-1"
//                                     onClick={() => toggleDropdown(index)}
//                                 >
//                                     <small><MoreVertIcon /></small>
//                                 </button>
//                                 {dropdownVisible === index && (
//                                     <div
//                                         ref={(el) => (dropdownRefs.current[index] = el)}
//                                         className="absolute  mt-8 w-48 bg-white border border-gray-200 rounded shadow-md"
//                                     >
//                                         <div className="flex flex-col p-4">
//                                             <div className="flex items-center mb-2">
//                                                 <BorderColorIcon className="mr-2 text-gray-500 " /> <span>  <button
//                                                     className=" mb-0 flex items-center gap-1"
//                                                     onClick={() => toggleDropdown(index)}
//                                                 >Edit Report</button> </span>
//                                                 <ChevronRightIcon />
//                                             </div>
//                                             <div className="flex items-center mb-2">
//                                                 <ManageAccountsIcon className="mr-2 text-gray-500" /> <span><button
//                                                     className=" mb-0 flex items-center gap-1"
//                                                     onClick={() => toggleDropdown(index)}
//                                                 >ManageAccess</button></span>
//                                                 <ChevronRightIcon />
//                                             </div>
//                                             <div className="flex items-center mb-2">
//                                                 <TitleIcon className="mr-2 text-gray-500" /> <span><button
//                                                     className=" mb-0 flex items-center gap-1"
//                                                     onClick={() => toggleDropdown(index)}
//                                                 >Rename</button></span>

//                                             </div>
//                                             <div className="flex items-center mb-2">
//                                                 <DeleteOutlineIcon className="mr-2 text-gray-500" /> <span> <button
//                                                     className=" mb-0 flex items-center gap-1"
//                                                     onClick={() => toggleDropdown(index)}
//                                                 >Move to Trash</button></span>
//                                                 <ChevronRightIcon />
//                                             </div>
//                                         </div>
//                                     </div>
//                                 )}
//                             </div>
//                         </div>
//                     </div>
//                 ))}
//             </div>
//         </div>
//     );
// };

// export default MyReports;
