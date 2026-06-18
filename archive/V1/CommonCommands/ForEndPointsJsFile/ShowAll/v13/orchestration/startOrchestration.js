import { resolveContext } from '../utils/context.js';
import { runFeatureOrchestration } from './runFeatureOrchestration.js';

const startOrchestration = async ({ uri }) => {
    try {
        const context = resolveContext(uri);

        await runFeatureOrchestration({
            context,
            inTableName: "journals",
            uri
        });
    } catch (e) { throw e; }
};

export default startOrchestration;