import React from 'react';
import { Link } from 'react-router-dom';
import SvgIcon from '@material-ui/core/SvgIcon';

import { LogoWithNameIcon } from 'shared/view/elements/Icons';
import { IMenuItem } from 'shared/types/common';
import { Adaptive } from 'services/adaptability';
import { ThemeButton } from 'services/theme';
import { NavInline } from 'app/components/NavInline/NavInline';
import { menuItems } from './constants';
import { useStyles } from './Header.style';

interface Props {
  customNavItems?: IMenuItem[];
  CustomLogo?: typeof SvgIcon;
  hideThemeButton?: boolean;
}

export function Header({ customNavItems, CustomLogo, hideThemeButton }: Props) {
  const classes = useStyles();

  return (
    <header className={classes.root}>
      <div className={classes.logo}>
        {CustomLogo ? (
          <CustomLogo fontSize="inherit" />
        ) : (
          <Link to="/" className={classes.logo}>
            <LogoWithNameIcon fontSize="inherit" />
          </Link>
        )}
      </div>
      <NavInline
        items={customNavItems || menuItems}
        className={classes.navInline}
        extraRight={
          !hideThemeButton
            ? [
                <React.Fragment key="0">
                  <Adaptive to="tabletXS">
                    <ThemeButton size="small" />
                  </Adaptive>
                  <Adaptive from="tabletXS">
                    <ThemeButton />
                  </Adaptive>
                </React.Fragment>,
              ]
            : undefined
        }
      />
    </header>
  );
}
