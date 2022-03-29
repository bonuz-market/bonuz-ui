import React, {FC} from 'react';
import  './PhotoContainer.scss'

type TPhotoContainer = {
    image: object,
    id: any
}

const PhotoContainer: FC<TPhotoContainer> = ({image, id}) => {
    return (
        <div className='polygon'
             key={`${image}`}
        >
            <svg
                width="192"
                height="224"
                viewBox="0 0 192 224"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <svg
                    width="192"
                    height="224"
                    viewBox="0 0 192 224"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M96 0L143.666 28.5844L192 56L191.332
                    112L192 168L143.666 195.416L96 224L48.334
                    195.416L0 168L0.667923 112L0 56L48.334 28.5844L96 0Z"
                        fill={`url(#paint0_linear_46_43841${id})`}/>
                    <defs >
                        <linearGradient id={`paint0_linear_46_43841${id}`} x1="199.221" y1="110.404" x2="-1.33884"
                                        y2="107.718"
                                        gradientUnits="userSpaceOnUse">
                            <stop stopColor="#CE09FF"/>
                            <stop offset="1" stopColor="#FFA34E"/>
                        </linearGradient>
                    </defs>
                </svg>
                <svg
                    className='polygonDefs'
                    width="192"
                    height="224"
                    viewBox="0 0 192 224"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M96 0L143.666 28.5844L192 56L191.332
                    112L192 168L143.666 195.416L96 224L48.334
                    195.416L0 168L0.667923 112L0 56L48.334 28.5844L96 0Z"
                        fill={`url(#paint0_linear_46_43842${id})`}/>
                    <defs  >
                        <linearGradient id={`paint0_linear_46_43842${id}`} x1="36" y1="173.6" x2="176.662" y2="61.0247"
                                        gradientUnits="userSpaceOnUse">
                            <stop stopColor="#CC16FF"/>
                            <stop offset="1" stopColor="#48F573"/>
                        </linearGradient>
                    </defs>
                </svg>
                <defs>
                    <clipPath id={`polygonView${id}`}>
                        <polygon points="
                        15.34 160 , 15.34 56 , 104.34 4.5,
                        193 56 ,193 160,104.34  212
                           "/>
                    </clipPath>
                </defs>
                <image
                    xlinkHref={`${image}`}
                    width="212"
                    height="214"
                    transform="translate(-8.4,4)"
                    clipPath={`url(#polygonView${id})`}
                />
            </svg>
        </div>
    );
};

export default PhotoContainer;