import {showSnackbar} from './actions/snackbarHandler';
import configureStore from '../..';

const {store} = configureStore();

export default class SnackbarAPI {
  static LENGTH_SHORT = 1500;
  static LENGTH_LONG = 2500;

  static show(
    message: string,
    duration: number = this.LENGTH_LONG,
    actionColor: string = '#323232',
    actionText: string = '',
    onActionPress: Function = () => {},
  ) {
    store.dispatch(
      showSnackbar({
        message,
        actionColor,
        actionText,
        duration,
        onActionPress,
      }),
    );
  }
}
