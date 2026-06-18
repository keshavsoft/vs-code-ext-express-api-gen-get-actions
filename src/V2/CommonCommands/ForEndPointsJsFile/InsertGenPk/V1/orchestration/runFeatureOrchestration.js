import path from 'path';
import { fileURLToPath } from 'url';

import { withMail } from 'kschema-fs-api-gen-actions';

import { openFileInEditor } from '../services/openFile.js';
import { createHttpFile } from '../services/CreateHttpFile/start.js';

export async function runFeatureOrchestration({ context, inTableName }) {
    const endpoint = "Insert";

    // fix inside localContext
    const localContext = {
        ...context,
        endpointFolder: path.join(context.targetPath, endpoint),
        routeFilePath: path.join(context.targetPath, endpoint),
        templatePath: fileURLToPath(new URL('../templates/Base', import.meta.url))
    };

    await withMail({ toPath: context.targetPath });

    // inside runFeatureOrchestration
    // copy({
    //     templatePath: localContext.templatePath,
    //     routeFilePath: localContext.routeFilePath,
    //     endpointFolder: localContext.endpointFolder
    // });

    // updateJsFile({
    //     appJsPath: localContext.appJsPath, endpoint
    // });

    createHttpFile({
        inTargetPath: localContext.endpointFolder,
        inTableName
    });

    openFileInEditor({
        inFolderPath: localContext.routeFilePath
    })

    return { endpoint };
};