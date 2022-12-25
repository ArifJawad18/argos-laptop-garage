import React from 'react';

const Loading = () => {
    return (
        <div>
          <div className="flex items-center justify-center space-x-2">
        <div className="w-16 h-16 border-4 border-dashed rounded-full animate-spin border-sky-600"></div>
    </div>
        </div>
    );
};

export default Loading;