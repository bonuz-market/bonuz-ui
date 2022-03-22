import classNames from 'classnames';
import { FC, useState } from 'react';
import './Modal.scss';

export type ModalProps = {
  closeText: string;
  footer?: { text: string; link?: string };
  video?: boolean;
};
export const Modal: FC<ModalProps> = ({
  children,
  closeText,
  footer,
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
          {footer && (
            <div className="modal-footer">
              <button type="button">
                {footer.link && (
                  <a href={footer.link} target="_blank" rel="noreferrer">
                    {footer.text}
                  </a>
                )}
                {!footer.link && footer.text}
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  ) : null;
};
