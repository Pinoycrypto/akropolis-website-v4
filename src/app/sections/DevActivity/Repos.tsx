import React from 'react';
import { calculateStats, useRepos } from './github';
import { makeStyles, getGrid } from 'shared/styles';
import { Typography, Link, Grid, Dotdotdot } from 'shared/view/elements';
import { Card } from 'app/components/Card';
import { Language } from './Language';
import { Loading } from 'app/components/Loading/Loading';

export function Repos() {
  const classes = useStyles();
  const response = useRepos('akropolisio');
  const { data } = response;
  const lastRepos = React.useMemo(() => data && calculateStats(data).lastRepos, [data]);

  return (
    <Loading response={response}>
      {lastRepos ? (
        <div className={classes.container}>
          {lastRepos.map((repo) => (
            <div key={repo.name} className={classes.item}>
              <Card variant="contained" className={classes.card}>
                <Grid container direction="column" justify="space-between" className={classes.cardContent}>
                  <Grid item>
                    <Typography<typeof Link>
                      className={classes.title}
                      component={Link}
                      color="textPrimary"
                      href={repo.html_url}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Grid container spacing={1} wrap="nowrap">
                        <Grid item>
                          <Dotdotdot style={{ display: 'inline' }} clamp={1}>
                            {repo.name}
                          </Dotdotdot>
                        </Grid>
                        <Grid item>→</Grid>
                      </Grid>
                    </Typography>
                    <Typography className={classes.description} color="textPrimary">
                      {repo.description}
                    </Typography>
                  </Grid>
                  <Grid item container spacing={1} className={classes.footer}>
                    <Grid item xs>
                      {repo.language && (
                        <Language language={repo.language} className={classes.description} color="textSecondary" />
                      )}
                    </Grid>
                    <Grid item>
                      <Typography className={classes.description} color="textSecondary">
                        Updated {new Date(repo.updated_at).toLocaleDateString()}
                      </Typography>
                    </Grid>
                  </Grid>
                </Grid>
              </Card>
            </div>
          ))}
        </div>
      ) : (
        <div>Not found</div>
      )}
    </Loading>
  );
}

const useStyles = makeStyles((theme) => ({
  card: {
    padding: theme.spacing(2.5, 3),
    height: '100%',
  },

  cardContent: {
    minHeight: '100%',
  },

  title: {
    display: 'inline-block',
    fontSize: 12,
    fontWeight: 500,
    marginBottom: theme.spacing(1),

    [theme.breakpoints.up('tabletXS')]: {
      fontSize: 16,
      marginBottom: theme.spacing(1.5),
    },
  },

  description: {
    fontSize: 10,
    lineHeight: 1.6,

    [theme.breakpoints.up('tabletXS')]: {
      fontSize: 12,
      lineHeight: 1.33,
    },
  },

  footer: {
    paddingTop: theme.spacing(1.25),

    [theme.breakpoints.up('tabletXS')]: {
      paddingTop: theme.spacing(2),
    },
  },

  ...getGrid(theme, [
    {
      breakpoint: 'mobileXS',
      count: 1,
      hPadding: theme.spacing(2.5),
      vPadding: theme.spacing(2.5),
    },
    {
      breakpoint: 'tabletXS',
      count: 2,
      hPadding: theme.spacing(3.75),
      vPadding: theme.spacing(3.75),
    },
    {
      breakpoint: 'tabletSM',
      count: 4,
      hPadding: theme.spacing(3.75),
      vPadding: theme.spacing(3.75),
    },
  ]),
}));
