import {HttpClient, HttpClientOptions} from '@subsquid/util-internal-http-client'

interface SepanaClientOptions extends HttpClientOptions {
    apiKey?: string
}

export class SepanaClient {
    private client: HttpClient

    constructor(options?: SepanaClientOptions) {
        options = options || {}

        let apiKey = options.apiKey || process.env.SEPANA_API_KEY!
        options.headers = options.headers || {}
        options.headers['x-api-key'] = apiKey

        this.client = new HttpClient(options)
    }

    async insert(engineId: string, documents: any[]) {
        for (let batch of splitIntoBatches(documents, 500)) {
            await this.client.post('/v1/engine/insert_data', {
                headers: {
                    'content-type': 'application/json',
                },
                json: {
                    engine_id: engineId,
                    docs: batch,
                },
            })
        }
    }
}

function* splitIntoBatches<T>(list: T[], maxBatchSize: number): Generator<T[]> {
    if (list.length <= maxBatchSize) {
        yield list
    } else {
        let offset = 0
        while (list.length - offset > maxBatchSize) {
            yield list.slice(offset, offset + maxBatchSize)
            offset += maxBatchSize
        }
        yield list.slice(offset)
    }
}
