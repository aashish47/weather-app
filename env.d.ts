export {};

declare global {
    namespace NodeJS {
        interface ProcessEnv {
            NEXT_PUBIC_API_KEY: string;
        }
    }
}
