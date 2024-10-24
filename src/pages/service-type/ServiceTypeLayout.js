import React from 'react'
import ServiceType from './ServiceType'
import ServiceList from './serviceList/ServiceList'
import { useSearchParams } from "react-router-dom";
import ServiceAdd from './serviceAdd/ServiceAdd';

export default function ServiceTypeLayout() {
    const [searchParams] = useSearchParams()
    const page = searchParams.get('page');

    return (
        page === 'service-list' ?
            <ServiceList /> 
            : <ServiceAdd />

    );
}
