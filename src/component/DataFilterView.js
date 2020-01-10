// import React from 'react'
// import Clouse from './Clouse'
// import Oprand , {oprandController} from './Oprand'
// import queryGenerator from './queryGenerator'
// import { Tree } from 'antd';

// const DatafilterView = (props) => {
//     //const {  treeData, addClouse, addOprand   } = queryGenerator(props)
//     const {data, addOprand, addClouse} = oprandController(props)
//     const { TreeNode } = Tree;
//     const queryTreeNode =  (d) => {
//         const { TreeNode } = Tree;
//         console.log('query tree node start',d)
//         if (d.child) {
//             return (<TreeNode title={<Oprand data ={data} 
//                                             addOprand={addOprand}
//                                             addClouse={addClouse}
//                                              />}>
//                 {
//                     d.child.map(x => {
//                        console.log('lll')
//                        return  queryTreeNode(x) 
//                     })
//                 }
//             </TreeNode>)
    
//         }
        
//         else{
//         return (<TreeNode title = {<Clouse treeData={data}  />} />)
//         }
//     }
//     const treeView = (
//         <Tree>
//             {queryTreeNode(data)}
//         </Tree>

//     )
//         console.log(data)
//     return treeView
// }

// export default DatafilterView