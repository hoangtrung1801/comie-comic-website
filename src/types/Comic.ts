export default interface Comic {
    id: string;
    title: string;
    imageSrc: string;
    author: string;
    status: string;
    categories: string[];
    views: string;
    likes: string;
    description: string;
    chapters: {
        chapterId: number;
        updateAt: string;
        href: string;
    }[];
}
