import React from 'react'
import IssueReport from './IssueReport'
import { useSearchParams } from 'react-router-dom';
import IssueReportList from './issueReportList/IssueReportList';
import IssueReportAdd from './issueReportAdd/IssueReportAdd';

export default function IssueReportLayout() {
    const [searchParams] = useSearchParams()
    const page = searchParams.get('page');

    return (
        page === 'issue-list' ?
            <IssueReportList />
            // : page === 'agent-add' ?
            //     <AgentAdd />
            //     : page === 'agent-setting' ?
            //         <AgentSetting />
            : <IssueReportAdd />

    );
}
