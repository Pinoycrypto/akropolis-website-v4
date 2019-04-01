import * as React from 'react';
import { Route } from 'react-router-dom';

import { IModule } from 'shared/types/app';
import { Partners, News } from '../sections';
import routes from 'modules/routes';

const ForWikiModule: IModule = {
  getRoutes() {
    return [(
      <Route exact key="ForWikiPartners" path={routes.forWiki.partners.getRoutePath()} >
        <Partners withoutTitle />
      </Route>
    ), (
      <Route exact key="ForWikiNews" path={routes.forWiki.news.getRoutePath()} >
        <News withoutTitle />
      </Route>
    )];
  },
};

export default ForWikiModule;
