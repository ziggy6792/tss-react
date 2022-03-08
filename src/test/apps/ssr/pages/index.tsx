import Head from 'next/head';
import { useMemo, memo } from 'react';
import { GlobalStyles, useMergedClasses } from 'tss-react';
import { makeStyles, useStyles, withStyles } from '../shared/makeStyles';
import { List, styled } from '@mui/material';
import Button from '@mui/material/Button';
import { ThemeProvider as MuiThemeProvider } from '@mui/material/styles';
import { createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import { useDarkMode } from 'next-dark-mode';
import { CacheProvider } from '@emotion/react';
import type { EmotionCache } from '@emotion/cache';
import createCache from '@emotion/cache';
import Typography from '@mui/material/Typography';
import type { CSSObject } from 'tss-react';
import InputBase from '@mui/material/InputBase';
import theme from '../src/components/theme';

let muiCache: EmotionCache | undefined = undefined;

export const createMuiCache = () => (muiCache = createCache({ key: 'mui', prepend: true }));

export default function Index() {
  return <Root />;
}

function Root() {
  const { css } = useStyles();

  return <App className={css({ boxShadow: '10px 5px 5px teal' })} />;
}

const { App } = (() => {
  const H1 = styled('h1')({
    color: 'yellow',
  });

  function App(props: { className?: string }) {
    const { className } = props;
    const { classes, css, cx, theme } = useStyles();
    const { darkModeActive, switchToLightMode, switchToDarkMode } = useDarkMode();

    console.log({ darkModeActive });

    return (
      <div className={classes.root}>
        <SecondNestedSelectorExample />
      </div>
    );
  }

  const useStyles = makeStyles<
    void,
    'child' | 'breadcrumbs2_separator' | 'childRefTest_wrapper2' | 'childRefTest_wrapper1'
  >({
    name: { App },
  })((theme, _params, classes) => {
    const childRefTest_wrapper2 = {
      border: '1px solid black',
      margin: 30,
      height: 100,
      color: 'black',
    };

    return {
      root: {
        '& > h1:nth-child(2)': {
          color: theme.palette.primary.main,
        },
      },
      ovStyled: {
        color: 'darkred',
      },
      ovInternal: {
        backgroundColor: 'darkblue',
      },
      parent: {
        border: '1px solid black',
        padding: 30,
        [`&:hover .${classes.child}`]: {
          background: 'red',
        },
      },
      child: {
        background: 'blue',
        border: '1px solid black',
      },
      breadcrumbs_className: {
        backgroundColor: 'lightblue',
        '& .MuiBreadcrumbs-separator': {
          color: 'red',
        },
        '&:hover .MuiBreadcrumbs-separator': {
          color: 'blue',
        },
      },

      breadcrumbs2_root: {
        backgroundColor: 'lightblue',
        [`&:hover .${classes.breadcrumbs2_separator}`]: {
          color: 'blue',
        },
      },
      breadcrumbs2_separator: {
        color: 'red',
      },

      button2_className: {
        backgroundColor: 'red',
      },

      button2_root: {
        backgroundColor: 'red',
      },

      testCx_bgYellow: {
        backgroundColor: 'yellow',
      },
      testCx_bgCyan: {
        backgroundColor: 'cyan',
      },

      childRefTest_wrapper: {
        border: '1px solid black',
        [`&:hover .${classes.childRefTest_wrapper1}`]: {
          backgroundColor: 'cyan',
        },
      },
      childRefTest_wrapper1: {
        ...childRefTest_wrapper2,
      },
      childRefTest_wrapper2,
      childRefTest_textColorPink: {
        color: 'pink',
      },
      mq: {
        height: 100,
        backgroundColor: 'lightgreen',
        '@media (max-width: 960px)': {
          backgroundColor: 'cyan',
        },
      },
    };
  });

  return { App };
})();

const SecondNestedSelectorExample = () => {
  const useStyles = makeStyles<{ color: 'primary' | 'secondary' }>()((theme, { color }, classes) => ({
    navmenu: {
      marginTop: '30px',
    },
  }));

  const { classes, cx } = useStyles({ color: 'primary' });

  return (
    <List className={classes.navmenu}>
      {[0, 2, 3, 3].map((menu, index) => (
        // <NavMenu key={index} menu={menu} currentPath={router.asPath} />
        <div key={index}>item {menu}</div>
      ))}
    </List>
  );
};
