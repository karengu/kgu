import React from 'react';
import {Panel} from 'react-bootstrap';
import './Resume.css';

export default () =>
    <div className="Resume">
    <div className="Info">
    <h1>Karen Gu</h1>
    <a href="mailto:karengu@mit.edu">karengu@mit.edu</a>
    </div>
    <div className="sections">
    <Panel defaultExpanded>
    <Panel.Title toggle><h2>Education</h2></Panel.Title>
    <Panel.Collapse>
    <Panel.Body>
    <h3>Massachusetts Institute of Technology</h3>
    <h3>Hanover Park High School</h3>
    </Panel.Body>
    </Panel.Collapse>
    </Panel>
    <Panel defaultExpanded>
    <Panel.Title toggle><h2>Experience</h2></Panel.Title>
    <Panel.Collapse>
    <Panel.Body>
    </Panel.Body>
    </Panel.Collapse>
    </Panel>
    <Panel defaultExpanded>
    <Panel.Title toggle><h2>Skills</h2></Panel.Title>
    <Panel.Collapse>
    <Panel.Body>
    </Panel.Body>
    </Panel.Collapse>
    </Panel>
    </div>
    </div>
