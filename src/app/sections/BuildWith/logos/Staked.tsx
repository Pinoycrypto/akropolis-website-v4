// tslint:disable: max-line-length
import * as React from 'react';
import { GetProps } from '_helpers';
import SvgIcon from '@material-ui/core/SvgIcon';
import { makeStyles } from 'shared/styles';

const useStyles = makeStyles({
  root: {
    width: 'unset',
  },
});

export function Staked(props: GetProps<typeof SvgIcon>) {
  const classes = useStyles();
  return (
    <SvgIcon {...props} classes={classes} viewBox="0 0 685 172" preserveAspectRatio="none">
      <path
        fill="currentColor"
        d="M59.74 108.83c26.36 9.32 31.35 17.5 31.35 30.22 0 15.9-12.94 29.31-37.93 29.31-11.59 0-28.4-5.68-35.67-12.72-7.72-7.72-11.36-15.68-13.63-32.04-.23-2.27-.45-2.72-1.59-2.72-1.36 0-2.04.45-2.04 2.27 0 4.09.45 12.04.45 22.27 0 9.31-.45 20.9-.45 23.17 0 1.14.45 1.6 1.81 1.6 1.14 0 1.82-.23 1.82-2.28.46-6.13 2.27-7.04 4.77-7.04 1.14 0 4.55.68 7.27 2.27 7.5 4.09 21.13 8.86 36.8 8.86 35.44 0 53.84-20.9 53.84-48.17 0-27.04-15.22-37.94-45.66-49.08L43.62 68.4c-25-8.86-28.63-16.59-28.63-28.63 0-16.81 13.86-27.49 36.8-27.49 11.36 0 21.81 4.09 28.4 10.68 7.04 7.27 10.9 15.22 12.72 30.45.23 2.04.46 2.5 1.82 2.5 1.59 0 1.82-.46 1.82-2.05 0-3.86-.23-11.59-.23-21.13 0-8.64.23-18.86.23-21.36 0-1.14-.23-1.59-1.6-1.59-1.36 0-1.81.23-2.04 2.05-.68 5.9-2.5 6.81-4.77 6.81-.9 0-2.95-.9-5.45-2.27-6.36-3.64-16.81-7.73-30.67-7.73C17.95 8.63 0 29.53 0 54.76c0 24.31 12.04 37.26 40.66 47.26l19.09 6.81zM131.72 130.87c0 4.78 0 12.96.46 17.73 1.13 14.31 7.95 23.17 30.44 23.17 9.09 0 17.49-2.27 24.08-8.63 1.59-1.36 2.5-2.95 2.5-3.86 0-.91-.91-1.6-1.6-1.6-.67 0-1.13.46-1.58 1.14a22.24 22.24 0 0 1-5.91 5.46 17 17 0 0 1-8.18 2.27c-4.31 0-7.95-1.6-9.09-7.05-.9-3.4-1.13-10.45-1.13-18.85V64.07h21.35c.91 0 1.37-.45 1.37-1.81 0-1.37-.46-1.82-1.37-1.82h-21.35V32.26c0-.68 0-1.59-.23-2.04-.22-.46-1.13-.68-2.5-.68-1.81 0-2.5.68-3.18 2.5-5.22 14.31-8.4 18.86-16.13 23.63-2.95 1.81-9.76 4.77-22.71 5.45-.91 0-1.37.23-1.37 1.36 0 1.14.23 1.6.91 1.6h15.22v66.8zM259.43 154.28c2.04 11.36 7.72 17.04 25.21 17.04 5.68 0 15.22-1.82 20.45-5.45 1.36-.91 1.81-1.82 1.81-2.73 0-.91-.68-1.82-1.59-1.82-1.13 0-1.59.68-2.95 2.05a10.5 10.5 0 0 1-6.81 2.5c-5 0-6.6-2.96-6.6-11.82 0-4.54.46-50.67.46-60.44 0-9.09-1.36-15.68-3.63-20.22-5-10-19.09-15.9-39.08-15.9-32.25 0-44.52 14.08-44.52 30.21 0 6.37 3.18 9.32 8.86 9.32 5 0 9.54-1.6 9.54-9.54 0-12.27 1.13-18.4 5.68-22.27 3.63-3.18 8.63-4.54 15.67-4.54 7.5 0 12.95 2.04 15.68 8.4.9 2.5 1.81 7.27 1.81 17.5v25.67c-29.98 0-43.61 2.05-51.79 6.37-7.27 3.63-12.27 10.45-12.27 23.17 0 15.22 8.86 30.22 35.9 30.22 12.26 0 22.94-5.45 28.17-17.72zm.22-38.86v15.9c0 8.42-1.36 17.5-3.18 21.82-3.4 7.95-8.86 13.4-18.4 13.4-8.63 0-13.86-6.8-13.86-24.76 0-14.31 3.64-20.68 8.4-23.4 3.64-2.27 11.6-3.18 20.68-3.18 3.4 0 5.45.22 6.36.22zM357.41 151.32v-39.76h3.86a7.6 7.6 0 0 1 7.05 4.1l24.53 39.75c1.82 2.73 2.95 4.78 2.95 6.82 0 1.59-.9 2.73-2.5 3.18-2.04.46-4.08.68-8.4.68-1.14 0-1.36.23-1.36 1.6 0 1.13.45 1.36 1.36 1.36 5.68-.23 23.4-.23 29.3-.23 5.91 0 22.72.23 29.54.23.9 0 1.13-.23 1.13-1.37 0-1.36-.45-1.59-2.04-1.59-5 0-8.86-1.13-15-10.45L388.08 95.2l19.54-21.13c3.86-4.09 7.72-7.27 10.45-8.63a25.35 25.35 0 0 1 8.86-2.27c1.36 0 2.04-.23 2.04-1.37 0-1.13-.45-1.36-1.36-1.36-2.5 0-9.77.23-17.72.23-10 0-17.72-.23-21.13-.23-.9 0-1.36.23-1.36 1.36 0 .91.23 1.37 1.59 1.37 2.72.22 5 .45 7.27.9 3.63.91 5.22 2.73 5.22 5 0 2.73-1.13 5.91-5.22 10.9-9.77 12.28-19.54 22.28-22.04 24.55-2.72 2.5-5.45 3.86-10.22 3.86h-6.59V37.26c0-18.4.91-33.62.91-35.44 0-1.6-.68-1.82-1.59-1.82-2.27 0-19.99 1.14-43.39 1.14-.68 0-.9.68-.9 1.36 0 1.14.22 1.59 1.13 1.59 7.27 0 10.22.23 11.81 1.59 1.6 1.6 2.05 3.18 2.05 15v130.64c0 5.91-.46 9.1-1.37 11.6-1.36 2.72-4.09 3.17-12.94 3.17-.69 0-1.14.23-1.14 1.6 0 1.13.23 1.36 1.13 1.36 5.68 0 22.5-.23 29.08-.23 7.5 0 26.8.23 29.99.23.9 0 1.13-.46 1.13-1.37 0-1.36-.22-1.59-1.13-1.59-9.77 0-12.72-1.36-13.63-3.18-1.14-2.5-1.14-5-1.14-11.59zM476.75 112.24h59.3c5.67 0 7.94-.9 8.85-1.81 1.82-1.82 2.27-4.32 2.27-8.87 0-27.94-19.08-44.08-46.34-44.08-36.12 0-55.88 26.82-55.88 59.3 0 31.36 19.76 55.22 55.65 55.22 24.76 0 38.62-12.04 44.53-25.22a24.2 24.2 0 0 0 2.27-9.54c0-2.05-1.59-3.64-3.86-3.64-3.4 0-4.32 1.82-4.77 5.23-2.05 16.58-15.9 29.3-32.49 29.3-16.35 0-29.53-5-29.53-55.89zm0-3.4c1.36-40.45 10-48.17 23.63-48.17 14.76 0 17.49 12.04 17.49 38.62 0 6.82-1.14 9.54-8.18 9.54h-32.94zM639.57 148.82c-.23 10.23-.46 16.82-.46 19.32 0 1.59.91 2.27 2.27 2.27 4.77 0 22.5-1.14 42.48-1.14.91 0 1.14-.45 1.14-1.36 0-1.36-.23-1.59-1.14-1.59-10.67 0-12.72-1.36-13.63-3.18-1.13-2.5-1.13-5-1.13-11.59V32.95c0-12.27.9-30.22.9-31.13 0-1.37-.45-1.82-1.36-1.82-2.5 0-23.62 1.14-43.61 1.14-.68 0-.91.68-.91 1.36 0 1.14.23 1.59 1.13 1.59 5 0 10.23.23 11.82 1.59 1.81 1.6 2.04 3.18 2.04 15v56.35c-4.09-12.27-13.4-19.55-27.71-19.55-29.3 0-50.2 24.32-50.2 58.85 0 36.13 20.67 55.67 47.47 55.67 15.45 0 25.45-8.18 30.9-23.18zm-.46-37.71c0 11.58-.68 20.22-2.27 29.54-3.18 19.53-13.86 27.03-23.63 27.03-10.67 0-19.76-7.04-19.76-51.8 0-44.54 7.95-54.3 21.35-54.3 11.14 0 17.72 7.5 21.36 19.53 2.27 6.6 2.95 15.46 2.95 30z"
      />
    </SvgIcon>
  );
}