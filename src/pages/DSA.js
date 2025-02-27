import React, { useState, useEffect } from 'react';
import { Accordion, Container, Button, Form } from 'react-bootstrap';
import syllabusData from '../data/dsa-syllabus.json'; // Adjust path as needed
import './DSA.css';

// Helper function: get all leaf ids (i.e. topics with no subtopics) under a topic recursively.
const getLeafIds = (topic) => {
  if (!topic.subtopics || topic.subtopics.length === 0) {
    return [topic.id];
  }
  return topic.subtopics.reduce((acc, sub) => {
    return acc.concat(getLeafIds(sub));
  }, []);
};

// Recursive component to render topics and subtopics with checkboxes.
const TopicItem = ({ topic, eventKey, checkedState, setCheckedState }) => {
  const hasSubtopics = topic.subtopics && topic.subtopics.length > 0;

  // Determine if this topic is checked: either it's a leaf, or all its children are checked.
  const isChecked = checkedState[topic.id] || false;

  // When the checkbox changes, update the state for this topic and all its leaves.
  const handleChange = (e) => {
    const newChecked = e.target.checked;
    // Get all leaf ids under this topic.
    const leafIds = getLeafIds(topic);
    setCheckedState((prevState) => {
      const newState = { ...prevState };
      // Update current topic and all leaf topics.
      newState[topic.id] = newChecked;
      leafIds.forEach((id) => {
        newState[id] = newChecked;
      });
      return newState;
    });
  };

  // When any subtopic's checkbox changes, update parent's checkbox.
  useEffect(() => {
    if (hasSubtopics) {
      const leafIds = getLeafIds(topic);
      const allChecked = leafIds.every((id) => checkedState[id]);
      setCheckedState((prevState) => ({
        ...prevState,
        [topic.id]: allChecked,
      }));
    }
    // We run this effect whenever any child's state changes.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [checkedState]);

  const renderTitle = () => (
    <span>
      <Form.Check
        inline
        type="checkbox"
        id={`checkbox-${topic.id}`}
        checked={isChecked}
        onChange={handleChange}
        className="me-2"
      />
      <strong>{topic.id}.</strong> {topic.title}
    </span>
  );

  if (hasSubtopics) {
    return (
      <Accordion.Item eventKey={eventKey}>
        <Accordion.Header>{renderTitle()}</Accordion.Header>
        <Accordion.Body>
          <ul className="list-unstyled ms-3">
            {topic.subtopics.map((sub, index) => (
              <li key={sub.id}>
                {sub.subtopics && sub.subtopics.length > 0 ? (
                  <Accordion flush>
                    <TopicItem
                      topic={sub}
                      eventKey={`${eventKey}-${index}`}
                      checkedState={checkedState}
                      setCheckedState={setCheckedState}
                    />
                  </Accordion>
                ) : (
                  <span>
                    <Form.Check
                      inline
                      type="checkbox"
                      id={`checkbox-${sub.id}`}
                      checked={checkedState[sub.id] || false}
                      onChange={(e) => {
                        const newChecked = e.target.checked;
                        setCheckedState((prevState) => ({
                          ...prevState,
                          [sub.id]: newChecked,
                        }));
                      }}
                      className="me-2"
                    />
                    <strong>{sub.id}.</strong> {sub.title}
                  </span>
                )}
              </li>
            ))}
          </ul>
        </Accordion.Body>
      </Accordion.Item>
    );
  } else {
    return (
      <li key={topic.id} className="ms-3">
        {renderTitle()}
      </li>
    );
  }
};

// theme = "dark" , ""
const DSAPage = ({theme}) => {
  // This state holds the checkbox checked status for each topic by id.
  const [checkedState, setCheckedState] = useState({});

  return (
    <Container fluid className={` dsa-syllabus-container py-4 ${theme}`}>
      
      <div>
        <h1 className={`text-center mb-4 ${theme==='dark' ? 'text-light' : 'text-dark'}`}>
          📌 Data Structures & Algorithms (DSA) Syllabus
        </h1>
        <p className={`text-center ${theme==='dark' ? 'text-light' : 'text-dark'}`}>
          Master DSA with this structured syllabus. Explore section-wise topics.
        </p>
      </div>
      <div className="text-center mb-4 d-lg-none">
        <Button 
            className={`${theme==='dark' ? 'btn-codeharmony-dark' : 'btn-codeharmony'}`} 
            href="/resources/DSA.pdf" 
            download="CodeHarmony_DSA_Syllabus.pdf"
            >
          📥 Download Syllabus PDF
        </Button>
      </div>

      <Accordion defaultActiveKey="0" className='d-none'>
        {syllabusData.map((topic, index) => (
          <TopicItem
            key={topic.id}
            topic={topic}
            eventKey={`${index}`}
            checkedState={checkedState}
            setCheckedState={setCheckedState}
          />
        ))}
      </Accordion>

        {/* view dsa syllabus pdf document */}
      <div className={`view-dsa-syllabus-container d-none d-lg-block d-xl-block col-10 m-auto`}>
        {/* <h3 className="mt-5 text-center">📖 View Syllabus PDF</h3> */}
        <div className="embed-responsive embed-responsive-16by9 mt-3 ">
          <iframe
            className="embed-responsive-item w-100"
            src="/resources/DSA.pdf"
            height="700px"
            title="DSA Syllabus"
            style={{ border: 'none' }}
          ></iframe>
        </div>
      </div>
    </Container>
  );
};

export default DSAPage;
