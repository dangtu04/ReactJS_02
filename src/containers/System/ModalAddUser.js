import React, { Component } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import { FormattedMessage } from "react-intl";
import { connect } from "react-redux";
class ModalAddUser extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {}

  toggle = () => {

  }

  render() {
    return (
      <Modal isOpen={true} toggle={() => this.toggle}>
        <ModalHeader toggle={() => this.toggle}>Modal title</ModalHeader>
        <ModalBody>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={() => this.toggle}>
            Do Something
          </Button>{" "}
          <Button color="secondary" onClick={() => this.toggle}>
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
    );
  }
}

const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(ModalAddUser);
