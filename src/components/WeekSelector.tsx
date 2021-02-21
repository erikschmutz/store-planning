import { useRef } from 'react';

interface WeekSelectorProps {}

export default function WeekSelector(props: WeekSelectorProps) {
    const ref = useRef<HTMLCanvasElement>(null);

    return (
        <div>
            <canvas
                ref={ref}
                id="my-house"
                width="300"
                className="m-auto"
                height="300"
            />
        </div>
    );
}
