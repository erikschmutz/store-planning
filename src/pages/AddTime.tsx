import React, { useEffect, useState } from 'react';
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
import Modal from 'src/components/Modal';
import Input from 'src/components/Input';
import Selector, { Option } from 'src/components/Selector';
import { useForm } from 'react-hook-form';
import { Event } from '../api/Area';

type FormValues = { startWeek?: string; endWeek?: string; name: string };

export default function AddTime() {
    const { register, handleSubmit, errors } = useForm<FormValues>();
    const [selected, setSelected] = useState<string>();
    const [events, setEvents] = useState<Event[]>(Area.getEvents());
    const [viewModal, setViewModal] = useState<boolean>();
    const history = useHistory();
    const areas = Area.getSelectedAreas();

    const onFormValid = (form: FormValues) => {
        Area.addEvent({
            id: Area.getEventId(),
            name: form.name,
            endWeek: !form.endWeek ? undefined : Number.parseInt(form.endWeek),
            startWeek: !form.startWeek
                ? undefined
                : Number.parseInt(form.startWeek),
        });

        setEvents(Area.getEvents());
        setViewModal(false);
    };

    const onFormInvalid = () => {};

    return (
        <Card className="w-screen h-screen flex flex-col lg:w-11/12 m-auto">
            <Title className="flex " level="h1">
                Lägg till klipppriser
            </Title>
            <Typography>
                Klicka på ett område för att lägga dit ett klippris
            </Typography>

            <div className="flex pt-10 pb-10 px-1 w-full overflow-scroll">
                {events.map((v) => (
                    <Card
                        onClose={() => {
                            Area.deleteEvent(v.id);
                            setEvents(Area.getEvents());
                        }}
                        className="mx-5"
                    >
                        <Typography>{v.name}</Typography>
                    </Card>
                ))}
            </div>
            <Modal visible={viewModal === true}>
                <form onSubmit={handleSubmit(onFormValid, onFormInvalid)}>
                    <Title>Lägg till ny </Title>
                    <Typography>Namn på produkten</Typography>
                    <Input name="name" ref={register} />
                    <Typography>
                        Start vecka{' '}
                        <Selector ref={register} name="startWeek">
                            {new Array(52).fill(0).map((_, i: number) => (
                                <Option value={i.toString()}>{i}</Option>
                            ))}
                        </Selector>
                    </Typography>

                    <Typography>
                        Slut vecka{' '}
                        <Selector ref={register} name="endWeek">
                            {new Array(52).fill(0).map((_, i: number) => (
                                <Option value={i.toString()}>{i}</Option>
                            ))}
                        </Selector>
                    </Typography>

                    <Button className="float-right mt-5">Lägg till</Button>
                </form>
            </Modal>

            <Divider />
            <div className="flex-1 w-full mx-auto text-lg h-full rounded overflow-scroll">
                {areas && (
                    <StoreMap
                        onItemClick={(id) => {
                            setSelected(id);
                        }}
                        markedIds={areas}
                        svg={svg}
                    />
                )}
                {!areas && (
                    <>
                        <Title>Du har inte lagd dit några områden</Title>
                        <Button
                            className="float-right"
                            onClick={() => {
                                history.push(
                                    Navigator.build({ path: '/area-select' }),
                                );
                            }}
                        >
                            Välj områden
                        </Button>
                    </>
                )}
            </div>
            <div>
                <Button
                    className="float-right"
                    onClick={() => {
                        setViewModal(true);
                    }}
                >
                    Lägg till nytt klipp
                </Button>
            </div>
        </Card>
    );
}
