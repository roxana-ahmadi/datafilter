import React from 'react';
import { Record, Map } from 'immutable';
import Parse from 'parse'
import 'antd/dist/antd.css';
import DataFilterView from './DataFilterView'

import ClouseView from '../clouse/ClouseView';



export default {
  title: 'Data Filter',
  component: DataFilterView,
};

const fields = Map({
    name: 'string',
    id: 'number',
    date: 'time',
    boolean: 'boolean',
  });
  
const constraints = Map({
string: [
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
number: [
    'EqualTo',
    'NotEqualTo',
    'GreaterThan',
    'LessThan',
    'GreaterThanOrEqualTo',
    'LessThanOrEqualTo',
    'IsNull',
    'NotIsNull',
],
time: [
    'EqualTo',
    'NotEqualTo',
    'GreaterThan',
    'LessThan',
    'GreaterThanOrEqualTo',
    'LessThanOrEqualTo',
    'IsNull',
    'NotIsNull',
],
boolean: [],
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

});
const filterData = Record({ op: 'and', childs: [] })();

const ClouseQuery = Parse.Object.extend('ClouseQuery');
const query = new Parse.Query(ClouseQuery);
export const simpleComponent = () => (<ClouseView   
                                                
                                                queryIndex={1}
                                                query={query}
                                                fields={fields}
                                                constraints={constraints} />)

export const complexComponent = () => (<DataFilterView
                                        filterData={filterData}
                                        constraints={constraints}
                                        fields={fields}
                                        />)

complexComponent.story = {
  name: 'complexComponent',
};
