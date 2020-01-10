import React from 'react'
import Parse from 'parse'
import { withEmitter, withState, withHandlers, pipe, withLifecycle, withCacheHandlers } from '../util'
import queryGenerator from './queryGenerator'
import oprandController from './Oprand'
import { Button, Input, DatePicker, Select, Switch } from 'antd';


const Clouse = (props) => {
    const InputGroup = Input.Group;
    const { Option } = Select;
    const { setFieldConstrain, clouseData, getConstrain, getFieldValue, deleteClouse } = clouseController(props)
    console.log(clouseData)
    const { treeData, setTreeData } = queryGenerator(props)
    console.log('clouse query===>',clouseData.query)
    console.log('tree query===>',treeData)
    

    const showDate = (date, dateString) => {
        console.log(date, dateString);
    }
    const fieldNameToUI = () => {
        console.log('fieldNameToUI method')
        switch (clouseData.fieldName) {
            case 'Name':
                return <Input style={{ width: '20vw' }} placeholder='String' onChange = {(e) => getFieldValue('text',e)} />
                
            case 'Date':
                return <DatePicker style={{ width: '10vw' }} onChange={(date,dateString) => getFieldValue('date',dateString)} />
                
            case 'Id':
                return <Input style={{ width: '10vw' }} placeholder='number' type='number' onChange={(e) => getFieldValue('text',e)} />
            case 'Boolean':
                return <Switch style={{ marginLeft: '10px' }} />
    
            default:
                return <Input style={{ width: '10vw' }} disabled />
        }
    
    }

    const clouseView = (
        <div>
            
        <InputGroup compact={true}  >
            <span>
                
            <Select defaultValue="DataType"
                
                onChange = {(value) => setFieldConstrain(value)} style={{ width: '10vw' }} >
                {dataTypeOptionsView}
            </Select>

            <Select defaultValue="EqualTo" onChange = {(value) => getConstrain(value)} style={{ width: '10vw' }}  >
                {clouseData.constrainList && clouseData.constrainList.map((item) =>
                    <Option value={item}>{item}</Option>)
                }
            </Select>
            
            {fieldNameToUI()} 
                <Button type='link' icon='close' onClick = { () => deleteClouse() } />
            
            </span>
            
        </InputGroup>
        </div>
    )
    return clouseView
}


const getConstrain = ({clouseData,setData}) => (constrain) => {
    
    console.log(constrain)
    const newd = {...clouseData}
    newd.constrain = constrain
    setData(newd)
}




const getFieldValue = ({clouseData, setData, setTreeData, treeData, clouseQuery}) => (key,e) => {
    console.log('getfildval treedata====',treeData)
    switch(key){
        case 'text':
            clouseData.fieldValue = e.target.value
                
                switch(clouseData.constrain){

                    case 'EqualTo':
                        clouseData.query.equalTo(clouseData.fieldName, clouseData.fieldValue)
                        clouseQuery = clouseData.query
                        console.log("+++++query+++++++",clouseData.query)
                        setTreeData({...treeData})
                        
                        
                        break
                    case 'NotEqualTo':
                        clouseData.query.notEqualTo(clouseData.fieldName, clouseData.fieldValue)
                        clouseQuery = clouseData.query
                        console.log("+++++query+++++++",clouseData.query)
                        setTreeData({...treeData})
                        break
                    case 'GreaterThan':
                        clouseData.query.greaterThan(clouseData.fieldName, clouseData.fieldValue)
                        clouseQuery = clouseData.query
                        console.log("+++++query+++++++",clouseData.query)
                        setTreeData({...treeData})
                        break
                    case 'LessThan':
                        clouseData.query.lessThan(clouseData.fieldName, clouseData.fieldValue)
                        clouseQuery = clouseData.query
                        console.log("+++++query+++++++",clouseData.query)
                        setTreeData({...treeData})
                        break
                    case 'GreaterThanOrEqualTo':
                        clouseData.query.greaterThanOrEqualTo(clouseData.fieldName, clouseData.fieldValue)
                        clouseQuery = clouseData.query
                        console.log("+++++query+++++++",clouseData.query)
                        setTreeData({...treeData})
                        break
                    case 'LessThanOrEqualTo':
                        clouseData.query.lessThanOrEqualTo(clouseData.fieldName, clouseData.fieldValue)
                        clouseQuery = clouseData.query
                        console.log("+++++query+++++++",clouseData.query)
                        setTreeData({...treeData})
                        break
                        default:
                            console.log(clouseData.constrain)
                    }
            setData({...clouseData})
            console.log('getFieldValue===>',clouseData)
        break
        case 'date':
            clouseData.fieldValue = e
            switch(clouseData.constrain){
                    
                case 'EqualTo':
                    
                    clouseData.query.equalTo(clouseData.fieldName, clouseData.fieldValue)
                    clouseQuery = clouseData.query
                    console.log("+++++query+++++++",clouseData.query)
                    setTreeData({...treeData})
                    
                    
                    break
                case 'NotEqualTo':
                    clouseData.query.notEqualTo(clouseData.fieldName, clouseData.fieldValue)
                    clouseQuery = clouseData.query
                    console.log("+++++query+++++++",clouseData.query)
                    setTreeData({...treeData})
                    break
                case 'GreaterThan':
                    clouseData.query.greaterThan(clouseData.fieldName, clouseData.fieldValue)
                    clouseQuery = clouseData.query
                    console.log("+++++query+++++++",clouseData.query)
                    setTreeData({...treeData})
                    break
                case 'LessThan':
                    clouseData.query.lessThan(clouseData.fieldName, clouseData.fieldValue)
                    clouseQuery = clouseData.query
                    console.log("+++++query+++++++",clouseData.query)
                    setTreeData({...treeData})
                    break
                case 'GreaterThanOrEqualTo':
                    clouseData.query.greaterThanOrEqualTo(clouseData.fieldName, clouseData.fieldValue)
                    clouseQuery = clouseData.query
                    console.log("+++++query+++++++",clouseData.query)
                    setTreeData({...treeData})
                    break
                case 'LessThanOrEqualTo':
                    clouseData.query.lessThanOrEqualTo(clouseData.fieldName, clouseData.fieldValue)
                    clouseQuery = clouseData.query
                    console.log("+++++query+++++++",clouseData.query)
                    setTreeData({...treeData})
                    break
                    default:
                        console.log(clouseData.constrain)
                }
            setData({...clouseData})
            console.log('getFieldValue===>',clouseData)
    }
    
    
}

const setFieldConstrain = ({clouseData,setData}) => (value) => {
   
    const newd = { ...clouseData }
    const query = new Parse.Query(ClouseQuery)
    //newd.query = query
    newd.fieldName = value
    newd.constrainList = constrainList[value]
    newd.fieldValue = ''
    setData(newd)
    console.log(newd)

}

const deleteClouse = ({treeData, setTreeData, clouseQuery}) => () => {
    console.log(clouseQuery)
    clouseQuery.unset('l')
}


const constrainList = {
    Name: [
        'Contains',
        'StartsWith',
        'EndsWith',
        'EqualTo',
        'NotEqualTo',
        'GreaterThan',
        'LessThan',
        'GreaterThanOrEqualTo',
        'LessThanOrEqualTo',
        'IsEmpty',
        'NotIsEmpty',
        'IsNull',
        'NotIsNull'
    ],
    Id: [
        'EqualTo',
        'NotEqualTo',
        'GreaterThan',
        'LessThan',
        'GreaterThanOrEqualTo',
        'LessThanOrEqualTo',
        'IsNull',
        'NotIsNull'
    ],
    Date: [
        'EqualTo',
        'NotEqualTo',
        'GreaterThan',
        'LessThan',
        'GreaterThanOrEqualTo',
        'LessThanOrEqualTo',
        'IsNull',
        'NotIsNull'
    ],
    default: [
        'EqualTo',
        'NotEqualTo',
        'GreaterThan',
        'LessThan',
        'GreaterThanOrEqualTo',
        'LessThanOrEqualTo',
        'IsNull',
        'NotIsNull'
    ]

}


const dataTypeOptionsView = [
    <Option value="Id">Id</Option>,
    <Option value="Name">Name</Option>,
    <Option value="Date">Date</Option>,
    <Option value="Boolean">Boolean</Option>,
]

const ClouseQuery = Parse.Object.extend("ClouseQuery")


const clouseController = pipe(
    withState((props) => ({ fieldValue: null, constrainList: constrainList.default, fieldName: null, query: props.clouseQuery, constrain:'EqualTo', }), 'clouseData', 'setData'),
    withHandlers({
        setFieldConstrain,
        getFieldValue,
        getConstrain,
        deleteClouse,
        
    }),
    withLifecycle({

        
    }),
)


export default Clouse



/*const newd = { ...clouseData }
  switch(value){
    case 'EqualTo':
      newd.query = query.equalTo(clouseData.type, clouseData.value)
      setData(newd)
      console.log(clouseData)
      break
    case 'NotEqualTo':
      newd.query = query.notEqualTo(clouseData.type, clouseData.value)
      setData(newd)
      console.log(clouseData)
      break
    case 'GreaterThan':
      newd.query = query.greaterThan(clouseData.type, clouseData.value)
      setData(newd)
      console.log(clouseData)
      break
    case 'LessThan':
      newd.query = query.lessThan(clouseData.type, clouseData.value)
      setData(newd)
      console.log(clouseData)
      break
    case 'GreaterThanOrEqualTo':
      newd.query = query.greaterThanOrEqualTo(clouseData.type, clouseData.value)
      setData(newd)
      console.log(clouseData)
      break
    case 'LessThanOrEqualTo':
      newd.query = query.lessThanOrEqualTo(clouseData.type, clouseData.value)
      setData(newd)
      console.log(clouseData)
      break

  } */