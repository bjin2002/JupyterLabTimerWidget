import {
  JupyterFrontEnd,
  JupyterFrontEndPlugin
} from '@jupyterlab/application';

/**
 * Initialization data for the jupyterlab_widget extension.
 */
const plugin: JupyterFrontEndPlugin<void> = {
  id: 'jupyterlab_widget:plugin',
  autoStart: true,
  activate: (app: JupyterFrontEnd) => {
    console.log('JupyterLab extension jupyterlab_widget is activated!');
  }
};

export default plugin;
