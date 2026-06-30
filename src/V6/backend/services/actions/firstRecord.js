import { firstRecord } from 'kschema-fs-api-gen-get-actions';

import { executeGenerationTask } from "../generatorService.js";

const startFunc = async ({ panel, tableName, toPath, inTargetPath,
    inPort
}) => {

    await executeGenerationTask({
        panel,
        actionLabel: "With Header",
        tableName,
        toPath,
        inTargetPath,
        generateFunc: firstRecord,
        inPort
    });
};

export default startFunc;
