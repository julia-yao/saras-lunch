import { useSelector } from "react-redux";
import Spinner from "../components/common/spinner";

const Effect = () => {
    const isLoading = useSelector(state => state.common.isLoading);

    return <>
        <div>
            {/* isLoading */}
            { isLoading && <Spinner />}
            {/* modal */}
        </div>
    </>
}

export default Effect;