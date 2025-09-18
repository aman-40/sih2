import React from 'react';
import Plot from 'react-plotly.js';

// Example data structure for Sankey
const sankeyData = {
  nodes: [
    { name: 'All' },
    { name: 'Science' },
    { name: 'Commerce' },
    { name: 'Arts' },
    { name: 'Engineering' },
    { name: 'Medical' },
    { name: 'CA' },
    { name: 'Law' },
    { name: 'Design' },
    { name: 'Engineer' },
    { name: 'Doctor' },
    { name: 'Chartered Accountant' },
    { name: 'Lawyer' },
    { name: 'Designer' },
    { name: 'Journalist' },
  ],
  links: [
    // All → Streams
    { source: 0, target: 1, value: 30 },
    { source: 0, target: 2, value: 20 },
    { source: 0, target: 3, value: 15 },
    // Streams → Degree Options
    { source: 1, target: 4, value: 18 }, // Science → Engineering
    { source: 1, target: 5, value: 12 }, // Science → Medical
    { source: 2, target: 6, value: 15 }, // Commerce → CA
    { source: 2, target: 7, value: 5 },  // Commerce → Law
    { source: 3, target: 8, value: 8 },  // Arts → Design
    { source: 3, target: 7, value: 7 },  // Arts → Law
    // Degree Options → Careers
    { source: 4, target: 9, value: 18 }, // Engineering → Engineer
    { source: 5, target: 10, value: 12 }, // Medical → Doctor
    { source: 6, target: 11, value: 15 }, // CA → Chartered Accountant
    { source: 7, target: 12, value: 12 }, // Law → Lawyer
    { source: 8, target: 13, value: 8 }, // Design → Designer
    { source: 3, target: 14, value: 5 }, // Arts → Journalist
  ]
};

const nodeLabels = sankeyData.nodes.map(n => n.name);
const linkSources = sankeyData.links.map(l => l.source);
const linkTargets = sankeyData.links.map(l => l.target);
const linkValues = sankeyData.links.map(l => l.value);


const cardStyle = {
  background: 'linear-gradient(135deg, #f8fafc 0%, #e3eafc 100%)',
  borderRadius: 18,
  boxShadow: '0 4px 32px rgba(25, 118, 210, 0.10)',
  padding: 32,
  maxWidth: 1100,
  margin: '32px auto',
  fontFamily: 'Inter, Segoe UI, Arial, sans-serif',
};

const titleStyle = {
  textAlign: 'center',
  marginBottom: 8,
  fontWeight: 700,
  fontSize: '2.1rem',
  color: '#1976d2',
  letterSpacing: 0.5,
};

const subtitleStyle = {
  textAlign: 'center',
  marginBottom: 28,
  color: '#374151',
  fontSize: '1.1rem',
  fontWeight: 400,
};



// Enhanced: Helper to flatten AI tree to Sankey nodes/links with details
function aiTreeToSankey(aiTree) {
  if (!Array.isArray(aiTree) || aiTree.length === 0) return { nodes: [], links: [], nodeDetails: [], linkDetails: [] };
  const nodes = [];
  const nodeMap = new Map();
  const nodeDetails = [];
  const links = [];
  const linkDetails = [];
  let nodeIdx = 0;
  function getNodeIdx(label, details) {
    if (!nodeMap.has(label)) {
      nodeMap.set(label, nodeIdx);
      nodes.push({ name: label });
      nodeDetails.push(details || {});
      nodeIdx++;
    }
    return nodeMap.get(label);
  }
  // Recursively walk tree and build links
  function walk(node, parentLabel, parentDetails) {
    const idx = getNodeIdx(node.label, node.details);
    if (parentLabel) {
      const parentIdx = getNodeIdx(parentLabel, parentDetails);
      // Use node.details for richer info
      links.push({ source: parentIdx, target: idx, value: node.details?.probability || 10 });
      linkDetails.push({
        from: parentLabel,
        to: node.label,
        probability: node.details?.probability,
        avgSalary: node.details?.avgSalary,
        higherStudies: node.details?.higherStudies,
        description: node.details?.description
      });
    }
    if (Array.isArray(node.children)) {
      node.children.forEach(child => walk(child, node.label, node.details));
    }
  }
  aiTree.forEach(root => walk(root, 'All', {}));
  // Add 'All' as root if not present
  if (!nodeMap.has('All')) {
    nodeMap.set('All', 0);
    nodes.unshift({ name: 'All' });
    nodeDetails.unshift({});
    // Link All to first-level nodes
    aiTree.forEach(root => {
      const idx = getNodeIdx(root.label, root.details);
      links.push({ source: 0, target: idx, value: root.details?.probability || 15 });
      linkDetails.push({ from: 'All', to: root.label, probability: root.details?.probability });
    });
  }
  return { nodes, links, nodeDetails, linkDetails };
}

const CareerSankey = ({ aiConclusion }) => {
  // If no AI result, fallback to static example
  let sankeyData;
  if (aiConclusion && Array.isArray(aiConclusion) && aiConclusion.length > 0) {
    sankeyData = aiTreeToSankey(aiConclusion);
  } else {
    sankeyData = {
      nodes: [
        { name: 'All' },
        { name: 'Science' },
        { name: 'Commerce' },
        { name: 'Arts' },
        { name: 'Engineering' },
        { name: 'Medical' },
        { name: 'CA' },
        { name: 'Law' },
        { name: 'Design' },
        { name: 'Engineer' },
        { name: 'Doctor' },
        { name: 'Chartered Accountant' },
        { name: 'Lawyer' },
        { name: 'Designer' },
        { name: 'Journalist' },
      ],
      links: [
        { source: 0, target: 1, value: 30 },
        { source: 0, target: 2, value: 20 },
        { source: 0, target: 3, value: 15 },
        { source: 1, target: 4, value: 18 },
        { source: 1, target: 5, value: 12 },
        { source: 2, target: 6, value: 15 },
        { source: 2, target: 7, value: 5 },
        { source: 3, target: 8, value: 8 },
        { source: 3, target: 7, value: 7 },
        { source: 4, target: 9, value: 18 },
        { source: 5, target: 10, value: 12 },
        { source: 6, target: 11, value: 15 },
        { source: 7, target: 12, value: 12 },
        { source: 8, target: 13, value: 8 },
        { source: 3, target: 14, value: 5 },
      ],
      nodeDetails: [],
      linkDetails: []
    };
  }
  const nodeLabels = sankeyData.nodes.map(n => n.name);
  const linkSources = sankeyData.links.map(l => l.source);
  const linkTargets = sankeyData.links.map(l => l.target);
  const linkValues = sankeyData.links.map(l => l.value);

  // Enhanced: Custom hover text for links (life journey details)
  const linkCustomData = sankeyData.linkDetails?.map(ld => ({
    probability: ld?.probability,
    avgSalary: ld?.avgSalary,
    higherStudies: ld?.higherStudies,
    description: ld?.description,
    from: ld?.from,
    to: ld?.to
  })) || [];
  const linkHoverTemplates = linkCustomData.length > 0
    ? linkCustomData.map(ld => {
        let txt = `<b>${ld.from} → ${ld.to}</b><br />`;
        if (ld.description) txt += `${ld.description}<br />`;
        if (ld.probability) txt += `Chance: <b>${ld.probability}%</b><br />`;
        if (ld.avgSalary) txt += `Avg. Salary: <b>₹${ld.avgSalary}</b><br />`;
        if (ld.higherStudies) txt += `Higher Study: <b>${ld.higherStudies}</b><br />`;
        return txt + '<extra></extra>';
      })
    : undefined;

  return (
    <div style={cardStyle}>
      <h2 style={titleStyle}>Life Journey Simulation</h2>
      <div style={subtitleStyle}>
        Visualize your journey: degree, job chances, UPSC, research, salary, higher study options. Hover for details.
      </div>
      <Plot
        data={[{
          type: 'sankey',
          orientation: 'h',
          node: {
            pad: 22,
            thickness: 28,
            line: { color: '#1976d2', width: 1.5 },
            label: nodeLabels,
            color: [
              '#1976d2', '#43a047', '#fbc02d', '#8e24aa',
              '#0288d1', '#c62828', '#6d4c41', '#f9a825', '#ad1457',
              '#1565c0', '#b71c1c', '#ff8f00', '#4527a0', '#00897b', '#37474f'
            ],
            hovertemplate: '%{label}<extra></extra>',
          },
          link: {
            source: linkSources,
            target: linkTargets,
            value: linkValues,
            color: [
              'rgba(25,118,210,0.18)', 'rgba(67,160,71,0.18)', 'rgba(251,192,45,0.18)', 'rgba(142,36,170,0.18)',
              'rgba(2,136,209,0.18)', 'rgba(198,40,40,0.18)', 'rgba(109,76,65,0.18)', 'rgba(249,168,37,0.18)', 'rgba(173,20,87,0.18)',
              'rgba(21,101,192,0.18)', 'rgba(183,28,28,0.18)', 'rgba(255,143,0,0.18)', 'rgba(69,39,160,0.18)', 'rgba(0,137,123,0.18)', 'rgba(55,71,79,0.18)'
            ],
            hovertemplate: linkHoverTemplates || '%{source.label} → %{target.label}<br />Students: %{value}<extra></extra>',
          }
        }]}
        layout={{
          font: { size: 17, family: 'Inter, Segoe UI, Arial, sans-serif', color: '#222' },
          height: 600,
          margin: { l: 40, r: 40, t: 40, b: 40 },
          paper_bgcolor: 'rgba(255,255,255,0.95)',
          plot_bgcolor: 'rgba(255,255,255,0.95)',
        }}
        config={{ displayModeBar: false, responsive: true }}
      />
    </div>
  );
};

export default CareerSankey;

