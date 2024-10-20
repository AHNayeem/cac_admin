import { useSearchParams } from "react-router-dom";
import AgentList from "./agentList/AgentList";
import AgentAdd from "./agentAdd/AgentAdd";
import AgentSetting from "./agentSetting/AgentSetting";
import StatementPreviw from "./statement/StatementPreview";

function AgentLayout() {
    const [searchParams] = useSearchParams()
    const page = searchParams.get('page');

    return (
        page === 'agent-list' ?
            <AgentList />
            : page === 'agent-add' ?
                <AgentAdd />
                : page === 'agent-setting' ?
                    <AgentSetting />
                    : <StatementPreviw />

    );
}

export default AgentLayout;