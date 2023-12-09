import { useState } from 'react'

export default function Form ({ onAddItems }) {
  const [description, setDescription] = useState('')
  const [quantity, setQuantity] = useState(1)

  const handleSubmit = event => {
    event.preventDefault()

    const newItems = {
      id: Date.now(),
      description,
      quantity,
      packed: false
    }
    onAddItems(newItems)

    setDescription('')
    setQuantity(1)
  }

  return (
    <form className='add-form' onSubmit={handleSubmit}>
      <h3>What do you need for your trip?</h3>
      <select
        value={quantity}
        onChange={e => setQuantity(Number(e.target.value))}
      >
        {Array.from({ length: 20 }, (_, i) => i + 1).map(num => (
          <option value={num} key={num}>
            {num}
          </option>
        ))}
      </select>
      <input
        type='text'
        value={description}
        onChange={e => setDescription(e.target.value)}
        placeholder='item...'
      />
      <button>Add</button>
    </form>
  )
}
