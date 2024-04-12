"use client"
import {marked} from 'marked';



import React, { useState } from 'react';
marked.setOptions({
  breaks: true
});

function EditorPreviewer() {
  const [inputValue, setInputValue] = useState('');
  const editormD = (e) => {
    const MarkedValueText = e.target.value;
    setInputValue(MarkedValueText);
  };
  const MarkedPreviewerOut = marked.parse(inputValue);
  
    return (
      <div className="flex flex-col md:flex-row items-flex-start justify-center min-h-screen bg-gray-900">
        <div className="w-full md:w-1/2 p-4 flex flex-col gap-3">
          <div className="EditorText">
            <h1 className="text-3xl text-gray-100">Editor</h1>
          </div>
          <textarea onChange={editormD} className="w-full h-full bg-gray-800 border border-solid border-gray-600 text-gray-100 p-4 rounded-lg resize-none" id="editor" cols="80" rows="25" value={inputValue}></textarea>
        </div>

        <div className="w-full md:w-1/2 p-4 flex flex-col gap-3">
          <div className="PreviewerText">
            <h1 className="text-3xl text-gray-100">Previewer</h1>
          </div>
          <div style={{ width: '50%', padding: '10px', overflowY: 'auto', color: 'white'}} dangerouslySetInnerHTML={{ __html: MarkedPreviewerOut }}/>
        </div>





   

      </div>
    );
  }
  export default EditorPreviewer

  