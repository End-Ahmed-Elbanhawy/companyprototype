import { Card, CardHeader, CardTitle } from "../ui/card";
export interface ProjectData {
    id: number;
    title: string;
    category: string;
    image: string;
};

interface ProjectCardProps {
    project: ProjectData;
};

export default function ProjectCard({ project }: ProjectCardProps) {
    return (
        <Card className="relative w-full h-64 p-0 mx-auto overflow-hidden bg-transparent rounded-sm group">
            <div className="absolute inset-0 z-10 bg-linear-to-t from-brand-secondary/90 via-brand-secondary/40 to-transparent" />
            <img
                src={project.image}
                alt="Project cover"
                className="relative z-0 block object-cover w-full h-full transition-all duration-200 ease-in-out group-hover:scale-110"
            />
            <CardHeader className="absolute bottom-0 left-0 z-20 w-full p-6 bg-transparent">
                <span className="mb-1 text-xs font-bold tracking-widest uppercase bg-transparent w-fit text-brand-primary">{project.category}</span>
                <CardTitle className="text-lg font-bold leading-tight uppercase bg-transparent text-brand-tertiary">{project.title}</CardTitle>
            </CardHeader>
        </Card>
    );
};