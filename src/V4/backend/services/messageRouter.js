import findAction from "./actions/find.js";
import showAllAction from "./actions/showAll.js";
import filterQueryAction from "./actions/filterQuery.js";
import lastRecordAction from "./actions/lastRecord.js";

export async function handleWebviewMessage({ message, panel, toPath, inTargetPath }) {
    switch (message.action) {
        case "showAll":
            await showAllAction({
                panel,
                tableName: message.tableName,
                toPath,
                inTargetPath
            });
            break;

        case "find":
            await findAction({
                panel,
                tableName: message.tableName,
                toPath,
                inTargetPath
            });
            break;

        case "filterQuery":
            await filterQueryAction({
                panel,
                tableName: message.tableName,
                toPath,
                inTargetPath
            });
            break;

        case "lastRecord":
            await lastRecordAction({
                panel,
                tableName: message.tableName,
                toPath,
                inTargetPath
            });
            break;

    }
}
