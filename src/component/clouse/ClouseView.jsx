import React from 'react';
import PropTypes from 'prop-types';
import {
  Button, Input, DatePicker, Select, Switch,
} from 'antd';
import clouseController from './clouseController';

const InputGroup = Input.Group;
const { Option } = Select;

const generateFieldOptions = (fields) => {
  const fieldNames = Array.from(fields.keys());
  return fieldNames.map((item, index) => (
    <Option
      key={index}
      value={item}
    >
      {item.toUpperCase()}
    </Option>
  ));
};

const generateConstraintOptions = (constraints, fields, fieldName) => {
  const fieldType = fields.get(fieldName);
  const constrains = Array.from(constraints.get(fieldType));
  return constrains.map((item, index) => (
    <Option
      key={index}
      value={item}
    >
      {item.toUpperCase()}
    </Option>
  ));
};

const ClouseView = (props) => {
  const {
    deleteClouse,
    queryIndex,
    fields,
    constraints,
  } = props;
  const {
    setFieldName,
    data,
    setConstraint,
    setFieldValue,
  } = clouseController(props);
  console.log('clouseview');

  const generateInputByType = (fieldType) => {
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
      case 'time':
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
          {generateFieldOptions(fields)}
        </Select>
        <Select
          defaultValue="EqualTo"
          onChange={(value) => setConstraint(value)}
          style={{ width: '10vw' }}
        >
          {generateConstraintOptions(constraints, fields, data.fieldName)}
        </Select>
        {generateInputByType(fields.get(data.fieldName))}
        <Button icon="close" onClick={() => deleteClouse(queryIndex)} />
      </span>
    </InputGroup>
  );
};


ClouseView.propTypes = {
  deleteClouse: PropTypes.func.isRequired,
  queryIndex: PropTypes.number.isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  fields: PropTypes.object.isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  constraints: PropTypes.object.isRequired,

};

export default ClouseView;
