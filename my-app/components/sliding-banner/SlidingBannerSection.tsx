import { getBannerData } from "@/app/api/api";
import SlidingBannerClient from "./SlidingBannerClient";

export default async function SlidingBannerSection({ slug }: { slug: string }) {
    const data = await getBannerData(slug);

    if (!data?.success || !data.data) {
        return null;
    }

    return <SlidingBannerClient data={data.data} />;
}
