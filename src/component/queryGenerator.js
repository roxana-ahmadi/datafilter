import React, { Component } from 'react'
import Parse from 'parse'
import { withEmitter, withState, withHandlers, withLifecycle, pipe } from '../util'
import { Tree, Button } from 'antd';
import { Record } from 'immutable'
import Clouse from './Clouse';
import Oprand from './Oprand';


// const ABRecord = Record({ a: 1, b: 2 })
// const myRecord = ABRecord({ b: 3 })

const TreeData = Parse.Object.extend({
    className: "TreeData",
    op:'',
    child:[],
  })

const ClouseQuery = Parse.Object.extend("ClouseQuery")


const init = {
    op:'and',
    child: [],
    mainQuery: new Parse.Query(ClouseQuery),

}

// const makeMainQuery = () => (treeData) => {
//     if (treeData.child) {
       
//         data.child.map(x => {
            
//             return treeData.mainQuery = Parse.Query.and(mainQuery,makeMainQuery(x))
//         })

//     }
//     return treeData
// }


const addClouse = ({treeData,setTreeData}) => () => {
    const newd = {...treeData}
    newd.child.push(1)
    setTreeData(newd)
    console.log('add clouse ===>',newd.query)
    console.log(newd)

}

const addOprand = ({treeData,setTreeData}) => (oprand) => {
    const newd = {...treeData}
    newd.child.push({op: oprand, child:[]})
    setTreeData(newd)
    console.log('add clouse ===>',newd.child)
    console.log(newd)

}

const queryGenerator = pipe(
    withState( init ,'treeData', 'setTreeData'),
    withEmitter(),
    withHandlers({
        
        addClouse,
        addOprand,

    }
    ),
  )

export default queryGenerator