const API_KEY = '38005308-94b85d06f84497fefd0aa075c';

import axios from 'axios';
import Notiflix from 'notiflix';

axios.defaults.headers.common['x-api-key'] = API_KEY;
