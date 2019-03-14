import * as React from 'react';
import { GetProps } from '_helpers';
import SvgIcon from '@material-ui/core/SvgIcon';

// tslint:disable:max-line-length
function OwnSavingsIcon(props: GetProps<typeof SvgIcon>) {
  const { classes, ...rest } = props;
  return (
    <SvgIcon {...rest} viewBox="0 0 24 24" xmlSpace="preserve">
      <g id="Layer_3">
        <g>
          <path d="M5.0123,10.0211C4.8776,9.5359,4.8,9.0274,4.8,8.5c0-3.143,2.557-5.7,5.7-5.7c2.2478,0,4.1901,1.3112,5.1175,3.2059 c0.3115,0.0056,0.6163,0.0359,0.9156,0.0839C15.5751,3.6944,13.2374,2,10.5,2C6.9102,2,4,4.9102,4,8.5 c0,0.7064,0.1163,1.3846,0.3246,2.0214C4.5417,10.3391,4.7725,10.1741,5.0123,10.0211z" />
        </g>
        <g>
          <path d="M15.5,6c-2.368,0-4.434,1.2705-5.5703,3.1628c0.2722,0.0612,0.5363,0.1418,0.7943,0.2359 C11.7417,7.8368,13.5007,6.8,15.5,6.8c3.143,0,5.7,2.557,5.7,5.7s-2.557,5.7-5.7,5.7c-0.3571,0-0.7053-0.0372-1.0444-0.1003 c-0.1118,0.2556-0.2429,0.5002-0.3853,0.7374C14.5309,18.9407,15.0082,19,15.5,19c3.5898,0,6.5-2.9102,6.5-6.5S19.0898,6,15.5,6z" />
        </g>
        <path d="M8.5,9.8c3.143,0,5.7,2.557,5.7,5.7s-2.557,5.7-5.7,5.7s-5.7-2.557-5.7-5.7S5.357,9.8,8.5,9.8 M8.5,9 C4.9102,9,2,11.9101,2,15.5S4.9102,22,8.5,22s6.5-2.9102,6.5-6.5S12.0899,9,8.5,9L8.5,9z" />
      </g>
    </SvgIcon>
  );
}

export default OwnSavingsIcon;