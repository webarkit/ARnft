export var GameEvents;
(function (GameEvents) {
    GameEvents["DANCE"] = "GameEvent:CharacterDance";
    GameEvents["DISPLAY_VIDEO_BUTTON"] = "GameEvent:DanceButton";
    GameEvents["DISPLAY_INFO_BUTTON"] = "GameEvent:InfoButton";
    GameEvents["DISPLAY_VIDEO_EVENT"] = "GameEvent:DisplayVideo";
    GameEvents["DISPLAY_MODEL_EVENT"] = "GameEvent:DisplayModel";
    GameEvents["PLAY_VIDEO_EVENT"] = "GameEvent:PlayVideoEvent";
})(GameEvents || (GameEvents = {}));
export class GameParam {
}
GameParam.screenWidth = 480;
GameParam.screenHeight = 640;
export var AnimationType;
(function (AnimationType) {
    AnimationType["Idle"] = "idle";
    AnimationType["Walk"] = "walk";
    AnimationType["Run"] = "run";
    AnimationType["Turn"] = "turn";
})(AnimationType || (AnimationType = {}));
//# sourceMappingURL=AppData.js.map