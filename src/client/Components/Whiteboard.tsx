import React from 'react';
import CodeEditor from '@uiw/react-textarea-code-editor';
import CanvasDraw from "react-canvas-draw";


interface whiteboardProps {
    user: {};
    question: string;
    description: string;     
}

export const Whiteboard = (props: whiteboardProps): JSX.Element => {
    const [code, setCode] = React.useState(
        `function add(a, b) {\n  return a + b;\n}`
      );    
    return (
        <div>
        {/* navbar component */}
        Logout
        {/* question title -passed down from props*/}
        {/* problem description -passed down from props*/}
        <textarea rows={50} cols={50}></textarea>
        {/* React Canvas Draw */}
        <CanvasDraw enablePanAndZoom={true} />
        {/* Repl */}
        <CodeEditor
      value={code}
      language="js"
      placeholder="Please enter JS code."
      onChange={(e) => setCode(e.target.value)}
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

 
