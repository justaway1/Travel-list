import { useState } from 'react'

import Item from './Item'

export default function PackingList ({ items, onHandleList }) {
  const [sortBy, setSortBy] = useState('input')

  let sortedItems

  if (sortBy === 'input') sortedItems = items
  if (sortBy === 'description')
    sortedItems = [...items].sort((a, b) =>
      //LocalCompare if we have strings to compare
      a.description.localeCompare(b.description)
    )
  if (sortBy === 'packed')
    sortedItems = [...items].sort((a, b) => +a.packed - +b.packed)

  return (
    <div className='list'>
      <ul>
        {sortedItems.map(item => (
          <Item item={item} key={item.id} />
        ))}
      </ul>
      <div className='actions'>
        <select value={sortBy} onChange={e => setSortBy(e.target.value)}>
          <option value='input'>Sort By input status</option>
          <option value='description'>Sort By description</option>
          <option value='packed'>Sort by Packed status</option>
        </select>
        <button onClick={onHandleList}>Clear List</button>
      </div>
    </div>
  )
}
