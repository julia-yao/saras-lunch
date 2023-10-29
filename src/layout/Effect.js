import { useSelector } from "react-redux";

const Effect = () => {
    const isLoading = useSelector(state => state.common.isLoading);

    return <>
        <div>
            {/* isLoading */}
            {/* modal */}
            Effect <br/>

            { isLoading && "isLoading"}
        </div>
    </>
}

export default Effect;