import { useContext } from 'react'
import { ItemsContext, checkContext } from '../App'

export default function Item ({ item }) {
  const handleRemoveItems = useContext(ItemsContext)
  const handleCheckBox = useContext(checkContext)

  return (
    <li>
      <input
        type='checkbox'
        value={item.packed}
        onChange={() => handleCheckBox(item.id)}
      />
      <span style={item.packed ? { textDecoration: 'line-through' } : {}}>
        {`${item.quantity} ${item.description}`}
      </span>
      <button onClick={() => handleRemoveItems(item.id)}>❌</button>
    </li>
  )
}
