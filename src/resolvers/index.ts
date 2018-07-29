import * as fs from "fs";
import * as path from "path";
import { abiResolvers } from "./abi";

// Parse package.json
const pckg = JSON.parse(fs.readFileSync(path.join(__dirname, "..", "..", "package.json"), "utf8"));

// EOSIO GraphQL App Metadata
export const Query: any = {
    name: () => pckg.name,
    version: () => pckg.version,
    license: () => pckg.license,
    homepage: () => pckg.homepage,
    author: () => pckg.author,
    contributors: () => pckg.contributors,
};

// Load ABI resolvers
for (const abiResovler of Object.keys(abiResolvers)) {
    Query[abiResovler] = abiResolvers[abiResovler];
}

// Final resolvers
export const resolvers: any = {
    Query,
};
