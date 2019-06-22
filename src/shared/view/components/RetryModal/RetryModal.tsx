import * as React from 'react';

import { Button, Typography, Grid } from 'shared/view/elements';
import { MetamaskFox } from 'shared/view/elements/Icons';

import Modal from '../Modal/Modal';
import { StylesProps, provideStyles } from './RetryModal.style';

interface IProps {
  title: string;
  buttonText: string;
  isOpen: boolean;
  onRetry(): void;
  onClose(): void;
}

class RetryModal extends React.PureComponent<IProps & StylesProps> {
  public render() {

    const { classes, isOpen, onRetry, onClose, children, title, buttonText } = this.props;
    return (
      <Modal size="large" isOpen={isOpen} title={title} onClose={onClose}>
        <Grid container spacing={40} direction="column" alignItems="center">
          {!!children && (
            <Grid item>
              <Typography variant="body1" align="center">{children}</Typography>
            </Grid>
          )}
          <Grid item>
            <Button
              className={classes.action}
              variant="contained"
              color="primary"
              size="small"
              onClick={onRetry}
            >
              {buttonText}
            </Button>
          </Grid>
          <MetamaskFox className={classes.metamaskIcon} />
        </Grid>
      </Modal>
    );
  }
}

export default provideStyles(RetryModal);
