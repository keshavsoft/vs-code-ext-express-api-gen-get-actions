import * as vscode from 'vscode';

import { startOrchestration } from './V1/orchestration/startOrchestration.js';

const startFunc = (context, uri) => {
    uri = uri || vscode.window.activeTextEditor?.document?.uri;

    return startOrchestration({
        uri
    });
};

export default startFunc