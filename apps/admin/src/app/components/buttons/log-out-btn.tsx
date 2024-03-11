import React from 'react';

interface Props {
  sidePanelStyle: string;
  children: React.ReactNode;
}

export function LogoutButton({sidePanelStyle, children}: Props): JSX.Element{
  return (
    <div className={sidePanelStyle}>
      {children || null}
      <form action="/auth/signout" method="post">
        <button
          className={sidePanelStyle}
          type="submit"
        >
          Log out
        </button>
      </form>
    </div>
  );
}