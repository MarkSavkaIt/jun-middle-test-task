import React from 'react'
import { FSRoot } from './react-list/index'

export const FSTree = () => (
  <FSRoot childNodes={[
    {
      name: 'Animals', childNodes: [
        { name: "cow", type: "Animal" },
        { name: "cat", type: "Animal" },
        { name: "dog", type: "Animal" }
      ]
    },
    {
      name: 'Fish', childNodes: [
        { name: 'Red fish' },
        { name: 'Green fish' },
      ]
    },
    {
      name: 'folder', childNodes: [
        { name: 'foo', type: "Dot" },
        { name: 'bar', type: "Dot" },
        { name: 'baz', type: "Dot" },
      ]
    },
  ]} />
)
