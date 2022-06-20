import { FC, ReactNode } from 'react';

import './Table.scss';
import { Checkbox } from '../../atoms';

type Column = {
  title: string;
  key: string;
};

export type TableProps = {
  columns: Column[];
  data: {
    [key: string]: string;
  }[];
  selectable?: boolean;
  actionButton?: ReactNode;
  onClick?: (index: number) => void;
};

export const Table: FC<React.PropsWithChildren<TableProps>> = ({
  columns,
  data,
  selectable,
  actionButton,
  onClick,
}) => (
  <table className="table">
    <thead>
      <tr className="table__row table__row--header">
        {columns.map((column) => (
          <th className="table__cell table__cell--header">{column.title}</th>
        ))}
      </tr>
    </thead>
    <tbody>
      {data.map((item, index) => (
        // eslint-disable-next-line react/no-array-index-key
        <tr className="table__row" key={index}>
          {columns.map(({ key }, i) => (
            <td className="table__cell" key={key}>
              {i === 0 && selectable ? (
                <Checkbox label={item[key]} />
              ) : (
                item[key]
              )}
            </td>
          ))}
          {actionButton && (
            <td className="table__cell">
              <button
                type="button"
                className="table__cell__action-button"
                onClick={() => onClick && onClick(index)}
              >
                {actionButton}
              </button>
            </td>
          )}
        </tr>
      ))}
    </tbody>
  </table>
);
