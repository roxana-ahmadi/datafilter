import React from 'react';
import Parse from 'parse';
import { Map } from 'immutable';
import { Button } from 'antd';
import OprandView from './components/oprand/OprandView';


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

const ClouseQuery = Parse.Object.extend('ClouseQuery');
const mainQuery = new Parse.Query(ClouseQuery);

const filterData = {
  op: 'and',
  childs: [],
  mainQuery,
  searchResults: [],
};

let tmpdata;

const makeMainQuery = (oprandData) => {
  let mainQuery = new Parse.Query(ClouseQuery);
  if (oprandData.op === 'and') {
    oprandData.childs.map((item) => {
      if (!item.childs) { mainQuery = Parse.Query.and(mainQuery, item); } else {
        mainQuery = Parse.Query.and(mainQuery, item.mainQuery);
      }
    });
  } else {
    oprandData.childs.map((item) => {
      if (!item.childs) { mainQuery = Parse.Query.or(mainQuery, item); } else {
        mainQuery = Parse.Query.or(mainQuery, item.mainQuery);
      }
    });
  }
  filterData.mainQuery = mainQuery;
  tmpdata = oprandData;
};


function App() {
  return (
    <>
      <Button onClick={() => makeMainQuery(tmpdata)}>Search</Button>
      <OprandView
        makeMainQuery={makeMainQuery}
        filterData={filterData}
        constraints={constraints}
        fields={fields}
      />
    </>

  );
}

export default App;
