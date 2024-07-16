import React from 'react';
import { Button, Modal } from 'react-bootstrap';
import SpinnerButton from './SpinnerButton';

const CDialog = ({
    children,
    title,
    formId,
    confirmText,
    onConfirm,
    cancelText,
    onCancel,
    animation = 'border',
    loading,
    ...rest
}) => (
    <Modal {...rest} onHide={onCancel}>
        <Modal.Header closeButton>
            <Modal.Title>{title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>{children}</Modal.Body>

        {(confirmText || cancelText) && (
            <Modal.Footer>
                {cancelText && (
                    <Button
                        variant="secondary"
                        type="reset"
                        form={formId}
                        disabled={loading}
                        onClick={onCancel}
                    >
                        {cancelText}
                    </Button>
                )}
                {confirmText && (
                    <SpinnerButton
                        variant="primary"
                        type="submit"
                        form={formId}
                        animation={animation}
                        loading={loading}
                        onClick={onConfirm}
                    >
                        {confirmText}
                    </SpinnerButton>
                )}
            </Modal.Footer>
        )}
    </Modal>
);

export default CDialog;