import Parse from 'parse';
import {
  Record,
} from 'immutable';
import {
  withState, withHandlers, pipe,
} from '../../util';


const ClouseQuery = Parse.Object.extend('ClouseQuery');

const init = () => Record({ op: 'and', childs: [10, 20, 30, 40, 50, 60] });

const addClouse = ({ setData }) => () => {
  const query = new Parse.Query(ClouseQuery);
  setData((d) => d.set('childs', d.childs.concat(query)));
};

const deleteClouse = ({ setData, data }) => (index) => {
  console.log(index, data.childs.filter((value, i) => i !== index));
  setData((d) => d.set('childs', d.childs.filter((value, i) => i !== index)));
};

const changeOprand = ({ setData }) => (oprand) => {
  setData((d) => d.set('op', oprand));
};

const oprandController = pipe(
  withState(init),
  withHandlers({
    addClouse,
    deleteClouse,
    changeOprand,
  }),
);

export default oprandController;
