import { showAll } from 'kschema-fs-api-gen-get-actions';

// import { withHeader } from "json-crud-ui-table";
import { executeGenerationTask } from "../generatorService.js";

const startFunc = async ({ panel, tableName, toPath, inTargetPath }) => {
    await executeGenerationTask({
        panel,
        actionLabel: "With Header",
        tableName,
        toPath,
        inTargetPath,
        generateFunc: showAll
    });
};

export default startFunc;
