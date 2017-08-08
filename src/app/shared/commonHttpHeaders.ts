import { Headers } from '@angular/http';

export function commonHttpHeaders(userId: number): any {
  const headers = new Headers();
  headers.append('USERID', userId.toString());

  return { headers };
}
