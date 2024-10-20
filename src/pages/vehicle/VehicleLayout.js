import { useSearchParams } from "react-router-dom";
import VehicleList from "./vehicleList/VehicleList";
import VehicleAdd from "./vehicleAdd/VehicleAdd";

function VehicleLayout() {
    const [searchParams] = useSearchParams()
    const page = searchParams.get('page');

    return (
        page === 'vehicle-list' ?
            <VehicleList />
            : <VehicleAdd />

    );
}

export default VehicleLayout;