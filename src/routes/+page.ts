import type { PageLoad } from './$types';

export const load: PageLoad = ({ params }) => {
    return {
        eductation: [
        {
            years: '2022 - 2024',
            institution: 'Central Wyoming College',
            degree: 'Associates of Applied Science in Computer Technology'
        },
        {
            years: '2024 - Present',
            institution: 'Central Wyoming College',
            degree: 'Associates of Science in Applied Software Development'
        },
        {
            years: '2024 - Present',
            institution: 'University of Wyoming',
            degree: 'Bachelor\'s of Science in Applied Software Development'
        },
    ],
    certification: [
        {
            years: '2023 - 2026',
            issuer: 'Comptia',
            certification: '220-1100 series Comptia A+'
        }
    ]
    }
}