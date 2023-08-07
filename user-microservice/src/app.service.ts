import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  createUser(payload): void {
    console.log('create usr calleddd!!', payload);
  }
}
