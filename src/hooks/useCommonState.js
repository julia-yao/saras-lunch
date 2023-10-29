import { useDispatch, useSelector } from "react-redux";
import { updateIsLoading } from "../actions/creators/common";

const useSetCommonState = () => {
    const dispatch = useDispatch();
    const isLoading = useSelector(state => state.common.isLoading);

    const setIsLoading = status => {
        dispatch(updateIsLoading(status));
    }

    return [isLoading, setIsLoading];
}

export default useSetCommonState;