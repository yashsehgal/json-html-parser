
function logMessage(message) {
    if (!message) return;
    console.log("(MESSAGE): ", message);
}
function warnLog(message) {
    if (!message) return;
    console.warn("(WARNING): ", message);
}
function errorLog(message) {
    if (!message) return;
    console.error("(ERROR): ", message);
}
function infoLog(message) {
    if (!message) return;
    console.info("(INFO): ", message);
}

module.exports = {
    logMessage,
    warnLog,
    errorLog,
    infoLog
}