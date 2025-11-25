import React from 'react';
import { Download } from 'lucide-react';

const Download_Resume: React.FC = () => {
  const handleDownload = () => {
    // Create a link element
    const link = document.createElement('a');
    
    // Set the path to your resume file
    // Make sure to place your resume.pdf in the public folder
    link.href = '/Muhammad_Abrar.pdf';
    
    // Set the download attribute with desired filename
    link.download = 'Muhammad_Abrar.pdf';
    
    // Append to body, click, and remove
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <button
      onClick={handleDownload}
      className="flex items-center gap-2 px-4 py-2 bg-linear-to-r from-blue-600 to-purple-600 text-white font-medium rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 active:scale-95 cursor-pointer"
      aria-label="Download Resume"
    >
      <Download size={18} />
      <span className="hidden sm:inline">Resume</span>
    </button>
  );
};

export default Download_Resume;