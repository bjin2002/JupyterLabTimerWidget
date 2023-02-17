import {
  JupyterFrontEnd,
  JupyterFrontEndPlugin,
  ILabStatus
} from '@jupyterlab/application';

import { IStatusBar } from '@jupyterlab/statusbar';

import { Widget } from '@lumino/widgets';


/**
 * Initialization data for the jupyterlab_widget extension.
 */
const plugin: JupyterFrontEndPlugin<void> = {
  id: 'jupyterlab_widget:plugin',
  autoStart: true,
  requires: [ILabStatus, IStatusBar],
  activate: (app: JupyterFrontEnd, labStatus: ILabStatus, statusBar: IStatusBar) => {
    console.log('JupyterLab extension jupyterlab_widget is activated!');
    let startTime = Date.now();
    const timeWidget = new Widget();

    labStatus.busySignal.connect(() => {
      if (labStatus.isBusy) {
        startTime = Date.now();
        console.log("Cell Ran");
      }
      if (!labStatus.isBusy) {
        console.log("stopped")
        timeWidget.node.textContent = (Date.now() - startTime).toString().concat(" ms");
      }
    });

    statusBar.registerStatusItem('time-status', {
      align: 'middle',
      item: timeWidget
    });

  }
};

export default plugin;