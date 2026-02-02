import { get } from "../util/fetch";

export default async function getHeaderImage() {
    return get('/api/public/settings');
}