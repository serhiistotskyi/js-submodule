import { request } from 'js-submodule/fetch';

// DO NOT DEPEND on axios library.
// On app level it's decided to use only fetch submodule
async function main() {
    const response = await request('https://dummyjson.com/test');

    console.log(response)
}

main().catch(console.error)
