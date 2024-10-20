import { useSearchParams } from "react-router-dom";
import RequestAgent from "./requestAgent/RequestAgent";
import RequestDriver from "./requestDriver/RequestDriver";
import RequestOperator from "./requestOperator/RequestOperator";
import RequestPassenger from "./requestPassenger/RequestPassenger";

function RequestLayout() {
    const [searchParams] = useSearchParams()
    const page = searchParams.get('page');

    return (

        page === 'request-by-agent' ?
            <RequestAgent />
            : page === 'request-by-passenger' ?
                <RequestPassenger />
                : page === 'request-by-driver' ?
                    <RequestDriver />
                    :
                    <RequestOperator />

    );
}

export default RequestLayout;