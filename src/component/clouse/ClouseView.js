import React from 'react'
import { Button, Input, DatePicker, Select, Switch } from 'antd';

const ClouseView = (props) => {
    const { deleteClouse, index, oprandData } = props
    const InputGroup = Input.Group;
    const { Option } = Select;
    console.log('clouseview,index ===>', index)



    const clouseView = (
        <div>
            <Button>add</Button>
            <Button onClick={() => deleteClouse(index)}>{`delete${oprandData.child[index]}`}</Button>
        </div>
    )
    return (clouseView)
}

export default ClouseView