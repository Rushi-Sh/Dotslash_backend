import http from 'k6/http';
import { sleep } from 'k6';

const currentDate = new Date();

export const options = {
  vus: 500,
//   duration: '30s',
  cloud: {
    projectID: 3724395,
    name: `Test ${currentDate.toLocaleString()}` 
  },
  thresholds: {
    http_req_failed: ['rate<0.01'], 
    http_req_duration: ['p(90) < 400', 'p(95) < 800', 'p(99.9) < 2000'],
  },
  stages: [
    { duration: '1m', target: 100}, 
    { duration: '30s', target: 0 }, 
  ],
};

export default function() {
  http.get('https://urban-snap-app-modified-backend.onrender.com');
  sleep(1);
}



