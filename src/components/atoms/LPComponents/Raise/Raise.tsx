import React, {FC} from 'react';
import  './Raise.scss';

export type TRaise = {
    total:string,
    totalRaise: string
    personalAlocation: string,
    personalAlocationRaise: string,
}
export const Raise: FC<TRaise> = ({total,totalRaise, personalAlocation,personalAlocationRaise}) => {
    return (
        <div className="cardBg2Raise">
            <div className="cardBg2RaiseTotal">

                <div className="cardBg2RaiseTitle">
                    {total}
                </div>
                <div className="cardBg2RaiseSubTitle">
                    ${totalRaise}
                </div>

            </div>
            <div className="cardBg2RaisePerson">

                <div className="cardBg2RaiseTitle">
                    {personalAlocation}
                </div>
                <div className="cardBg2RaiseSubTitle">
                    ${personalAlocationRaise}
                </div>

            </div>
        </div>
    );
};