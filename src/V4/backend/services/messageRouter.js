import findAction from "./actions/find.js";
import showAllAction from "./actions/showAll.js";
import filterQueryAction from "./actions/filterQuery.js";

export async function handleWebviewMessage({ message, panel, toPath, schemasPath }) {
    switch (message.action) {
        case "showAll":
            await showAllAction({
                panel,
                tableName: message.tableName,
                toPath,
                schemasPath
            });
            break;

        case "find":
            await findAction({
                panel,
                tableName: message.tableName,
                toPath,
                schemasPath
            });
            break;

        case "filterQuery":
            await filterQueryAction({
                panel,
                tableName: message.tableName,
                toPath,
                schemasPath
            });
            break;
    }
}
