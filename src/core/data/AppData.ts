export interface AppJson {
    name: string;
    assetURL: string;
    workerURL: string;
    cameraDataURL: string;
    sounds: SoundData[];
    videoSettings: VideoSettingData;
    characters: CharacterData[];
}

export interface VideoSettingData {
    width: ScreenData;
    height: ScreenData;
    facingMode: string;
}

export interface ScreenData {
    min: number;
    max: number;
}

export interface SoundData {
    id: string;
    file: string;
}

export interface Vector2Data {
    x: number;
    y: number;
}

export interface CharacterData {
    id: string;
    modelURL: string;
    file: string;
    name: string;
    markerData: MarkerData;
    videoData: VideoData;
    scale: number;
    offset: Vector2Data;
    animations: AnimationData[];
}

export interface VideoData {
    videoURL: string;
}

export interface MarkerData {
    width: number;
    height: number;
    dpi: number;
    url: string;
    offsetX: number;
    offsetY: number;
}

export interface AnimationData {
    file: string;
    modelURL: string;
    type: string;
}

export enum GameEvents {
    DANCE = "GameEvent:CharacterDance",
    DISPLAY_VIDEO_BUTTON = "GameEvent:DanceButton",
    DISPLAY_INFO_BUTTON = "GameEvent:InfoButton",
    DISPLAY_VIDEO_EVENT = "GameEvent:DisplayVideo",
    DISPLAY_MODEL_EVENT = "GameEvent:DisplayModel",
    PLAY_VIDEO_EVENT = "GameEvent:PlayVideoEvent"
}

export class GameParam {
    // default 1080p
    static screenWidth: number = 480;
    static screenHeight: number = 640;
    // default 1080p
    // static screenWidth: number = 640;
    // static screenHeight: number = 480;
}

export enum AnimationType {
    Idle = "idle",
    Walk = "walk",
    Run = "run",
    Turn = "turn"
}
