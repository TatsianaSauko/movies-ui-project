export interface Movie {
    id: number;
    title: string;
    originalTitle: string;
    language: string;
    releaseYear: number;
    releaseDate: string;
    genres: string[];
    plot: string;
    runtime: number;
    budget: number | null;
    revenue: number | null;
    homepage: string;
    status: string;
    posterUrl: string;
    backdropUrl: string;
    trailerUrl: string;
    trailerYouTubeId: string;
    tmdbRating: number;
    searchL: string;
    keywords: string[];
    countriesOfOrigin: string[];
    languages: string[];
    cast: string[];
    director: string;
    production: string | null;
    awardsSummary: string | null;
}
