export interface IProjeto {
    slug: string;
    title: string;
    type: string;
    description: string;
    link: string;
    thumbnail: string;
}

export interface ProjetosProps {
    projetos: IProjeto[];
}