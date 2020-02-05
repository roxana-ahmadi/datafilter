
import Parse from 'parse';
import {
  Record,
} from 'immutable';
import {
  withState, withHandlers, pipe,
} from '../../util';


const ClouseQuery = Parse.Object.extend('ClouseQuery');

const init = (props) => props.filterData;

const addClouse = ({ setData }) => () => {
  const query = new Parse.Query(ClouseQuery);
  setData((d) => d.set('childs', d.childs.concat(query)));
};

const deleteChild = ({ setData }) => (index) => {
  setData((d) => d.set('childs', d.childs.filter((value, i) => i !== index)));
};

const changeOprand = ({ setData }) => (oprand) => {
  setData((d) => d.set('op', oprand));
};

const addOprand = ({ setData }) => () => {
  const query = new Parse.Query(ClouseQuery);
  setData((d) => d.set('childs', d.childs.concat(Record({ op: 'and', childs: [], mainQuery: query })())));
};

let mainQuery = new Parse.Query(ClouseQuery);

const makeMainQuery = (data) => {
  console.log('maake main query start', mainQuery);
  console.log(data.mainQuery);

  if (data.childs) {
    const { op } = data;
    data.childs.map((x) => {
      if (op === 'and') {
        mainQuery = Parse.Query.and(mainQuery, makeMainQuery(x));
      }
      if (op === 'or') {
        console.log('op', data.op);
        mainQuery = Parse.Query.or(mainQuery, makeMainQuery(x));
      }
      if (!x.op) {
        if (op === 'and') {
          console.log('op', op);
          mainQuery = Parse.Query.and(mainQuery, x);
        } else {
          mainQuery = Parse.Query.or(mainQuery, x);
        }
      }
      return makeMainQuery(x);
    });
  } else {
    console.log('nochilds');
    return data;
  }
};


const recursiveFunc = () => (n) => {
  makeMainQuery(n);
};

const oprandController = pipe(
  withState(init),
  withHandlers({
    addClouse,
    deleteChild,
    changeOprand,
    addOprand,
    makeMainQuery,
    recursiveFunc,
  }),
);

export default oprandController;
