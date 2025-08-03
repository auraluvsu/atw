export interface RegionStatus {
    region: string;
    data: any | null;
}

export interface WSMessage {
    timestamp: number;
    statuses: RegionStatus[];
}
