export class Account {
  id: string;
  data: {
    id: {
      username: string;
      uuid: string;
    };
    rank: string;
    temprank: string;
    rank_since: number;
    auth_data: {
      password_hash: string;
      registration_time: number;
      lastlogin_time: number;
      autologin: boolean;
    };
    client_data: {
      last_address: string;
      last_address_isp: string;
      client_brands: string[];
      client_protocols: string[];
    };
    common_data: {
      badges: any;
      lobby: any;
      survival: any;
      gadgets: any;
    };
    boxfight_data: {
      evolution: number;
      vault_repaired: boolean;
      afkSeconds: number;
      afkPlusSeconds: number;
      experience_storage: number;
      experience: number;
      ultimate_mines: number;
      offline_rewards: any[];
      prestige_mines: number;
      clanName: string;
      lastJoin: number;
      xpDrillMS: number;
      xpDrillOF: boolean;
      xpDrillST: number;
      xpDrillA: number;
      xpDrillEnabled: boolean;
    };
    social_data: {
      youtube: string;
      discord: string;
      tiktok: string;
      instagram: string;
      twitch: string;
    };
    microgames_data: {
      cookies: number;
    };
    punishment_data: {
      type: string[];
      reason: string[];
      byPlayer: string[];
      fromTime: string[];
      toTime: string[];
      active: any[];
    };
    survival_data: {
      money: number;
      offline_rewards: any[];
      cookies: number;
      afk_seconds: number;
      stokova_seconds: number;
      krystalova_seconds: number;
      prison_time: number;
      evoluce: number;
      experience: number;
      money_spent: number;
      portal: number;
      'payback-claimed': any[];
      'custom-name': string;
    };
    survival_complex: any;
    xp: number;
    tokens: number;
  };

  constructor() {
    this.id = '';
    this.data = {
      id: {
        username: '',
        uuid: '',
      },
      rank: '',
      temprank: '',
      rank_since: 0,
      auth_data: {
        password_hash: '',
        registration_time: 0,
        lastlogin_time: 0,
        autologin: false,
      },
      client_data: {
        last_address: '',
        last_address_isp: '',
        client_brands: [],
        client_protocols: [],
      },
      common_data: {
        badges: {},
        lobby: {},
        survival: {},
        gadgets: {},
      },
      boxfight_data: {
        evolution: 0,
        vault_repaired: false,
        afkSeconds: 0,
        afkPlusSeconds: 0,
        experience_storage: 50,
        experience: 0,
        ultimate_mines: 0,
        offline_rewards: [],
        prestige_mines: 0,
        clanName: "null",
        lastJoin: 0,
        xpDrillMS: 0.002,
        xpDrillOF: false,
        xpDrillST: 5,
        xpDrillA: 0,
        xpDrillEnabled: true,
      },
      
      social_data: {
        youtube: '',
        discord: '',
        tiktok: '',
        instagram: '',
        twitch: '',
      },
      microgames_data: {
        cookies: 0,
      },
      punishment_data: {
        type: [],
        reason: [],
        byPlayer: [],
        fromTime: [],
        toTime: [],
        active: [],
      },
      survival_data: {
        money: 0,
        offline_rewards: [],
        cookies: 0,
        afk_seconds: 0,
        stokova_seconds: 0,
        krystalova_seconds: 0,
        prison_time: 0,
        evoluce: 0,
        experience: 0,
        money_spent: 0,
        portal: 0,
        'payback-claimed': [],
        'custom-name': '',
      },
      survival_complex: {},
      xp: 0,
      tokens: 0,
    };
    this.session = '';
  }
  session: string;
}

export const defaultAccount: Account = {
  id: '',
  data: {
    id: {
      username: '',
      uuid: '',
    },
    rank: '',
    temprank: '',
    rank_since: 0,
    auth_data: {
      password_hash: '',
      registration_time: 0,
      lastlogin_time: 0,
      autologin: false,
    },
    client_data: {
      last_address: '',
      last_address_isp: '',
      client_brands: [],
      client_protocols: [],
    },
    common_data: {
      badges: {},
      lobby: {},
      survival: {},
      gadgets: {},
    },
    boxfight_data: {
      evolution: 0,
      vault_repaired: false,
      afkSeconds: 0,
      afkPlusSeconds: 0,
      experience_storage: 50,
      experience: 0,
      ultimate_mines: 0,
      offline_rewards: [],
      prestige_mines: 0,
      clanName: "null",
      lastJoin: 0,
      xpDrillMS: 0.002,
      xpDrillOF: false,
      xpDrillST: 5,
      xpDrillA: 0,
      xpDrillEnabled: true,
    },
    social_data: {
      youtube: '',
      discord: '',
      tiktok: '',
      instagram: '',
      twitch: '',
    },
    microgames_data: {
      cookies: 0,
    },
    punishment_data: {
      type: [],
      reason: [],
      byPlayer: [],
      fromTime: [],
      toTime: [],
      active: [],
    },
    survival_data: {
      money: 0,
      offline_rewards: [],
      cookies: 0,
      afk_seconds: 0,
      stokova_seconds: 0,
      krystalova_seconds: 0,
      prison_time: 0,
      evoluce: 0,
      experience: 0,
      money_spent: 0,
      portal: 0,
      'payback-claimed': [],
      'custom-name': '',
    },
    survival_complex: {},
    xp: 0,
    tokens: 0,
  },
  session: '',
};
