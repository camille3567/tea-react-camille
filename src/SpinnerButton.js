import React from 'react';
import { Spinner } from 'react-bootstrap';

const SpinnerButton = ({
  animation,
  loading,
  disabled = false,
  children,
  ...props
}) => {
  return <Button {...props} disabled={loading || disabled}>
    {loading && (
      <>
        <Spinner
          as="span"
          className={children ? 'me-2' : ''}
          size="sm"
          animation={animation}
          role="status"
          aria-hidden="true"
        />
        {!children && (
          <span className="visually-hidden">Loading...</span>
        )}
      </>
    )}
    {children}
  </Button>
};

export default SpinnerButton;