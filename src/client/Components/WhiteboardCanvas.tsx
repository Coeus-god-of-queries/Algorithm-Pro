import * as React from 'react';
import { ReactSketchCanvas } from 'react-sketch-canvas';

const styles = {
  border: '0.0625rem solid #9c9c9c',
  borderRadius: '0.75rem',
};

export const WhiteboardCanvas = () => {
  return (
    <ReactSketchCanvas
      style={styles}
      strokeWidth={4}
      strokeColor="blue"
    />
  );
};