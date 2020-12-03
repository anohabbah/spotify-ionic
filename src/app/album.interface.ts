export interface Album {
    name: string;
    id: string;
    artists: {name: string}[];
    images: {url: string}[];
    total_tracks: number;
    release_date: string;
}

export type Albums = Album[];

export type Library = { [key: string]: Album };
