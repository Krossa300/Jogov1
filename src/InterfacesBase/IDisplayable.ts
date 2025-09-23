export interface IDisplayable {
    sprite_path?: string;
    sprite_width?: number;
    sprite_height?: number;
    sprite_state?: string;

    show(): void;
    hide(): void;
}