import axios from "axios";

const endpoints = [
    "us-east",
    "us-west",
    "eu-west",
    "eu-central",
    "sa-east",
    "ap-southeast",
];

export type RegionStatus = {
    region: string;
    data: any;
};

export async function fetchAllStatuses(): Promise<RegionStatus[]> {
    const base = "https://data--";
    const requests = endpoints.map(async (region) => {
        try {
            const url = `${base}${region}.upscope.io/status?stats=1`;
            const res = await axios.get(url, { timeout: 5000 });
            return { region, data: res.data };
        } catch(e) {
            if (e instanceof Error) {
                console.error(`Failed to fetch ${region}:`, e.message);
            } else {
                console.error(`Failed to fetch ${region}:`, e);
            }
            return { region, data: null };
        }
    });
    return await Promise.all(requests)
}
