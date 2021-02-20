import Card from 'src/components/Card';
import Divider from 'src/components/Divider';
import Title from 'src/components/Title';
import Typography from 'src/components/Typography';
import Movie from 'src/views/Movie';
import overlay from 'src/assets/items.svg';
import image from 'src/assets/image.png';
import { ImageTransition } from 'src/views/ImageTransition';
import Button from 'src/components/Button';
import { useHistory } from 'react-router-dom';
import { Navigator } from 'src/utils/Navigator';

export default function Data() {
    const history = useHistory();

    return (
        <div className="flex">
            <Card className="w-screen h-screen flex flex-col lg:w-4/6 m-auto">
                <Title className="flex " level="h1">
                    Tolkar din butik...
                </Title>

                <Divider />

                <ImageTransition
                    className="flex-1 w-full mx-auto text-lg h-full rounded overflow-hidden"
                    image={image}
                    svg={overlay}
                    onComplete={() => {
                        history.push(Navigator.build({ path: '/store' }));
                    }}
                />

                <div className="w-full ">
                    <Button
                        className="float-right"
                        onClick={() => {
                            history.push(Navigator.build({ path: '/store' }));
                        }}
                    >
                        Gå vidare
                    </Button>
                </div>
            </Card>
        </div>
    );
}
