import { CardItem } from '../types/types';
import TimerOutlinedIcon from '@material-ui/icons/TimerOutlined';
import TagFacesOutlinedIcon from '@material-ui/icons/TagFacesOutlined';
import DehazeOutlinedIcon from '@material-ui/icons/DehazeOutlined';
import FilterTiltShiftOutlinedIcon from '@material-ui/icons/FilterTiltShiftOutlined';
import LastPageOutlinedIcon from '@material-ui/icons/LastPageOutlined';
import LayersIcon from '@material-ui/icons/Layers';

//todo: add more content here
export const PlasmStrength: CardItem[] = [
    {
        id: 1,
        icon: LayersIcon,
        heading: 'Layer 2',
        content: "Plasm Network is in it's core, bringing Layer 2 to the Polkadot network",
    },
    {
        id: 2,
        icon: TimerOutlinedIcon,
        heading: 'Fast transaction',
        content:
            'By leveraging the transactions to the child chain, Plasm Network is able to handle fast and high capacity transactions',
    },
    {
        id: 3,
        icon: TagFacesOutlinedIcon,
        heading: 'Optimistic Virtual Machine',
        content:
            'Plasm Network implements OVM so that any dApps can run under a unified environment with minimum issues',
    },
    {
        id: 4,
        icon: DehazeOutlinedIcon,
        heading: 'Substrate',
        content:
            'Plasm Network is built with Substrate, a forkless scalable blockchain framework that uses WebAssembly',
    },
    {
        id: 5,
        icon: FilterTiltShiftOutlinedIcon,
        heading: 'Parachain',
        content:
            'Plasm Network will become a Parachain that provides interoperability with other blockchains who are either a Parachian themselves or via a Bridge',
    },
    {
        id: 6,
        icon: LastPageOutlinedIcon,
        heading: 'Open source',
        content: 'The Plasm ecosystem is open source, we encourage everyone to look in and join the future',
    },
];
