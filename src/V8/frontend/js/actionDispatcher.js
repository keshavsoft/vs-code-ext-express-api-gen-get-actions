function getNewFolderName() {
    const input = document.getElementById("folder-name");
    return input ? input.value.trim() : "";
}

function showAll() {
    sendAction("showAll", { newFolderName: getNewFolderName() });
}

function find() {
    sendAction("find", { newFolderName: getNewFolderName() });
}

function filterQuery() {
    sendAction("filterQuery", { newFolderName: getNewFolderName() });
};

function lastRecord() {
    sendAction("lastRecord", { newFolderName: getNewFolderName() });
};

function firstRecord() {
    sendAction("firstRecord", { newFolderName: getNewFolderName() });
};

function distinct() {
    sendAction("distinct", { newFolderName: getNewFolderName() });
};
