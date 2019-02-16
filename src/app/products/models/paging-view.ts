export interface IPagingView {
    total_items: number;
    first_page: number;
    last_page: number;
    pages: IPageView[];
}

export interface IPageView {
    page: number;
    url: string;
    current_page: boolean;
}
