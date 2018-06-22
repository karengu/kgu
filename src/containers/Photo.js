import React, {Component} from 'react';
import {Grid, Row, Col, Image} from 'react-bootstrap';
import stadium from '../img/italy2018/DSC_0367.JPG';
import marina from '../img/italy2018/DSC_0393.JPG';

export default class Photo extends Component {
    render() {
	return (
		<div>
		<Grid>
		<Row>
		<Col>
		<Image src={stadium} thumbnail />
		</Col>
		</Row>
		</Grid>
		</div>
	);
    }
}
