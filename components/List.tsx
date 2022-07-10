import * as React from 'react'
import ListItem from './ListItem'
import { User } from '../interfaces'

type Props = {
  items: User[]
}

const List = ({ items }: Props) => (
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
    {items.map((item) => (
      <div key={item.id}>
        <ListItem data={item} />
      </div>
    ))}
  </div>
)

export default List
