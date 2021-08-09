import "../../node_modules/react-modal-video/scss/modal-video.scss";
import React, { Component } from "react";
import { convertTime, displayTime } from "../utils/displayTime";
import { Segment, Button, Grid, Form, Header } from "semantic-ui-react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import notifications from "../data/notifications";
import ModalVideo from "react-modal-video";
import ReactModal from "react-modal";
import VideoURL from "../data/videoUrl";
import Nightmarket from "../images/nightmarket.svg"


const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  }
};

export default class Timer extends React.Component {
  constructor() {
    super();
    this.state = {
      input: [0, 0, 0, 0, 0, 0],
      timer: "",
      remainingTime: 0,
      intervalId: null,
      countdownRunning: false,
      buttonName: "Start",
      open: false,
      isOpen: false,
      showPopup: false,
    };
    this.openModal = this.openModal.bind(this);
    this.updateTimer = this.updateTimer.bind(this);

    this.handleOpenModal = this.handleOpenModal.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);
  }

  handleOpenModal() {
    this.setState({ showPopup: true });
    clearInterval(this.state.intervalId);
        this.setState({
          buttonName: "Start",
          countdownRunning: false,
        });
  }

  handleCloseModal() {
    const intervalId = setInterval(this.updateTimer, 1000);
    this.setState({
      showPopup: false,
      isOpen: false,
      intervalId: intervalId,
      buttonName: "Stop",
      countdownRunning: true,
    });
  }

  openModal() {
    this.setState({ isOpen: true });
  }

  handleOnChange(ev) {
    const update = [...this.state.input];
    if (update.length > 2) {
      update.splice(-2, 0, ":");
    }
    if (update.length > 5) {
      update.splice(-5, 0, ":");
    }

    this.setState({
      timer: update.join(""),
    });
  }

  handleKeyDown(ev) {
    if (ev.key.match(/\d/) && this.state.input[0] === 0) {
      const input = [...this.state.input];
      input.shift();
      input.push(ev.key);
      this.setState({ input: input });
    } else if (ev.key === "Backspace") {
      const input = [...this.state.input];
      input.pop();
      input.unshift(0);
      this.setState({ input: input });
    } else if (ev.key === "Enter") {
      this.handleOnBlur();
      ev.target.blur();
    }
  }

  handleOnBlur(ev) {
    this.setState({
      remainingTime: convertTime(this.state.timer),
    });
  }

  handleOnSubmit(ev) {
    ev.preventDefault();
    if (!this.state.countdownRunning) {
      const intervalId = setInterval(this.updateTimer, 1000);
      this.setState({
        intervalId: intervalId,
        buttonName: "Stop",
        countdownRunning: true,
      });
    } else {
      clearInterval(this.state.intervalId);
      this.setState({
        buttonName: "Start",
        countdownRunning: false,
      });
    }
  }

  updateTimer() {
    if (this.state.remainingTime > 0) {
      this.setState({
        remainingTime: this.state.remainingTime - 1,
      });

      if (this.state.remainingTime % Math.floor(Math.random() * 20) === 0){
        toast.info(
          notifications[Math.floor(Math.random() * notifications.length)]
        );
          return;
      }

      if (this.state.remainingTime % (Math.floor(Math.random() * 10) + 5) === 0) {
        toast.success("Time to take a break!!")
        this.openModal();
        clearInterval(this.state.intervalId);
        this.setState({
          buttonName: "Start",
          countdownRunning: false,
        });
        return;
      }

      if (this.state.remainingTime % (Math.floor(Math.random() * 10) + 10) === 0) {
        toast.success("Time to take a break!!")
        this.handleOpenModal();
        return;
      }

    } else {
      clearInterval(this.state.intervalId);
      this.setState({
        intervalId: null,
        remainingTime: parseInt(this.state.timer, 10),
        buttonName: "Start",
        countdownRunning: false,
      });
    }
  }

  render() {
    return (
      <Grid
        verticalAlign="middle"
        centered
        style={{
          //height: "100%",
          margin: 0,
        }}
      >
        <React.Fragment>
          <ReactModal
            isOpen={this.state.showPopup}
            style={customStyles}
          >
          <div style={{display: "flex", justifyContent: "center"}}>
            <img src={Nightmarket} alt=""  width="100%"></img> <br/><br/>
            <button style={{height: "5vh"}} onClick={this.handleCloseModal}>Close</button>
          </div>

          </ReactModal>
        
          <ModalVideo
            channel="youtube"
            isOpen={this.state.isOpen}
            videoId={VideoURL[Math.floor(Math.random() * VideoURL.length)]}
            onClose={() => {
              const intervalId = setInterval(this.updateTimer, 1000);
              this.setState({
                isOpen: false,
                intervalId: intervalId,
                buttonName: "Stop",
                countdownRunning: true,
              });
            }}
          />
        </React.Fragment>

        <Grid.Column width={6} textAlign="center">
          <Segment padded>
            <Header as="h1">Timer</Header>
            <ToastContainer />
            <div style={{ width: "92%", padding: "0", marginBottom: "1.35%", backgroundColor: "#94C5CC", borderRadius: "7px", display: "flex", justifyContent: "center"}}><Display remainingTime={this.state.remainingTime} /></div>
            <Form onSubmit={(ev) => this.handleOnSubmit(ev)}>
            <div>
                <Form.Field>
                  <input style={{width: "90%", height: "6vh", border: "3px solid #94C5CC", borderRadius: "7px", margin: "0", textAlign: "center"}}
                    placeholder="Set Timer: HH:MM:SS"
                    type="text"
                    onChange={(ev) => this.handleOnChange(ev)}
                    onKeyDown={(ev) => this.handleKeyDown(ev)}
                    onBlur={(ev) => this.handleOnBlur(ev)}
                    value={this.state.timer}
                  />
                </Form.Field>
              </div>
              
              <Button color="blue" type="submit" style={{height: "3.5vh", width: "92%", marginTop: "1.5%", backgroundColor: "#94C5CC", borderRadius: "7px"}}>
                {this.state.buttonName}
              </Button>
              <br/><br/>
            </Form>
          </Segment>
        </Grid.Column>
      </Grid>
    );
  }
}

class Display extends Component {
  render() {
    return (
      <Segment>
        <Header as="h1">{displayTime(this.props.remainingTime)}</Header>
      </Segment>
    );
  }
}
