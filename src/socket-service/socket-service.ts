import Echo from 'laravel-echo';
const Pusher = require('pusher-js');
declare global {
  interface Window {
    Pusher: typeof Pusher;
    Echo: Echo;
  }
}

window.Pusher = Pusher;

const URL = process.env.MODE === 'production' ? window.location.host : '80.78.207.182';

export function createSocketConnection() {
  if (!window.Echo) {
    window.Echo = new Echo({
      broadcaster: 'pusher',
      key: 's2AG3U6DHq0Wtp4wq9Pw',
      cluster: 'mt1',
      wsHost: URL,
      // wsHost: '80.78.207.182', // local
      //wsHost: '51.250.86.225', // prod
      wsPort: 6001,
      disableStats: true,
      forceTLS: false,
    });
  }
}
