import findAction from "./actions/find.js";

export async function handleWebviewMessage({ message, panel, toPath, schemasPath }) {
    switch (message.action) {
        case "showAll":
            await findAction({
                panel,
                tableName: message.tableName,
                toPath,
                schemasPath
            });
            break;

        case "Find":
            await findAction({
                panel,
                tableName: message.tableName,
                toPath,
                schemasPath
            });
            break;

        case "FilterQuery":
            await findAction({
                panel,
                tableName: message.tableName,
                toPath,
                schemasPath
            });
            break;
    }
}
