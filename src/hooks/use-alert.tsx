import { useRef, useCallback } from 'react';
import { ShowFnOutput, useModal } from 'mui-modal-provider';

import Dialog, { DialogProps } from '@/components/dialog';

type AlertDialogProps = Omit<DialogProps, 'open' | 'onClose'>;

function useAlert() {
  const { showModal } = useModal();

  const instance = useRef<ShowFnOutput<React.PropsWithChildren<AlertDialogProps>>>();

  const show = useCallback((dialogProps: AlertDialogProps) => {
    return new Promise<void>((resolve, reject) => {
      const modal = showModal(
        Dialog,
        {
          ...dialogProps,
          hideBackdrop: true,
          maxWidth: 'xs',
          fullWidth: true,
          cancelButtonProps: {
            onClick: () => {
              reject();
            },
          },
          confirmButtonProps: {
            onClick: () => {
              resolve();
            },
          },
        },
        { destroyOnClose: true }
      );

      instance.current = modal;
    });
  }, []);

  const hide = useCallback(() => {
    return new Promise<void>((resolve) => {
      instance.current?.hide();
      resolve();
    });
  }, []);

  const update = useCallback((dialogProps: AlertDialogProps) => {
    return new Promise<void>((resolve) => {
      instance.current?.update(dialogProps);
      resolve();
    });
  }, []);

  return {
    show,
    hide,
    update,
  };
}

export default useAlert;
