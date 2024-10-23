import React from 'react'
import Dispatcher from './dispatcher'
import { useSearchParams } from 'react-router-dom';
import DispatcherList from './dispatcherList/DispatcherList';
import DispatcherAdd from './dispatcherAdd/DispatcherAdd';

export default function DispatcherLayout() {
  const [searchParams] = useSearchParams()
  const page = searchParams.get('page');

  return (
      page === 'dispatcher-list' ?
          <DispatcherList />
          // : page === 'agent-add' ?
          //     <AgentAdd />
          //     : page === 'agent-setting' ?
          //         <AgentSetting />
                  : <DispatcherAdd />

  );
}
