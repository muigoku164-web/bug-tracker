import React, { useState } from 'react';
import { X, Globe, Search, Loader } from 'lucide-react';
import { scannerService } from '../../services/scanner';
import ScanResults from './ScanResults';

const WebsiteScanner = ({ onClose, onAddTask }) => {
  const [scanUrl, setScanUrl] = useState('');
  const [scanning, setScanning] = useState(false);
  const [scanResults, setScanResults] = useState([]);

  const handleScan = async () => {
    if (!scanUrl.trim()) {
      alert('Please enter a URL');
      return;
    }

    let url = scanUrl.trim();
    if (!url.startsWith('http://') && !url.startsWith('https://')) {
      url = 'https://' + url;
    }

    try {
      new URL(url);
    } catch {
      alert('Please enter a valid URL');
      return;
    }

    setScanning(true);
    setScanResults([]);

    try {
      const bugs = await scannerService.scanWebsite(url);
      setScanResults(bugs);
    } catch (error) {
      setScanResults([
        {
          type: 'error',
          title: 'Scan Failed',
          description: `Failed to scan website: ${error.message}`,
          severity: 'high',
        },
      ]);
    } finally {
      setScanning(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-lg shadow-xl w-full max-w-4xl max-h-[90vh] overflow-y-auto">
        <div className="p-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-gray-900 flex items-center gap-2">
              <Globe className="w-7 h-7 text-purple-600" />
              Website Vulnerability Scanner
            </h2>
            <button
              onClick={onClose}
              className="p-2 hover:bg-gray-100 rounded-lg transition"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Website URL
            </label>
            <div className="flex gap-2">
              <input
                type="text"
                placeholder="https://example.com"
                value={scanUrl}
                onChange={(e) => setScanUrl(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleScan()}
                className="flex-1 px-4 py-2 border rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                disabled={scanning}
              />
              <button
                onClick={handleScan}
                disabled={scanning || !scanUrl}
                className="px-6 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition disabled:bg-gray-400 disabled:cursor-not-allowed flex items-center gap-2"
              >
                {scanning ? (
                  <>
                    <Loader className="w-5 h-5 animate-spin" />
                    Scanning...
                  </>
                ) : (
                  <>
                    <Search className="w-5 h-5" />
                    Scan
                  </>
                )}
              </button>
            </div>
            <p className="text-xs text-gray-500 mt-2">
              Enter a website URL to scan for common security vulnerabilities and bugs
            </p>
          </div>

          {scanResults.length > 0 && (
            <ScanResults results={scanResults} onAddTask={onAddTask} />
          )}

          {!scanning && scanResults.length === 0 && scanUrl && (
            <div className="text-center py-8 text-gray-500">
              Click "Scan" to analyze the website for vulnerabilities
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default WebsiteScanner;