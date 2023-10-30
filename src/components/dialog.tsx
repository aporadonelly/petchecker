import MuiDialog, { DialogProps as MuiDialogProps } from '@mui/material/Dialog';
import DialogTitle, { DialogTitleProps } from '@mui/material/DialogTitle';
import DialogContent, { DialogContentProps } from '@mui/material/DialogContent';
import DialogContentText, { DialogContentTextProps } from '@mui/material/DialogContentText';
import DialogActions, { DialogActionsProps } from '@mui/material/DialogActions';
import Button, { ButtonProps } from '@mui/material/Button';

export interface DialogProps extends MuiDialogProps {
  title?: string;
  description?: string;
  confirmText?: string;
  cancelText?: string;
  confirmButtonProps?: ButtonProps;
  cancelButtonProps?: ButtonProps;
  dialogTitleProps?: DialogTitleProps;
  dialogContentProps?: DialogContentProps;
  dialogContentTextProps?: DialogContentTextProps;
  dialogActionsProps?: DialogActionsProps;
}

function Dialog(props: React.PropsWithChildren<DialogProps>) {
  const {
    title,
    description,
    confirmText = 'Confirm',
    cancelText = 'Cancel',
    confirmButtonProps,
    cancelButtonProps,
    dialogTitleProps,
    dialogContentProps,
    dialogContentTextProps,
    dialogActionsProps,
    children,
    ...otherProps
  } = props;

  return (
    <MuiDialog {...otherProps}>
      {title && <DialogTitle {...dialogTitleProps}>{title}</DialogTitle>}
      <DialogContent {...dialogContentProps}>
        {description && (
          <DialogContentText {...dialogContentTextProps}>{description}</DialogContentText>
        )}
        {children}
      </DialogContent>
      <DialogActions {...dialogActionsProps}>
        <Button {...cancelButtonProps} color="error">
          {cancelText}
        </Button>
        <Button {...confirmButtonProps}>{confirmText}</Button>
      </DialogActions>
    </MuiDialog>
  );
}

export default Dialog;
