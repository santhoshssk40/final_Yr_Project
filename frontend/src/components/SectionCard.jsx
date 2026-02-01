import React from 'react';

const SectionCard = ({ title, children }) => {
  return (
    <div className="bg-white rounded-xl shadow-sm p-6">
      {title && (
        <h2 className="text-lg font-semibold text-gray-900 mb-4">
          {title}
        </h2>
      )}
      {children}
    </div>
  );
};

export default SectionCard;

