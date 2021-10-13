import ListCheckCircleIcon from './ListCheckCircleIcon'
import ListCheckIcon from './ListCheckIcon'

function ListIcon({ icon }) {
  return (
    <>
      {icon === 'pricing' && <ListCheckIcon />}
      {icon === 'curriculum' && <ListCheckCircleIcon />}
    </>
  )
}

export default ListIcon
