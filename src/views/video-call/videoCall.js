import React, { Component, Fragment } from 'react';
import ChatList from "../../containers/chat/chatList";
import ChatSearch from "../../containers/chat/chatSearch";
import ChatContent from "../../containers/chat/chatContent";
import ChatMsgSend from "../../containers/chat/chatMsgSend";
import {
    Collapse,
    Button,
    Card,
    CardBody,
    CardImg,
    CardTitle,
    UncontrolledCollapse,
    Fade,
    Row,
    Input,
    FormGroup,
    Label,
    Form,
    Col
} from 'reactstrap';

import img1 from '../../assets/images/big/img1.jpg';
import img2 from '../../assets/images/big/img2.jpg';

class videoCall extends React.Component {
    constructor(props) {
        super(props);
        this.toggle = this.toggle.bind(this);
        this.state = { 'collapse': false };

    }
    toggle() {
        this.setState({ 'collapse': !this.state.collapse });
    }

    render() {
        return (
            <Fragment>
                {/* <div>
                    <div className="left-part bg-white chat-list">
                        <ChatSearch />
                        <ChatList />
                    </div>
                    <div className="right-part bg-white chat-list">
                        <ChatContent />
                        <ChatMsgSend />
                    </div>
                </div> */}
                <Row>
                    <Col xs="12" md="8">
                        <div style={{}}>
                            <div>
                                <Button
                                    color="warning"
                                    // onClick={this.toggle}
                                    style={{ 'marginBottom': '1rem' }}
                                    className="btn"
                                >
                                    <i className="mdi mdi-transfer" />
                                </Button>
                                {/* <Collapse isOpen={this.state.collapse}>
                                    <Card className="border">
                                        <CardBody>
                                            <Form className="form-material">
                                                <FormGroup>
                                                    <Label>Add Prescription</Label>
                                                    <Input type="textarea" rows="4" />
                                                    <br />
                                                    <Button className="btn" color="success">
                                                        Submit
                                                    </Button>
                                                </FormGroup>
                                            </Form>
                                        </CardBody>
                                    </Card>
                                </Collapse> */}

                                <Button
                                    color="success"
                                    onClick={this.toggle}
                                    style={{ 'marginBottom': '1rem' }}
                                    className="ml-2"
                                >
                                    <i className="mdi mdi-medical-bag" />
                                </Button>
                                <Collapse isOpen={this.state.collapse}>
                                    <Card className="border">
                                        <CardBody>
                                            <Form className="form-material">
                                                <FormGroup>
                                                    <Label>Type Here</Label>
                                                    <Input type="textarea" rows="4" />
                                                    <br />
                                                    <Button className="btn" color="success">
                                                        Submit
                                                    </Button>
                                                </FormGroup>
                                            </Form>
                                        </CardBody>
                                    </Card>
                                </Collapse>
                            </div>
                        </div>

                        {/* <div className="bg-white chat-list"></div> */}

                    </Col>
                    <Col xs="12" md="4">
                        <div className="bg-white chat-list">
                            <ChatContent />
                            <ChatMsgSend />
                        </div>
                    </Col>
                </Row>



            </Fragment>

        );
    }
}

export default videoCall;