import React from 'react'
import Payment from './payment'
import { useSearchParams } from 'react-router-dom';
import PaymentList from './paymentList/PaymentList';
import PaymentAdd from './paymentAdd/PaymentAdd';

export default function PaymentLayout() {
  // return (
  //   <Payment />
  // )
  const [searchParams] = useSearchParams()
  const page = searchParams.get('page');

  return (
    page === 'payment-list' ?
      <PaymentList />
      : <PaymentAdd />
  );
}
