import findAction from "./actions/find.js";
import showAllAction from "./actions/showAll.js";
import filterQueryAction from "./actions/filterQuery.js";
import lastRecordAction from "./actions/lastRecord.js";
import firstRecordAction from "./actions/firstRecord.js";

export async function handleWebviewMessage({ message, panel, toPath, inTargetPath,
    inPort
}) {

    switch (message.action) {
        case "showAll":
            await showAllAction({
                panel,
                tableName: message.tableName,
                toPath,
                inTargetPath, inPort
            });
            break;

        case "find":
            await findAction({
                panel,
                tableName: message.tableName,
                toPath,
                inTargetPath, inPort
            });
            break;

        case "filterQuery":
            await filterQueryAction({
                panel,
                tableName: message.tableName,
                toPath,
                inTargetPath, inPort
            });
            break;

        case "lastRecord":
            await lastRecordAction({
                panel,
                tableName: message.tableName,
                toPath,
                inTargetPath, inPort
            });
            break;

        case "firstRecord":
            await firstRecordAction({
                panel,
                tableName: message.tableName,
                toPath,
                inTargetPath, inPort
            });
            break;

    }
}
