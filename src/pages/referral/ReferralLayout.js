import React from 'react'
import { useSearchParams } from 'react-router-dom';
import ReferralList from './referralList/ReferralList';
import ReferralAdd from './referralAdd/ReferralAdd';

export default function ReferralLayout() {
  const [searchParams] = useSearchParams()
  const page = searchParams.get('page');

  return (
    page === 'referral-list' ?
      <ReferralList />
      : <ReferralAdd />
  );
}
