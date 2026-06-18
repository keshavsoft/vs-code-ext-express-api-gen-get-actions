import * as vscode from 'vscode';
import fs from 'fs';
import path from 'path';

import { startOrchestration } from "../../CommonCommands/ForEndPointsJsFile/InsertGenPk/V2/orchestration/startOrchestration.js";
import ShowAll from "../../CommonCommands/ForEndPointsJsFile/ShowAll/v13/orchestration/startOrchestration.js";

const splitEditor = async (context, uri) => {
    const panel = vscode.window.createWebviewPanel(
        "endpointUi",
        "Endpoint UI",
        vscode.ViewColumn.Beside,
        {
            enableScripts: true
        }
    );

    panel.webview.onDidReceiveMessage(
        (message) => {
            if (message.action === "InsertGenPk") {
                startOrchestration({ uri });
            };

            if (message.action === "showAll") {
                ShowAll({ uri });
            };
        }
    );

    panel.webview.html = fs.readFileSync(
        path.join(import.meta.dirname, "ui", "index.html"),
        "utf8"
    );
};

export default splitEditor;