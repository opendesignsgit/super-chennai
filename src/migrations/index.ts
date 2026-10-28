import * as migration_20261016_115600_add_event_registration_submissions from './20261016_115600_add_event_registration_submissions';

export const migrations = [
  {
    up: migration_20261016_115600_add_event_registration_submissions.up,
    down: migration_20261016_115600_add_event_registration_submissions.down,
    name: '20261016_115600_add_event_registration_submissions'
  },
];
