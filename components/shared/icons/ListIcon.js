import ListCheckCircleIcon from './ListCheckCircleIcon'
import ListCheckIcon from './ListCheckIcon'

function ListIcon({ icon }) {
  console.log('icon', icon)
  return (
    <>
      {icon === 'pricing' && <ListCheckIcon />}
      {icon === 'curriculum' && <ListCheckCircleIcon />}
    </>
  )
}

export default ListIcon
