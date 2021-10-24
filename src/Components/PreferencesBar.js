import React, { Component } from "react";
import { Input, Menu, Form } from "semantic-ui-react";
import DatePicker from "react-datepicker";
import { ToggleButton, ToggleButtonGroup } from "@mui/material";
import "react-datepicker/dist/react-datepicker.css";

export default class PreferencesBar extends Component {
  state = {
    startDate: "",
    endDate: "",
  };

  render() {
    // const {} = this.state;

    const handleChange = () => {
      this.props.changeCurrency();
    };

    return (
      <Menu secondary>
        {/* <Image src="static/img/frontpage-logo.jpg" class="center-logo"> */}

        <Menu.Item>
          <label className="labelNameTitle"> Click 2 Trip </label>
        </Menu.Item>

        <Menu.Menu position="right">
          <Menu.Item>
            <form onSubmit={this.onFormSubmit}>
              <DatePicker
                selected={this.state.startDate}
                onChange={(startVal) => {
                  this.props.startDate(startVal);
                  this.setState({
                    startDate: startVal,
                  });
                }}
                name="startDate"
                dateFormat="yyyy-MM-dd"
                wrapperClassName="datePicker-form"
                placeholderText="Start Date"
              />
            </form>
          </Menu.Item>
          <Menu.Item>
            <Menu.Item>
              <form onSubmit={this.onFormSubmit}>
                <DatePicker
                  selected={this.state.endDate}
                  onChange={(endVal) => {
                    this.props.endDate(endVal);
                    this.setState({
                      endDate: endVal,
                    });
                  }}
                  name="endDate"
                  dateFormat="yyyy-MM-dd"
                  wrapperClassName="datePicker-form"
                  placeholderText="End Date"
                />
              </form>
            </Menu.Item>
          </Menu.Item>
          <Menu.Item>
            <Form.Field>
              <Input placeholder="Enter City" />
            </Form.Field>
          </Menu.Item>
          <Menu.Item>
            <ToggleButtonGroup
              color="primary"
              exclusive
              onChange={handleChange}
              className="Btn-BG"
            >
              <ToggleButton value="CAD">Canadian Dollar</ToggleButton>
              <ToggleButton value="USD"> {"   US Dollar   "} </ToggleButton>
            </ToggleButtonGroup>
          </Menu.Item>
        </Menu.Menu>
      </Menu>
    );
  }
}
