import { useSearchParams } from "react-router-dom";
import AppPassenger from "./appPassenger/AppPassenger";
import AppDriver from "./appDriver/AppDriver";

function SettingLayout() {
    const [searchParams] = useSearchParams()
    const page = searchParams.get('page');

    return (
        page === 'app-passenger' ?
            <AppPassenger />
            : <AppDriver />

    );
}

export default SettingLayout;