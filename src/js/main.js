import 'materialize-css/dist/css/materialize.min.css';
import 'materialize-css/dist/js/materialize.min.js';
import _ from 'lodash';
import '../css/main.scss';
import { keyValue as externalVariable } from './includes/external.js';
import * as fullimport from './includes/fullexport.js'; // fullimport is imported as an object
import { Helper } from './includes/helper.js';
import { dataEqualize } from './includes/data-equalize.js';
require("../css/includes/_fonts.scss"); // <- necessary for the fonts to be moved to dist

