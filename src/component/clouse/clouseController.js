/* eslint-disable no-underscore-dangle */
import {
  Record,
} from 'immutable';
import {
  withState, withHandlers, pipe,
} from '../../util';


const setConstraint = ({ setData }) => (selectedConstraint) => {
  setData((d) => d.set('selectedConstraint', selectedConstraint));
};

const setFieldValue = ({ data, setData }) => (fieldValue) => {
  data.query._where = {};
  // eslint-disable-next-line default-case
  switch (data.selectedConstraint) {
    case 'EqualTo':
      setData((d) => d.merge({
        fieldValue,
        query: data.query.equalTo(data.fieldName, fieldValue),
      }));
      break;
    case 'NotEqualTo':
      setData((d) => d.merge({
        fieldValue,
        query: data.query.notEqualTo(data.fieldName, fieldValue),
      }));
      break;
    case 'GreaterThan':
      setData((d) => d.merge({
        fieldValue,
        query: data.query.greaterThan(data.fieldName, fieldValue),
      }));
      break;
    case 'LessThan':
      setData((d) => d.merge({
        fieldValue,
        query: data.query.lessThan(data.fieldName, fieldValue),
      }));
      break;
    case 'GreaterThanOrEqualTo':
      setData((d) => d.merge({
        fieldValue,
        query: data.query.greaterThanOrEqualTo(data.fieldName, fieldValue),
      }));
      break;
    case 'LessThanOrEqualTo':
      setData((d) => d.merge({
        fieldValue,
        query: data.query.lessThanOrEqualTo(data.fieldName, fieldValue),
      }));
      break;

    case 'StartsWith':
      setData((d) => d.merge({
        fieldValue,
        query: data.query.startsWith(data.fieldName, fieldValue),
      }));
      break;
    case 'Contains':
      setData((d) => d.merge({
        fieldValue,
        query: data.query.contains(data.fieldName, fieldValue),
      }));
      break;
    case 'EndsWith':
      setData((d) => d.merge({
        fieldValue,
        query: data.query.endsWith(data.fieldName, fieldValue),
      }));
      break;
    default:
      setData((d) => d.set('query', data.query.equalTo(data.fieldName, fieldValue)));
  }
};

const setFieldName = ({ setData }) => (fieldName) => {
  setData((d) => d.merge({
    fieldValue: '',
    fieldName,
  }));
};

const init = (props) => Record({
  fieldValue: undefined,
  fieldName: 'name',
  query: props.query,
  selectedConstraint: 'EqualTo',

});

const clouseController = pipe(
  withState((props) => init(props)),
  withHandlers({
    setFieldValue,
    setConstraint,
    setFieldName,
  }),
);

export default clouseController;
