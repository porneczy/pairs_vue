export type Player = {
    score: number;
    selectedCards: { id: number; icon: string | undefined }[];
};

export type Card = {
    icon: string | undefined;
    isVisible: boolean;
    isMatched: boolean;
    id: number;
};

export type CardListStore = {
    Cards: Card[];
};

export type PlayerStore = {
    player: Player;
};
