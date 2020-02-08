import Parse from 'parse';
import {
  withState, withHandlers, pipe,
} from '../../util';


const ClouseQuery = Parse.Object.extend('ClouseQuery');

const init = (props) => props.filterData;


const addClouse = ({ setData, data, makeMainQuery }) => () => {
  const query = new Parse.Query(ClouseQuery);
  const newd = { ...data };
  newd.childs = newd.childs.concat(query);
  setData(newd);
  makeMainQuery(newd);
};

const deleteChild = ({ setData, data, makeMainQuery }) => (index) => {
  const newd = { ...data };
  newd.childs = newd.childs.filter((value, i) => i !== index);
  setData(newd);
  makeMainQuery(newd);
};

const changeOprand = ({ setData, data, makeMainQuery }) => (oprand) => {
  const newd = { ...data };
  newd.op = oprand;
  setData(newd);
  makeMainQuery(newd);
};

const addOprand = ({
  setData, data, filterData, makeMainQuery,
}) => () => {
  const newd = { ...data };
  newd.childs = newd.childs.concat(filterData);
  setData(newd);
  makeMainQuery(newd);
};


const oprandController = pipe(
  withState(init),
  withHandlers({

    addClouse,
    deleteChild,
    changeOprand,
    addOprand,

  }),

);

export default oprandController;
