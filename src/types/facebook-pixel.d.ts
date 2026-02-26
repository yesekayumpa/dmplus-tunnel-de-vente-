// src/types/facebook-pixel.d.ts
interface Window {
    fbq: (
        eventType: string,
        eventName: string,
        parameters?: Record<string, unknown>
    ) => void;
}