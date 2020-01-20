import React from 'react';
import PropTypes from 'prop-types';

import OprandView from '../oprand/OprandView';


const DataFilterView = (props) => {
  const { filterData, constraints, fields } = props;
  const filtergenerator = () => {
    if (filterData.op) {
      return (
        <OprandView
          filterData={filterData}
          constraints={constraints}
          fields={fields}
        />
      );
    }
  };
  return (filtergenerator());
};

DataFilterView.propTypes = {

  filterData: PropTypes.object.isRequired,

};

export default DataFilterView;
