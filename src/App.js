import React from 'react';
import Parse from 'parse'
import Clouse from './component/Clouse'
import Oprand, { oprandController } from './component/Oprand'
import queryGenerator from './component/queryGenerator'
import OprandView from'./component/oprand/OprandView'
import { Tree, Button } from 'antd';

import './App.css';



function App() {

    // const { treeData, setTreeData } = queryGenerator()
    // const { deleteClouse, oprandData } = oprandController()
    
    // const queryTreeNode = (data, index) => {
    //     const { TreeNode } = Tree;
    //     let childIndexx = index
    //     let opnode 
    //     //console.log('query tree node start', data)
  


    //     if (data.child) {
    //         opnode = data
    //         console.log('opnode from app+++++++++', opnode)
    //         return (<TreeNode title={<Oprand op={data.op} setTreeData={setTreeData} treeData={treeData} oprandNode={data} childIndex={childIndexx} />}>
    //             {
                    
    //                 data.child.map((item, index) => {
    //                     return queryTreeNode(item, index)
    //                 })
    //             }
    //         </TreeNode>)
    //     }

    //     else {
            
    //         return (<TreeNode title={<Clouse clouseQuery={data} setTreeData={setTreeData} treeData={treeData} clouseIndex={childIndexx} deleteClouse = {deleteClouse} />} />)
    //     }
    // }



    // const treeView = (
    //     <Tree>
    //         {queryTreeNode(treeData,0)}
    //     </Tree>

    // )
    

    // const makeMainQuery = (treeData) => {
    //     // let q1 = new Parse.Query(ClouseQuery)
    //     // let q2 = new Parse.Query(ClouseQuery)
    //     // let q = new Parse.Query(ClouseQuery)
    //     // treeData.mainQuery = treeData.mainQuery._andQuery([q1,q2])
    //     // console.log(treeData.mainQuery)

    //     //  treeData.mainQuery = Parse.Query.and(
    //     //     treeData.mainQuery,
    //     //     Parse.Query.or(new Parse.Query(ClouseQuery), new Parse.Query(ClouseQuery))
    //     //   );

    //     console.log('majidmajid', treeData)
    //     if (treeData.child) {
    //         let op = treeData.op

    //         treeData.child.map(x => {

    //             // console.log('tredata mian query==>',treeData.mainQuery)
    //             // console.log('x==>',x)
    //             if (!x.op) {
    //                 if (op == 'and') {
    //                     console.log('op', op)
    //                     treeData.mainQuery = Parse.Query.and(treeData.mainQuery, x)
    //                 }
    //                 else {
    //                     treeData.mainQuery = Parse.Query.or(treeData.mainQuery, x)
    //                 }
    //             }
    //             else {
    //                 return makeMainQuery(x)
    //             }

    //             // else{
    //             // console.log('op',treeData.op)
    //             //     return treeData.mainQuery = Parse.Query.or(treeData.mainQuery,makeMainQuery(x))
    //             // }
    //         })

    //     }
    //     else {
    //         // console.log('tt',treeData)
    //         return treeData
    //     }
    // }

    return (
        <div>
            <OprandView />
            {/* {treeView}
            <Button onClick={() => makeMainQuery(treeData)}>search</Button>
            <Button onClick={() => console.log('treedata mainquery =>', treeData.mainQuery)}>showtd</Button> */}
        </div>


    )
}


export default App;
