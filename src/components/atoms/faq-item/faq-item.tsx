import { FC, useState } from 'react';
import classnames from 'classnames';

import './faq-item.scss';

export type FaqItemProps = {
  title: string;
  description: string;
};

export const FaqItem: FC<FaqItemProps> = ({ title, description }) => {
  const [isOpened, setIsOpened] = useState<boolean>(false);

  const handleIsOpened = () => {
    setIsOpened((prevState) => !prevState);
  };

  return (
    <li
      className={classnames('faq-item', {
        'faq-item--opened': isOpened,
      })}
    >
      <button
        type="button"
        className="faq-item__trigger"
        onClick={handleIsOpened}
      >
        <span className="faq-item__title">{title}</span>
        <img
          src="/assets/icons/arrow-small.svg"
          alt=""
          className="faq-item__arrow"
        />
      </button>
      <div className="faq-item__content">
        <span className="faq-item__content__descr">{description}</span>
      </div>
    </li>
  );
};
