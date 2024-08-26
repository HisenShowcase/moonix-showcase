export class SrvRecord {
  host: string;
  port: number;

  constructor() {
    this.host = '';
    this.port = 0;
  }
}

export class Version {
  name_raw: string;
  name_clean: string;
  name_html: string;
  protocol: number;

  constructor() {
    this.name_raw = '';
    this.name_clean = '';
    this.name_html = '';
    this.protocol = 0;
  }
}

export class Players {
  online: number;
  max: number;
  list: string[];

  constructor() {
    this.online = 0;
    this.max = 0;
    this.list = [];
  }
}

export class Motd {
  raw: string;
  clean: string;
  html: string;

  constructor() {
    this.raw = '';
    this.clean = '';
    this.html = '';
  }
}

export class ServerDataModel {
  online: boolean;
  host: string;
  port: number;
  ip_address: string;
  eula_blocked: boolean;
  retrieved_at: number;
  expires_at: number;
  srv_record: SrvRecord;
  version: Version;
  players: Players;
  motd: Motd;
  icon: string;
  mods: string[];
  software: string | null;
  plugins: string[];

  constructor() {
    this.online = false;
    this.host = '';
    this.port = 0;
    this.ip_address = '';
    this.eula_blocked = false;
    this.retrieved_at = 0;
    this.expires_at = 0;
    this.srv_record = new SrvRecord();
    this.version = new Version();
    this.players = new Players();
    this.motd = new Motd();
    this.icon = '';
    this.mods = [];
    this.software = null;
    this.plugins = [];
  }
}
