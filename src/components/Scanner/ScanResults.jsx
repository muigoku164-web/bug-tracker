import React from "react";

const ScanResults = ({ results, onAddToTask }) => (
  <div>
    <h4>Scan Results</h4>
    {results.length === 0 ? <div>No issues found.</div> : results.map((bug, idx) =>
      <div key={idx}>
        <strong>{bug.title}</strong> <span>{bug.severity}</span>
        <div>{bug.description}</div>
        {bug.recommendation && <div>{bug.recommendation}</div>}
        <button onClick={() => onAddToTask(bug)}>Add to Tasks</button>
      </div>
    )}
  </div>
);

export default ScanResults;
