import React from 'react';
import GeographicChurnMap from '../components/GeographicChurnMap';
import { geographicChurn } from '../data/mockData';

const GeographicAnalysisPage = () => {
  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-2xl font-bold text-gray-900 mb-2">Geographic Analysis</h2>
        <p className="text-gray-600">View customer churn risk by geographic location</p>
      </div>

      {/* Geographic Map */}
      <GeographicChurnMap data={geographicChurn} />
    </div>
  );
};

export default GeographicAnalysisPage;
