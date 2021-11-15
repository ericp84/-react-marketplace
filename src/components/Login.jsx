import React from 'react';
import {Form, FormGroup, Label, Input, Button, Container, Col, Row, Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle } from 'reactstrap'
import {Link} from 'react-router-dom'
import marche from './Marche.jpeg'

const Login = () => {
    return (
<Container>
    <Col lg="12" sm="12" className="logo-banner">
      My baby broc'
    </Col>
    <div className="acc">
      <Form inline>
        <FormGroup>
          <Label className="me-sm-2" for="email" style={{color:"black", fontSize:25, fontFamily: 'Praise, cursive' }}>Email</Label>
          <Input className="ml-2 mt-1" id="email" name="email" type="email"/>
        </FormGroup>
        <FormGroup>
          <Label className="me-sm-2" for="password" style={{color:"black", fontSize:25, fontFamily: 'Praise, cursive'}}>password</Label>
          <Input className="ml-2 mt-1"  id="password" name="password" type="password"/>
        </FormGroup>
      </Form>
      <p className="redirect">Pas encore de compte ? <Link style={{color: 'white', fontSize:20}}>cliquez ici !</Link></p>
      <Button className="mt-3 mb-3 ml-2" style={{width:200}} color="info" >Connexion</Button>
        <div className="bann">
            <Label className="me-sm-2" for="cherche"> Que cherchez vous ? </Label>
                <Input id="cherche" name='cherch' type="text"style={{width:250}}/>    
        </div>
        <Row className="mt-5" >
      <Col sm="4">
        <Card  body className="mt-3" style={{width:300}} >
          <CardImg top width="100%" src={marche } />
          <CardTitle>Special Title Treatment</CardTitle>
          <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
          <Button>Go somewhere</Button>
        </Card>
      </Col>
      <Col sm="4">
        <Card body className="mt-3" style={{width:300}} >
          <CardImg top width="100%" src={marche } />
          <CardTitle>Special Title Treatment</CardTitle>
          <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
          <Button>Go somewhere</Button>
        </Card>
      </Col>
      <Col sm="4">
        <Card body className="mt-3" style={{width:300}} >
          <CardImg top width="100%" src={marche } />
          <CardTitle>Special Title Treatment</CardTitle>
          <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
          <Button>Go somewhere</Button>
        </Card>
      </Col>
      <Col sm="4">
        <Card body className="mt-3" style={{width:300}} >
          <CardImg top width="100%" src={marche } />
          <CardTitle>Special Title Treatment</CardTitle>
          <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
          <Button>Go somewhere</Button>
        </Card>
      </Col>
      <Col sm="4">
        <Card body className="mt-3" style={{width:300}} >
          <CardImg top width="100%" src={marche } />
          <CardTitle>Special Title Treatment</CardTitle>
          <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
          <Button>Go somewhere</Button>
        </Card>
      </Col>
      <Col sm="4">
        <Card body className="mt-3" style={{width:300}} >
          <CardImg top width="100%" src={marche } />
          <CardTitle>Special Title Treatment</CardTitle>
          <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
          <Button>Go somewhere</Button>
        </Card>
      </Col>
    </Row>
    </div>

</Container>
    );
};

export default Login;