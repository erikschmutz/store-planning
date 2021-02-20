import { useEffect } from 'react';
import style from './ImageTransition.module.scss';

interface ImageTransitionProps {
    svg: string;
    image: string;
    className?: string;
    onComplete: () => void;
}

export function ImageTransition(props: ImageTransitionProps) {
    const { image, svg, className, onComplete } = props;

    useEffect(() => {
        setTimeout(onComplete, 5000);
    }, [onComplete]);

    return (
        <div className={`${className}`}>
            <div className="relative w-full h-full ">
                <img
                    id={style.image}
                    src={image}
                    alt="background "
                    className="absolute max-h-full max-w-full transform -translate-x-1/2 left-1/2"
                />
                <img
                    src={svg}
                    id={style.overlay}
                    alt="overlay"
                    className="absolute max-h-full max-w-full transform -translate-x-1/2 left-1/2"
                />
            </div>
        </div>
    );
}
