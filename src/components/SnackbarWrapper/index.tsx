import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {Snackbar} from 'react-native-paper';
import { hideSnackbar } from '../../store/modules/snackbars/actions/snackbarHandler';
import { RootState } from '../../store';

const SnackbarWrapper: React.FC = ({children}) => {
  const dispatch = useDispatch();
  const {
    visible,
    actionColor,
    duration,
    message,
    actionText,
    onActionPress,
  } = useSelector((states: RootState) => ({
    visible: states.snackbars.handler.showSnackbar,
    actionColor: states.snackbars.handler.actionColor,
    message: states.snackbars.handler.message,
    duration: states.snackbars.handler.duration,
    actionText: states.snackbars.handler.actionText,
    onActionPress: states.snackbars.handler.onActionPress,
  }));

  return (
    <>
      {children}
      <Snackbar
        style={{backgroundColor: actionColor}}
        visible={visible}
        onDismiss={() => dispatch(hideSnackbar())}
        duration={duration}
        action={{
          label: actionText,
          onPress: onActionPress,
        }}>
        {message}
      </Snackbar>
    </>
  );
};

export default SnackbarWrapper;
