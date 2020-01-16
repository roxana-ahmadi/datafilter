import React from 'react';
import { Select } from 'antd';
import OprandView from './component/oprand/OprandView';
import './App.css';

const { Option } = Select;
const dataTypeOptionsView = [
  <Option key="1" value="id">Id</Option>,
  <Option key="2" value="name">Name</Option>,
  <Option key="3" value="date">Date</Option>,
  <Option key="4" value="boolean">Boolean</Option>,
];

const constraintList = {
  string: [
    <Option key="Contains" value="Contains">Contains</Option>,
    <Option key="StartsWith" value="StartsWith">StartsWith</Option>,
    <Option key="EndsWith" value="EndsWith">EndsWith</Option>,
    <Option key="EqualTo" value="EqualTo">EqualTo</Option>,
    <Option key="NotEqualTo" value="NotEqualTo">NotEqualTo</Option>,
    <Option key="GreaterThan" value="GreaterThan">GreaterThan</Option>,
    <Option key="LessThan" value="LessThan">LessThan</Option>,
    <Option key="GreaterThanOrEqualTo" value="GreaterThanOrEqualTo">GreaterThanOrEqualTo</Option>,
    <Option key="IsEmpty" value="IsEmpty">IsEmpty</Option>,
    <Option key="NotIsEmpty" value="NotIsEmpty">NotIsEmpty</Option>,
    <Option key="IsNull" value="IsNull">IsNull</Option>,
    <Option key="NotIsNull" value="NotIsNull">NotIsNull</Option>,

  ],
  number: [
    <Option key="EqualTo" value="EqualTo">EqualTo</Option>,
    <Option key="NotEqualTo" value="NotEqualTo">NotEqualTo</Option>,
    <Option key="GreaterThan" value="GreaterThan">GreaterThan</Option>,
    <Option key="LessThan" value="LessThan">LessThan</Option>,
    <Option key="GreaterThanOrEqualTo" value="GreaterThanOrEqualTo">GreaterThanOrEqualTo</Option>,
    <Option key="LessThanOrEqualTo" value="LessThanOrEqualTo">LessThanOrEqualTo</Option>,
    <Option key="IsNull" value="IsNull">IsNull</Option>,
    <Option key="NotIsNull" value="NotIsNull">NotIsNull</Option>,
  ],
  date: [
    <Option key="EqualTo" value="EqualTo">EqualTo</Option>,
    <Option key="NotEqualTo" value="NotEqualTo">NotEqualTo</Option>,
    <Option key="GreaterThan" value="GreaterThan">GreaterThan</Option>,
    <Option key="LessThan" value="LessThan">LessThan</Option>,
    <Option key="GreaterThanOrEqualTo" value="GreaterThanOrEqualTo">GreaterThanOrEqualTo</Option>,
    <Option key="LessThanOrEqualTo" value="LessThanOrEqualTo">LessThanOrEqualTo</Option>,
    <Option key="IsNull" value="IsNull">IsNull</Option>,
    <Option key="NotIsNull" value="NotIsNull">NotIsNull</Option>,
  ],
  boolean: [],
  default: [
    <Option key="EqualTo" value="EqualTo">EqualTo</Option>,
    <Option key="NotEqualTo" value="NotEqualTo">NotEqualTo</Option>,
    <Option key="GreaterThan" value="GreaterThan">GreaterThan</Option>,
    <Option key="LessThan" value="LessThan">LessThan</Option>,
    <Option key="GreaterThanOrEqualTo" value="GreaterThanOrEqualTo">GreaterThanOrEqualTo</Option>,
    <Option key="LessThanOrEqualTo" value="LessThanOrEqualTo">LessThanOrEqualTo</Option>,
    <Option key="IsNull" value="IsNull">IsNull</Option>,
    <Option key="NotIsNull" value="NotIsNull">NotIsNull</Option>,
  ],
};

function App() {
  return (
    <OprandView
      dataTypeOptionsView={dataTypeOptionsView}
      constraintList={constraintList}
    />
  );
}

export default App;
