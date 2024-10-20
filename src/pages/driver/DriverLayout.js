import { useSearchParams } from "react-router-dom";
import DriverList from "./driverList/DriverList";
import DriverSetting from "./driverSetting/DriverSetting";
import DriverAdd from "./driverAdd/DriverAdd";

function DriverLayout() {
    const [searchParams] = useSearchParams()
    const page = searchParams.get('page');

    return (
        page === 'driver-list' ?
            <DriverList />
            : page === 'driver-add' ?
                <DriverAdd />
                : <DriverSetting />

    );
}

export default DriverLayout;