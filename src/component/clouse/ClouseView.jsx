import React from 'react';
import PropTypes from 'prop-types';
import {
  Button, Input, DatePicker, Select, Switch,
} from 'antd';
import clouseController from './clouseController';


const InputGroup = Input.Group;
const { Option } = Select;
const dataTypeOptionsView = [
  <Option key="1" value="Id">Id</Option>,
  <Option key="2" value="Name">Name</Option>,
  <Option key="3" value="Date">Date</Option>,
  <Option key="4" value="Boolean">Boolean</Option>,
];
const constraintList = {
  Name: [
    'Contains',
    'StartsWith',
    'EndsWith',
    'EqualTo',
    'NotEqualTo',
    'GreaterThan',
    'LessThan',
    'GreaterThanOrEqualTo',
    'LessThanOrEqualTo',
    'IsEmpty',
    'NotIsEmpty',
    'IsNull',
    'NotIsNull',
  ],
  Id: [
    'EqualTo',
    'NotEqualTo',
    'GreaterThan',
    'LessThan',
    'GreaterThanOrEqualTo',
    'LessThanOrEqualTo',
    'IsNull',
    'NotIsNull',
  ],
  Date: [
    'EqualTo',
    'NotEqualTo',
    'GreaterThan',
    'LessThan',
    'GreaterThanOrEqualTo',
    'LessThanOrEqualTo',
    'IsNull',
    'NotIsNull',
  ],
  default: [
    'EqualTo',
    'NotEqualTo',
    'GreaterThan',
    'LessThan',
    'GreaterThanOrEqualTo',
    'LessThanOrEqualTo',
    'IsNull',
    'NotIsNull',
  ],
  Boolean: [],

};
const ClouseView = (props) => {
  const { deleteClouse, queryIndex } = props;
  const {
    setFieldName, data, setConstraint, setFieldValue,
  } = clouseController(props);
  const fieldnameToUI = (fieldName) => {
    switch (fieldName) {
      case 'Name':
        return (
          <Input
            value={data.fieldValue}
            style={{ width: '20vw' }}
            placeholder="String"
            onChange={(e) => setFieldValue(e.target.value)}
          />
        );
      case 'Date':
        return (
          <DatePicker
            style={{ width: '10vw' }}
            onChange={(date, dateString) => setFieldValue(dateString)}
          />
        );
      case 'Id':
        return (
          <Input
            value={data.fieldValue}
            style={{ width: '10vw' }}
            placeholder="number"
            type="number"
            onChange={(e) => setFieldValue(e.target.value)}
          />
        );
      case 'Boolean':
        return <Switch style={{ marginLeft: '10px' }} />;

      default:
        return <Input style={{ width: '10vw' }} disabled />;
    }
  };
  // eslint-disable-next-line max-len
  const constraintListToUI = (constraintType) => (constraintList[constraintType].map((item, index) => (
    <Option
      // eslint-disable-next-line react/no-array-index-key
      key={index}
      value={item}
    >
      {item}
    </Option>
  )));
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
          {constraintListToUI(data.constraintType)}
        </Select>

        {fieldnameToUI(data.fieldName)}
        <Button icon="close" onClick={() => deleteClouse(queryIndex)} />
      </span>
    </InputGroup>
  );
};


ClouseView.propTypes = {
  deleteClouse: PropTypes.func.isRequired,
  queryIndex: PropTypes.number.isRequired,
};

export default ClouseView;
