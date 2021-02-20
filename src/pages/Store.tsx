import React, { useState } from 'react';
import Card from 'src/components/Card';
import Divider from 'src/components/Divider';
import Title from 'src/components/Title';
import { StoreMap } from 'src/views/StoreMap';
import svg from 'src/assets/items.svg';

export default function Store() {
    const [marked, setMarked] = useState<string[]>([]);

    return (
        <Card className="w-screen h-screen flex flex-col lg:w-11/12 m-auto">
            <Title className="flex " level="h2">
                Din butik
            </Title>

            <Divider />
            <div className="flex-1 w-full mx-auto text-lg h-full rounded overflow-scroll">
                <StoreMap
                    onItemClick={(id) => {
                        console.log(id);
                        if (!marked.includes(id)) setMarked([...marked, id]);
                    }}
                    markedIds={marked}
                    svg={svg}
                />
            </div>
        </Card>
    );
}
