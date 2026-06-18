import { resolveContext } from '../utils/context.js';
import { finalize } from '../utils/response.js';
import { runPrechecks } from '../services/precheck.js';
import { runFeatureOrchestration } from './runFeatureOrchestration.js';

export async function startOrchestration({ uri }) {
    try {
        const context = resolveContext(uri);

        await runFeatureOrchestration({
            context,
            inTableName: "journals",
            uri
        });
    } catch (e) { throw e; }
};