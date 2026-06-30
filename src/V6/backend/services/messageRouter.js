import path from "path";
import fs from "fs";

import findAction from "./actions/find.js";
import showAllAction from "./actions/showAll.js";
import filterQueryAction from "./actions/filterQuery.js";
import lastRecordAction from "./actions/lastRecord.js";
import firstRecordAction from "./actions/firstRecord.js";

export async function handleWebviewMessage({ message, panel, toPath, inTargetPath,
    inPort
}) {
    let targetPath = toPath;
    if (message.newFolderName) {
        targetPath = path.join(toPath, message.newFolderName);
        if (!fs.existsSync(targetPath)) {
            fs.mkdirSync(targetPath, { recursive: true });
        }
    }

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
                toPath: targetPath,
                inTargetPath, inPort
            });
            break;

    }
}
