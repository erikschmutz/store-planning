import { FunctionComponent, SVGProps, useState } from 'react';
import { ReactSVG } from 'react-svg';
import Button from 'src/components/Button';
import { StoreMapUtils } from 'src/utils/StoreMapUtils';

interface ImageTransitionProps {
    svg: string;
    className?: string;
    onHover?: (id: string) => void;
    onItemClick?: (id: string) => void;
    markedIds?: string[];
}

export function StoreMap(props: ImageTransitionProps) {
    const { svg, className, onHover, markedIds, onItemClick } = props;
    const [scale, setScale] = useState(1.5);

    const Controller = () => {
        return (
            <div className="float-right fixed z-10">
                <Button
                    disable={scale > 2}
                    onClick={() => {
                        setScale(scale + 0.25);
                    }}
                    type="secondary"
                >
                    +
                </Button>
                <Button
                    disable={scale < 0.5}
                    onClick={() => {
                        setScale(scale - 0.25);
                    }}
                    type="secondary"
                >
                    -
                </Button>
            </div>
        );
    };

    return (
        <div className={`relative ${className} `}>
            <Controller></Controller>
            <ReactSVG
                src={svg}
                style={{
                    transform: `scale(${scale}, ${scale})`,
                    transformOrigin: 'left top',
                }}
                beforeInjection={(item) => {
                    StoreMapUtils.recursiveForEach(item, (el) => {
                        if (el.tagName === 'rect' || el.tagName === 'circle') {
                            const elementId = StoreMapUtils.getId(el);

                            el.classList.add(StoreMapUtils.HOVERABLE_ITEM);

                            if (onHover) {
                                el.onmouseenter = (e) => {
                                    if (!elementId) {
                                        throw new Error(
                                            'Not able to hook a listener onto object without id.',
                                        );
                                    }

                                    onHover(elementId);
                                };
                            }

                            if (onItemClick) {
                                el.onclick = (e) => {
                                    if (!elementId) {
                                        throw new Error(
                                            'Not able to hook a listener onto object without id.',
                                        );
                                    }

                                    onItemClick(elementId);
                                };
                            }

                            if (elementId && markedIds?.includes(elementId)) {
                                el.classList.add(StoreMapUtils.MARKED_ITEM);
                            }
                        }
                    });
                }}
            />
        </div>
    );
}
