import type { PageLoad } from './$types';
import type { educationEntry } from '../../ts/types';

export const load: PageLoad = ({ params }) => {
    return {
        eductation: [
        {
            startDate: new Date(2022, 0, 0),
            endDate: new Date(2024, 0, 0),
            institution: 'Central Wyoming College',
            degree: 'Associates of Applied Science in Computer Technology'
        },
        {
            startDate: new Date(2024, 0, 0),
            endDate:'Current',
            institution: 'Central Wyoming College',
            degree: 'Associates of Science in Applied Software Development'
        },
        {
            startDate: new Date(2024, 0, 0),
            endDate: 'Current',
            institution: 'University of Wyoming',
            degree: 'Bachelor\'s of Science in Applied Software Development'
        },
    ] as educationEntry[],
    certification: [
        {
            startDate: new Date(2023, 0, 0),
            endDate: new Date(2026, 0, 0),
            issuer: 'Comptia',
            certification: '220-1100 series Comptia A+'
        },
        {
            startDate: new Date(2022, 0, 0),
            endDate: 'Never',
            issuer: 'TestOut',
            certification: 'Network Pro'
        },
        {
            startDate: new Date(2023, 0, 0),
            endDate: 'Never',
            issuer: 'TestOut',
            certification: 'Security Pro'
        }
    ],
    workHistory: [
        {
            startDate: new Date(2024, 0, 0),
            endDate: 'Present',
            employer: 'University of Wyoming',
            position: 'Software Developer - Undergraduate Research Assistant',
        },
        { 
            startDate: new Date(2024, 0, 0),
            endDate: new Date(2025, 0, 0),
            employer: 'UWYO 3D Visualization Center',
            position: 'Game Development Intern'
        },
        {
            startDate: new Date(2023, 0, 0),
            endDate: new Date(2023, 0, 0),
            employer: 'Central Wyoming College',
            position: 'Network Engineer\'s intern'
        },
        {
            startDate: new Date(2023, 0, 0),
            endDate: new Date(2024, 0, 0),
            employer: 'University of Wyoming',
            position: 'GIRRLS Project Firmware Developer'
        },
        {
            startDate: new Date(2024, 0, 0),
            endDate: new Date(2024, 7),
            employer: 'University of Wyoming (NSF REU)',
            position: 'Undergraduate Research Assistant'
        },
        {
            startDate: new Date(2022, 0, 0),
            endDate: new Date(2024, 0, 0),
            employer: 'The Soldier\'s House of Fremont County',
            position: 'Technological Advisor to the Board'
        }
    ]
    }
}