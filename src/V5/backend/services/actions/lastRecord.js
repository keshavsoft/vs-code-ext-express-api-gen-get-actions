import { lastRecord } from 'kschema-fs-api-gen-get-actions';

import { executeGenerationTask } from "../generatorService.js";

const startFunc = async ({ panel, tableName, toPath, inTargetPath }) => {
    await executeGenerationTask({
        panel,
        actionLabel: "With Header",
        tableName,
        toPath,
        inTargetPath,
        generateFunc: lastRecord
    });
};

export default startFunc;
