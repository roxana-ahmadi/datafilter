import Parse from 'parse';
import {
  Record,
} from 'immutable';
import {
  withEmitter, withState, withHandlers, withLifecycle, pipe,
} from '../../util';


const ClouseQuery = Parse.Object.extend('ClouseQuery');

const init = () => Record({ op: 'and', childs: [] });

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

const oprandController = pipe(
  withState(init),
  withEmitter(),
  withHandlers({
    addClouse,
    deleteClouse,
    changeOprand,
  }),
  withLifecycle({}),
);

export default oprandController;
