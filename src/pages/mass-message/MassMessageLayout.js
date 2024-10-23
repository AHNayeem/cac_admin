import React from 'react'
import MassMessage from './MassMessage'
import { useSearchParams } from 'react-router-dom';
import MessageList from './messageList/MessageList';
import MessageAdd from './messageAdd/MessageAdd';

export default function MassMessageLayout() {
    const [searchParams] = useSearchParams()
    const page = searchParams.get('page');

    return (
        page === 'message-list' ?
            <MessageList />
            // : page === 'agent-add' ?
            //     <AgentAdd />
            //     : page === 'agent-setting' ?
            //         <AgentSetting />
                    : <MessageAdd />

    );
}
