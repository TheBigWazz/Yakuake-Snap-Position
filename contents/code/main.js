let targetY = readConfig("TargetY", 46);

function isYakuake(window) {
    return window && window.resourceClass && window.resourceClass.toString().includes("yakuake");
}

function snapYakuake(window) {
    if (!isYakuake(window)) return;
    let geo = Object.assign({}, window.frameGeometry);
    if (geo.y !== targetY) {
        geo.y = targetY;
        window.frameGeometry = geo;
    }
}

function applyToExisting() {
    const clients = workspace.windowList();
    for (let i = 0; i < clients.length; i++) {
        snapYakuake(clients[i]);
    }
}

options.configChanged.connect(function() {
    targetY = readConfig("TargetY", 46);
    applyToExisting();
});

workspace.windowAdded.connect(function(window) {
    snapYakuake(window);
    window.frameGeometryChanged.connect(function() {
        snapYakuake(window);
    });
});

applyToExisting();
