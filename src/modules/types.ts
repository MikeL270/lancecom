export type workHistoryEntry = {
    startDate: Date;
    endDate: Date | string;
    employer: string;
    position: string;
};

export type educationEntry = {
    startDate: Date;
    endDate: Date | string;
    institution: string;
    degree: string;
};

export type certificationEntry = {
    startDate: Date;
    endDate: Date | string;
    employer: string;
    position: string;
};

export type projectEntry = {
    name: string;
    started: Date;
    completed: Date | string;
    image: string;
    brief: string;
    description:string;
}

export type Entry = certificationEntry | educationEntry | workHistoryEntry;

export default 0;