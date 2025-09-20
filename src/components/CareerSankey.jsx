import React, { useState } from 'react';
import PropTypes from 'prop-types';

const CareerSankey = ({ treeData }) => {
  const [expandedNodes, setExpandedNodes] = useState(new Set(['root']));

  if (!treeData) {
    return <div className="career-sankey-container">No data available</div>;
  }

  const toggleNode = (nodeId) => {
    const newExpanded = new Set(expandedNodes);
    if (newExpanded.has(nodeId)) {
      newExpanded.delete(nodeId);
    } else {
      newExpanded.add(nodeId);
    }
    setExpandedNodes(newExpanded);
  };

  const renderNode = (node, level = 0, nodeId = 'root') => {
    const isExpanded = expandedNodes.has(nodeId);
    const hasChildren = node.children && node.children.length > 0;
    
    return (
      <div key={nodeId} className={`sankey-node sankey-level-${level}`}>
        <div 
          className={`sankey-node-content ${hasChildren ? 'sankey-expandable' : ''}`}
          onClick={() => hasChildren && toggleNode(nodeId)}
        >
          <div className="sankey-node-header">
            <span className="sankey-node-title">{node.name}</span>
            {hasChildren && (
              <span className={`sankey-expand-icon ${isExpanded ? 'expanded' : ''}`}>
                {isExpanded ? '▼' : '▶'}
              </span>
            )}
          </div>
          {node.value && (
            <div className="sankey-node-value">{node.value}</div>
          )}
        </div>
        
        {hasChildren && isExpanded && (
          <div className="sankey-children">
            {node.children.map((child, index) => 
              renderNode(child, level + 1, `${nodeId}-${index}`)
            )}
          </div>
        )}
      </div>
    );
  };

  return (
    <div className="career-sankey-container">
      <div className="career-sankey-tree">
        {renderNode(treeData)}
      </div>
    </div>
  );
};

CareerSankey.propTypes = {
  treeData: PropTypes.object.isRequired,
};

export default CareerSankey;