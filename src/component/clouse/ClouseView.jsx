import React from 'react';
import PropTypes from 'prop-types';
import {
  Button, Input, DatePicker, Select, Switch,
} from 'antd';
import clouseController from './clouseController';


const InputGroup = Input.Group;

const ClouseView = (props) => {
  const {
    deleteClouse, queryIndex, dataTypeOptionsView, constraintList,
  } = props;
  const {
    setFieldName, data, setConstraint, setFieldValue,
  } = clouseController(props);
  const setFieldInput = (fieldType) => {
    switch (fieldType) {
      case 'string':
        return (
          <Input
            value={data.fieldValue}
            style={{ width: '20vw' }}
            placeholder="String"
            onChange={(e) => setFieldValue(e.target.value)}
          />
        );
      case 'date':
        return (
          <DatePicker
            style={{ width: '10vw' }}
            onChange={(date, dateString) => setFieldValue(dateString)}
          />
        );
      case 'number':
        return (
          <Input
            value={data.fieldValue}
            style={{ width: '10vw' }}
            placeholder="Number"
            type="number"
            onChange={(e) => setFieldValue(e.target.value)}
          />
        );
      case 'boolean':
        return <Switch style={{ marginLeft: '10px' }} />;

      default:
        return <Input style={{ width: '10vw' }} disabled />;
    }
  };
  return (
    <InputGroup compact>
      <span>
        <Select
          defaultValue="FieldName"
          onChange={(value) => setFieldName(value)}
          style={{ width: '10vw' }}
        >
          {dataTypeOptionsView}
        </Select>

        <Select
          defaultValue="EqualTo"
          onChange={(value) => setConstraint(value)}
          style={{ width: '10vw' }}
        >
          {constraintList[data.constraintType]}
        </Select>

        {setFieldInput(data.constraintType)}
        <Button icon="close" onClick={() => deleteClouse(queryIndex)} />
      </span>
    </InputGroup>
  );
};


ClouseView.propTypes = {
  deleteClouse: PropTypes.func.isRequired,
  queryIndex: PropTypes.number.isRequired,
  dataTypeOptionsView: PropTypes.array.isRequired,
  constraintList: PropTypes.array.isRequired,
};

export default ClouseView;
