import http from 'k6/http';
import { sleep } from 'k6';

const currentDate = new Date();

export const options = {
  vus: 10,
  duration: '30s',
  cloud: {
    projectID: 3724395,
    name: `Test ${currentDate.toLocaleString()}` 
  }
};

export default function() {
  http.get('https://test.k6.io');
  sleep(1);
}



