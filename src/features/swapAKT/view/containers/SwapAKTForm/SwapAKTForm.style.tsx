import { withStyles, WithStyles, Theme } from 'shared/styles';
import { rule } from 'shared/helpers/style';

const styles = ({ extra: theme }: Theme) => (
  {
    buttonIcon: rule({
      marginRight: theme.spacing.unit,
    }),
  });

export const provideStyles = withStyles(styles);

export type StylesProps = WithStyles<typeof styles>;
