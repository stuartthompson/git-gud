import { ExtensionContext } from 'vscode';
import GitGudExtension from './GitGudExtension';

let extension = new GitGudExtension();

/**
 * Called when the extension is activated.
 * 
 * @param context The extension context provided by the VSCode runtime.
 */
export function activate(
    context: ExtensionContext
): void {
    extension.activate(context);
}

/**
 * Called when the extension is deactivated.
 * 
 * Clears up resources and stops any running processes.
 */
export function deactivate(
 ): void {
    extension.deactivate();
}