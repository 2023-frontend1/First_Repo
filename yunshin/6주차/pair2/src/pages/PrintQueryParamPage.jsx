import { useLocation } from 'react-router-dom'

const PrintQueryParamPage = () => {
  const location = useLocation() //바뀐 부분
  return <h1>{location.search ? location.search.split('=')[1] : 0} </h1>
}

export default PrintQueryParamPage
