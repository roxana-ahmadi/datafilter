import React from 'react'
import Parse from 'parse'
import { withEmitter, withState, withHandlers, withLifecycle, pipe } from '../../util'


const ClouseQuery = Parse.Object.extend("ClouseQuery")

const addClouse = ({ oprandData, setOprandData }) => () => {
  const query = new Parse.Query(ClouseQuery)
  oprandData.child.push(query)
  setOprandData({ ...oprandData })
}

const deleteClouse = ({ oprandData, setOprandData }) => (index) => {
  console.log('on delte', oprandData.child, index)
  oprandData.child.splice(index, 1)
  setOprandData({ ...oprandData })
  console.log('after set data', oprandData.child)

}

const oprandController = pipe(
  withState(({ op: 'and', child: [1, 2, 3, 4, 5, 6] }), 'oprandData', 'setOprandData'),
  withEmitter(),
  withHandlers({
    addClouse,
    deleteClouse,
  }),
  withLifecycle({}),
)

export default oprandController
