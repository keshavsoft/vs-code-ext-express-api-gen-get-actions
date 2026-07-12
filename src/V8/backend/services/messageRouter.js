import findAction from "./actions/find.js";
import showAllAction from "./actions/showAll.js";
import filterQueryAction from "./actions/filterQuery.js";
import lastRecordAction from "./actions/lastRecord.js";
import firstRecordAction from "./actions/firstRecord.js";

import distinct from "./actions/distinct.js";
import count from "./actions/count.js";
import min from "./actions/min.js";
import max from "./actions/max.js";

export async function handleWebviewMessage({ message, panel, toPath, inTargetPath,
    inPort
}) {
    let targetPath = toPath;

    switch (message.action) {
        case "showAll":
            await showAllAction({
                panel,
                tableName: message.tableName,
                toPath: targetPath,
                inTargetPath, inPort
            });
            break;

        case "find":
            await findAction({
                panel,
                tableName: message.tableName,
                toPath: targetPath,
                inTargetPath, inPort
            });
            break;

        case "filterQuery":
            await filterQueryAction({
                panel,
                tableName: message.tableName,
                toPath: targetPath,
                inTargetPath, inPort
            });
            break;

        case "lastRecord":
            await lastRecordAction({
                panel,
                tableName: message.tableName,
                toPath: targetPath,
                inTargetPath, inPort
            });
            break;

        case "firstRecord":
            await firstRecordAction({
                panel,
                tableName: message.tableName,
                toPath,
                inTargetPath, inPort, inFolderName: message.newFolderName
            });
            break;

        case "distinct":
            await distinct({
                panel,
                tableName: message.tableName,
                toPath,
                inTargetPath, inPort, inFolderName: message.newFolderName
            });
            break;

        case "count":
            await count({
                panel,
                tableName: message.tableName,
                toPath,
                inTargetPath, inPort, inFolderName: message.newFolderName
            });
            break;


        case "min":
            await min({
                panel,
                tableName: message.tableName,
                toPath,
                inTargetPath, inPort, inFolderName: message.newFolderName
            });
            break;

        case "max":
            await max({
                panel,
                tableName: message.tableName,
                toPath,
                inTargetPath, inPort, inFolderName: message.newFolderName
            });
            break;

    }
}
