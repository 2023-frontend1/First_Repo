import { useParams } from "react-router-dom";

const NumberPage = () => {

    const {number} = useParams()
    return(
        <div>{number}</div>
    )
};

export default NumberPage;
