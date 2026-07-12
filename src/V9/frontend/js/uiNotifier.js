function showStatus(text) {
    const statusDiv = document.getElementById("status");
    if (!statusDiv) return;

    statusDiv.classList.remove("hidden");
    const isError = text.startsWith("❌") || text.toLowerCase().includes("failed") || text.toLowerCase().includes("error");
    
    // Dynamically adjust status styles based on state
    statusDiv.className = isError 
        ? "mt-8 rounded-2xl border border-red-500/30 bg-red-950/20 px-5 py-4 text-red-300 shadow-lg flex items-center space-x-3"
        : "mt-8 rounded-2xl border border-blue-500/30 bg-blue-950/20 px-5 py-4 text-blue-300 shadow-lg flex items-center space-x-3 animate-pulse";
    
    statusDiv.innerHTML = `
        ${isError ? `
            <svg class="h-5 w-5 text-red-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"></path>
            </svg>
        ` : `
            <svg class="animate-spin h-5 w-5 text-blue-400 flex-shrink-0" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
        `}
        <span class="font-medium text-sm ${isError ? 'text-red-200' : 'text-blue-200'}">${text}</span>
    `;
}

function showSummary(html) {
    const summaryDiv = document.getElementById("summary");
    if (!summaryDiv) return;
    summaryDiv.classList.remove("hidden");
    summaryDiv.innerHTML = html;
}

function completeStatus(html) {
    const statusDiv = document.getElementById("status");
    if (statusDiv) {
        statusDiv.classList.add("hidden");
    }
    showSummary(html);
}
