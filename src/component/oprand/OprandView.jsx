import React from 'react';
import PropTypes from 'prop-types';
import {
  Icon, Button, Input, Select, Tree,
} from 'antd';
import oprandController from './oprandController';
import ClouseView from '../clouse/ClouseView';
import filterIcon from '../../svg/filter-icon';

const InputGroup = Input.Group;
const { Option } = Select;
const { TreeNode } = Tree;

const OprandView = (props) => {
  const {
    addClouse,
    deleteClouse,
    changeOprand,
    addOprand,
    data,
  } = oprandController(props);
  const { fields, constraints } = props;
  const OprandBox = () => (
    <InputGroup compact>
      <Select defaultValue={data.op} onChange={(value) => changeOprand(value)}>
        <Option value="and">And</Option>
        <Option value="or">Or</Option>
      </Select>
      <Button icon="plus" onClick={() => addClouse()} />
      <Button onClick={() => addOprand()}>
        <Icon component={filterIcon} />
      </Button>
    </InputGroup>
  );

  return (
    <Tree>
      <TreeNode title={<OprandBox addClouse={addClouse} />}>
        {
            data.childs.map((item, index) => {
              if (item.op && (item.childs.length >= 0)) {
                return (
                  <TreeNode
                    key={index}
                    title={(
                      <OprandView
                        filterData={item}
                        constraints={props.constraints}
                        fields={props.fields}
                      />
)}
                  />
                );
              }

              if (item) {
                return (
                  <TreeNode
                    // eslint-disable-next-line react/no-array-index-key
                    key={index}
                    title={(
                      <ClouseView
                        deleteClouse={deleteClouse}
                        queryIndex={index}
                        query={item}
                        fields={fields}
                        constraints={constraints}
                      />
                    )}
                  />
                );
              }
            })
          }
      </TreeNode>
    </Tree>
  );
};

OprandView.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  fields: PropTypes.object.isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  constraints: PropTypes.object.isRequired,
};

export default OprandView;
