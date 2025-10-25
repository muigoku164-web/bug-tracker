import React, { useState } from "react";
import { WebsiteScanner } from "../../services/scanner";

const WebsiteScannerComponent = ({ onScanComplete }) => {
  const [url, setUrl] = useState("");
  const [loading, setLoading] = useState(false);

  const handleScan = async () => {
    setLoading(true);
    const results = await WebsiteScanner.scanWebsite(url);
    setLoading(false);
    if (onScanComplete) onScanComplete(results);
  };

  return (
    <div>
      <input value={url} onChange={e => setUrl(e.target.value)} placeholder="https://example.com" />
      <button onClick={handleScan} disabled={loading}>Scan</button>
      {loading ? <div>Loading...</div> : null}
    </div>
  );
};
export default WebsiteScannerComponent;
