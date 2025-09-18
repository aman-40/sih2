
import React, { useRef, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Tree from 'react-d3-tree';


// Helper to convert AI tree structure to react-d3-tree format
function convertToD3Tree(aiTree) {
  if (!aiTree || !Array.isArray(aiTree) || aiTree.length === 0) return null;
  // If root is an array, wrap in a dummy root
  if (aiTree.length > 1) {
    return {
      name: 'Career Path',
      children: aiTree.map(convertToD3Tree).filter(Boolean)
    };
  }
  const node = aiTree[0];
  if (!node || typeof node.label !== 'string') return null;
  return {
    name: node.label,
    children: node.children ? node.children.map(convertToD3Tree).filter(Boolean) : []
  };
}


const containerStyles = {
  width: '100%',
  minHeight: '400px',
  background: 'white',
  borderRadius: '12px',
  boxShadow: '0 2px 16px rgba(0,0,0,0.08)',
  margin: '24px 0',
  padding: '16px',
  overflow: 'auto',
  position: 'relative',
};


const CareerTree = ({ aiTree }) => {
  const containerRef = useRef(null);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

  useEffect(() => {
    if (containerRef.current) {
      const { width, height } = containerRef.current.getBoundingClientRect();
      setDimensions({ width, height: height > 0 ? height : 400 });
    }
  }, [aiTree]);

  if (!aiTree || !Array.isArray(aiTree) || aiTree.length === 0) {
    return <div style={containerStyles}>No tree data available.</div>;
  }
  const d3TreeData = convertToD3Tree(aiTree);
  if (!d3TreeData) {
    return <div style={containerStyles}>Invalid tree data.</div>;
  }

  // Only render Tree when dimensions are available
  return (
    <div style={containerStyles} ref={containerRef}>
      {dimensions.width > 0 && dimensions.height > 0 && (
        <Tree
          data={d3TreeData}
          orientation="vertical"
          collapsible={true}
          zoomable={true}
          translate={{ x: dimensions.width / 2, y: 60 }}
          separation={{ siblings: 1.5, nonSiblings: 2 }}
          nodeSize={{ x: 220, y: 80 }}
          styles={{
            nodes: {
              node: {
                circle: { fill: '#1976d2', r: 16 },
                name: { fontSize: '1.1rem', fontWeight: 600, fill: '#222' },
                attributes: { fontSize: '0.95rem', fill: '#555' },
              },
              leafNode: {
                circle: { fill: '#43a047', r: 14 },
                name: { fontSize: '1rem', fontWeight: 500, fill: '#333' },
              },
            },
            links: {
              stroke: '#1976d2',
              strokeWidth: 2,
            },
          }}
          initialDepth={2}
        />
      )}
    </div>
  );
};

CareerTree.propTypes = {
  aiTree: PropTypes.array.isRequired,
};

export default CareerTree;
