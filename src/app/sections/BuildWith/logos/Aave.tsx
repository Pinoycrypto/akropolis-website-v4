// tslint:disable: max-line-length
import * as React from 'react';
import { GetProps } from '_helpers';
import SvgIcon from '@material-ui/core/SvgIcon';
import { makeStyles } from 'shared/styles';

const useStyles = makeStyles({
  root: {
    width: 'unset',
    height: '0.8em',
  },
});

export function Aave(props: GetProps<typeof SvgIcon>) {
  const classes = useStyles();
  return (
    <SvgIcon {...props} classes={classes} viewBox="0 0 66 15" preserveAspectRatio="none">
      <path
        fill="currentColor"
        d="M55.776 5.02l-.001.04v9.369a.566.566 0 0 0 .568.571.57.57 0 0 0 .568-.571v-1.66a.569.569 0 1 1 1.136 0v.787a.568.568 0 1 0 1.136 0v-.787a.569.569 0 1 1 1.136-.001v.215a.57.57 0 0 0 .568.571.568.568 0 0 0 .568-.571v-.214a.57.57 0 1 1 1.137-.001v.788a.561.561 0 0 0 .166.404.566.566 0 0 0 .97-.404v-.787a.568.568 0 1 1 1.136-.001v1.661a.57.57 0 0 0 .97.404.576.576 0 0 0 .166-.404v-9.37c0-.012 0-.026-.002-.038C65.936 2.237 63.671 0 60.888 0c-2.785 0-5.05 2.237-5.112 5.02zm6.087-.226c0-.579.407-1.048.91-1.048.502 0 .91.47.91 1.048 0 .58-.408 1.049-.91 1.049-.503 0-.91-.47-.91-1.049zm-3.77 0c0-.579.407-1.048.91-1.048.502 0 .909.47.909 1.048 0 .58-.407 1.049-.91 1.049-.502 0-.91-.47-.91-1.049zm3.66 1.919c0 .337-.369.61-.825.61-.456 0-.826-.273-.826-.61 0-.337.37-.134.826-.134.456 0 .826-.203.826.134zM39.124.001a.864.864 0 0 1 .663.262.969.969 0 0 1 .25.683 1.092 1.092 0 0 1-.063.349l-5.023 12.293a1.353 1.353 0 0 1-1.259.945h-.446a1.353 1.353 0 0 1-1.259-.945L26.964 1.295a1.093 1.093 0 0 1-.063-.35.967.967 0 0 1 .245-.682.864.864 0 0 1 .668-.262.9.9 0 0 1 .518.175c.157.118.28.277.356.46l4.779 12.027L38.245.636c.077-.183.202-.342.36-.46a.903.903 0 0 1 .52-.175zm-17.304 0a1.351 1.351 0 0 1 1.253.945l5.029 12.293c.049.11.068.23.062.349a.971.971 0 0 1-.24.683.862.862 0 0 1-.672.262.9.9 0 0 1-.519-.175 1.095 1.095 0 0 1-.355-.46l-4.78-12.027-1.767 4.418h.855a.91.91 0 0 1 .898.91v.024a.911.911 0 0 1-.898.911h-1.58l-2.3 5.764a1.106 1.106 0 0 1-.356.46.897.897 0 0 1-.518.175.864.864 0 0 1-.668-.262.968.968 0 0 1-.245-.683 1.12 1.12 0 0 1 .062-.349l2.085-5.105h-.889a.912.912 0 0 1-.898-.91v-.01a.91.91 0 0 1 .898-.91h1.657L20.12.945c.176-.553.68-.932 1.258-.945zM6.8.001c.579.01 1.087.39 1.264.945l5.023 12.293a.83.83 0 0 1 .058.349.971.971 0 0 1-.24.683.863.863 0 0 1-.673.262.9.9 0 0 1-.518-.175 1.106 1.106 0 0 1-.356-.46L6.581 1.871 4.828 6.29h.85c.497.002.9.408.903.91v.024a.913.913 0 0 1-.903.911h-1.59l-2.3 5.764a1.106 1.106 0 0 1-.356.46.897.897 0 0 1-.519.175.86.86 0 0 1-.667-.262.968.968 0 0 1-.245-.683c.001-.119.022-.237.062-.349l2.085-5.105h-.889a.91.91 0 0 1-.898-.91v-.01a.91.91 0 0 1 .898-.91h1.657L5.101.945A1.355 1.355 0 0 1 6.36 0zm44.19.097a.813.813 0 0 1 .616.262c.168.16.262.386.259.62a.789.789 0 0 1-.26.61.86.86 0 0 1-.619.252H43.77v4.534h6.493a.813.813 0 0 1 .615.261c.166.163.26.387.259.62a.789.789 0 0 1-.26.61.854.854 0 0 1-.614.252H43.77v4.554h7.218a.808.808 0 0 1 .62.261.84.84 0 0 1 .259.625.789.789 0 0 1-.26.61.854.854 0 0 1-.619.247h-8.16a.804.804 0 0 1-.653-.261.909.909 0 0 1-.26-.659V1.048a.955.955 0 0 1 .26-.678.857.857 0 0 1 .653-.272h8.165z"
      />
    </SvgIcon>
  );
}