import { useParams } from 'react-router-dom'

const PrintNumberPage = () => {
  const { number } = useParams()
  return <h1>{number}</h1>
}

export default PrintNumberPage
