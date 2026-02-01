import React from 'react';
import { Calendar, Filter, Download, X } from 'lucide-react';

const FilterPanel = ({ 
  dateRange, 
  setDateRange, 
  selectedSegment, 
  setSelectedSegment,
  selectedRiskLevel,
  setSelectedRiskLevel,
  onClearFilters,
  onExport 
}) => {
  const dateRanges = [
    { value: '7', label: 'Last 7 days' },
    { value: '30', label: 'Last 30 days' },
    { value: '90', label: 'Last 3 months' },
  ];

  const segments = [
    { value: 'all', label: 'All Segments' },
    { value: 'low-value', label: 'Low Value / Price Sensitive' },
    { value: 'discount', label: 'Discount Driven' },
    { value: 'high-value', label: 'High Value / Quality Focused' },
  ];

  const riskLevels = [
    { value: 'all', label: 'All Risk Levels' },
    { value: 'low', label: 'Low Risk' },
    { value: 'medium', label: 'Medium Risk' },
    { value: 'high', label: 'High Risk' },
  ];

  return (
    <div className="bg-white rounded-card shadow-card p-6 mb-6">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-semibold text-gray-800 flex items-center gap-2">
          <Filter className="w-5 h-5" />
          Filters
        </h2>
        <button
          onClick={onClearFilters}
          className="text-sm text-gray-600 hover:text-danger-600 flex items-center gap-1 transition-colors"
        >
          <X className="w-4 h-4" />
          Clear All
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2 flex items-center gap-2">
            <Calendar className="w-4 h-4" />
            Date Range
          </label>
          <div className="flex gap-2">
            {dateRanges.map((range) => (
              <button
                key={range.value}
                onClick={() => setDateRange(range.value)}
                className={`px-3 py-2 text-sm rounded-lg transition-all ${
                  dateRange === range.value
                    ? 'bg-primary-500 text-white shadow-md'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {range.label}
              </button>
            ))}
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Customer Segment
          </label>
          <select
            value={selectedSegment}
            onChange={(e) => setSelectedSegment(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-all"
          >
            {segments.map((segment) => (
              <option key={segment.value} value={segment.value}>
                {segment.label}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Risk Level
          </label>
          <select
            value={selectedRiskLevel}
            onChange={(e) => setSelectedRiskLevel(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-all"
          >
            {riskLevels.map((level) => (
              <option key={level.value} value={level.value}>
                {level.label}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Actions
          </label>
          <button
            onClick={onExport}
            className="w-full px-4 py-2 bg-success-500 text-white rounded-lg hover:bg-success-600 transition-colors flex items-center justify-center gap-2 font-medium"
          >
            <Download className="w-4 h-4" />
            Export Data
          </button>
        </div>
      </div>
    </div>
  );
};

export default FilterPanel;
