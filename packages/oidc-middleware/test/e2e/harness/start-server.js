/*!
 * Copyright (c) 2017-Present, Okta, Inc. and/or its affiliates. All rights reserved.
 * The Okta software accompanied by this notice is provided pursuant to the Apache License, Version 2.0 (the "License.")
 *
 * You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0.
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *
 * See the License for the specific language governing permissions and limitations under the License.
 */

const constants = require('../util/constants');
const util = require('../util/util');

const mockServerOptions = {
    issuer: constants.ISSUER,
    client_id: constants.WEB_CLIENT_ID || constants.CLIENT_ID,
    client_secret: constants.CLIENT_SECRET,
    testing: {
        disableHttpsCheck: true
    }
};

let server = util.createDemoServer(mockServerOptions);
server.start();
