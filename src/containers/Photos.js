import React, {Component} from 'react';
import {Grid, Row, Col, Image} from 'react-bootstrap';
import './Photos.css';

export default class Photos extends Component {
    render() {
	return (
	    <div>
	      <div className="title">
		<h1>Photos</h1>
		</div>
	      <Grid>
		<Row>
		  <Col>
		    <Image src="../logo.svg" rounded />
		  </Col>
		</Row>
	      </Grid>
	    </div>
	);
    }
}
