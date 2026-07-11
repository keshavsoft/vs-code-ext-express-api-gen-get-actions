import { distinct } from 'kschema-fs-api-gen-get-actions';

import { executeGenerationTask } from "../generatorService.js";

const startFunc = async ({ panel, tableName, toPath, inTargetPath,
    inPort, inFolderName
}) => {

    await executeGenerationTask({
        panel,
        actionLabel: "With Header",
        tableName,
        toPath,
        inTargetPath,
        generateFunc: distinct,
        inPort, inFolderName
    });
};

export default startFunc;
