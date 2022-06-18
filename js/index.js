import {
  minutesDisplay,
  secondsDisplay
} from './elements.js';

import { Timer } from './timer.js';
import { Event } from './events.js';
import { Sounds } from './sounds.js';

const timer = Timer({
  minutesDisplay,
  secondsDisplay
});

const sounds = Sounds();

Event({timer,sounds});