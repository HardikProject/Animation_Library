import * as React from 'react';

export const DragItem = ({
  children,
  itemKey,
}) => <React.Fragment key={itemKey}>{children}</React.Fragment>;

// This component exists simply to pass props down to the children
