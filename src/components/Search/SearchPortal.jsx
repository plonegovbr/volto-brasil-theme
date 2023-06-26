/**
 * Search widget component.
 * @module components/theme/SearchWidget/SearchWidget
 */

import React, { useRef, useState } from 'react';
import cx from 'classnames';
import { defineMessages } from 'react-intl';
import { Portal } from 'react-portal';

import { Icon } from '@plone/volto/components';
import zoomSVG from '@plone/volto/icons/zoom.svg';
import clearSVG from '@plone/volto/icons/clear.svg';

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

const SearchPortal = (props) => {
  const { isActive, setActive, intl, pathname } = props;
  const [text, setText] = useState('');
  const inputRef = useRef(null);

  const handleEscapeKeyDown = (e) => {
    if (e.key === 'Escape') {
      setActive(false);
    }
  };

  const closePortal = () => {
    setActive(false);
  };

  const submit = (event) => {
    const path =
      pathname?.length > 0 ? `&path=${encodeURIComponent(pathname)}` : '';
    props.history.push(
      `/search?SearchableText=${encodeURIComponent(text)}${path}`,
    );
    event.preventDefault();
    setActive(false);
  };

  return (
    isActive && (
      <Portal node={document.querySelector('body')}>
        <div
          className={cx('search-bar', {
            active: isActive,
          })}
        >
          <div role="presentation" className="close" onClick={closePortal}>
            <Icon name={clearSVG} size="48px" />
          </div>
          <div className="ui container">
            <form action="/search" onSubmit={(e) => submit(e)}>
              <div className="searchbox">
                <input
                  id="searchInput"
                  aria-label={intl.formatMessage(messages.search)}
                  onChange={(e) => setText(e.target.value)}
                  onKeyDown={(e) => handleEscapeKeyDown(e)}
                  name="SearchableText"
                  value={text}
                  autoComplete="off"
                  placeholder={intl.formatMessage(messages.searchSite)}
                  title={intl.formatMessage(messages.search)}
                  ref={inputRef}
                />
                <button aria-label={intl.formatMessage(messages.search)}>
                  <Icon name={zoomSVG} size="48px" />
                </button>
              </div>
            </form>
          </div>
        </div>
      </Portal>
    )
  );
};

export default SearchPortal;
