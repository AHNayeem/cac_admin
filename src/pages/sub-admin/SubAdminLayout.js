import { useSearchParams } from "react-router-dom";
import SubAdminList from "./sub-adminList/SubAdminList";
import SubAdminAdd from "./sub-adminAdd/SubAdminAdd";

function SubAdminLayout() {
    const [searchParams] = useSearchParams()
    const page = searchParams.get('page');

    return (
        page === 'sub-admin-list' ?
            <SubAdminList />
            : <SubAdminAdd />

    );
}

export default SubAdminLayout;