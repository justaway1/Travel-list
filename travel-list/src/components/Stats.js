export default function Stats ({ items }) {
  return (
    <footer className='stats'>
      <em>
        You have {items} {items > 1 ? 'items' : 'item'} on your list, and you
        have packed X(x%)
      </em>
    </footer>
  )
}
