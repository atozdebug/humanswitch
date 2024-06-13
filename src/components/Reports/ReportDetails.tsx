const ReportDetails = ({ report }) => {
    return (
        <div>
            <h2>{report?.title || "AI Strategy Readiness"}</h2>
            <textarea placeholder="Preface"></textarea>
            <textarea placeholder="Conclusion"></textarea>
            <textarea placeholder="Call to Action"></textarea>
            <div>
                <input type="checkbox" id="calculateScores" />
                <label htmlFor="calculateScores">Calculate Scores</label>
            </div>
            <button className="btn-primary">Next</button>
        </div>
    );
};

export default ReportDetails;
