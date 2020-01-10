import React from 'react';
import Parse from 'parse'
import Clouse from './component/Clouse'
import DatafilterView from './component/DataFilterView'
import Oprand , {oprandController} from './component/Oprand'
import queryGenerator from './component/queryGenerator'
import { Tree, Button } from 'antd';

import './App.css';



function App(props) {

    const { treeData, setTreeData } = queryGenerator(props)
    let childIndex = 0
	
    const queryTreeNode =  (data) => {
		const { TreeNode } = Tree;
		
        console.log('query tree node start',data)
        if (data.child) {
            return (<TreeNode title={<Oprand op = {data.op} setTreeData = {setTreeData} treeData = {treeData} oprandNode = {data}/>}>
                {
                    data.child.map(x => {
                       console.log('lll')
                       return  queryTreeNode(x) 
                    })
                }
            </TreeNode>)
        }
        
        else{
			
        	return (<TreeNode title = {<Clouse clouseQuery = {data} setTreeData = {setTreeData} treeData = {treeData} />} />)
        }
    }
    
    
	
    const treeView = (
        <Tree>
            {queryTreeNode(treeData)}
        </Tree>
		
    )

    // const makeMainQuery =  (treeData) => {
    //     const ClouseQuery = Parse.Object.extend("ClouseQuery")
    //     const query = new Parse.Query(ClouseQuery)

    //     //var mainQuery =  Parse.Query.and(treeData.child[0].,treeData.child[1].query)

    //     if (treeData.child) {
    //         let op = treeData.op
           
    //         treeData.child.map(x => {
    //             if(op == 'and')
    //                 return treeData.mainQuery = Parse.Query.and(treeData.mainQuery,makeMainQuery(x))
    //             if(op == 'or'){
    //             console.log('op',treeData.op)
    //                 return treeData.mainQuery = Parse.Query.or(treeData.mainQuery,makeMainQuery(x))}
    //         })
    
    //     }
    //     else{
            
    //         return treeData
    //     }
    // }
        
    return(
    	<div>
	     {treeView}
		 {console.log('treedata ===>',treeData)}
         {/* <Button onClick = { () => makeMainQuery(treeData) }>search</Button>
         <Button onClick = {() => console.log('treedata mainquery =>',treeData.mainQuery)}>showtd</Button> */}
 	   </div>
   
   
  )
}


export default App;
