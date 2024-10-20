import { useSearchParams } from "react-router-dom";
import OperatorList from "./operatorList/OperatorList";
import OperatorAdd from "./operatorAdd/OperatorAdd";
import OperatorSetting from "./operatorSetting/OperatorSetting";

function OperatorLayout() {
    const [searchParams] = useSearchParams()
    const page = searchParams.get('page');

    return (
        page === 'operator-list' ?
            <OperatorList />
            : page === 'operator-add' ?
                <OperatorAdd />
                : <OperatorSetting />

    );
}

export default OperatorLayout;