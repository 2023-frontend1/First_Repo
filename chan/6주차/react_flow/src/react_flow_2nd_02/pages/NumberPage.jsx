import { useParams, useSearchParams } from "react-router-dom";

const NumberPage = () => {
  const urlParams = useParams();
  const [searchParams, setSearchParams] = useSearchParams();
  
  const onClickMovePage = () => {
    searchParams.set("page", "2");
    setSearchParams(searchParams)
  }
  return (
    <>
      <div>{urlParams.number}</div>
      <button onClick={onClickMovePage}>나는 버튼~</button>
      
    </>
  );
};

export default NumberPage;
