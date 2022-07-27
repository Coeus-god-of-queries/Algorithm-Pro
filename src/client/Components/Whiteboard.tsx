import React from 'react';
import ReactDOM from 'react-dom';
import CodeEditor from '@uiw/react-textarea-code-editor';
import CanvasDraw from "react-canvas-draw";


export const Whiteboard = () => {
    const [code, setCode] = React.useState(
        `function add(a, b) {\n  return a + b;\n}`
      );    
    return (
        <div>
        {/* navbar component */}
        Logout
        {/* question title */}
        {/* problem description */}
        <textarea></textarea>
        {/* React Canvas Draw */}
        {/* Repl */}
        <CodeEditor
      value={code}
      language="js"
      placeholder="Please enter JS code."
      onChange={(evn) => setCode(evn.target.value)}
      padding={15}
      style={{
        fontSize: 12,
        backgroundColor: "#f5f5f5",
        fontFamily: 'ui-monospace,SFMono-Regular,SF Mono,Consolas,Liberation Mono,Menlo,monospace',
      }}
    />
        </div>
    )
}

 
