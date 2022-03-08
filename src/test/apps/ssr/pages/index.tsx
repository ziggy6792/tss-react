import { makeStyles, useStyles } from '../shared/makeStyles';
import { List, styled } from '@mui/material';
import { useDarkMode } from 'next-dark-mode';
import type { EmotionCache } from '@emotion/cache';
import createCache from '@emotion/cache';

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

  const useStyles = makeStyles<void>({
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
