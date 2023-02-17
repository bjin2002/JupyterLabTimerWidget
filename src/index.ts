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
    const statusWidget = new Widget();
    const timeWidget = new Widget();

    let statusWidgetID = statusWidget


    labStatus.busySignal.connect(() => {
      statusWidget.node.textContent = labStatus.isBusy ? 'Ben Busy' : 'Ben Idle';
      if (statusWidget.node.textContent === "Ben Busy") {
        startTime = Date.now();
        console.log("Cell Ran");
        // setInterval()
      }
      if (statusWidget.node.textContent === "Ben Idle") {
        console.log("stopped")
        timeWidget.node.textContent = (Date.now() - startTime).toString().concat(" ms");
      }
    });

    statusBar

    statusBar.registerStatusItem('lab-status', {
      align: 'left',
      item: statusWidget
    });

    statusBar.registerStatusItem('time-status', {
      align: 'middle',
      item: timeWidget
    });

  }
};

export default plugin;