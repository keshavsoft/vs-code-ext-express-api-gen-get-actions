import { max } from 'kschema-fs-api-gen-get-actions';

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
        generateFunc: max,
        inPort, inFolderName
    });
};

export default startFunc;
