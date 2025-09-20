import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './css/CareerProgressionFlowchart.css';

const CareerProgressionFlowchart = ({ stream, analysis }) => {
  const [expandedNodes, setExpandedNodes] = useState(new Set(['entry']));

  if (!stream || !analysis) {
    return <div className="career-progression-container">No data available</div>;
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

  // Define career progression paths based on stream
  const getCareerProgression = (stream) => {
    const progressions = {
      science: {
        entry: {
          title: "High School Graduate",
          subtitle: "Science Stream",
          experience: "Entry Level"
        },
        level1: [
          {
            title: "Undergraduate Student",
            subtitle: "B.Sc./B.Tech",
            experience: "0-4 years",
            paths: ["Engineering", "Medical", "Research"]
          }
        ],
        level2: {
          engineering: [
            {
              title: "Software Engineer",
              subtitle: "Entry Level",
              experience: "0-2 years"
            },
            {
              title: "Data Analyst",
              subtitle: "Entry Level", 
              experience: "0-2 years"
            }
          ],
          medical: [
            {
              title: "Medical Student",
              subtitle: "MBBS",
              experience: "4-6 years"
            }
          ],
          research: [
            {
              title: "Research Assistant",
              subtitle: "M.Sc./PhD",
              experience: "2-4 years"
            }
          ]
        },
        level3: {
          engineering: [
            {
              title: "Senior Software Engineer",
              subtitle: "Technical Lead",
              experience: "3-5 years"
            },
            {
              title: "Data Scientist",
              subtitle: "Analytics Expert",
              experience: "3-5 years"
            }
          ],
          medical: [
            {
              title: "Resident Doctor",
              subtitle: "Specialization",
              experience: "3-5 years"
            }
          ],
          research: [
            {
              title: "Research Scientist",
              subtitle: "PhD Holder",
              experience: "3-5 years"
            }
          ]
        },
        level4: {
          engineering: [
            {
              title: "Tech Lead/Manager",
              subtitle: "Team Leadership",
              experience: "5-8 years"
            },
            {
              title: "Principal Data Scientist",
              subtitle: "Senior Expert",
              experience: "5-8 years"
            }
          ],
          medical: [
            {
              title: "Specialist Doctor",
              subtitle: "Consultant",
              experience: "5-8 years"
            }
          ],
          research: [
            {
              title: "Senior Research Scientist",
              subtitle: "Lab Head",
              experience: "5-8 years"
            }
          ]
        },
        level5: {
          engineering: [
            {
              title: "Engineering Director",
              subtitle: "CTO/VP Engineering",
              experience: "8-12 years"
            }
          ],
          medical: [
            {
              title: "Chief Medical Officer",
              subtitle: "Hospital Director",
              experience: "8-12 years"
            }
          ],
          research: [
            {
              title: "Research Director",
              subtitle: "Chief Scientist",
              experience: "8-12 years"
            }
          ]
        }
      },
      commerce: {
        entry: {
          title: "High School Graduate",
          subtitle: "Commerce Stream",
          experience: "Entry Level"
        },
        level1: [
          {
            title: "Undergraduate Student",
            subtitle: "B.Com/BBA",
            experience: "0-3 years",
            paths: ["Finance", "Marketing", "Operations"]
          }
        ],
        level2: {
          finance: [
            {
              title: "Junior Accountant",
              subtitle: "CA Foundation",
              experience: "0-2 years"
            },
            {
              title: "Financial Analyst",
              subtitle: "Entry Level",
              experience: "0-2 years"
            }
          ],
          marketing: [
            {
              title: "Marketing Executive",
              subtitle: "Entry Level",
              experience: "0-2 years"
            }
          ],
          operations: [
            {
              title: "Operations Executive",
              subtitle: "Entry Level",
              experience: "0-2 years"
            }
          ]
        },
        level3: {
          finance: [
            {
              title: "Chartered Accountant",
              subtitle: "CA Qualified",
              experience: "3-5 years"
            },
            {
              title: "Senior Financial Analyst",
              subtitle: "CFA/FRM",
              experience: "3-5 years"
            }
          ],
          marketing: [
            {
              title: "Marketing Manager",
              subtitle: "Digital Marketing",
              experience: "3-5 years"
            }
          ],
          operations: [
            {
              title: "Operations Manager",
              subtitle: "Process Improvement",
              experience: "3-5 years"
            }
          ]
        },
        level4: {
          finance: [
            {
              title: "Finance Manager",
              subtitle: "CFO Track",
              experience: "5-8 years"
            }
          ],
          marketing: [
            {
              title: "Marketing Director",
              subtitle: "Brand Management",
              experience: "5-8 years"
            }
          ],
          operations: [
            {
              title: "Operations Director",
              subtitle: "Supply Chain",
              experience: "5-8 years"
            }
          ]
        },
        level5: {
          finance: [
            {
              title: "Chief Financial Officer",
              subtitle: "CFO",
              experience: "8-12 years"
            }
          ],
          marketing: [
            {
              title: "Chief Marketing Officer",
              subtitle: "CMO",
              experience: "8-12 years"
            }
          ],
          operations: [
            {
              title: "Chief Operating Officer",
              subtitle: "COO",
              experience: "8-12 years"
            }
          ]
        }
      },
      arts: {
        entry: {
          title: "High School Graduate",
          subtitle: "Arts/Humanities Stream",
          experience: "Entry Level"
        },
        level1: [
          {
            title: "Undergraduate Student",
            subtitle: "B.A./B.Ed",
            experience: "0-3 years",
            paths: ["Education", "Media", "Social Work"]
          }
        ],
        level2: {
          education: [
            {
              title: "Teacher",
              subtitle: "B.Ed Qualified",
              experience: "0-2 years"
            }
          ],
          media: [
            {
              title: "Content Writer",
              subtitle: "Journalism",
              experience: "0-2 years"
            }
          ],
          social: [
            {
              title: "Social Worker",
              subtitle: "MSW",
              experience: "0-2 years"
            }
          ]
        },
        level3: {
          education: [
            {
              title: "Senior Teacher",
              subtitle: "Subject Expert",
              experience: "3-5 years"
            }
          ],
          media: [
            {
              title: "Senior Journalist",
              subtitle: "Editor",
              experience: "3-5 years"
            }
          ],
          social: [
            {
              title: "Senior Social Worker",
              subtitle: "Program Manager",
              experience: "3-5 years"
            }
          ]
        },
        level4: {
          education: [
            {
              title: "Principal",
              subtitle: "School Head",
              experience: "5-8 years"
            }
          ],
          media: [
            {
              title: "Editor-in-Chief",
              subtitle: "Media Director",
              experience: "5-8 years"
            }
          ],
          social: [
            {
              title: "NGO Director",
              subtitle: "Social Impact",
              experience: "5-8 years"
            }
          ]
        },
        level5: {
          education: [
            {
              title: "Education Commissioner",
              subtitle: "Policy Maker",
              experience: "8-12 years"
            }
          ],
          media: [
            {
              title: "Media CEO",
              subtitle: "Media Mogul",
              experience: "8-12 years"
            }
          ],
          social: [
            {
              title: "Social Impact Leader",
              subtitle: "Change Maker",
              experience: "8-12 years"
            }
          ]
        }
      }
    };

    return progressions[stream] || progressions.science;
  };

  const progression = getCareerProgression(stream);

  const renderNode = (node, level, nodeId, isExpanded = true) => {
    return (
      <div key={nodeId} className={`career-node career-level-${level}`}>
        <div className="career-node-content">
          <div className="career-node-title">{node.title}</div>
          <div className="career-node-subtitle">{node.subtitle}</div>
          <div className="career-node-experience">{node.experience}</div>
        </div>
      </div>
    );
  };

  const renderConnection = (fromLevel, toLevel, experience) => {
    return (
      <div className="career-connection">
        <div className="connection-line"></div>
        <div className="connection-label">{experience}</div>
      </div>
    );
  };

  const renderLevel = (levelData, level, levelName) => {
    if (!levelData) return null;

    return (
      <div key={level} className={`career-level career-level-${level}`}>
        <div className="level-title">{levelName}</div>
        <div className="level-nodes">
          {Array.isArray(levelData) ? (
            levelData.map((node, index) => 
              renderNode(node, level, `${level}-${index}`)
            )
          ) : (
            Object.entries(levelData).map(([path, nodes]) => (
              <div key={path} className="career-path">
                <div className="path-title">{path}</div>
                <div className="path-nodes">
                  {nodes.map((node, index) => 
                    renderNode(node, level, `${level}-${path}-${index}`)
                  )}
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    );
  };

  return (
    <div className="career-progression-container">
      <div className="career-progression-header">
        <h2>Your Career Progression Path</h2>
        <p>Based on your {stream} stream preference ({analysis.percentages[stream]}% match)</p>
      </div>
      
      <div className="career-progression-flowchart">
        {/* Entry Level */}
        <div className="career-level career-level-entry">
          <div className="level-title">Entry Point</div>
          <div className="level-nodes">
            {renderNode(progression.entry, 'entry', 'entry')}
          </div>
        </div>

        {renderConnection('entry', 'level1', '0-4 years')}

        {/* Level 1 - Undergraduate */}
        {renderLevel(progression.level1, 'level1', 'Undergraduate Phase')}

        {renderConnection('level1', 'level2', '2-4 years')}

        {/* Level 2 - Specialization */}
        {renderLevel(progression.level2, 'level2', 'Early Career Specialization')}

        {renderConnection('level2', 'level3', '3-5 years')}

        {/* Level 3 - Mid Career */}
        {renderLevel(progression.level3, 'level3', 'Mid-Career Growth')}

        {renderConnection('level3', 'level4', '5-8 years')}

        {/* Level 4 - Senior */}
        {renderLevel(progression.level4, 'level4', 'Senior Leadership')}

        {renderConnection('level4', 'level5', '8-12 years')}

        {/* Level 5 - Executive */}
        {renderLevel(progression.level5, 'level5', 'Executive Level')}
      </div>
    </div>
  );
};

CareerProgressionFlowchart.propTypes = {
  stream: PropTypes.string.isRequired,
  analysis: PropTypes.object.isRequired,
};

export default CareerProgressionFlowchart;
