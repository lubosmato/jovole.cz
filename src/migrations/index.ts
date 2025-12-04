import * as migration_20250427_055026 from './20250427_055026';
import * as migration_20251204_115014 from './20251204_115014';

export const migrations = [
  {
    up: migration_20250427_055026.up,
    down: migration_20250427_055026.down,
    name: '20250427_055026',
  },
  {
    up: migration_20251204_115014.up,
    down: migration_20251204_115014.down,
    name: '20251204_115014'
  },
];
