import { showAll } from "kschema-fs-api-gen-actions";

const copyTemplate = async ({ targetPath }) => {
    await showAll({
        toPath: targetPath
    });
};

export default copyTemplate;
