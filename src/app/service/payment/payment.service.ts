import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PaymentService {
  private playerNickname: string | null = null;

  setPlayerNickname(nickname: string) {
    this.playerNickname = nickname;
  }

  getPlayerNickname(): string | null {
    const nickname = this.playerNickname;
    this.playerNickname = null;
    return nickname;
  }
}
