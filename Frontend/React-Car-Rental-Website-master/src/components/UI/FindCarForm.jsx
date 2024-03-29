import React, { useState } from "react";
import "../../styles/find-car-form.css";
import DateTimePicker from 'react-datetime-picker';
import { Form, FormGroup } from "reactstrap";

const FindCarForm = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  return (
    <Form className="form">
      <div className="d-flex align-items-center justify-content-between flex-wrap">
        <FormGroup className="form__group" style={{ margin: 20 }}>
          <DateTimePicker
            value={selectedDate}
            onChange={handleDateChange}
          />
        </FormGroup>

        <FormGroup className="select__group">
          <select>
            <option value="ac">Purana Bus Stand Bilaspur</option>
            <option value="non-ac">Shive Takicj Biaspur</option>
          </select>
        </FormGroup>

        <FormGroup className="select__group">
          <select>
            <option value="ac">Car</option>
            <option value="non-ac">Scooty</option>
            <option value="non-ac">Normal Bike</option>
            <option value="non-ac">Sport Bike</option>
          </select>
        </FormGroup>

        <FormGroup className="form__group">
          <button className="btn find__car-btn">
            Find vehicle
          </button>
        </FormGroup>
      </div>
    </Form>
  );
};

export default FindCarForm;
