import './password-store.js';

import { Password } from './components/password.js';
import { LengthSlider } from './components/length-slider.js';
import { Checkbox } from './components/checkbox.js';
import { DarkMode } from './components/dark-mode.js';

new Password().render();
new LengthSlider().render();
new DarkMode().render();

new Checkbox({ name: 'Numbers', id: 'numbers', stateKey: 'characterOptions.hasNumbers' }).render();
new Checkbox({ name: 'Symbols', id: 'symbols', stateKey: 'characterOptions.hasSymbols' }).render();
