import path from 'path';
import { fileURLToPath } from 'url';
import * as vscode from 'vscode';

import { insertGenPk } from 'kschema-fs-api-gen-post-actions';

import { openFileInEditor } from '../services/openFile.js';
import { createHttpFile } from '../services/CreateHttpFile/start.js';

export async function runFeatureOrchestration({ context, inTableName, uri }) {
    const endpoint = "Insert";
    const workspace = vscode.workspace.workspaceFolders?.[0].uri.fsPath;
    const text = await vscode.workspace.fs.readFile(uri);

    const fileText = Buffer
        .from(text)
        .toString("utf8");
    const match = fileText.match(
        /const\s+tableName\s*=\s*["'`](.*?)["'`]/
    );

    const tableName = match?.[1];

    // fix inside localContext
    const localContext = {
        ...context,
        endpointFolder: path.join(context.targetPath, endpoint),
        routeFilePath: path.join(context.targetPath, endpoint),
        templatePath: fileURLToPath(new URL('../templates/Base', import.meta.url))
    };

    await insertGenPk({
        toPath: context.targetPath,
        toConfigPath: path.join(workspace, "Config", "Schemas", `${tableName}.json`),
        inTargetPath: workspace
    });

    // createHttpFile({
    //     inTargetPath: localContext.endpointFolder,
    //     inTableName: tableName
    // });

    openFileInEditor({
        inFolderPath: localContext.routeFilePath
    })

    return { endpoint };
};