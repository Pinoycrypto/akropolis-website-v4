import * as React from 'react';

import { Section } from 'app/components/Section/Section';
import { Card } from 'app/components/Card';
import { Grid, Link } from 'shared/view/elements';
import { useTranslate, tKeys as tKeysAll } from 'services/i18n';
import { TheGraph, OpenZeppelin, Compound, Fulcrum, Aave, Dydx, MakerDao, Staked, Curve } from './logos';
import { makeStyles, useTheme } from 'shared/styles';
import { NoSsr } from 'services/adaptability';

const tKeys = tKeysAll.new.buildWith;

type Chank = 'title' | 'build-with' | 'integrations';

interface IProps {
  className?: string;
  includes?: Chank[];
}

export function BuildWith(props: IProps) {
  const { includes = [], className } = props;
  const { t } = useTranslate();
  const classes = useStyles();

  const theme = useTheme();

  const withLink = React.useCallback(
    (href: string, children: React.ReactNode) => (
      <Link href={href} color="textPrimary" target="_blank" rel="noopener noreferrer">
        {children}
      </Link>
    ),
    [],
  );

  return (
    <Section className={className} title={includes.includes('title') ? t(tKeys.title.getKey()) : undefined}>
      <Grid container justify="space-between">
        {includes.includes('build-with') && (
          <div className={classes.buildWith}>
            <Card label={t(tKeys.labels.buildWith.getKey())}>
              <NoSsr>
                <div className={classes.content}>
                  <Grid container spacing={2} alignItems="center" justify="space-around">
                    <Grid item>{withLink('https://staked.us', <Staked className={classes.logo} />)}</Grid>
                    <Grid item>
                      {withLink('https://thegraph.com', <TheGraph className={classes.logo} />)}
                    </Grid>
                    <Grid item>
                      {withLink(
                        'https://openzeppelin.com',
                        <OpenZeppelin className={classes.logo} themeColor={theme.palette.type} />,
                      )}
                    </Grid>
                  </Grid>
                </div>
              </NoSsr>
            </Card>
          </div>
        )}
        {includes.includes('integrations') && (
          <div className={classes.integrations}>
            <Card label={t(tKeys.labels.integrations.getKey())}>
              <NoSsr>
                <div className={classes.content}>
                  <Grid container spacing={2} alignItems="center" justify="space-around">
                    <Grid item>
                      {withLink(
                        'https://compound.finance',
                        <Compound className={classes.logo} themeColor={theme.palette.type} />,
                      )}
                    </Grid>
                    <Grid item>
                      {withLink(
                        'https://fulcrum.trade',
                        <Fulcrum className={classes.logo} themeColor={theme.palette.type} />,
                      )}
                    </Grid>
                    <Grid item>
                      {withLink(
                        'https://aave.com',
                        <Aave className={classes.logo} themeColor={theme.palette.type} />,
                      )}
                    </Grid>
                    <Grid item>
                      {withLink(
                        'https://dydx.exchange',
                        <Dydx className={classes.logo} themeColor={theme.palette.type} />,
                      )}
                    </Grid>
                    <Grid item>
                      {withLink('https://makerdao.com', <MakerDao className={classes.logo} />)}
                    </Grid>
                    <Grid item>
                      {withLink(
                        'https://curve.fi',
                        <Curve className={classes.logo} themeColor={theme.palette.type} />,
                      )}
                    </Grid>
                  </Grid>
                </div>
              </NoSsr>
            </Card>
          </div>
        )}
      </Grid>
    </Section>
  );
}

function getGridItemWidth(percent: number) {
  return {
    maxWidth: `${percent}%`,
    flexBasis: `${percent}%`,
  };
}

const useStyles = makeStyles((theme) => {
  return {
    buildWith: {
      ...getGridItemWidth(100),
      [theme.breakpoints.up('tabletXS')]: {
        ...getGridItemWidth(32),
      },
      [theme.breakpoints.up('tabletSM')]: {
        ...getGridItemWidth(33),
      },
      [theme.breakpoints.up('desktopXS')]: {
        ...getGridItemWidth(33),
      },
      [theme.breakpoints.up('desktopMD')]: {
        ...getGridItemWidth(35),
      },
      [theme.breakpoints.up('desktopLG')]: {
        ...getGridItemWidth(29),
      },
    },
    integrations: {
      ...getGridItemWidth(100),
      [theme.breakpoints.up('tabletXS')]: {
        ...getGridItemWidth(48),
      },
      [theme.breakpoints.up('tabletSM')]: {
        ...getGridItemWidth(59),
      },
      [theme.breakpoints.up('desktopXS')]: {
        ...getGridItemWidth(57),
      },
      [theme.breakpoints.up('desktopSM')]: {
        ...getGridItemWidth(56),
      },
      [theme.breakpoints.up('desktopMD')]: {
        ...getGridItemWidth(55),
      },
      [theme.breakpoints.up('desktopLG')]: {
        ...getGridItemWidth(48),
      },
    },
    content: {
      minHeight: theme.spacing(9.5),

      padding: theme.spacing(3, 2.5),
      [theme.breakpoints.up('tabletSM')]: {
        padding: theme.spacing(3, 1.25),
      },
      [theme.breakpoints.up('desktopXS')]: {
        padding: theme.spacing(3, 2.5),
      },
    },

    logo: {
      display: 'block',
      fontSize: theme.spacing(2.5),
      [theme.breakpoints.up('tabletSM')]: {
        fontSize: theme.spacing(2.375),
      },
      [theme.breakpoints.up('desktopXS')]: {
        fontSize: theme.spacing(2.75),
      },
      [theme.breakpoints.up('desktopSM')]: {
        fontSize: theme.spacing(3.25),
      },
    },
  };
});
