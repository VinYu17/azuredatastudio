/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the Source EULA. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

import { retry } from './retry';
const { installDefaultBrowsersForNpmInstall } = require('playwright/lib/utils/registry');

async function install() {
	await retry(() => installDefaultBrowsersForNpmInstall());
}

install();
