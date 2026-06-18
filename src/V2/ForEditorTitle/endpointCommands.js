import * as vscode from 'vscode';

import splitEditor from './ForSplit/index.js';

const registerAllCommands = (context) => {
    const splitCommand = vscode.commands.registerCommand(
        "extension.split", (uri) => {
            splitEditor(context, uri)
        }
    );
    
    context.subscriptions.push(
        splitCommand
    );
};

export default registerAllCommands;