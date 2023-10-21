import Echo from 'laravel-echo';
const Pusher = require('pusher-js');
declare global {
  interface Window {
    Pusher: typeof Pusher;
    Echo: Echo;
  }
}

window.Pusher = Pusher;

export function createSocketConnection() {
  if (!window.Echo) {
    window.Echo = new Echo({
      broadcaster: 'pusher',
      key: 's2AG3U6DHq0Wtp4wq9Pw',
      cluster: 'mt1',
      wsHost: window.location.host,
      // wsHost: '80.78.207.182',
      wsPort: 6001,
      disableStats: true,
      forceTLS: false,
    });
  }
}
