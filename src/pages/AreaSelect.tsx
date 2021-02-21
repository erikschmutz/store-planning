import React, { useState } from 'react';
import Card from 'src/components/Card';
import Divider from 'src/components/Divider';
import Title from 'src/components/Title';
import { StoreMap } from 'src/views/StoreMap';
import svg from 'src/assets/items.svg';
import Button from 'src/components/Button';
import Typography from 'src/components/Typography';
import { Area } from 'src/api/Area';
import { useHistory } from 'react-router-dom';
import { Navigator } from 'src/utils/Navigator';

export default function Store() {
    const [marked, setMarked] = useState<string[]>([]);
    const history = useHistory();

    return (
        <Card className="w-screen h-screen flex flex-col lg:w-11/12 m-auto">
            <Title className="flex " level="h1">
                Din butik
            </Title>
            <Typography>
                Välj de områden som ni brukar använda för klippriser
            </Typography>

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
            <div>
                <Button
                    className="float-right"
                    onClick={() => {
                        Area.storeSelectedAreas(marked);
                        history.push(Navigator.build({ path: '/add-time' }));
                    }}
                >
                    Välj områden
                </Button>
            </div>
        </Card>
    );
}
