import { useState, createContext } from 'react'
import Form from './components/Form'
import Logo from './components/Logo'
import PackingList from './components/PackingList'
import Stats from './components/Stats'

const ItemsContext = createContext()
const checkContext = createContext()

export default function App () {
  const [items, setItems] = useState([])

  function handleAddItems (item) {
    setItems(items => [...items, item])
  }

  function handleRemoveItems (id) {
    setItems(items => [...items].filter(items => items.id !== id))
  }

  function handleCheckBox (id) {
    setItems(prevItems =>
      prevItems.map(item =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    )
  }

  return (
    <div className='app'>
      <checkContext.Provider value={handleCheckBox}>
        <ItemsContext.Provider value={handleRemoveItems}>
          <Logo />
          <Form onAddItems={handleAddItems} />
          <PackingList items={items} />
          <Stats items={items} />
        </ItemsContext.Provider>
      </checkContext.Provider>
    </div>
  )
}

export { ItemsContext, checkContext }
