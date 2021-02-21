// Activate the console
Vars.enableConsole = true;

// Run the other scripts
require("content/unlock");
require("content/blocks");
require("content/turrets");
// h require("content/cursed");
const mapVariable = extend(SectorPreset, "mewsmap", Planet.serpulo, 174 , {
    localizedName: "sadland",
    description: "youll never smile again",
    difficulty: 1
})
