import { useSearchParams } from "react-router-dom";
import PassengerList from "./passengerList/PassengerList";
import PassengerSetting from "./passengerSetting/PassengerSetting";

function PassengerLayout() {
    const [searchParams] = useSearchParams()
    const page = searchParams.get('page');

    return (
        page === 'passenger-list' ?
            <PassengerList />
            : <PassengerSetting />

    );
}

export default PassengerLayout;