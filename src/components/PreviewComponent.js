import React from 'react';
import { Accordion, Card } from 'react-bootstrap';
import ReactHtmlParser from 'react-html-parser';

/* eslint-disable react/prop-types */
const PreviewComponent = ({ mark }) => (
  <Accordion defaultActiveKey="0">
    <Card>
      <Accordion.Toggle as={Card.Header} className="font-weight-bold mb-0" style={{ fontFamily: 'Roboto, Helvetica, sans-serif' }} eventKey="0">Preview</Accordion.Toggle>
      <Accordion.Collapse eventKey="0">
        <Card.Body className="bg-light" id="preview">{ ReactHtmlParser(mark) }</Card.Body>
      </Accordion.Collapse>
    </Card>
  </Accordion>
);

export default PreviewComponent;
