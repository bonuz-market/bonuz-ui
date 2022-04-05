import React, {FC} from 'react';
import "./index.scss"
import classNames from "classnames";

interface IProps {
    isActive: boolean,
    onClick: () => void
}

export const Hamburger: FC<IProps> = ({ isActive, onClick }) => {
    return (
        <div
            className={classNames("hamburger", {
                active: isActive
            })}
            onClick={onClick}
        >
            <span className="line" />
            <span className="line" />
            <span className="line" />
        </div>
    );
};

