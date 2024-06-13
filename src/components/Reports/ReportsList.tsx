import { useState, useRef, useEffect } from "react";
import MoreVertIcon from '@mui/icons-material/MoreVert';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import BorderColorIcon from '@mui/icons-material/BorderColor';
import TitleIcon from '@mui/icons-material/Title';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';

const ReportsList = ({ onCreateReport }) => {
    const [dropdownVisible, setDropdownVisible] = useState(null);
    const dropdownRefs = useRef([]);

    const reportItems = [
        { title: "Basic AI readiness Report", imgSrc: "public/assets/images/Gauge-bar.png" },
        { title: "AI Readiness Goal Report", imgSrc: "public/assets/images/group.png" },
        { title: "Advanced AI Readiness Report", imgSrc: "public/assets/images/Gauge-bar.png" },
        { title: "Custom Report Title", imgSrc: "public/assets/images/group.png" },
        { title: "Custom Report Title", imgSrc: "public/assets/images/group.png" },
        { title: "Custom Report Title", imgSrc: "public/assets/images/Gauge-bar.png" }
    ];

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownVisible !== null && dropdownRefs.current[dropdownVisible] && !dropdownRefs.current[dropdownVisible].contains(event.target)) {
                setDropdownVisible(null);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [dropdownVisible]);

    const toggleDropdown = (index) => {
        setDropdownVisible(dropdownVisible === index ? null : index);
    };

    return (
        <div className="grid xl:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-4 mb-4">
            {reportItems.map((item, index) => (
                <div key={index} className="grid-item relative">
                    <div className="grid-item-inner rounded-[10px] bg-white shadow flex flex-wrap flex-col justify-between min-h-165px">
                        <img className="m-auto my-1 p-4" src={item.imgSrc} alt={item.title} />
                        <div className="flex gap-2 items-end justify-between pt-4">
                            <p className="text-gray-500 mb-0">{item.title}</p>
                            <button className="text-gray-500 mb-0 flex items-center gap-1" onClick={() => toggleDropdown(index)}>
                                <small><MoreVertIcon /></small>
                            </button>
                            {dropdownVisible === index && (
                                <div ref={(el) => (dropdownRefs.current[index] = el)} className="absolute mt-8 w-48 bg-white border border-gray-200 rounded shadow-md">
                                    <div className="flex flex-col p-4">
                                        <div className="flex items-center mb-2">
                                            <BorderColorIcon className="mr-2 text-gray-500" />
                                            <span>
                                                <button className="mb-0 flex items-center gap-1" onClick={() => toggleDropdown(index)}>Edit Report</button>
                                            </span>
                                            <ChevronRightIcon />
                                        </div>
                                        <div className="flex items-center mb-2">
                                            <ManageAccountsIcon className="mr-2 text-gray-500" />
                                            <span>
                                                <button className="mb-0 flex items-center gap-1" onClick={() => toggleDropdown(index)}>Manage Access</button>
                                            </span>
                                            <ChevronRightIcon />
                                        </div>
                                        <div className="flex items-center mb-2">
                                            <TitleIcon className="mr-2 text-gray-500" />
                                            <span>
                                                <button className="mb-0 flex items-center gap-1" onClick={() => toggleDropdown(index)}>Rename</button>
                                            </span>
                                        </div>
                                        <div className="flex items-center mb-2">
                                            <DeleteOutlineIcon className="mr-2 text-gray-500" />
                                            <span>
                                                <button className="mb-0 flex items-center gap-1" onClick={() => toggleDropdown(index)}>Move to Trash</button>
                                            </span>
                                            <ChevronRightIcon />
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            ))}
            {/* <button onClick={onCreateReport} className="btn-primary">Create New Report</button> */}
        </div>
    );
};

export default ReportsList;
