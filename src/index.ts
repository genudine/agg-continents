/**
 * Welcome to Cloudflare Workers! This is your first scheduled worker.
 *
 * - Run `wrangler dev --local` in your terminal to start a development server
 * - Run `curl "http://localhost:8787/cdn-cgi/mf/scheduled"` to trigger the scheduled event
 * - Go back to the console to see what your worker has logged
 * - Update the Cron trigger in wrangler.toml (see https://developers.cloudflare.com/workers/wrangler/configuration/#triggers)
 * - Run `wrangler publish --name my-worker` to publish your worker
 *
 * Learn more at https://developers.cloudflare.com/workers/runtime-apis/scheduled-event/
 */

export interface Env {
	SERVICE_ID: string;
	CACHE: KVNamespace;
}

const regionIDs = {
	2: ["2202", "2203", "2204"], // Indar
  4: ["4230", "4240", "4250"], // Hossin
  6: ["6001", "6002", "6003"], // Amerish
  8: ["18029", "18030", "18062"], // Esamir
  344: ["18303", "18304", "18305"], // Oshur
}

const fetchContinent = async (env: Env, continent: keyof typeof regionIDs) => {
	
}

const refreshContinents = async (env: Env) => {

}

export default {
	async fetch() {

	}
	async scheduled(
		controller: ScheduledController,
		env: Env,
		ctx: ExecutionContext
	): Promise<void> {
		console.log(`Hello World!`);
	},
};
