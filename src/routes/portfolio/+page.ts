import type { PageLoad } from './$types';
import type { projectEntry } from '../../modules/types';

export const load: PageLoad = ({ params }) => {
    // Really had to stop myself from integrating to a database here. Maybe one day...
    return {
        projects: 
        [
            {
                name: '10G Home Server',
                started: new Date(2025, 0),
                completed: new Date(2025, 0),
                image: '/images/rack.webp',
                brief: 'A custom 2U proxmox server with 10G networking.',
                description: `
                <p>The 10G rack mount server project is the first step in building out my 
                homelab. Originally the system was my first pc that I built in high school, 
                but after a set of upgrades the last remaining component is the CPU.</p>

                <p>The server includes two 2x 10G Intel Nics and runs Proxmox for its host OS.
                One of the cards is passed through to a virtualized firewall. The system also 
                hosts a docker server which runs a selection of network utilities and software.</p>`,
            },
            {
                name: 'Arduino Candy Dispenser',
                started: new Date(2023, 0),
                completed: new Date(2024, 0),
                image: '/images/candydispenser.webp',
                brief: 'An arduindo based candy dispenser with circuit python firmware.',
            },
            {
                name: 'Divorce Letter Haikus',
                started: new Date(2024, 0),
                completed: new Date(2024, 0), 
                image: '/images/divorceletters.webp',
                brief: 'A divorce letter haiku generator powered by chatgpt.'
            },
            {
                name: '1976 f150 Restoration',
                started: new Date(2023, 0),
                completed: 'Ongoing', 
                image: '/images/truck.webp',
                brief: 'Restoring my 1976 Ford f150 with a 300 inline 6.'
            },
            {
                name: '2021 f350 rear bumper',
                started: new Date(2025, 11),
                completed: 'Ongoing',
                image: '/images/350bumper.webp',
                brief: 'Replacing the bumper on my dad\'s truck after some genius hit him.'
            },
            {
                name: 'Silent ICX6450-48p Enterprise Switch',
                started: new Date(2024, 3),
                completed: new Date(2024, 3),
                image: '/images/quietfan.webp',
                brief: 'Shutting an enterprise switch up.'
            },
            {
                name: 'A really big desk',
                started: new Date(2019, 0),
                completed: new Date(2024, 7),
                image: '/images/bigdesk.webp',
                brief: 'A really big desk I built in high school.'
            }
        ] as projectEntry[]
    }
}