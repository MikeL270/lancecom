import type { projectEntry } from "../../ts/types";

export const portfolioState = $state({
    projects: 
    // I will come back and complete the descriptions later, I am very tired
            [
                {
                    name: '10G Home Server',
                    slug: '10g-home-server',
                    startDate: new Date(2025, 0),
                    endDate: new Date(2025, 0),
                    image: '/images/rack.webp',
                    brief: 'A custom 2U proxmox server with 10G networking.',
                    description: `
                    <p>The 10G rack mount server project is the first step in building out my 
                    homelab. Originally the system was my first pc that I built in high school, 
                    but after a set of upgrades the last remaining component is the CPU.</p>
    
                    <p>The server includes two 2x 10G Intel Nics and runs Proxmox for its host OS.
                    One of the cards is passed through to a virtualized firewall. The system also 
                    hosts a docker server which runs a selection of network utilities and software.</p>
                    <h5>Specs:</h5>
                    <ul class="list no-space border">
                        <li>CPU - Ryzen 5 2600x</li>
                        <li>RAM - 64GB</li>
                        <li>Storage - 4tb HDD, ~500GB SSD</li>
                        <li>Networking - 4x 10GB, 1x 1GB</li>
                    </ul>`,
                },
                {
                    name: 'Candy Dispenser',
                    slug: 'arduino-candy-dispenser',
                    startDate: new Date(2023, 4),
                    endDate: new Date(2024, 3),
                    image: '/images/candydispenser.webp',
                    brief: 'An arduindo based candy dispenser.',
                    description: `
                    <p>The arduino candy dispenser was developed in collaboration between Central Wyoming College 
                    and The University of Wyoming. This was the first research project I worked on. I worked on 
                    the pcb that held the micro controller and the circuit python firmware that ran on it.</p>
                    `
                },
                {
                    name: 'Divorce Letter Haikus',
                    slug: 'divorce-letter-haikus',
                    startDate: new Date(2024, 0),
                    endDate: new Date(2024, 3), 
                    image: '/images/divorceletters.webp',
                    brief: 'A divorce letter haiku generator powered by chatgpt.',
                    description: `
                    <p>
                    The divorce letter haiku generator was born from classroom banter in the twilight hours of
                    my SDEV 1200: Advanced Python Programming class. I needed to find something to make as my 
                    final project and landed on making a joke from class into a real app.</p>
                    <p>
                    This was my first full stack web app, and as such several lessons were learned. The Divorce
                    Letter Haiku Generator is a basic flask app with axios on the front end to handle ajax requests. 
                    The backend forwarded request paramaters to a GPT agent via the openai API, and a few seconds later
                    got back a haiku poem informing someone of their divorce.
                    </p>
                    <p>
                    The theme was complete with non-serious ai generated background images, one for each anger level 1
                    - 10.
                    </p>`
                },
                {
                    name: '1976 f150 Restoration',
                    slug: '1976-f150-resoration',
                    startDate: new Date(2023, 0),
                    endDate: 'Ongoing', 
                    image: '/images/truck.webp',
                    brief: 'Restoring my 1976 Ford f150 with a 300 inline 6.'
                },
                {
                    name: '2021 f350 rear bumper',
                    slug: '2021-f350-rear-bumper',
                    startDate: new Date(2025, 11),
                    endDate: 'Ongoing',
                    image: '/images/350bumper.webp',
                    brief: 'Replacing the bumper on my dad\'s truck.'
                },
                {
                    name: 'Silent ICX6450-48p Enterprise Switch',
                    slug: 'silent-icx645-48p-enterprise-switch',
                    startDate: new Date(2024, 3),
                    endDate: new Date(2024, 3),
                    image: '/images/quietfan.webp',
                    brief: 'Shutting an enterprise switch up.'
                },
                {
                    name: 'A really big desk',
                    slug: 'a-really-big-desk',
                    startDate: new Date(2019, 0),
                    endDate: new Date(2024, 7),
                    image: '/images/bigdesk.webp',
                    brief: 'A really big desk I built in high school.'
                }
            ] as projectEntry[]
})