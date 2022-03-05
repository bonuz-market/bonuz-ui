import classNames from 'classnames';
import { FC, useState } from 'react';
import './Modal.scss';

export type ModalProps = {
  closeText: string;
  footerText?: string;
  video?: boolean;
};
export const Modal: FC<ModalProps> = ({
  children,
  closeText,
  footerText,
  video,
}) => {
  const [isOpen, setIsOpen] = useState(true);

  return isOpen ? (
    <div className="modal" tabIndex={-1}>
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <button
              type="button"
              aria-label="Close"
              onClick={() => setIsOpen(false)}
            >
              {closeText || '✕'}
            </button>
          </div>
          <div
            className={classNames('modal-body', {
              video,
            })}
          >
            {children}
          </div>
          {footerText && (
            <div className="modal-footer">
              <button type="button">{footerText}</button>
            </div>
          )}
        </div>
      </div>
    </div>
  ) : null;
};
