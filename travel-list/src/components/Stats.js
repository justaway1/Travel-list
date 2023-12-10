export default function Stats ({ items }) {
  const numItems = items.length
  const packedItems = items.filter(item => item.packed).length
  const percentage = Math.round((packedItems / numItems) * 100)

  return (
    <footer className='stats'>
      <em>
        {numItems <= 0
          ? `You have no Items, Start Packing Now!`
          : percentage === 100
          ? 'You have packed everything! Ready to go!✈️'
          : `You have ${numItems} ${
              numItems > 1 ? 'items' : 'item'
            } on your list,
            and you have packed ${packedItems} (${percentage}%)!`}
      </em>
    </footer>
  )
}
