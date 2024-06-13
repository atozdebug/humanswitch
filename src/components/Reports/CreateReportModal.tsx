import { useState } from "react";

const CreateReportModal = ({ onSave }) => {
    const [reportName, setReportName] = useState("");
    const [selectedTemplate, setSelectedTemplate] = useState("");

    const handleSave = () => {
        if (reportName && selectedTemplate) {
            onSave();
        }
    };

    return (
        <div className="modal">
            <div className="modal-content">
                <h2>Create New Report</h2>
                <input
                    type="text"
                    placeholder="Report Name"
                    value={reportName}
                    onChange={(e) => setReportName(e.target.value)}
                />
                <div className="templates">
                    <label>
                        <input
                            type="radio"
                            name="template"
                            value="template1"
                            checked={selectedTemplate === "template1"}
                            onChange={(e) => setSelectedTemplate(e.target.value)}
                        />
                        Title of the Report Template
                    </label>
                    {/* Repeat for other templates */}
                </div>
                <button onClick={handleSave} className="btn-primary">Save and Proceed</button>
            </div>
        </div>
    );
};

export default CreateReportModal;
