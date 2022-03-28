function handleAsyncError(promise: Promise<void>) {
    promise.catch((error) => console.error(error));
}

async function asyncMain() {}
export function main() {
    handleAsyncError(asyncMain());
}
