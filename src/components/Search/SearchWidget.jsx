/**
 * Search widget component.
 * @module components/theme/SearchWidget/SearchWidget
 */

import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';
import { compose } from 'redux';
import { defineMessages, injectIntl } from 'react-intl';
import { Icon } from '@plone/volto/components';
import zoomSVG from '@plone/volto/icons/zoom.svg';
import SearchPortal from 'volto-diracom/components/Search/SearchPortal';

const messages = defineMessages({
  search: {
    id: 'Search',
    defaultMessage: 'Search',
  },
  searchSite: {
    id: 'Search Site',
    defaultMessage: 'Search Site',
  },
});

const SearchWidget = (props) => {
  const { intl, pathname } = props;
  const [isActive, setIsActive] = useState(false);

  const handleClick = () => {
    setIsActive(true);
  };

  return (
    <>
      {isActive && (
        <SearchPortal
          intl={intl}
          isActive={isActive}
          setActive={setIsActive}
          pathname={pathname}
        />
      )}
      <div className="search-button">
        <button
          aria-label={intl.formatMessage(messages.search)}
          onClick={handleClick}
        >
          {' '}
          <Icon name={zoomSVG} size="48px" />
        </button>
      </div>
    </>
  );
};

export default compose(withRouter, injectIntl)(SearchWidget);
