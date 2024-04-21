import { StandardMerkleTree } from "@openzeppelin/merkle-tree";
import fs from "fs";
import csv from 'csv-parser';

const DataArray = []; // Define the array to store parsed data

// (1)
const values = [
  ["0x1111111111111111111111111111111111111111", "5000000000000000000"],
  ["0x2222222222222222222222222222222222222222", "2500000000000000000"]
];

 console.log('Hardcoded data converted to array of arrays:', values);
 console.log('CSV data converted to array of arrays:', DataArray);

// (2)
// const tree = StandardMerkleTree.of(DataArray, ["address", "uint256"]);
const tree = StandardMerkleTree.of(values, ["address", "uint256"]);

// (3)
console.log('Merkle Root:', tree.root);

// (4)
fs.writeFileSync("tree.json", JSON.stringify(tree.dump()));
