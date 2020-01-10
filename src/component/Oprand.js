import React from 'react'
import Parse from 'parse'

import {withEmitter, withState, withHandlers, withLifecycle, pipe  } from '../util'
import {Icon,  Button, Input, Select } from 'antd';
import queryGenerator from './queryGenerator';


const Oprand = (props) => {
    const ButtonGroup = Button.Group;
    const InputGroup = Input.Group;
    const { Option } = Select;
    const { addClouse, addOprand, changeOprand } = oprandController(props)

 
    console.log('oprand props===>',props)



    const filterIcon = () => (
      <svg t="1577788793757" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="6370" width="1.5em" height="1.5em"><path d="M491.52 523.52a34.56 34.56 0 0 0-23.04 8.96 32.64 32.64 0 0 0 0 45.44l94.08 94.08a32.64 32.64 0 0 0 23.04 9.6 32 32 0 0 0 22.4-9.6 32 32 0 0 0 0-45.44L512 532.48a34.56 34.56 0 0 0-22.4-8.96z" p-id="6371" fill="#515151"></path><path d="M352 256a159.36 159.36 0 1 1-113.28 46.72A159.36 159.36 0 0 1 352 256m0-64A220.16 220.16 0 0 0 192 256a222.72 222.72 0 0 0 0 320 222.72 222.72 0 0 0 320 0 222.72 222.72 0 0 0 0-320 220.16 220.16 0 0 0-160-64zM576 192h384v64H576zM704 512h256v64h-256zM64 832h896v64H64z" p-id="6372" fill="#515151"></path></svg>
    )
    const oprandView = (
        <InputGroup compact={true} >
            <Select defaultValue="and" onChange = { (value) => changeOprand(value) }>
              <Option value="and">And</Option>
              <Option value="or">Or</Option>
            </Select>
  
            <Button onClick = { () => addClouse() } >
                <Icon type="plus"  />
            </Button>
            <Button onClick = { () => addOprand() }>
                <Icon component={filterIcon} />
            </Button>
            <Button>
                <a> <Icon type="close" /> </a>
            </Button>
          </InputGroup>
    )
    return oprandView
}

const addClouse = ({treeData,setTreeData,oprandNode}) => () => {
  console.log('oprandnode ===>',oprandNode)

  const ClouseQuery = Parse.Object.extend("ClouseQuery")
  const query = new Parse.Query(ClouseQuery)
  oprandNode.child.push(query)
    
  const newd = {...treeData}
  setTreeData(newd)
}

const addOprand = ({treeData,setTreeData,oprandNode}) => () => {
    console.log('oprandnode ===>',oprandNode)
    console.log('oprandnode child ==>',oprandNode.child)
    console.log('tree data ===>',treeData)
    oprandNode.child.push({op: 'and', child:[]})
    console.log('oprandnode ===>',oprandNode)
    const newd = {...treeData}
    setTreeData(newd)
   

}

const changeOprand = ({treeData,setTreeData,oprandNode}) => (oprand) => {
  console.log('oprandnode ===>',oprandNode)
  console.log('oprandnode child ==>',oprandNode.child)
  console.log('tree data ===>',treeData)
  oprandNode.op = oprand
  console.log('oprandnode ===>',oprandNode)
  const newd = {...treeData}
  setTreeData(newd)

}

const deleteOprand = ({treeData,setTreeData,oprandNode}) => () => {

}

const oprandController = pipe(
  withState( (props) => (props), 'oprandData', 'setOprandData'),
  withEmitter(),
  withHandlers({
    addClouse,
    addOprand,
    changeOprand,
    deleteOprand,
  }),
  withLifecycle({}),
)



export default Oprand
