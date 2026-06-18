import * as vscode from 'vscode';

// import { alterCommand } from '../CommonCommands/ForEndPointsJsFile/Alter/start.js';
import { getRegisterCommend } from './ForGetMethods/entryFile.js';
import { deleteRegisterCommands } from './ForDeleteMethods/entryFile.js';
import { postRegisterCommend } from './ForPostMethods/entryFile.js';
import splitEditor from './ForSplit/index.js';

const registerAllCommands = (context) => {
    const splitCommand = vscode.commands.registerCommand(
        "extension.split", (uri) => {
            splitEditor(context, uri)
        }
    );
    async function splitEditor1() {
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
                if (message.command === "generate") {
                    vscode.window.showInformationMessage(
                        "Generate clicked"
                    );
                }
            }
        );

        panel.webview.html = `
        <!DOCTYPE html>
        <html>
        <body>
            <h2>Endpoint UI</h2>

            <button id="btnGenerate">
                Generate
            </button>

            <script>
                document
                    .getElementById("btnGenerate")
                    .addEventListener("click", () => {
                        alert("Button clicked");
                    });

                    const vscode = acquireVsCodeApi();

document
    .getElementById("btnGenerate")
    .addEventListener("click", () => {
        vscode.postMessage({
            command: "generate"
        });
    });

            </script>
        </body>
        </html>
    `;
    };


    async function splitEditor1() {
        await vscode.commands.executeCommand(
            "workbench.action.splitEditorRight"
        );
    }

    const getEndPoint = vscode.commands.registerCommand(
        'extension.editor.title.endpoints.get',
        (uri) => getRegisterCommend(context, uri)
    );

    // Other commands
    const postEndPoint = vscode.commands.registerCommand(
        'extension.editor.title.endpoints.insert',
        (uri) => postRegisterCommend(context, uri)
    );

    // const alterEndPoint = vscode.commands.registerCommand(
    //     'extension.editor.title.endpoints.alter',
    //     (uri) => alterCommand(context, uri)
    // );

    const deleteCommands = vscode.commands.registerCommand(
        'extension.editor.title.endpoints.delete',
        (uri) => deleteRegisterCommands({ context, uri })
    );

    context.subscriptions.push(
        getEndPoint,
        postEndPoint,
        deleteCommands,
        splitCommand
    );
};

export default registerAllCommands;