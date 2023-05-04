import React from 'react';

const RedirectToProfile = ({
  redirectUserId,
  children,
}: {
  redirectUserId: string;
  children: any;
}) => {
  return (
    <a target='_blank' href={`/profile/${redirectUserId}`} rel='noreferrer'>
      {children}
    </a>
  );
};

export default RedirectToProfile;
