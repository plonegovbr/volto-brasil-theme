/**
 * Footer component.
 * @module components/theme/Footer/Footer
 */
import React from 'react';
import { useSelector, shallowEqual } from 'react-redux';
import { UniversalLink } from '@plone/volto/components';
import { Grid } from 'semantic-ui-react';
import Container from '@kitconcept/volto-light-theme/components/Atoms/Container/Container';
import { flattenToAppURL } from '@plone/volto/helpers';
import Signature from '@plonegovbr/volto-brasil-theme/components/Signature/Signature';
import SocialNetworks from '@plonegovbr/volto-brasil-theme/components/SocialNetworks/SocialNetworks';
import config from '@plone/volto/registry';

/**
 * Component to display the footer.
 * @function Footer
 * @param {Object} intl Intl object
 * @returns {string} Markup of the component
 */
const Footer = () => {
  const { settings } = config;
  const { navigation = [] } = useSelector(
    (state) => ({
      lang: state.intl.locale,
      siteActions: state.actions?.actions?.site_actions,
      navigation: state.navigation?.items,
    }),
    shallowEqual,
  );
  const columns = navigation.length || 1;
  const socialNetworks = settings.socialNetworks;
  return (
    <footer id="footer">
      <Container layout className="footer">
        <Grid stackable columns={columns} className={'navFooter'}>
          {navigation.map((item, index) => {
            return (
              <Grid.Column className={`${index} navSection`}>
                <UniversalLink
                  href={flattenToAppURL(item.url)}
                  aria-label={item.title}
                >
                  <h3 className={'navTitle'}>{item.title}</h3>
                </UniversalLink>
                <ul className="details">
                  {item.items.map((item) => {
                    return (
                      <li className={'navlink'}>
                        <UniversalLink
                          href={flattenToAppURL(item.url)}
                          aria-label={item.title}
                        >
                          {item.title}
                        </UniversalLink>
                      </li>
                    );
                  })}
                </ul>
              </Grid.Column>
            );
          })}
        </Grid>
        <SocialNetworks networks={socialNetworks} />
      </Container>
      <Signature />
    </footer>
  );
};

/**
 * Property types.
 * @property {Object} propTypes Property types.
 * @static
 */
Footer.propTypes = {
  /**
   * i18n object
   */
};

export default Footer;
