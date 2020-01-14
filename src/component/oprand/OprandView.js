import React from 'react'
import oprandController from './oprandController'
import ClouseView from '../clouse/ClouseView'
import {Icon,  Button, Input, Select, Tree } from 'antd';

const OprandView = () => {
    const InputGroup = Input.Group;
    const { Option } = Select;
    const { TreeNode } = Tree;
    const { addClouse, oprandData, deleteClouse } = oprandController()
    console.log('oprandview')

    const OprandView = () => (
        <InputGroup compact={true} >
            <Select defaultValue="and">
              <Option value="and">And</Option>
              <Option value="or">Or</Option>
            </Select>
  
            <Button onClick = { () => addClouse() } >
                <Icon type="plus"  />
            </Button>
            <Button >
                
            </Button>
            <Button icon = 'close' >
                
            </Button>
          </InputGroup>
    )
    


    const treeView = (
        <Tree>
            <TreeNode title={<OprandView addClouse={addClouse} />}>
            {
                oprandData.child.map( (item, index) => {
                    return (<TreeNode title={<ClouseView deleteClouse = {deleteClouse} index = {index} oprandData={oprandData} />} />)
                    
                })
            }
            </TreeNode>
        </Tree>
    )

    return (treeView)
}

export default OprandView