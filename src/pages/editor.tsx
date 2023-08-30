import React from 'react';
import MonacoGo from '@/components/MonacoGo';

const EditorPage: React.FC = () => {
  return (
    <div className='flex justify-center items-center h-screen bg-gray-100'>
      <h1>Go Editor</h1>
      <MonacoGo />
    </div>
  );
};

export default EditorPage;
