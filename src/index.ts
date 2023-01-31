import { css, customElement } from 'lit-element';
import './index.scss';
// import "@carbon/web-components/es/components/ui-shell";

import '@carbon/web-components/es/components/ui-shell/side-nav-menu-item';
import '@carbon/web-components/es/components/ui-shell/header';
import '@carbon/web-components/es/components/ui-shell/side-nav';
import '@carbon/web-components/es/components/ui-shell/side-nav-divider';
import '@carbon/web-components/es/components/ui-shell/header-name';
import '@carbon/web-components/es/components/ui-shell/header-nav';
// // import '@carbon/web-components/es/components/ui-shell/header-nav-item';
import BXHeaderNavItem from "@carbon/web-components/es/components/ui-shell/header-nav-item";
import '@carbon/web-components/es/components/ui-shell/side-nav-link';
import '@carbon/web-components/es/components/ui-shell/header-menu';
import '@carbon/web-components/es/components/ui-shell/header-menu-item';
import '@carbon/web-components/es/components/ui-shell/side-nav-menu';
import '@carbon/web-components/es/components/ui-shell/side-nav-items';
import '@carbon/web-components/es/components/ui-shell/header-menu-button';

@customElement( 'my-header-nav-item' )
class MatHeaderNavItem extends BXHeaderNavItem {
	static styles = css`
    ${ BXHeaderNavItem.styles }
    .bx--header__nav-item {
      color: #ffffff;
    }
	`;
}