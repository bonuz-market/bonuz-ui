import { FC } from 'react';
import subscribeIcon from '../../../assets/images/f_i.svg';

type SubscribeToNewsProps = {
  onClick: () => void;
};
export const FormArrowButton: FC<React.PropsWithChildren<SubscribeToNewsProps>> = ({ onClick }) => (
  <button type="button" onClick={onClick}>
    <img src={subscribeIcon} alt="" />
  </button>
);
