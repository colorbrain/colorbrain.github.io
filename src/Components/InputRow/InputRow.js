import React from 'react'
import { useSelector } from 'react-redux'
import Result from '../Result/Result'
import Sequence from '../Sequence/Sequence'

export default function InputRow({ state, test }) {
  return (
    <>
      <div className="row input-row">
        <Sequence
          values={state?.inputValues}
          editable={true}
          selectedBubble={state?.selectedBubble}
        />
      </div>
    </>
  )
}
