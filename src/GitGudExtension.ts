import {
    ExtensionContext,
    window
} from 'vscode';

class GitGudExtension {
    /**
     * Called when the extension is activated.
     * 
     * @param context The extension context provided by the VSCode runtime.
     */
    public async activate(
        context: ExtensionContext
    ): Promise<void> {
        // Show startup message
        window.showInformationMessage('GitGud extension activated!');
    }

    /**
     * Called when the extension is deactivated.
     * 
     * Cleans up resources and stops any running processes.
     */
    public deactivate(
    ): void {
    }
};

export default GitGudExtension;
