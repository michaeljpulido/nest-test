import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  root() {
    return 'Nest Test API';
  }

  health() {
    return { status: 200 };
  }
}
