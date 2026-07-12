import * as apiActions from 'kschema-fs-api-gen-get-actions';
import { executeGenerationTask } from "./generatorService.js";

export async function handleWebviewMessage({ message, panel, toPath, inTargetPath,
    inPort
}) {
    const action = message.action;

    if (action in apiActions) {
        const generateFunc = apiActions[action];
        await executeGenerationTask({
            panel,
            actionLabel: "With Header",
            tableName: message.tableName,
            toPath,
            inTargetPath,
            generateFunc,
            inPort,
            inFolderName: message.newFolderName
        });
    }
}
