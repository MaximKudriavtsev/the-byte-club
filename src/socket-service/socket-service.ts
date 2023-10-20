import Echo from 'laravel-echo';
import Pusher from 'pusher-js';

declare global {
  interface Window {
    Pusher: typeof Pusher;
    Echo: Echo;
  }
}

window.Pusher = Pusher;

export function createSocketConnection(token: string) {
  if (!window.Echo) {
    window.Echo = new Echo({
      broadcaster: 'pusher',
      wsHost: window.location.host,
      wsPort: 6001,
    });
  }
}
