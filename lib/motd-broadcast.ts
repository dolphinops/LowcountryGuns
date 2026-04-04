/** Same-origin tabs can listen to refresh the MOTD banner after /admin saves. */
export const MOTD_BROADCAST_NAME = 'lcguns_motd';

export function broadcastMotdUpdated(): void {
  if (typeof BroadcastChannel === 'undefined') return;
  try {
    const c = new BroadcastChannel(MOTD_BROADCAST_NAME);
    c.postMessage('updated');
    c.close();
  } catch {
    /* ignore */
  }
}
