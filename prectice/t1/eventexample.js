var EventEmitter = require("events");
var weddingManager = new EventEmitter();

function startWedding() {
    console.log("The wedding ceremony is starting...");
    weddingManager.emit("ceremonyStart");
}

weddingManager.on("ceremonyStart", () => {
    console.log("Decorator prepares the stage");
});

weddingManager.on("ceremonyStart", () => {
    console.log("Photographer takes photos");
});

weddingManager.on("ceremonyStart", () => {
    console.log("Caterers serve food");
});

weddingManager.on("ceremonyStart", () => {
    console.log("DJ plays music");
});

startWedding();

