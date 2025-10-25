import React from 'react';
import { AlertCircle, AlertTriangle, Info } from 'lucide-react';

const ScanResults = ({ results, onAddTask }) => {
  return (
    <div className="space-y-3">
      <h3 className="text-lg font-semibold text-gray-900 mb-4">
        Scan Results ({results.length} issues found)
      </h3>
      {results.map((bug, index) => (
        <div
          key={index}
          className="border rounded-lg p-4 hover:shadow-md transition"
        >
          <div className="flex items-start justify-between gap-4">
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-2">
                {bug.type === 'error' && (
                  <AlertCircle className="w-5 h-5 text-red-600" />
                )}
                {bug.type === 'warning' && (
                  <AlertTriangle className="w-5 h-5 text-orange-600" />
                )}
                {bug.type === 'info' && (
                  <Info className="w-5 h-5 text-blue-600" />
                )}
                <h4 className="font-semibold text-gray-900">{bug.title}</h4>
                <span
                  className={`px-2 py-1 text-xs rounded-full ${
                    bug.severity === 'critical'
                      ? 'bg-red-100 text-red-800'
                      : bug.severity === 'high'
                      ? 'bg-orange-100 text-orange-800'
                      : bug.severity === 'medium'
                      ? 'bg-yellow-100 text-yellow-800'
                      : 'bg-green-100 text-green-800'
                  }`}
                >
                  {bug.severity}
                </span>
              </div>
              <p className="text-sm text-gray-600 mb-2">{bug.description}</p>
              {bug.recommendation && (
                <div className="bg-blue-50 border-l-4 border-blue-500 p-3 mt-2">
                  <p className="text-sm text-blue-900">
                    <strong>Recommendation:</strong> {bug.recommendation}
                  </p>
                </div>
              )}
            </div>
            <button
              onClick={() => onAddTask(bug)}
              className="px-3 py-1.5 bg-blue-600 text-white text-sm rounded-lg hover:bg-blue-700 transition whitespace-nowrap"
            >
              Add to Tasks
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ScanResults;