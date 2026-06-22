import { EventEmitter } from "events";

class GlobalEventEmitter extends EventEmitter {}

const globalForEvents = globalThis as unknown as {
  eventEmitter: GlobalEventEmitter;
};

export const eventEmitter = globalForEvents.eventEmitter || new GlobalEventEmitter();

if (process.env.NODE_ENV !== "production") {
  globalForEvents.eventEmitter = eventEmitter;
}

/** Emits an event to all connected dashboard clients of a workspace */
export function emitWorkspaceEvent(workspaceId: string, type: string, data: any) {
  eventEmitter.emit(`workspace:${workspaceId}`, { type, data });
}
