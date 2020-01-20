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

const deleteClouse = ({ setData }) => (index) => {
  setData((d) => d.set('childs', d.childs.filter((value, i) => i !== index)));
};

const changeOprand = ({ setData }) => (oprand) => {
  setData((d) => d.set('op', oprand));
};

const addOprand = ({ setData }) => () => {
  setData((d) => d.set('childs', d.childs.concat(Record({ op: 'and', childs: [] })())));
};

const oprandController = pipe(
  withState(init),
  withHandlers({
    addClouse,
    deleteClouse,
    changeOprand,
    addOprand,
  }),
);

export default oprandController;
