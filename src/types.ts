
export interface Banner {
    url: string;
}

export interface Thumbnail {
    url: string;
}

export interface FanArt {
    banners: Banner[];
    thumbnails: Thumbnail[];
}

export interface MediaWikiImage {
    url: string;
}

export interface Thumbnails {
    small: string;
    large: string;
}

export interface Image {
    thumbnails: Thumbnails;
}

export interface CoverArtArchive {
    front: string;
    back: string;
    artwork: boolean;
    images: Image[];
}

export interface Node {
    id: string;
    mbid: string;
    title: string;
    date: string;
    country: string;
    coverArtArchive: CoverArtArchive;
}

export interface Releases {
    totalCount: number;
    nodes: Node[];
}

export interface Artist {
    name: string;
    country: string;
    type: string;
    gender: string;
    fanArt: FanArt;
    mediaWikiImages: MediaWikiImage[];
    releases: Releases;
}

export interface Lookup {
    artist: Artist;
}

export interface ArtistLookup {
    lookup: Lookup;
}




