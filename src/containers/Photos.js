import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {Grid, Row, Col, Image} from 'react-bootstrap';
import pisa from '../img/italy2018/DSC_0361.JPG';
import Photo from './Photo';
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
		<Link to="/photos/italy2018"><Image src={pisa} thumbnail /></Link>
		</Col>
		</Row>
	      </Grid>
	    </div>
	);
    }
}
