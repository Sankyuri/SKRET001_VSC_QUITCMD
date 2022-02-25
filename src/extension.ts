import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {

	let disposable = vscode.commands.registerCommand('onlyquitcommand.quit', () => {

		vscode.window.showInformationMessage('Quitting...');
		vscode.commands.executeCommand('workbench.action.closeWindow');
		
	});

	context.subscriptions.push(disposable);
}

export function deactivate() {}
