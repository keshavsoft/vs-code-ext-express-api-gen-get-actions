export async function executeGenerationTask({
    panel,
    actionLabel,
    tableName,
    toPath,
    inTargetPath,
    generateFunc,
    inPort = 4000, inFolderName
}) {
    panel.webview.postMessage({
        type: "status",
        text: "⏳ Generating CRUD..."
    });

    try {
        await generateFunc({
            showLog: true,
            isAnnounce: true,
            toPath,
            tableName,
            inTargetPath,
            inGenerateRest: true,
            inPort, inFolderName
        });

        panel.webview.postMessage({
            type: "complete",
            html: `
                <div class="font-semibold mb-2">
                    ✅ Generation Complete
                </div>
                <div><b>Action:</b> ${actionLabel}</div>
                ${tableName ? `<div><b>Table:</b> ${tableName}</div>` : ""}
                <div><b>Output:</b> ${toPath}</div>
            `
        });
    } catch (error) {
        panel.webview.postMessage({
            type: "status",
            text: `❌ Generation failed: ${error.message}`
        });
    }
}
