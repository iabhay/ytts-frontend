import { Injectable } from '@angular/core';
import { JwtPayload, jwtDecode } from 'jwt-decode';

@Injectable({
  providedIn: 'root',
})
export class JWTService {
  constructor() {}

  getTokenClaims(token: string) {
    const decoded = jwtDecode(token);

    return decoded;
  }

  getRoleFromToken(token: string): string {
    const decoded: any = this.getTokenClaims(token);
    return decoded.role;
  }

  getUserIdFromToken(token: string): string | undefined {
    const decoded: any = this.getTokenClaims(token);
    return decoded.sub;
  }

  getBanStatusFromToken(token: string): string | undefined {
    const decoded: any = this.getTokenClaims(token);
    return decoded.ban_status;
  }
}
